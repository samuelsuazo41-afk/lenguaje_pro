// LAYA_FINAL_COMPLETO.js - V34.1 ORGANIC ANATOMICAL SEAM - PUZZLE FINAL
// FIX: Cadera 0.1225 + X-CLAMP 0.1976 + 2 piernas -0.095/+0.095 + diamond 0.0
// BASE TU V32.1 + UPDATE V34.1

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

export const VOCAB_REAL = { 
  survival50: ["money","save","spend","invest","earn","bank","debt","rich","poor","budget","salary"], 
  superDicSyllables: { co: ["cook","confidence","consistency"], sav: ["save","saving","savings"], mon: ["money","month","Monday"] } 
};

// V34.1 - JOINTS ORGANIC SEAM - PUZZLE X-CLAMP 0.1976
export const MARIONETTE_JOINTS = {
  Head_Bone: { id: 'Head_Bone', independent: true, spec:'28x36 depth 0.24 Bob Cut', rows:28, cols:36 },
  Spine_02: { id: 'Spine_02', independent: true, waist:0.12, lumbar:'0.22-0.50', flat_gluteo:true, spine:'neutral alignment', mamas:true, axilas:true },
  Shoulder_L: { id: 'Shoulder.L', independent: true, anchura:0.48, trapezius:0.32, tpose:'90°', dorsal_ancho:true, axila:true }, 
  Shoulder_R: { id: 'Shoulder.R', independent: true, anchura:0.48, trapezius:0.32, tpose:'90°', dorsal_ancho:true, axila:true },
  Hip_L: { id: 'Hip.L', independent: true, x:-0.095, y:-0.08, gap:0.19, diamond_closed:true, cadera:'0.1225', xclamp:0.1976, flat_gluteo:true, entrepiernas:true, leg:'separada izq puzzle' }, 
  Hip_R: { id: 'Hip.R', independent: true, x:0.095, y:-0.08, gap:0.19, diamond_closed:true, cadera:'0.1225', xclamp:0.1976, flat_gluteo:true, entrepiernas:true, leg:'separada der puzzle' },
  Knee_L: { id: 'Knee.L', independent: true, posture:'neutral stance', triangular:true }, 
  Knee_R: { id: 'Knee.R', independent: true, posture:'neutral stance', triangular:true },
  Calf_L: { id: 'Calf.L', independent: true, posture:'neutral', pantorrilla:true },
  Calf_R: { id: 'Calf.R', independent: true, posture:'neutral', pantorrilla:true },
  Foot_L: { id: 'Foot.L', independent: true, pies:true },
  Foot_R: { id: 'Foot.R', independent: true, pies:true },
  Hand_L: { id: 'Hand.L', independent: true, tpose:'90°', clean:true, manos:true },
  Hand_R: { id: 'Hand.R', independent: true, tpose:'90°', clean:true, manos:true }
};

export const INTENTION_MOTOR = {
  FOUNDATION: { id: 'FOUNDATION', name: 'Cimiento', joints: { Head_Bone: [-5,10,0], Spine_02: -10 }, tts: 'Primero el cimiento - V34.1 PUZZLE X-CLAMP 0.1976 cintura 0.12 diamond 0.0', sap_type: 'FOUNDATION', color: '#60a5fa' },
  SCAFFOLDING: { id: 'SCAFFOLDING', name: 'Andamiaje', joints: { Shoulder_L: [0,0,0], Shoulder_R: [0,0,0] }, tts: 'Mira, esta pieza encaja - V34.1 T-POSE 90° anchura 0.48m 2 piernas puzzle', sap_type: 'GRAMMAR', color: '#00d4ff' },
  STRICT_ENGINEER: { id: 'STRICT_ENGINEER', name: 'Ingeniera Estricta', joints: { Shoulder_L: [0,0,0], Shoulder_R: [0,0,0] }, tts: 'Ojo tete, es HAS - T-POSE 90° neutral stance', sap_type: 'ERR', color: '#f59e0b' },
  FLOW_OBSERVER: { id: 'FLOW_OBSERVER', name: 'Observadora Flow', joints: { Spine_02: 0 }, tts: 'Te observo, vas en flow - flat gluteo curve neutral', sap_type: 'FLOW', color: '#8b5cf6' },
  ELEVATION: { id: 'ELEVATION', name: 'Elevación', joints: { Shoulder_L: [0,10,0], Shoulder_R: [0,10,0], Spine_02: 5 }, tts: 'BOOM! Lo clavaste! Diamond closed 0.0 clean quad 2 piernas puzzle X-CLAMP', sap_type: 'XP', color: '#22c55e' },
  TRANSMISSION: { id: 'TRANSMISSION', name: 'Transmisión', joints: { Shoulder_L: [0,0,0], Shoulder_R: [0,0,0] }, tts: 'Esto ya es una capa completa - V34.1 PUZZLE PERFECTO', sap_type: 'TRANSMIT', color: '#00d4ff' }
};

