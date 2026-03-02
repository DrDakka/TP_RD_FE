'use client';

import { useState } from 'react';
import { calculateTDEE, calculateBMR, formulas, getAthleteScore } from '@/features/tdee.js';

type Sex = 'male' | 'female' | 'na';
type Activity = 'static' | 'mild' | 'moderate' | 'high' | 'exhausting';

interface FormState {
  sex: Sex;
  age: string;
  weight: string;
  height: string;
  bfat: string;
  activity: Activity;
}

interface Result {
  bmi: number;
  mifflinBMR: number;
  katchBMR: number | null;
  athleteScore: number | null;
  bmr: number;
  tdee: number;
}

const activityLabels: Record<Activity, string> = {
  static: 'Сидячий (1.2)',
  mild: 'Легка активність (1.375)',
  moderate: 'Помірна активність (1.55)',
  high: 'Висока активність (1.725)',
  exhausting: 'Виснажлива (1.9)',
};

export default function TestPage() {
  const [form, setForm] = useState<FormState>({
    sex: 'male',
    age: '30',
    weight: '70',
    height: '170',
    bfat: '',
    activity: 'moderate',
  });

  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    setError(null);
    const age = Number(form.age);
    const weight = Number(form.weight);
    const height = Number(form.height);
    const bfat = form.bfat !== '' ? Number(form.bfat) : undefined;

    if (!age || !weight || !height) {
      setError('Заповніть вік, вагу та зріст.');
      return;
    }

    const obj = { sex: form.sex, age, weight, height, bfat, activity: form.activity };

    try {
      const bmi = formulas.calcBMI(weight, height);
      const mifflinBMR = formulas.mifflin(weight, height, form.sex, age);
      const katchBMR = bfat != null ? formulas.katchMcArdle(weight, bfat) : null;
      const athleteScore = bfat != null ? getAthleteScore(bmi, bfat, form.sex) : null;
      const bmr = calculateBMR(obj);
      const tdee = calculateTDEE(obj);

      setResult({ bmi, mifflinBMR, katchBMR, athleteScore, bmr, tdee });
    } catch (e) {
      setError(String(e));
    }
  }

  return (
    <main style={{ maxWidth: 520, margin: '24px auto', padding: '0 16px', fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ marginBottom: 14, fontSize: 22, color: '#fff' }}>TDEE Calculator — Test</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <label>
          Стать
          <select
            value={form.sex}
            onChange={e => setForm(f => ({ ...f, sex: e.target.value as Sex }))}
            style={inputStyle}
          >
            <option value="male">Чоловік</option>
            <option value="female">Жінка</option>
            <option value="na">Не вказано</option>
          </select>
        </label>

        <label>
          Вік (роки)
          <input
            type="number" min={1} max={120}
            value={form.age}
            onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
            style={inputStyle}
          />
        </label>

        <label>
          Вага (кг)
          <input
            type="number" min={1}
            value={form.weight}
            onChange={e => setForm(f => ({ ...f, weight: e.target.value }))}
            style={inputStyle}
          />
        </label>

        <label>
          Зріст (см)
          <input
            type="number" min={1}
            value={form.height}
            onChange={e => setForm(f => ({ ...f, height: e.target.value }))}
            style={inputStyle}
          />
        </label>

        <label>
          % жиру (bfat) — <em>опціонально</em>
          <input
            type="number" min={1} max={70} placeholder="не вказано"
            value={form.bfat}
            onChange={e => setForm(f => ({ ...f, bfat: e.target.value }))}
            style={inputStyle}
          />
        </label>

        <label>
          Рівень активності
          <select
            value={form.activity}
            onChange={e => setForm(f => ({ ...f, activity: e.target.value as Activity }))}
            style={inputStyle}
          >
            {(Object.keys(activityLabels) as Activity[]).map(key => (
              <option key={key} value={key}>{activityLabels[key]}</option>
            ))}
          </select>
        </label>

        <button onClick={calculate} style={btnStyle}>Розрахувати</button>
      </div>

      {error && (
        <p style={{ marginTop: 20, color: '#c00', background: '#fee', padding: '10px 14px', borderRadius: 8 }}>
          {error}
        </p>
      )}

      {result && (
        <div style={{ marginTop: 16, background: '#f5f5f5', borderRadius: 12, padding: '14px 18px', color: '#111' }}>
          <h2 style={{ marginTop: 0, marginBottom: 10, fontSize: 16, color: '#111' }}>Результати</h2>

          <Row label="BMI" value={result.bmi.toFixed(2)} />
          <Row label="BMR Mifflin" value={`${result.mifflinBMR.toFixed(1)} ккал`} />

          {result.katchBMR != null && (
            <Row label="BMR Katch-McArdle" value={`${result.katchBMR.toFixed(1)} ккал`} />
          )}

          {result.athleteScore != null && (
            <Row
              label="Athlete score"
              value={`${(result.athleteScore * 100).toFixed(1)}%`}
              hint="0% = чистий Mifflin, 100% = чистий Katch-McArdle"
            />
          )}

          <div style={{ borderTop: '1px solid #ddd', margin: '12px 0' }} />

          <Row label="Фінальний BMR" value={`${result.bmr.toFixed(1)} ккал`} bold />
          <Row label="TDEE" value={`${result.tdee.toFixed(1)} ккал`} bold />
        </div>
      )}
    </main>
  );
}

function Row({ label, value, hint, bold }: { label: string; value: string; hint?: string; bold?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '3px 0' }}>
      <span style={{ color: '#111', fontSize: 13 }}>
        {label}
        {hint && <span style={{ fontSize: 10, color: '#555', marginLeft: 6 }}>({hint})</span>}
      </span>
      <span style={{ fontWeight: bold ? 700 : 400, fontSize: bold ? 15 : 13, color: '#111' }}>{value}</span>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: 2,
  padding: '5px 8px',
  fontSize: 13,
  border: '1px solid #ccc',
  borderRadius: 6,
  boxSizing: 'border-box',
  color: '#111',
  background: '#fff',
};

const btnStyle: React.CSSProperties = {
  marginTop: 4,
  padding: '7px 0',
  fontSize: 13,
  fontWeight: 600,
  background: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};
