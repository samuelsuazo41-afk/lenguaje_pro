// LAYA_FINAL_COMPLETO.js - V28.5 TOPOLOGICAL BLAZER REAL - 0.11 WAIST - SOLAPAS BOTONES BOLSILLOS
// Malla topológica quad grid 28 segmentos, 0.92 opacity, scale 0.52, gap 0.11 real
// Autor: YARVIS + Laia - Girona - V28.5 TOPOLOGICAL

export const GRAMMAR_REAL = {
  PRON_PER_POSS: { id:"Pronouns Personal & Possessive", sig:"PRON_PER_POSS", formula:"I/me/my/mine/myself", example:"This is my book, not yours. I did it myself.", mistake:"I car -> MY car", level:"A1" },
  THERE_QUANT: { id:"There is/are + Quantifiers", sig:"THERE_QUANT", formula:"There is a / There are many / much / a lot of", example:"There is a lot of money in my account.", mistake:"There have -> There is/are", level:"A1" },
  PREP_IN_ON_AT: { id:"Prepositions in/on/at", sig:"PREP_IN_ON_AT", formula:"in=year/month/long, on=day/date, at=time/place", example:"I work on Monday at 8am in December in Salou.", mistake:"in Monday -> ON Monday", level:"A1" },
  ART_DET: { id:"Articles a/an/the", sig:"ART_DET", formula:"a=one, an=vowel, the=specific", example:"I have a dream. The dream is big.", mistake:"I have car -> A car", level:"A1" },
  PS_3RD_S: { id:"Present Simple", sig:"PS_3RD_S", formula:"He/She/It + verb + s", example:"He has money. She works hard.", mistake:"He have -> He HAS", level:"A1" },
  PRES_CONT: { id:"Present Continuous", sig:"PRES_CONT", formula:"am/is/are + verb-ing", example:"I am building my future now.", mistake:"I am build -> building", level:"A1" },
  PAST_SIMP: { id:"Past Simple", sig:"PAST_SIMP", formula:"verb-ed / 2nd column", example:"I failed yesterday but I learned.", mistake:"I did go -> I went", level:"A1" },
  FUT_GOING: { id:"Future Going to", sig:"FUT_GOING", formula:"am/is/are going to + verb", example:"I am going to save money.", mistake:"I going to -> I AM going to", level:"A1" },
  FUT_WILL: { id:"Future Simple Will", sig:"FUT_WILL", formula:"Sub + will + V1", example:"I will help you", mistake:"I will to become -> will become", level:"A1" },
  MOD_CAN: { id:"Modals Ability", sig:"MOD_CAN", formula:"can/could/be able to", example:"I can save if I try.", mistake:"I can to save -> can save", level:"A1" },
  MOD_MUST: { id:"Modals Obligation", sig:"MOD_MUST", formula:"must/have to/should", example:"You must save.", mistake:"must to save -> must save", level:"A1" },
  PRES_PERF: { id:"Present Perfect", sig:"PRES_PERF", formula:"have/has + V3", example:"I have never saved money before.", mistake:"I have save -> saved", level:"A2" },
  PRES_PERF_CONT: { id:"Present Perfect Continuous", sig:"PRES_PERF_CONT", formula:"has/have been + V-ing", example:"I have been working for 2 hours", mistake:"I have been work -> working", level:"A2" },
  PAST_CONT: { id:"Past Continuous", sig:"PAST_CONT", formula:"was/were + verb-ing", example:"I was thinking about money when you called.", mistake:"I was think -> thinking", level:"A2" },
  WILL_VS_GOING: { id:"Will vs Going to", sig:"WILL_VS_GOING", formula:"will=decision now, going to=plan", example:"It is going to rain vs I will answer", mistake:"confundir will/going", level:"A2" },
  COUNT_UNCOUNT: { id:"Countable Uncountable", sig:"COUNT_UNCOUNT", formula:"many/much/a few/a little/some/any", example:"Many opportunities, much money.", mistake:"much people -> many people", level:"A2" },
  COMP_SUP: { id:"Comparatives Superlatives", sig:"COMP_SUP", formula:"-er/more -est/most / as...as", example:"Saving is harder than spending", mistake:"more harder -> harder", level:"A2" },
  CONN_LOGIC: { id:"Connectors Logic", sig:"CONN_LOGIC", formula:"Moreover/However/Therefore/For example", example:"I was broke. However, I learned.", mistake:"However = And", level:"A2" },
  GERUND_INF: { id:"Gerund vs Infinitive", sig:"GERUND_INF", formula:"verb + -ing / to + verb", example:"I enjoy saving but I want to invest.", mistake:"I enjoy to save -> saving", level:"A2" },
  COND_0: { id:"Zero Conditional", sig:"COND_0", formula:"If + Present Simple, Present Simple", example:"If you heat water, it boils", mistake:"If you will heat -> heat", level:"A2" },
  COND_1: { id:"First Conditional", sig:"COND_1", formula:"If + Present Simple, will + V1", example:"If you save now, you will be rich later.", mistake:"If you save, you will be -> ok!", level:"A2" },
  PASS_BASIC: { id:"Passive Voice Present Past", sig:"PASS_BASIC", formula:"be + V3 + by agent", example:"Money is made by discipline.", mistake:"Money is make -> made", level:"A2" },
  USED_TO: { id:"Used to / Would", sig:"USED_TO", formula:"used to + verb = past habit", example:"I used to spend all my money.", mistake:"I used to spending -> spend", level:"A2" },
  QUESTION_TAGS: { id:"Question Tags", sig:"QUESTION_TAGS", formula:"You are X, arent you? So/Such", example:"You are Spanish, arent you?", mistake:"You are Spanish, is it?", level:"A2" },
  PAST_PERF: { id:"Past Perfect", sig:"PAST_PERF", formula:"had + V3", example:"I had failed before I succeeded.", mistake:"I had fail -> had failed", level:"B1" },
  PAST_PERF_CONT: { id:"Past Perfect Continuous", sig:"PAST_PERF_CONT", formula:"had been + V-ing", example:"I had been waiting for 1 hour when he came", mistake:"had been wait -> waiting", level:"B1" },
  MOD_MIGHT: { id:"Modals Possibility Deduction", sig:"MOD_MIGHT", formula:"might/may/must/cant deduction", example:"He might be rich. He must be working.", mistake:"must to be -> must be", level:"B1" },
  REPORTED: { id:"Reported Speech", sig:"REPORTED", formula:"He said (that) he was...", example:"He said he was saving money.", mistake:"He said he is -> was", level:"B1" },
  RELATIVE: { id:"Relative Clauses", sig:"RELATIVE", formula:"who/which/that/where/when/whose", example:"The man who saves money is smart.", mistake:"The man which -> who", level:"B1" },
  COND_2: { id:"Second Conditional", sig:"COND_2", formula:"If + Past Simple, would + V1", example:"If I had money, I would travel", mistake:"If I would have -> If I had", level:"B1" },
  COND_3: { id:"Third Conditional", sig:"COND_3", formula:"If + had + V3, would have + V3", example:"If I had saved, I would have been rich.", mistake:"If I would have saved -> If I had saved", level:"B2" },
  FUT_CONT: { id:"Future Continuous", sig:"FUT_CONT", formula:"will be + verb-ing", example:"This time tomorrow, I will be earning.", mistake:"will be earn -> earning", level:"B2" },
  FUT_PERF: { id:"Future Perfect", sig:"FUT_PERF", formula:"will have + V3", example:"By 2027, I will have saved 10k.", mistake:"will have save -> saved", level:"B2" },
  PASS_ADV: { id:"Passive Advanced", sig:"PASS_ADV", formula:"has been V3 / will be V3 / is being V3", example:"The work has been finished", mistake:"has been finish -> finished", level:"B2" },
  MOD_PAST_REGRET: { id:"Modals Past Regret", sig:"MOD_PAST_REGRET", formula:"should have / could have / would have + V3", example:"You should have called me", mistake:"should have call -> called", level:"B2" }
};