export const AVATAR_ENGINE_HOLO = {
  type: "V34.1_ORGANIC_SEAM_PUZZLE_XCLAMP_0.1976_2_LEGS_SEPARATED_TPOSE_90",
  meshType: "Organic_Body_Wireframe_V34.1_PUZZLE_2_LEGS_SEPARATED_-0.095_+0.095_RADIUS_0.1225_XCLAMP_0.1976_DIAMOND_0.0",
  feminine: true,
  waist: 0.12,
  waist_narrowest: 0.12,
  lumbar: "0.22-0.50",
  flat_gluteo: true,
  diamond: 0.0,
  diamond_closed: true,
  anchura_hombros: 0.48,
  trapezius: 0.32,
  cadera_wc: 0.1225,
  cadera_xclamp: 0.1976,
  cadera_gap: 0.19,
  cadera_separacion: "-0.095 / +0.095 - CIRCULAR MATCH",
  cabeza: "28x36 depth 0.24",
  cuello: "0.12",
  bob_cut: true,
  tpose: "90°",
  material: { color: 0x00e5ff, opacity: 0.42, wireframe: true, depthWrite: false },
  bones: 16,
  scale: 0.58,
  camera: { fov: 30, pos: [0,0.02,2.68], groupPos: [0,-0.15,0] },
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
    else if(m.streak_days >= 7 || m.level_up) result = { frame: 0, key: "HOLO_CELEB", emotion: "ELEVATION", intention: INTENTION_MOTOR.ELEVATION };
    else if(m.hesitation_ms > 4000) result = { frame: 0, key: "HOLO_EXPLAIN", emotion: "SCAFFOLDING", intention: INTENTION_MOTOR.SCAFFOLDING };
    else result = { frame: 0, key: "HOLO_OPEN", emotion: "TRANSMISSION", intention: INTENTION_MOTOR.TRANSMISSION };
    result.joints = result.intention.joints; result.pose = result.intention; result.tts = result.intention.tts; result.color = result.intention.color;
    return result;
  }
};

