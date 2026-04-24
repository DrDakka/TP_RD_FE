# NS Nutrients — Structure, Enums & DTO Notes

## MU_ENUM (Measurement Units)

```yaml
MU_ENUM:
  type: string
  enum:
    - g         # grams
    - mg        # milligrams
    - mcg       # micrograms (µg / UG in USDA)
    - kcal      # kilocalories
    - kJ        # kilojoules
    - mg_gae    # mg Gallic Acid Equivalents (phenolics)
    - umol_te   # µmol Trolox Equivalents (ORAC antioxidant capacity)
    - PH        # pH units (dimensionless)
    - SP_GR     # Specific Gravity (dimensionless)
```

## SEMANTIC_GROUP_ENUM

```yaml
SEMANTIC_GROUP:
  type: string
  enum:
    - main           # 1xxx — Energy, Protein, Fats, Carbs
    - amino_acid     # 2xxx — Amino acids (children of Protein)
    - fat            # 3xxx — Fat subgroups & lipids
    - carb           # 4xxx — Carb subgroups
    - vitamin        # 5xxx — Vitamins (5100 water-sol, 5200 fat-sol)
    - mineral        # 6xxx — Minerals (6100 macro, 6200 trace, 6300 heavy)
    - fraction       # 7xxx — Fractions of any parent
    - other          # 8xxx — Other compounds
    - organic_acid   # 9xxx — Organic acids
    - polyphenol     # 10xxx — Polyphenols & flavonoids
```

---

## Visual Hierarchy