export const VOCAB_REAL = { kitchen50: ["cook","kitchen","knead","knife","plate","fork","oven","fry","boil","chop","blend","bake","stir","taste","recipe","ingredient","spice","salt","pepper","pan","pot","sauce","dish","meal","breakfast","lunch","dinner","hungry","delicious"], move16: ["run","walk","jump","move","travel","go","come","arrive","leave","return","PUSH/Empujar","PULL/Tirar","LIFT/Levantar","DROP/Soltar","THROW/Lanzar","CATCH/Atrapar"], collHaveTake: ["have a shower","have breakfast","have a break","take a break","take notes","have fun","take care"], verbPrep40: ["talk ABOUT","work DURING","walk AROUND","fight AGAINST","look AFTER"], sinceForUntil: ["since 2020","for 3 years","until tomorrow"], adjPerson: ["Kind/Rude/Smart/Funny/Honest/Lazy/Brave/Generous/Shy/Confident"], adjEmotion: ["Happy/Sad/Angry/Excited/Scared/Nervous/Proud/Jealous/Worried/Grateful"], adjObject: ["New/Old/Big/Cheap/Useful/Expensive/Modern"], survival50: ["money","save","spend","invest","earn","bank","debt","rich","poor","budget","salary"], conectores40: ["Moreover","Furthermore","However","Therefore","For example"], silentLetters: ["knife/knee/know/knock","doubt/debt/bomb/climb"], phrasalVerbs50: ["turn on/off, put on/off, get up, wake up"], business: ["budget/profit/loss/investment/meeting/deadline/target/growth/risk"], idioms: ["over the moon, under the weather, piece of cake"], pronPoss: ["I/me/my/mine/myself","you/your/yours/yourself"], prepTime: ["in the morning","on Monday","at night"], quantifiers: ["a lot of","many","much","some","any"], superDicSyllables: { co: ["cook","confidence","consistency","cold","contract","co-founder","commitment","company","cost"], kne: ["knead","knee","kneel","knife","know","knock"], hap: ["happy","happiness","happily"], hav: ["have a shower","have breakfast","have fun"], tak: ["take a break","take notes","take care"], sav: ["save","saving","savings"], mon: ["money","month","Monday"], fai: ["fail","failure"], wor: ["work","worry","world"], tim: ["time","timing"], kno: ["know","knowledge"], wri: ["write","wrong","wrist"] } };