export const LAYA_FINAL = {
  version: "V34.1 PUZZLE PERFECTO - X-CLAMP 0.1976 - RADIUS 0.1225 - 2 PIERNAS -0.095/+0.095 - DIAMOND 0.0 - SIN ESCALON",
  VOCAB: VOCAB_REAL, GRAMMAR: GRAMMAR_REAL, AVATAR: AVATAR_ENGINE_HOLO, INTENTIONS: INTENTION_MOTOR, JOINTS: MARIONETTE_JOINTS,
  AREAS: {
    1: { name:"Money Basics", topic:"Why Most People Never Become Rich", vocab:["survival50"], grammar:["PS_3RD_S","COND_1"], future:"COND_1", level:"A1" },
    2: { name:"Saving", topic:"The Power of Saving Small", vocab:["survival50"], grammar:["THERE_QUANT","PRES_PERF"], future:"FUT_GOING", level:"A1" },
    3: { name:"Smart Spending", topic:"Smart Spending Habits", vocab:["survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"WILL_VS_GOING", level:"A1" },
    4: { name:"Investing", topic:"How Investing Builds Freedom", vocab:["survival50"], grammar:["FUT_WILL","COND_1"], future:"FUT_PERF", level:"A2" },
    5: { name:"Work", topic:"Why Hard Work Matters", vocab:["survival50"], grammar:["PAST_SIMP","PAST_CONT"], future:"COND_2", level:"A2" },
    6: { name:"Career", topic:"How to Grow in Your Career", vocab:["survival50"], grammar:["PRES_PERF","PAST_PERF"], future:"FUT_CONT", level:"B1" },
    7: { name:"Opportunity", topic:"Why English Is The Language of Opportunity", vocab:["survival50"], grammar:["PS_3RD_S","MOD_CAN"], future:"COND_1", level:"A2" },
    8: { name:"Business", topic:"How Small Business Starts", vocab:["survival50"], grammar:["PS_3RD_S","PASS_BASIC"], future:"FUT_GOING", level:"A2" },
    9: { name:"Time Is Money", topic:"Why Time Is More Valuable Than Money", vocab:["survival50"], grammar:["PREP_IN_ON_AT","PRES_PERF"], future:"FUT_PERF", level:"A1" },
    10:{ name:"Rich vs Poor Mind", topic:"How Rich People Think Different", vocab:["survival50"], grammar:["PS_3RD_S","COMP_SUP"], future:"COND_2", level:"A2" },
    11:{ name:"Positive Mindset", topic:"Why a Positive Mindset Helps", vocab:["survival50"], grammar:["PAST_SIMP","PRES_PERF"], future:"COND_0", level:"A2" },
    12:{ name:"Growth Mindset", topic:"The Power of Growth Mindset", vocab:["survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"A2" },
    13:{ name:"Confidence", topic:"How to Build Real Confidence", vocab:["survival50"], grammar:["MOD_CAN","MOD_MUST"], future:"FUT_WILL", level:"A2" },
    14:{ name:"Fear", topic:"Why Fear Stops Most People", vocab:["survival50"], grammar:["MOD_CAN","PRES_PERF"], future:"COND_2", level:"A2" },
    15:{ name:"Failure", topic:"Why Failure Is Your Best Teacher", vocab:["survival50"], grammar:["PRES_PERF","PAST_PERF"], future:"COND_3", level:"B1" },
    16:{ name:"Success", topic:"What Success Really Means", vocab:["survival50"], grammar:["PS_3RD_S","PRES_CONT"], future:"FUT_PERF", level:"A2" },
    17:{ name:"Progress", topic:"The Power of Progress", vocab:["survival50"], grammar:["PAST_SIMP","PAST_CONT"], future:"FUT_CONT", level:"A2" },
    18:{ name:"Taking Action", topic:"Why Taking Action Can Change Your Life", vocab:["survival50"], grammar:["PAST_SIMP","MOD_MUST"], future:"COND_1", level:"A2" },
    19:{ name:"Discipline", topic:"Why Discipline Beats Motivation", vocab:["survival50"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2" },
    20:{ name:"Motivation", topic:"Where Real Motivation Comes From", vocab:["survival50"], grammar:["PRES_CONT","PRES_PERF"], future:"WILL_VS_GOING", level:"A2" },
    21:{ name:"Focus", topic:"The Power of Deep Focus", vocab:["survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"FUT_WILL", level:"A2" },
    22:{ name:"Procrastination", topic:"Why We Procrastinate", vocab:["survival50"], grammar:["PS_3RD_S","PRES_CONT"], future:"COND_2", level:"A2" },
    23:{ name:"Gratitude", topic:"Why Gratitude Changes Everything", vocab:["survival50"], grammar:["PRON_PER_POSS","PRES_PERF"], future:"COND_0", level:"A2" },
    24:{ name:"Happiness", topic:"How to Find Real Happiness", vocab:["survival50"], grammar:["PS_3RD_S","PAST_SIMP"], future:"COND_1", level:"A2" },
    25:{ name:"Stress", topic:"How to Handle Stress", vocab:["survival50"], grammar:["PRES_CONT","MOD_MIGHT"], future:"WILL_VS_GOING", level:"A2" },
    26:{ name:"Good Habits", topic:"Why Building Good Habits Leads to Success", vocab:["survival50"], grammar:["PS_3RD_S","ART_DET"], future:"COND_0", level:"A1" },
    27:{ name:"Bad Habits", topic:"The Money Habits That Keep You Poor", vocab:["survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_1", level:"A1" },
    28:{ name:"Morning Routine", topic:"The Power of a Morning Routine", vocab:["survival50"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1" },
    29:{ name:"Goals", topic:"The Power of Setting Goals", vocab:["survival50"], grammar:["FUT_WILL","FUT_GOING"], future:"COND_1", level:"A2" },
    30:{ name:"Planning", topic:"Why Planning Saves Your Future", vocab:["survival50"], grammar:["WILL_VS_GOING","CONN_LOGIC"], future:"FUT_CONT", level:"A2" },
    31:{ name:"Time Management", topic:"How to Manage Your Time", vocab:["survival50"], grammar:["PREP_IN_ON_AT","THERE_QUANT"], future:"COND_2", level:"A1" },
    32:{ name:"Health", topic:"Why Health Is Real Wealth", vocab:["survival50"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_1", level:"A1" },
    33:{ name:"Sleep", topic:"The Power of Good Sleep", vocab:["survival50"], grammar:["PS_3RD_S","PAST_SIMP"], future:"WILL_VS_GOING", level:"A1" },
    34:{ name:"Healthy Food", topic:"How Food Affects Your Energy", vocab:["survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_0", level:"A1" },
    35:{ name:"Fitness", topic:"Why Small Exercise Changes Your Life", vocab:["survival50"], grammar:["PRES_CONT","PRES_PERF_CONT"], future:"FUT_GOING", level:"A2" },
    36:{ name:"Learning", topic:"Learn More, Earn More", vocab:["survival50"], grammar:["PRES_PERF","RELATIVE"], future:"FUT_PERF", level:"B1" },
    37:{ name:"Reading", topic:"Why Reading Makes You Richer", vocab:["survival50"], grammar:["PS_3RD_S","PASS_BASIC"], future:"COND_2", level:"B1" },
    38:{ name:"Consistency", topic:"Why Consistency Beats Talent", vocab:["survival50"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_0", level:"A2" },
    39:{ name:"Patience", topic:"The Power of Patience", vocab:["survival50"], grammar:["PS_3RD_S","PAST_PERF"], future:"FUT_CONT", level:"B1" },
    40:{ name:"Kindness", topic:"Why Kindness Is Strength", vocab:["survival50"], grammar:["PRON_PER_POSS","MOD_CAN"], future:"COND_1", level:"A1" },
    41:{ name:"Family", topic:"My Family Is My Strength", vocab:["survival50"], grammar:["PRON_PER_POSS","THERE_QUANT"], future:"COND_2", level:"A1" },
    42:{ name:"Grandmother", topic:"My Grandmother Is My Inspiration", vocab:["survival50"], grammar:["USED_TO","PAST_CONT"], future:"COND_2", level:"B1" },
    43:{ name:"Friends", topic:"How Real Friends Help You Grow", vocab:["survival50"], grammar:["PS_3RD_S","RELATIVE"], future:"COND_1", level:"A2" },
    44:{ name:"Love", topic:"Why Love Makes Us Stronger", vocab:["survival50"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_3", level:"B1" },
    45:{ name:"Respect", topic:"Why Respect Is Everything", vocab:["survival50"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2" },
    46:{ name:"Honesty", topic:"Why Honesty Builds Trust", vocab:["survival50"], grammar:["PS_3RD_S","REPORTED"], future:"COND_1", level:"B1" },
    47:{ name:"Responsibility", topic:"The Power of Responsibility", vocab:["survival50"], grammar:["THERE_QUANT","PASS_BASIC"], future:"FUT_PERF", level:"A1" },
    48:{ name:"Delivery Life", topic:"My Life Delivering Food", vocab:["survival50"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1" },
    49:{ name:"Alignment", topic:"Why Alignment Creates Success", vocab:["survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"B1" },
    50:{ name:"Willpower", topic:"The Power of Willpower", vocab:["survival50"], grammar:["FUT_WILL","FUT_CONT"], future:"FUT_PERF", level:"B2" }
  },
  generate(areaId, level, metrics){
    const area = this.AREAS[areaId];
    if(!area) return { prompt:"Elige area", story:"Elige area", meta:{ area:"?", topic:"?", level, grammar_main:{id:"?",formula:"?",example:"?"}, grammar_future:{id:"?",formula:"?",example:"?"}, vocab:[], emotion:"FOUNDATION", intention: INTENTION_MOTOR.FOUNDATION, joints: INTENTION_MOTOR.FOUNDATION.joints, xp:0 } };
    const gMain = GRAMMAR_REAL[area.grammar[0]] || Object.values(GRAMMAR_REAL)[0];
    const gFuture = GRAMMAR_REAL[area.future] || GRAMMAR_REAL.COND_1;
    const avatarData = AVATAR_ENGINE_HOLO.decideByMetrics({...metrics, cefr_level: level});
    const xp = metrics?.same_error_count>=3?0:(level==="A1"?10:level==="A2"?15:20);
    const story = `Hello ${area.topic}. V34.1 PUZZLE PERFECTO X-CLAMP 0.1976`;
    return { prompt: level+" - "+area.topic, story, meta: { area: area.name, topic: area.topic, level, grammar_main: gMain, grammar_future: gFuture, vocab: [], emotion: avatarData.emotion, intention: avatarData.intention, joints: avatarData.joints, avatar_type:"V34.1_PUZZLE_XCLAMP_0.1976", avatar_frame:0, xp } };
  }
};

export const LAYA_FINAL_COMPLETO = LAYA_FINAL;