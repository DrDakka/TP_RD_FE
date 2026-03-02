const sampleObj = {
  sex: 'male',
  age: 30,
  weight: 70,
  height: 170,
  bfat: 20,
  activity: 'moderate',
}

const mafflinSuffix = {
  ['male']: 5,
  ['female']: -161,
  ['na']: -78,
}

// weight kg; height cm; sex - enum 'male' | 'female' | 'na'; age - years

const formulas = {
  mifflin: (weight, height, sex, age) => {
    return 10 * weight + 6.25 * height - 5 * age + mafflinSuffix[sex];
  },
  katchMcArdle: (weight, bfat) => {
    return 370 + 21.6 * (weight * (100 - bfat) / 100);
  },
  calcBMI: (weight, height) => {
    return weight / ((height / 100) ** 2);
  }
}

const athleteThresholds = {
  male: {
    athleteFat: 18,
    maxFat: 25,
    minBmi: 25,
    athleteBmi: 28,
    leanCap: 0.5,
  },
  female: {
    athleteFat: 22,
    maxFat: 30,
    minBmi: 20,
    athleteBmi: 24,
    leanCap: 0.8,
  },
  na: { athleteFat: 20, maxFat: 27, minBmi: 22, athleteBmi: 26, leanCap: 0.65 },
}

// Повертає градієнт 0→1, де 0 = чистий Mifflin, 1 = чистий Katch-McArdle.
// Чим вищий score — тим більше враховується lean mass при розрахунку BMR.
function getAthleteScore(bmi, bfat, sex) {
  const { athleteFat, maxFat, minBmi, athleteBmi, leanCap } =
    athleteThresholds[sex]

  // Якщо % жиру перевищує максимальний поріг — людина "obese", повертаємо 0 (Mifflin)
  if (bfat >= maxFat) return 0

  // bfatScore — лінійна шкала по % жиру:
  //   bfat = maxFat     → 0 (тучна людина)
  //   bfat = athleteFat → 1 (спортивний % жиру)
  //   bfat < athleteFat → затиснутий у 1 через Math.max
  const bfatScore = Math.max(0, (maxFat - bfat) / (maxFat - athleteFat))

  // Спецкейс: високий BMI (≥30) — обходимо градієнт, рішення бінарне.
  // Такий BMI може бути або реальним ожирінням, або результатом великої м'язової маси.
  if (bmi >= 30) {
    // % жиру в межах спортивного — бодибілдер/ліфтер, рахуємо Katch-McArdle
    if (bfat <= athleteFat) return 1
    // % жиру високий — реальне ожиріння, рахуємо Mifflin
    return 0
  }

  // Спецкейс: дуже худий (BMI < minBmi) — м'язової маси об'єктивно мало,
  // тому навіть при низькому % жиру обмежуємо score через leanCap
  if (bmi < minBmi) {
    return bfatScore * leanCap
  }

  // Основний градієнт: добуток двох незалежних шкал.
  // bmiScore — лінійна шкала по BMI:
  //   bmi = minBmi     → 0
  //   bmi = athleteBmi → 1 (затиснутий через Math.min)
  // Підсумковий score = bfatScore × bmiScore:
  // обидва показники мають бути "спортивними" одночасно,
  // щоб людина отримала високий score.
  const bmiScore = Math.min(1, (bmi - minBmi) / (athleteBmi - minBmi))
  return Math.min(1, bfatScore * bmiScore)
}

function calculateBMR(obj) {
  const { weight, height, sex, age, bfat } = obj;

  // немає даних по % жиру - рахуємо міффліном
  if (!bfat) {
    return formulas.mifflin(weight, height, sex, age);
  }

  // рахуємо бмі
  const bmi = formulas.calcBMI(weight, height);

  // отримуємо градієнт з попередньої формули
  const athleteCoeff = getAthleteScore(bmi, bfat, sex);

  // рахуємо БМР за обома формулами
  const mifflinBMR = formulas.mifflin(weight, height, sex, age);
  const mcArdleBMR = formulas.katchMcArdle(weight, bfat);

  // повертаємо значення, усереднене за градієнтом
  return mifflinBMR * (1 - athleteCoeff) + mcArdleBMR * athleteCoeff;
}

const activityMultipliers = {
  static: 1.2,
  mild: 1.375,
  moderate: 1.55,
  high: 1.725,
  exhausting: 1.9,
}

function calculateTDEE(obj) {
  const bmr = calculateBMR(obj);

  const activityMult = activityMultipliers[obj.activity];

  return bmr * activityMult;
}

export { calculateTDEE, calculateBMR, formulas, getAthleteScore, activityMultipliers, athleteThresholds };