export const MARIONETTE_JOINTS = {
  Head_Bone: { id: 'Head_Bone', axes: 'XYZ', independent: true },
  Spine_02: { id: 'Spine_02-Chest', axes: 'Y', physics: 'breathing', independent: true },
  Shoulder_L: { id: 'Shoulder.L', independent: true }, Wrist_L: { id: 'Wrist.L', independent: true },
  Shoulder_R: { id: 'Shoulder.R', independent: true }, Wrist_R: { id: 'Wrist.R', independent: true },
  Hip_L: { id: 'Hip.L', independent: true }, Hip_R: { id: 'Hip.R', independent: true },
  Eye_L: { id: 'Eye_L', independent: true }, Eye_R: { id: 'Eye_R', independent: true },
  Mouth: { id: 'Mouth', visemes: 6, list: ['CLOSED','AH','AA','O','E-I','M-B-P'], independent: true }
};

export const INTENTION_MOTOR = {
  FOUNDATION: { id: 'FOUNDATION', name: 'Cimiento', joints: { Head_Bone: [-5,10,0], Spine_02: -15, Wrist_L: 'open_palm_down' }, tts: 'Primero el cimiento, tete.', sap_type: 'FOUNDATION', color: '#60a5fa' },
  SCAFFOLDING: { id: 'SCAFFOLDING', name: 'Andamiaje', joints: { Shoulder_L: [45,30,0], Shoulder_R: [-45,-30,0], Wrist_L: 'point' }, tts: 'Mira, esta pieza encaja.', sap_type: 'GRAMMAR', color: '#00d4ff' },
  STRICT_ENGINEER: { id: 'STRICT_ENGINEER', name: 'Ingeniera Estricta', joints: { Shoulder_L: [40,0,0], Shoulder_R: [-40,0,0], Elbow_L: 'crossed', Eye_L: 'squint_0.8' }, tts: 'Ojo tete, fuga detectada. Es HAS.', sap_type: 'ERR', color: '#f59e0b' },
  FLOW_OBSERVER: { id: 'FLOW_OBSERVER', name: 'Observadora Flow', joints: { Spine_02: 0, Mouth: 'smile_closed' }, tts: 'Te observo, vas en flow.', sap_type: 'FLOW', color: '#8b5cf6' },
  ELEVATION: { id: 'ELEVATION', name: 'Elevación', joints: { Shoulder_L: [0,120,0], Shoulder_R: [0,120,0], Spine_02: 15, Wrist_L: 'wave', Mouth: 'AA' }, tts: 'BOOM! Lo clavaste!', sap_type: 'XP', color: '#22c55e' },
  TRANSMISSION: { id: 'TRANSMISSION', name: 'Transmisión', joints: { Shoulder_L: [-30,30,0], Shoulder_R: [30,-30,0], Wrist_L: 'open_big', Mouth: 'lip_sync' }, tts: 'Esto ya es una capa completa.', sap_type: 'TRANSMIT', color: '#00d4ff' }
};