```
1001 Energy [kcal]
    USDA: 1008 (pri 1), 1062/kJ (pri 2, ×0.239), 2047 (pri 3), 2048 (pri 4)

1002 Protein [g]
    USDA: 1003 (pri 1), 1053 (pri 2)
├── 2001 Aspartic acid [g]
├── 2002 Glutamic acid [g]
├── 2003 Tryptophan [g]
├── 2004 Leucine [g]
├── 2005 Isoleucine [g]
├── 2006 Lysine [g]
├── 2007 Methionine [g]
├── 2008 Cystine [g]
├── 2009 Phenylalanine [g]
├── 2010 Tyrosine [g]
├── 2011 Valine [g]
├── 2012 Arginine [g]
├── 2013 Alanine [g]
├── 2014 Histidine [g]
├── 2015 Glycine [g]
├── 2016 Asparagine [g]
├── 2017 Glutamine [g]
├── 2018 Proline [g]
├── 2019 Serine [g]
├── 2020 Cysteine [g]
├── 2022 Hydroxyproline [g]
└── 2023 Threonine [g]

1003 Fats [g]
    USDA: 1004 (pri 1), 1085/NLEA (pri 2)
├── 3001 Fatty acids trans [g]
│   │   USDA: 1257
│   ├── 3010 Trans-monoenoic total [g]
│   ├── 3011 Trans-dienoic total [g]
│   ├── 3012 Trans-polyenoic total [g]
│   ├── 7050 TFA 14:1 t [g]
│   ├── 7051 TFA 16:1 t [g]
│   ├── 7052 TFA 17:1 [g]
│   ├── 7053 TFA 18:1 [g]
│   ├── 7054 TFA 18:2 t [g]  (fallback: USDA 1306, pri 2)
│   ├── 7055 TFA 18:2 t,t [g]
│   ├── 7056 TFA 18:3 t [g]
│   ├── 7057 TFA 20:1 t [g]
│   └── 7058 TFA 22:1 t [g]
├── 3002 Fatty acids saturated [g]
│   │   USDA: 1258 (pri 1), 1326/NLEA (pri 2)
│   ├── 7059 SFA 4:0 Butyric [g]
│   ├── 7060 SFA 5:0 Valeric [g]
│   ├── 7061 SFA 6:0 Caproic [g]
│   ├── 7062 SFA 7:0 [g]
│   ├── 7063 SFA 8:0 Caprylic [g]
│   ├── 7064 SFA 9:0 Nonanoic [g]
│   ├── 7065 SFA 10:0 Capric [g]
│   ├── 7066 SFA 11:0 Undecanoic [g]
│   ├── 7067 SFA 12:0 Lauric [g]
│   ├── 7068 SFA 13:0 Tridecanoic [g]
│   ├── 7069 SFA 14:0 Myristic [g]
│   ├── 7070 SFA 15:0 Pentadecanoic [g]
│   ├── 7071 SFA 16:0 Palmitic [g]
│   ├── 7072 SFA 17:0 Heptadecanoic [g]
│   ├── 7073 SFA 18:0 Stearic [g]
│   ├── 7074 SFA 19:0 Nonadecanoic [g]
│   ├── 7075 SFA 20:0 Arachidic [g]
│   ├── 7076 SFA 21:0 Heneicosanoic [g]
│   ├── 7077 SFA 22:0 Behenic [g]
│   ├── 7078 SFA 23:0 Tricosanoic [g]
│   ├── 7079 SFA 24:0 Lignoceric [g]
│   └── 7120 Other SFA [g]
├── 3003 Fatty acids monounsaturated [g]
│   │   USDA: 1292 (pri 1), 1327/NLEA (pri 2)
│   ├── 7080 MUFA 12:1 Lauroleic [g]
│   ├── 7081 MUFA 14:1 Myristoleic [g]
│   ├── 7082 MUFA 14:1 c cis-Myristoleic [g]
│   ├── 7083 MUFA 15:1 [g]
│   ├── 7084 MUFA 16:1 Palmitoleic [g]
│   ├── 7085 MUFA 16:1 c cis-Palmitoleic [g]
│   ├── 7086 MUFA 17:1 Heptadecenoic [g]
│   ├── 7087 MUFA 17:1 c cis-Heptadecenoic [g]
│   ├── 7088 MUFA 18:1 Oleic [g]
│   ├── 7089 MUFA 18:1 c cis-Oleic [g]
│   ├── 7090 MUFA 18:1-11 t trans-Vaccenic [g]
│   ├── 7091 MUFA 18:1-11 c cis-Vaccenic [g]
│   ├── 7092 MUFA 20:1 Eicosenoic [g]
│   ├── 7093 MUFA 20:1 c cis-Eicosenoic [g]
│   ├── 7094 MUFA 22:1 Erucic [g]
│   ├── 7095 MUFA 22:1 c cis-Erucic [g]
│   ├── 7096 MUFA 22:1 n-9 Brassidic [g]
│   ├── 7097 MUFA 22:1 n-11 Cetoleic [g]
│   ├── 7098 MUFA 24:1 c cis-Nervonic [g]
│   └── 7121 Other MUFA [g]
├── 3004 Fatty acids polyunsaturated [g]
│   │   USDA: 1293 (pri 1), 1328/NLEA (pri 2)
│   ├── 3014* Omega-3 total [g] [CALCULATED]
│   ├── 3015* Omega-6 total [g] [CALCULATED]
│   ├── 3016* Omega-9 total [g] [CALCULATED]
│   ├── 7099 PUFA 16:2 Hexadecadienoic [g]
│   ├── 7100 PUFA 18:2 n-6 Linoleic (Omega-6) [g]  (fb: 2016 pri2, 1269 pri3)
│   ├── 7101 PUFA 18:2 CLAs [g]
│   ├── 7102 PUFA 18:2 t,c [g]
│   ├── 7103 PUFA 18:2 c,t [g]
│   ├── 7104 PUFA 18:3 n-3 ALA (Omega-3) [g]  (fb: 2018 pri2, 1270 pri3)
│   ├── 7105 PUFA 18:3 n-6 GLA (Omega-6) [g]
│   ├── 7106 PUFA 18:4 Stearidonic (Omega-3) [g]
│   ├── 7107 PUFA 20:2 n-6 (Omega-6) [g]  (fb: 2026 pri2)
│   ├── 7108 PUFA 20:3 n-3 (Omega-3) [g]  (fb: 2020 pri2, 1325 pri3)
│   ├── 7109 PUFA 20:3 n-6 DGLA (Omega-6) [g]
│   ├── 7110 PUFA 20:3 n-9 Mead (Omega-9) [g]
│   ├── 7111 PUFA 20:4 n-6 Arachidonic (Omega-6) [g]  (fb: 2022 pri2, 1271 pri3)
│   ├── 7112 PUFA 20:4 n-3 (Omega-3) [g]
│   ├── 7113 PUFA 20:5 n-3 EPA (Omega-3) [g]  (fb: 2023 pri2)
│   ├── 7114 PUFA 21:5 [g]
│   ├── 7115 PUFA 22:2 [g]
│   ├── 7116 PUFA 22:3 [g]
│   ├── 7117 PUFA 22:4 Adrenic [g]
│   ├── 7118 PUFA 22:5 n-3 DPA (Omega-3) [g]  (fb: 2024 pri2)
│   ├── 7119 PUFA 22:6 n-3 DHA (Omega-3) [g]  (fb: 2025 pri2)
│   └── 7122 Other PUFA [g]
├── 3005 Cholesterol [mg]
├── 3006 Phospholipids [g]
├── 3007 Glycolipids [g]
├── 3008 Glycerides [g]
├── 3009 Unsaponifiable matter [g]
└── 3013 Wax total [g]

1004 Carbohydrates [g]
    USDA: 2039 (pri 1), 1050/summation (pri 2), 1005/difference (pri 3)
├── 4001 Sugars [g]
│   ├── 4011 Sucrose [g]
│   ├── 4012 Glucose [g]
│   ├── 4013 Fructose [g]
│   ├── 4014 Lactose [g]
│   ├── 4015 Maltose [g]
│   ├── 4026 Sugars added [g]
│   ├── 4027 Arabinose [g]
│   ├── 4028 Xylose [g]
│   ├── 4029 Galactose [g]
│   ├── 4030 Raffinose [g]
│   ├── 4031 Stachyose [g]
│   ├── 4034 Ribose [g]
│   ├── 4035 Mannose [g]
│   ├── 4036 Triose [g]
│   ├── 4037 Tetrose [g]
│   ├── 4040 Sugars intrinsic [g]
│   ├── 4045 Reducing sugars [g]
│   └── 4046 Verbascose [g]
├── 4016 Starch [g]
│   └── 4017 Amylose [g]
├── 4018 Fiber [g]
│   │   USDA: 2033 (pri 1), 1079 (pri 2), 1006 (pri 3), 1066 (pri 4)
│   ├── 4019 Fiber soluble [g]
│   │   ├── 4021 SDFP [g]
│   │   ├── 4022 SDFS [g]
│   │   └── 4023 SDFP+SDFS [g]
│   ├── 4020 Fiber insoluble [g]  (fb: 2034 pri2)
│   ├── 4024 HMWDF [g]
│   ├── 4025 LMWDF [g]
│   ├── 4047 Inulin [g]
│   └── 4048 Beta-glucan [g]  (fb: 2058 pri2)
├── 4032 Cellulose [g]
├── 4033 Hemicellulose [g]
├── 4038 Glycogen [g]
├── 4039 Nonstarch polysaccharides [g]
├── 4041 Amylopectin [g]
├── 4042 Pectin [g]
├── 4043 Pentosan [g]
└── 4044 Lignin [g]

5200* Vitamins, fat-soluble [CATEGORY STUB]
├── 5001 Vitamin A [mcg]
│   │   USDA: 1106/RAE (pri 1), 2067 (pri 2), 1104/IU (pri 3, ×0.3), 1156/RE (pri 4, ×0.8)
│   ├── 7001 Retinol [mcg]
│   ├── 7002 Carotene beta [mcg]
│   ├── 7003 Carotene alpha [mcg]
│   ├── 7004 Cryptoxanthin beta [mcg]
│   ├── 7045 Cryptoxanthin alpha [mcg]
│   ├── 7046 cis-beta-Carotene [mcg]
│   ├── 7047 trans-beta-Carotene [mcg]
│   ├── 7048 Carotene gamma [mcg]
│   └── 7049 Carotene total [mcg] ⚠ CONDITIONAL
├── 5014 Vitamin E [mg]
│   │   USDA: 1109/alpha-toco (pri 1), 1158/ATE (pri 2), 2068 (pri 3), 1124/IU (pri 4, ×0.67), 2041 (pri 5)
│   ├── 7175 Total Tocopherols [mg]
│   │   ├── 7028 Tocopherol beta [mg]
│   │   ├── 7029 Tocopherol gamma [mg]
│   │   └── 7030 Tocopherol delta [mg]
│   ├── 7176 Total Tocotrienols [mg]
│   │   ├── 7031 Tocotrienol alpha [mg]
│   │   ├── 7032 Tocotrienol beta [mg]
│   │   ├── 7033 Tocotrienol gamma [mg]
│   │   └── 7034 Tocotrienol delta [mg]
│   ├── 7035 Vitamin E added [mg]
│   └── 7036 Vitamin E intrinsic [mg]
├── 5015 Vitamin D [mcg]
│   │   USDA: 1114/D2+D3 (pri 1), 1110/IU (pri 2, ×0.025)
│   ├── 7037 Vitamin D2 [mcg]
│   ├── 7038 Vitamin D3 [mcg]
│   ├── 7039 Vitamin D4 [mcg]
│   ├── 7040 25-hydroxycholecalciferol [mcg]
│   └── 7041 25-hydroxyergocalciferol [mcg]
└── 5016 Vitamin K [mcg]
    │   USDA: 1185/phylloquinone
    ├── 7042 Menaquinone-4 (K2) [mcg]
    └── 7043 Dihydrophylloquinone [mcg]

5100* Vitamins, water-soluble [CATEGORY STUB]
├── 5002 Vitamin C [mg]
│   ├── 7005 Vit C reduced ascorbic acid [mg]
│   ├── 7006 Vit C dehydro ascorbic acid [mg]
│   ├── 7007 Vit C added [mg]
│   └── 7008 Vit C intrinsic [mg]
├── 5003 Vitamin B1 Thiamin [mg]
│   ├── 7009 B1 added [mg]
│   └── 7010 B1 intrinsic [mg]
├── 5004 Vitamin B2 Riboflavin [mg]
│   ├── 7011 B2 added [mg]
│   └── 7012 B2 intrinsic [mg]
├── 5005 Vitamin B3 Niacin [mg]
│   │   USDA: 1167 (pri 1), 1169/equivalent (pri 2)
│   ├── 7013 B3 added [mg]
│   └── 7014 B3 intrinsic [mg]
├── 5006 Vitamin B5 Pantothenic acid [mg]
├── 5007 Vitamin B6 [mg]
│   │   USDA: 1175 (pri 1), 1174/sum (pri 2)
│   ├── 7015 B6 pyridoxine [mg]
│   ├── 7016 B6 pyridoxal [mg]
│   └── 7017 B6 pyridoxamine [mg]
├── 5008 Vitamin B7 Biotin [mcg]
├── 5009 Vitamin B8 Inositol [mg]
├── 5010 Inositol phosphate [mg]
├── 5011 Vitamin B9 Folate [mcg]
│   │   USDA: 1190/DFE (pri 1), 1177/total (pri 2)
│   ├── 7018 Folic acid [mcg]
│   ├── 7019 Folate food [mcg]
│   └── 7020 5-MTHF [mcg]
├── 5012 Vitamin B12 [mcg]
│   ├── 7021 B12 added [mcg]
│   └── 7022 B12 intrinsic [mcg]
└── 5013 Choline [mg]
    ├── 7023 Choline free [mg]
    ├── 7024 Choline from phosphocholine [mg]
    ├── 7025 Choline from phosphotidyl choline [mg]
    ├── 7026 Choline from glycerophosphocholine [mg]
    ├── 7027 Choline from sphingomyelin [mg]
    └── 7177 Betaine [mg]

6000 Minerals [mg]
├── 6100* Macrominerals [CATEGORY STUB]
│   ├── 6001 Chlorine [mg]
│   ├── 6002 Magnesium [mg]
│   ├── 6003 Phosphorus [mg]
│   ├── 6004 Potassium [mg]
│   ├── 6005 Sodium [mg]
│   ├── 6006 Sulfur [mg]
│   ├── 6036 Iron [mg]
│   │   ├── 6037 Iron heme [mg]
│   │   ├── 6038 Iron non-heme [mg]
│   │   ├── 6039 Iron added [mg]
│   │   └── 6040 Iron intrinsic [mg]
│   └── 6041 Calcium [mg]
│       ├── 6042 Calcium added [mg]
│       └── 6043 Calcium intrinsic [mg]
├── 6200* Trace minerals [CATEGORY STUB]
│   ├── 6007 Zinc [mg]
│   ├── 6008 Chromium [mcg]
│   ├── 6009 Cobalt [mcg]
│   ├── 6010 Copper [mg]
│   ├── 6011 Fluoride [mcg]  (fb: 1148 pri2)
│   ├── 6012 Iodine [mcg]
│   ├── 6013 Manganese [mg]
│   ├── 6014 Molybdenum [mcg]
│   ├── 6015 Selenium [mcg]
│   ├── 6021 Boron [mcg]
│   ├── 6028 Nickel [mcg]
│   ├── 6030 Silicon [mcg]
│   └── 6035 Vanadium [mcg]
└── 6300* Heavy metals [CATEGORY STUB]
    ├── 6016 Aluminum [mcg]
    ├── 6017 Antimony [mcg]
    ├── 6018 Arsenic [mcg]
    ├── 6019 Barium [mcg]
    ├── 6020 Beryllium [mcg]
    ├── 6022 Bromine [mcg]
    ├── 6023 Cadmium [mcg]
    ├── 6024 Gold [mcg]
    ├── 6025 Lead [mcg]
    ├── 6026 Lithium [mcg]
    ├── 6027 Mercury [mcg]
    ├── 6029 Rubidium [mcg]
    ├── 6031 Silver [mcg]
    ├── 6032 Strontium [mcg]
    ├── 6033 Tin [mcg]
    └── 6034 Titanium [mcg]

8xxx Other
├── 8001 Taurine [g]
├── 8002 pH [PH]
├── 8003 Specific Gravity [SP_GR]
├── 8004 Ash [g]
├── 8005 Water [g]
├── 8006 Alcohol ethyl [g]
├── 8007 Caffeine [mg]
├── 8008 Theobromine [mg]
├── 8009 Theophylline [mg]
├── 8010 Nitrates [mg]
├── 8011 Nitrites [mg]
├── 8012 Nitrogen [g]  (fb: 1052 pri2)
├── 8013 Phytosterols [mg]
│   ├── 8014 Ergosterol [mg]
│   ├── 8015 Stigmasterol [mg]
│   ├── 8016 Campesterol [mg]
│   ├── 8017 Brassicasterol [mg]
│   ├── 8018 Beta-sitosterol [mg]
│   ├── 8019 Campestanol [mg]
│   ├── 8020 Beta-sitostanol [mg]
│   ├── 8021 Delta-7-avenasterol [mg]
│   ├── 8022 Delta-5-avenasterol [mg]
│   ├── 8023 Alpha-spinasterol [mg]
│   ├── 8024 Phytosterols other [mg]
│   ├── 8040 Stigmastadiene [mg]
│   ├── 8041 Delta-7-Stigmastenol [mg]
│   ├── 8042 Ergosta-7-enol [mg]
│   ├── 8043 Ergosta-7,22-dienol [mg]
│   └── 8044 Ergosta-5,7-dienol [mg]
├── 8025 Sugar alcohols [g]
│   ├── 8026 Mannitol [g]
│   ├── 8027 Sorbitol [g]
│   └── 8028 Xylitol [g]
├── 8029* Carotenoids non-Vit A [mcg] [CALCULATED]
│   ├── 8030 Zeaxanthin [mcg]
│   ├── 8031 Lutein [mcg]
│   ├── 8032 Lycopene [mcg]
│   ├── 8033 Lutein+zeaxanthin [mcg]
│   ├── 8034 cis-Lycopene [mcg]
│   ├── 8035 cis-Lutein/Zeaxanthin [mcg]
│   ├── 8036 trans-Lycopene [mcg]
│   ├── 8037 Phytoene [mcg]
│   ├── 8038 Phytofluene [mcg]
│   └── 8039 Other carotenoids [mcg]
├── 8045 ORAC Total [umol_te]
│   ├── 8046 ORAC Hydrophilic [umol_te]
│   └── 8047 ORAC Lipophilic [umol_te]
├── 8048 Piperine [g]
├── 8049 Nitrosamine [mg]
├── 8050 Glutathione [mg]
├── 8051 Ergothioneine [mg]
└── 8052* Antioxidants [CATEGORY STUB — DTO umbrella]

9001 Organic acids [g]
├── 9002 Vanillic acid [mg]
├── 9003 Caffeic acid [mg]
├── 9004 Ellagic acid [mg]
├── 9005 Ferrulic acid [mg]
├── 9006 Gentisic acid [mg]
├── 9007 Acetic acid [mg]
├── 9008 Aconitic acid [mg]
├── 9009 Benzoic acid [mg]
├── 9010 Chelidonic acid [mg]
├── 9011 Chlorogenic acid [mg]
├── 9012 Cinnamic acid [mg]
├── 9013 Citric acid [mg]
├── 9014 Fumaric acid [mg]
├── 9015 Galacturonic acid [mg]
├── 9016 Gallic acid [mg]
├── 9017 Glycolic acid [mg]
├── 9018 Isocitric acid [mg]
├── 9019 Lactic acid [mg]
├── 9020 Malic acid [mg]
├── 9021 Oxaloacetic acid [mg]
├── 9022 Oxalic acid [mg]
├── 9023 Phytic acid [mg]
├── 9024 Pyruvic acid [mg]
├── 9025 Quinic acid [mg]
├── 9026 Salicylic acid [mg]
├── 9027 Succinic acid [mg]
├── 9028 Tartaric acid [mg]
├── 9029 Ursolic acid [mg]
├── 9030 p-Hydroxy benzoic acid [mg]
└── 9031 p-Coumaric acid [mg]

10001 Polyphenols total [mg]
├── 10003 Flavonoids total [mg]
│   ├── 10010 Isoflavones [mg]
│   │   ├── 7123 Daidzein [mg]
│   │   ├── 7124 Daidzin [mg]
│   │   ├── 7125 Genistein [mg]
│   │   ├── 7126 Genistin [mg]
│   │   ├── 7127 Glycitein [mg]
│   │   ├── 7128 Glycitin [mg]
│   │   ├── 7129 Biochanin A [mg]
│   │   ├── 7130 Formononetin [mg]
│   │   └── 7131 Coumestrol [mg]
│   ├── 10020 Anthocyanidins [mg]
│   │   ├── 7132 Cyanidin [mg]
│   │   ├── 7133 Delphinidin [mg]
│   │   ├── 7134 Malvidin [mg]
│   │   ├── 7135 Pelargonidin [mg]
│   │   ├── 7136 Peonidin [mg]
│   │   └── 7137 Petunidin [mg]
│   ├── 10030 Procyanidins total [mg]
│   │   ├── 7138 Proanthocyanidin dimer-A [mg]
│   │   ├── 7139 Proanthocyanidin monomers [mg]
│   │   ├── 7140 Proanthocyanidin dimers [mg]
│   │   ├── 7141 Proanthocyanidin trimers [mg]
│   │   ├── 7142 Proanthocyanidin 4-6mers [mg]
│   │   ├── 7143 Proanthocyanidin 7-10mers [mg]
│   │   └── 7144 Proanthocyanidin >10mers [mg]
│   ├── 10040 Flavans total [mg]
│   │   ├── 10041 Catechins total [mg]
│   │   │   ├── 7145 Catechin [mg]
│   │   │   ├── 7146 Epicatechin [mg]
│   │   │   ├── 7147 Epigallocatechin [mg]
│   │   │   ├── 7148 Epicatechin-3-gallate [mg]
│   │   │   ├── 7149 EGCG [mg]
│   │   │   ├── 7150 (+)-Gallocatechin [mg]
│   │   │   ├── 7151 (+)-Catechin 3-gallate [mg]
│   │   │   └── 7152 (+)-Gallocatechin 3-gallate [mg]
│   │   ├── 10050 Theaflavins [mg]
│   │   │   ├── 7153 Theaflavin -3,3'-digallate [mg]
│   │   │   ├── 7154 Theaflavin -3'-gallate [mg]
│   │   │   └── 7155 Theaflavin -3-gallate [mg]
│   │   ├── 7156 Thearubigins [mg]
│   │   └── 7157 Theogallin [mg]
│   ├── 10060 Flavanones total [mg]
│   │   ├── 7158 Eriodictyol [mg]
│   │   ├── 7159 Hesperetin [mg]
│   │   ├── 7160 Isosakuranetin [mg]
│   │   ├── 7161 Liquiritigenin [mg]
│   │   └── 7162 Naringenin [mg]
│   ├── 10070 Flavones total [mg]
│   │   ├── 7163 Apigenin [mg]
│   │   ├── 7164 Chrysoeriol [mg]
│   │   ├── 7165 Diosmetin [mg]
│   │   ├── 7166 Luteolin [mg]
│   │   ├── 7167 Nobiletin [mg]
│   │   ├── 7168 Sinensetin [mg]
│   │   └── 7169 Tangeretin [mg]
│   └── 10080 Flavonols total [mg]
│       ├── 7170 Isorhamnetin [mg]
│       ├── 7171 Kaempferol [mg]
│       ├── 7172 Limocitrin [mg]
│       ├── 7173 Myricetin [mg]
│       └── 7174 Quercetin [mg]
├── 10091 Phenolic acids total [mg]
└── 10090 Tyrosol [mg]

10002 Total Phenolics [mg_gae]
```