export const AVATAR_ENGINE_HOLO = {
  type: "topological_blazer_real_0.11_0.52_gap_0.11_hd",
  sprite: null,
  pointsCount: 8500,
  surfaceSampling: false,
  meshReal: true,
  proxyMesh: false,
  meshType: "Topological_Blazer_Lapels_Buttons_Pockets_Quad_Grid_28_24_HD",
  feminine: true,
  waist: 0.11,
  waistFactor: 0.62,
  hips: 0.32,
  chest: 0.336,
  shoulders: 0.336,
  thigh_gap: 0.11,
  leg_separation: 0.13,
  material: { color: 0x00e5ff, size: 0.006, opacity: 0.35, blending: "NoBlending" },
  hairMaterial: { color: 0xc9a88a, size: 0.007, opacity: 0.82 },
  lines: { enabled: true, type: "WireframeGeometry_topological_quad_blazer_real_hd", color: 0x00e5ff, opacity: 0.92 },
  bones: 34,
  hiddenSkeleton: true,
  fullBody: true,
  scale: 0.52,
  mobileScale: 0.50,
  distribution_mesh_real: {
    body_cylinder_topological_28: 4200,
    lapels: 320,
    buttons_torus: 80,
    pockets_box: 160,
    head: 1100,
    face_eyes_white: 120,
    face_iris: 80,
    face_mouth: 40,
    bob_brown: 850,
    arms_cylinder_topological_14: 840,
    hands_box: 120,
    legs_cylinder_topological_20: 1680,
    feet_box_toes: 240,
    total: 9740
  },
  mesh_real_profile: {
    torso: "CylinderGeometry(0.195,0.18,0.56,28,24)_deformed_waist_0.11_topological_princess_seam_hd",
    deform: "y>0.22 scale 1.12 hombros 0.336 TOPOLOGICAL, y>0.02 scale 0.62 cintura 0.11 TOPOLOGICAL PRINCESS SEAM, y>-0.12 scale 0.97 cadera 0.32",
    lapels: "2x PlaneGeometry(0.08,0.28,4,8)_rotated_0.32rad_blazer_lapels_real_hd",
    buttons: "2x TorusGeometry(0.011,0.0025,8,16)_blazer_buttons_0.22_0.08_y_hd",
    pockets: "2x BoxGeometry(0.075,0.038,0.012)_blazer_pockets_0.07_y_hd",
    legs: "2x Cylinder 0.092->0.046,0.80,20,24 tapered knee/ankle separated 0.13 gap 0.11 TOPOLOGICAL HD NO CAPSULE NO CUT SHOULDER",
    feet: "2x BoxGeometry 0.055x0.04x0.19 box feet with toes TOPOLOGICAL HD",
    arms: "2x Cylinder 0.044->0.031,0.72 T-pose 0.50 shoulder NO CUT TOPOLOGICAL HD",
    hands: "2x BoxGeometry 0.05x0.02x0.08 hands TOPOLOGICAL HD",
    head: "Sphere 0.11 18 segments HD realistic face"
  },
  frameMap: { strict: 'STRICT_ENGINEER', point_left: 'SCAFFOLDING', explain_open: 'SCAFFOLDING', crossed_arms: 'FLOW_OBSERVER', celebratory: 'ELEVATION', crossed_clip: 'TRANSMISSION', open_big: 'TRANSMISSION' },
  emotions: {
    HOLO_STRICT: { frame: 0, name: "STRICT", intention: INTENTION_MOTOR.STRICT_ENGINEER },
    HOLO_CELEB: { frame: 0, name: "CELEBRATORY", intention: INTENTION_MOTOR.ELEVATION },
    HOLO_EXPLAIN: { frame: 0, name: "EXPLAIN", intention: INTENTION_MOTOR.SCAFFOLDING },
    HOLO_CROSSED: { frame: 0, name: "CROSSED", intention: INTENTION_MOTOR.FLOW_OBSERVER },
    HOLO_CLIP: { frame: 0, name: "CLIPBOARD", intention: INTENTION_MOTOR.TRANSMISSION },
    HOLO_OPEN: { frame: 0, name: "OPEN_BIG", intention: INTENTION_MOTOR.TRANSMISSION },
    HOLO_FOUNDATION: { frame: 0, name: "FOUNDATION", intention: INTENTION_MOTOR.FOUNDATION }
  },
  decideByMetrics(m){
    let result;
    if(m.same_error_count >= 3) result = { frame: 0, key: "HOLO_STRICT", emotion: "STRICT_ENGINEER", intention: INTENTION_MOTOR.STRICT_ENGINEER };
    else if(m.same_error_count === 2) result = { frame: 0, key: "HOLO_STRICT", emotion: "STRICT_ENGINEER", intention: INTENTION_MOTOR.STRICT_ENGINEER };
    else if(m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) result = { frame: 0, key: "HOLO_CELEB", emotion: "ELEVATION", intention: INTENTION_MOTOR.ELEVATION };
    else if(m.cefr_level==="B1" && m.flow_mode) result = { frame: 0, key: "HOLO_CROSSED", emotion: "FLOW_OBSERVER", intention: INTENTION_MOTOR.FLOW_OBSERVER };
    else if(m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) result = { frame: 0, key: "HOLO_EXPLAIN", emotion: "SCAFFOLDING", intention: INTENTION_MOTOR.SCAFFOLDING };
    else if(m.is_new_area) result = { frame: 0, key: "HOLO_EXPLAIN", emotion: "FOUNDATION", intention: INTENTION_MOTOR.FOUNDATION };
    else result = { frame: 0, key: "HOLO_OPEN", emotion: "TRANSMISSION", intention: INTENTION_MOTOR.TRANSMISSION };
    result.joints = result.intention.joints;
    result.pose = result.intention;
    result.tts = result.intention.tts;
    result.color = result.intention.color;
    return result;
  },
  focusFrame(index){ return 0; },
  getFrameByName(name){ return this.frameMap[name] || 'SCAFFOLDING'; }
};

export const LAYA_FINAL = {
  version: "28.5 TOPOLOGICAL - BLAZER REAL - GAP 0.11 - SOLAPAS BOTONES BOLSILLOS - NITIDA COMPLETA",
  VOCAB: VOCAB_REAL, GRAMMAR: GRAMMAR_REAL, AVATAR: AVATAR_ENGINE_HOLO, INTENTIONS: INTENTION_MOTOR, JOINTS: MARIONETTE_JOINTS,
  AREAS: {
    1: { name:"Money Basics", topic:"Why Most People Never Become Rich", vocab:["collHaveTake","survival50","pronPoss"], grammar:["PS_3RD_S","COND_1"], future:"COND_1", level:"A1" },
    2: { name:"Saving", topic:"The Power of Saving Small", vocab:["survival50","quantifiers","sinceForUntil"], grammar:["THERE_QUANT","PRES_PERF"], future:"FUT_GOING", level:"A1" },
    3: { name:"Smart Spending", topic:"Smart Spending Habits", vocab:["adjObject","survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"WILL_VS_GOING", level:"A1" },
    4: { name:"Investing", topic:"How Investing Builds Freedom", vocab:["conectores40","business"], grammar:["FUT_WILL","COND_1"], future:"FUT_PERF", level:"A2" },
    5: { name:"Work", topic:"Why Hard Work Matters", vocab:["move16","survival50"], grammar:["PAST_SIMP","PAST_CONT"], future:"COND_2", level:"A2" },
    6: { name:"Career", topic:"How to Grow in Your Career", vocab:["survival50","business","verbPrep40"], grammar:["PRES_PERF","PAST_PERF"], future:"FUT_CONT", level:"B1" },
    7: { name:"Opportunity", topic:"Why English Is The Language of Opportunity", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","MOD_CAN"], future:"COND_1", level:"A2" },
    8: { name:"Business", topic:"How Small Business Starts", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"FUT_GOING", level:"A2" },
    9: { name:"Time Is Money", topic:"Why Time Is More Valuable Than Money", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","PRES_PERF"], future:"FUT_PERF", level:"A1" },
    10:{ name:"Rich vs Poor Mind", topic:"How Rich People Think Different", vocab:["adjPerson","conectores40"], grammar:["PS_3RD_S","COMP_SUP"], future:"COND_2", level:"A2" },
    11:{ name:"Positive Mindset", topic:"Why a Positive Mindset Helps Overcome Challenges", vocab:["adjEmotion","conectores40"], grammar:["PAST_SIMP","PRES_PERF"], future:"COND_0", level:"A2" },
    12:{ name:"Growth Mindset", topic:"The Power of Growth Mindset", vocab:["adjPerson","survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"A2" },
    13:{ name:"Confidence", topic:"How to Build Real Confidence", vocab:["survival50","adjPerson","pronPoss"], grammar:["MOD_CAN","MOD_MUST"], future:"FUT_WILL", level:"A2" },
    14:{ name:"Fear", topic:"Why Fear Stops Most People", vocab:["adjEmotion","survival50"], grammar:["MOD_CAN","PRES_PERF"], future:"COND_2", level:"A2" },
    15:{ name:"Failure", topic:"Why Failure Is Your Best Teacher", vocab:["conectores40","survival50"], grammar:["PRES_PERF","PAST_PERF"], future:"COND_3", level:"B1" },
    16:{ name:"Success", topic:"What Success Really Means", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","PRES_CONT"], future:"FUT_PERF", level:"A2" },
    17:{ name:"Progress", topic:"The Power of Progress", vocab:["move16","prepTime"], grammar:["PAST_SIMP","PAST_CONT"], future:"FUT_CONT", level:"A2" },
    18:{ name:"Taking Action", topic:"Why Taking Action Can Change Your Life", vocab:["move16","phrasalVerbs50"], grammar:["PAST_SIMP","MOD_MUST"], future:"COND_1", level:"A2" },
    19:{ name:"Discipline", topic:"Why Discipline Beats Motivation", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2" },
    20:{ name:"Motivation", topic:"Where Real Motivation Comes From", vocab:["survival50","adjEmotion"], grammar:["PRES_CONT","PRES_PERF"], future:"WILL_VS_GOING", level:"A2" },
    21:{ name:"Focus", topic:"The Power of Deep Focus", vocab:["conectores40","business"], grammar:["PS_3RD_S","GERUND_INF"], future:"FUT_WILL", level:"A2" },
    22:{ name:"Procrastination", topic:"Why We Procrastinate", vocab:["sinceForUntil","prepTime"], grammar:["PS_3RD_S","PRES_CONT"], future:"COND_2", level:"A2" },
    23:{ name:"Gratitude", topic:"Why Gratitude Changes Everything", vocab:["adjEmotion","pronPoss"], grammar:["PRON_PER_POSS","PRES_PERF"], future:"COND_0", level:"A2" },
    24:{ name:"Happiness", topic:"How to Find Real Happiness", vocab:["adjEmotion","conectores40"], grammar:["PS_3RD_S","PAST_SIMP"], future:"COND_1", level:"A2" },
    25:{ name:"Stress", topic:"How to Handle Stress", vocab:["adjEmotion","verbPrep40"], grammar:["PRES_CONT","MOD_MIGHT"], future:"WILL_VS_GOING", level:"A2" },
    26:{ name:"Good Habits", topic:"Why Building Good Habits Leads to Success", vocab:["kitchen50","collHaveTake"], grammar:["PS_3RD_S","ART_DET"], future:"COND_0", level:"A1" },
    27:{ name:"Bad Habits", topic:"The Money Habits That Keep You Poor", vocab:["collHaveTake","survival50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_1", level:"A1" },
    28:{ name:"Morning Routine", topic:"The Power of a Morning Routine", vocab:["sinceForUntil","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1" },
    29:{ name:"Goals", topic:"The Power of Setting Goals", vocab:["survival50","business"], grammar:["FUT_WILL","FUT_GOING"], future:"COND_1", level:"A2" },
    30:{ name:"Planning", topic:"Why Planning Saves Your Future", vocab:["conectores40","business"], grammar:["WILL_VS_GOING","CONN_LOGIC"], future:"FUT_CONT", level:"A2" },
    31:{ name:"Time Management", topic:"How to Manage Your Time", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","THERE_QUANT"], future:"COND_2", level:"A1" },
    32:{ name:"Health", topic:"Why Health Is Real Wealth", vocab:["adjPerson","move16"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_1", level:"A1" },
    33:{ name:"Sleep", topic:"The Power of Good Sleep", vocab:["move16","prepTime"], grammar:["PS_3RD_S","PAST_SIMP"], future:"WILL_VS_GOING", level:"A1" },
    34:{ name:"Healthy Food", topic:"How Food Affects Your Energy", vocab:["kitchen50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_0", level:"A1" },
    35:{ name:"Fitness", topic:"Why Small Exercise Changes Your Life", vocab:["move16","adjEmotion"], grammar:["PRES_CONT","PRES_PERF_CONT"], future:"FUT_GOING", level:"A2" },
    36:{ name:"Learning", topic:"Learn More, Earn More", vocab:["survival50","verbPrep40"], grammar:["PRES_PERF","RELATIVE"], future:"FUT_PERF", level:"B1" },
    37:{ name:"Reading", topic:"Why Reading Makes You Richer", vocab:["conectores40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"COND_2", level:"B1" },
    38:{ name:"Consistency", topic:"Why Consistency Beats Talent", vocab:["verbPrep40","conectores40"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_0", level:"A2" },
    39:{ name:"Patience", topic:"The Power of Patience", vocab:["adjPerson","sinceForUntil"], grammar:["PS_3RD_S","PAST_PERF"], future:"FUT_CONT", level:"B1" },
    40:{ name:"Kindness", topic:"Why Kindness Is Strength", vocab:["adjPerson","pronPoss"], grammar:["PRON_PER_POSS","MOD_CAN"], future:"COND_1", level:"A1" },
    41:{ name:"Family", topic:"My Family Is My Strength", vocab:["survival50","pronPoss","adjPerson"], grammar:["PRON_PER_POSS","THERE_QUANT"], future:"COND_2", level:"A1" },
    42:{ name:"Grandmother", topic:"My Grandmother Is My Inspiration", vocab:["adjPerson","pronPoss","sinceForUntil"], grammar:["USED_TO","PAST_CONT"], future:"COND_2", level:"B1" },
    43:{ name:"Friends", topic:"How Real Friends Help You Grow", vocab:["adjPerson","pronPoss"], grammar:["PS_3RD_S","RELATIVE"], future:"COND_1", level:"A2" },
    44:{ name:"Love", topic:"Why Love Makes Us Stronger", vocab:["adjEmotion","pronPoss"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_3", level:"B1" },
    45:{ name:"Respect", topic:"Why Respect Is Everything", vocab:["verbPrep40","adjPerson"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2" },
    46:{ name:"Honesty", topic:"Why Honesty Builds Trust", vocab:["adjPerson","business"], grammar:["PS_3RD_S","REPORTED"], future:"COND_1", level:"B1" },
    47:{ name:"Responsibility", topic:"The Power of Responsibility", vocab:["verbPrep40","quantifiers","pronPoss"], grammar:["THERE_QUANT","PASS_BASIC"], future:"FUT_PERF", level:"A1" },
    48:{ name:"Delivery Life", topic:"My Life Delivering Food", vocab:["move16","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1" },
    49:{ name:"Alignment", topic:"Why Alignment Creates Success", vocab:["conectores40","business","quantifiers"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"B1" },
    50:{ name:"Willpower", topic:"The Power of Willpower", vocab:["move16","adjEmotion","conectores40"], grammar:["FUT_WILL","FUT_CONT"], future:"FUT_PERF", level:"B2" }
  },
  SUPER_DIC: { search(syllable){ const s=syllable.toLowerCase(); const dic=VOCAB_REAL.superDicSyllables; for(const k in dic){ if(k.includes(s)||s.includes(k)) return dic[k]; } const all=Object.values(VOCAB_REAL).flat().filter(v=>typeof v==="string"); return all.filter(w=>w.toLowerCase().includes(s)).slice(0,8); } },
  MEMORY: { get(){ try{return JSON.parse(localStorage.getItem("LAYA_MEMORY_V9")||"{}");}catch{return{}}}, save(m){localStorage.setItem("LAYA_MEMORY_V9",JSON.stringify(m));}, update(sig,ok,hes){ const mem=this.get(); if(!mem[sig]) mem[sig]={errors:0,oks:0,hes:[]}; if(ok){mem[sig].oks++;mem[sig].errors=Math.max(0,mem[sig].errors-1);} else {mem[sig].errors++;} mem[sig].hes.push(hes); if(mem[sig].hes.length>10) mem[sig].hes.shift(); this.save(mem); return mem; } },
  STORIES: { "Money Basics": "Hello everyone. Today I want to talk about why most people never become rich. I have a friend. His name is Carlos. He works hard every day. He has a good salary. But he has a problem. There is a lot of money in his account on Monday, but on Friday there is no money. Why? Because he spends all his money.", "default": "Hello everyone. Today I want to talk about {topic}. There is a lot to learn. Since Monday I have been thinking about this. For a long time I did not understand. I have a question. Can you help me? I used to make many mistakes." },
  generate(areaId, level, metrics){
    const area = this.AREAS[areaId];
    if(!area) return { prompt:"Elige area", story:"Elige area", meta:{ area:"?", topic:"?", level, grammar_main:{id:"?",formula:"?",example:"?"}, grammar_future:{id:"?",formula:"?",example:"?"}, vocab:[], emotion:"FOUNDATION", intention: INTENTION_MOTOR.FOUNDATION, joints: INTENTION_MOTOR.FOUNDATION.joints, avatar_file:null, avatar_frame:0, xp:0 } };
    const gMain = GRAMMAR_REAL[area.grammar[0]] || Object.values(GRAMMAR_REAL)[0];
    const gFuture = GRAMMAR_REAL[area.future] || GRAMMAR_REAL.COND_1;
    const vocabList = area.vocab.map(v=>{ const val=VOCAB_REAL[v]; if(!val) return []; return Array.isArray(val)?val:Object.values(val).flat(); }).flat().slice(0,10);
    const avatarData = AVATAR_ENGINE_HOLO.decideByMetrics({...metrics, cefr_level: level});
    const xp = metrics.same_error_count>=3?0:(level==="A1"?10:level==="A2"?15:20);
    const story = (this.STORIES[area.name]||this.STORIES["default"]).replace("{topic}", area.topic.toLowerCase());
    return { prompt: level+" - "+area.topic, story, meta: { area: area.name, topic: area.topic, level, grammar_main: gMain, grammar_future: gFuture, vocab: vocabList, emotion: avatarData.emotion, intention: avatarData.intention, joints: avatarData.joints, avatar_file:null, avatar_type:"topological_blazer_real_0.52_gap_0.11_hd", avatar_frame:0, xp, wordCount:"150" } };
  }
};

export const LAYA_FINAL_COMPLETO = LAYA_FINAL;
export const LAYA_SAP = {
  generateSAP(m, sig, w){ return { evolution:{ ACCURACY_7D: Math.round(m.accuracy_7d*100)+'%', XP_TOTAL: m.xp_total }, detail:{ grammarChain: sig } }; },
  renderToHologram(sap){ const b=document.getElementById('bubble'); if(b){ b.innerHTML=`V28.5 TOPOLOGICAL BLAZER REAL // ${sap.evolution.ACCURACY_7D} // XP ${sap.evolution.XP_TOTAL}`; b.classList.remove('hidden'); } }
};
export const LAYA_FINAL_ACTOR_V1 = LAYA_FINAL;