---

## DTO Layer — Detailed Calculation Rules

Each rule specifies exact `ns_id` values. Backend should implement these during migration.

### Omega Totals (under 3004 PUFA)
| ns_id |     Name      |                   Formula                       |           Flag        |
|-------|---------------|-------------------------------------------------|-----------------------|
| 3014  | Omega-3 total | `sum(7104, 7106, 7108, 7112, 7113, 7118, 7119)` | `is_calculated: true` |
| 3015  | Omega-6 total | `sum(7100, 7105, 7107, 7109, 7111)`             | `is_calculated: true` |
| 3016  | Omega-9 total | `sum(7110)`                                     | `is_calculated: true` |

**Rule:** Calculate only from children that have data. If all children are null, parent = null (not 0).

### Vitamin E Aggregates
| ns_id |         Name       |                          Formula                                 |             Flag                |
|-------|--------------------|------------------------------------------------------------------|---------------------------------|
| 7175  | Total Tocopherols  | If USDA 2055 exists → use it. Else `sum(5014, 7028, 7029, 7030)` | `is_calculated: true` if summed |
| 7176  | Total Tocotrienols | If USDA 2054 exists → use it. Else `sum(7031, 7032, 7033, 7034)` | `is_calculated: true` if summed |

**Note:** `5014` (Vitamin E = alpha-tocopherol) is part of Total Tocopherols but is NOT a child of `7175` in the tree — it's the parent. When calculating `7175`, include `5014`'s value.

### Carotene Total (Conditional)
| ns_id |                     Condition                           |             Action               |
|-------|---------------------------------------------------------|----------------------------------|
| 7049  | `7002` (beta) OR `7003` (alpha) OR `7048` (gamma) exist | **SKIP** — do not import 7049    |
| 7049  | None of 7002, 7003, 7048 exist                          | Import with `formula: value * 6` |

### Carotenoids non-Vit A
| ns_id | Name | Formula | Flag |
|-------|------|---------|------|
| 8029 | Carotenoids total | See rules below | `is_calculated: true` |

**Rules for 8029 sum:**
- Use `8032` (Lycopene) — do NOT add `8034` (cis-Lycopene) or `8036` (trans-Lycopene), they are sub-fractions already included
- If `8030` (Zeaxanthin) AND `8031` (Lutein) both exist → use them, do NOT add `8033` (Lutein+Zeaxanthin)
- If only `8033` exists → use it instead of 8030+8031
- Do NOT add `8035` (cis-Lutein/Zeaxanthin) — sub-fraction
- Safe sum: `8032 + max(8030+8031, 8033) + 8037 + 8038`

### ORAC
| ns_id |     Name   |                            Formula                                     |
|-------|------------|------------------------------------------------------------------------|
| 8045  | ORAC Total | If USDA 1338 exists → use it. Else `sum(8046, 8047)`, flag: calculated |

### Phytosterols
| ns_id | Name         |                              Formula                                               |
|-------|--------------|------------------------------------------------------------------------------------|
| 8013  | Phytosterols | If USDA 1283 exists → use it. Else `sum(8014..8024, 8040..8044)`, flag: calculated |

### Flavonoid Subgroups
All have USDA totals. Use USDA value if present, else sum children:

| ns_id |       Name       |                Children to sum                         |
|-------|------------------|--------------------------------------------------------|
| 10003 | Flavonoids total | `sum(10010, 10020, 10030, 10040, 10060, 10070, 10080)` |
| 10010 | Isoflavones      | `sum(7123, 7125, 7127, 7129, 7130, 7131)`              |
| 10020 | Anthocyanidins   | `sum(7132, 7133, 7134, 7135, 7136, 7137)`              |
| 10030 | Procyanidins     | `sum(7138, 7139, 7140, 7141, 7142, 7143, 7144)`        |
| 10040 | Flavans          | `sum(10041, 10050, 7156, 7157)`                        |
| 10041 | Catechins        | `sum(7145, 7146, 7147, 7148, 7149, 7150, 7151, 7152)`  |
| 10050 | Theaflavins      | `sum(7153, 7154, 7155)`                                |
| 10060 | Flavanones       | `sum(7158, 7159, 7160, 7161, 7162)`                    |
| 10070 | Flavones         | `sum(7163, 7164, 7165, 7166, 7167, 7168, 7169)`        |
| 10080 | Flavonols        | `sum(7170, 7171, 7172, 7173, 7174)`                    |

**⚠ Isoflavones (10010):** Do NOT include glycosides `7124` (Daidzin), `7126` (Genistin), `7128` (Glycitin) in sum — they are glycoside forms of the same compounds as `7123`, `7125`, `7127`. Including both would double-count.

### Phenolic Acids Cross-Reference
`10091` (Phenolic acids total) — if USDA 1208 is absent, DTO can sum from organic acids `9xxx` that are also phenolic:
```
10091 = sum(9002 Vanillic, 9003 Caffeic, 9004 Ellagic, 9005 Ferrulic,
            9011 Chlorogenic, 9016 Gallic, 9030 p-Hydroxy benzoic, 9031 p-Coumaric)
```

These nutrients exist in BOTH `9xxx` (organic acids) and `10xxx` (polyphenols). They are stored once in `9xxx`, referenced by `10091`.

### Betaine
`7177` (Betaine, parent: `5013` Choline) — metabolite of choline. Do NOT include in Choline total sum. `5013` value comes from USDA `1180` (Choline total) which does NOT include betaine. Betaine is displayed under Choline in UI but not summed.

### Category Stubs — Display Only, No Sum
| ns_id |        Name            |                        Purpose                               |
|-------|------------------------|--------------------------------------------------------------|
| 5100  | Vitamins water-soluble | Groups: 5002-5013. Display only.                             |
| 5200  | Vitamins fat-soluble   | Groups: 5001, 5014, 5015, 5016. Display only.                |
| 6100  | Macrominerals          | Groups: 6001-6006, 6036, 6041. Display only (mixed units).   |
| 6200  | Trace minerals         | Groups: 6007-6015, 6021, 6028, 6030, 6035. Display only.     |
| 6300  | Heavy metals           | Groups: 6016-6020, 6022-6027, 6029, 6031-6034. Display only. |
| 8052  | Antioxidants           | Groups: 8045, 8050, 8051. Display only (mixed units).        |

**"Display only"** means: these stubs exist in the DB for hierarchy, but their `amount` is always null. They are never calculated. They serve only as grouping containers in the UI.

### Sugar Alcohols
`8025` (Sugar alcohols) — if USDA 1086 exists → use it. Else `sum(8026, 8027, 8028)`, flag: calculated.

### General Rules

1. **Priority system:** For any `ns_id` with multiple USDA sources, try priority 1 first. If null/absent for a given product, try priority 2, then 3, etc.
2. **Normalize formula:** Apply BEFORE storing. E.g., if using USDA 1062 (kJ) for Energy, store `value * 0.239` as kcal.
3. **is_calculated flag:** Set to `true` whenever a parent value was computed from children rather than taken from USDA.
4. **Null vs 0:** If USDA has no data for a nutrient on a product → store `null`, not `0`. Zero means "tested, amount is zero." Null means "not tested."
5. **Calculate once at migration time.** Not per request.