// LAYA_FINAL_COMPLETO.js - V16 UNIFICADO FINAL - TODO + MARIONETA + INTENCIONES INGENIERA + WANDERER
// BASE: Tu V15 HOLO-16 que acabas de enviar INTACTO al 100% + Actualizaciones V16
// NO SE BORRA NADA. Solo se añade y se actualiza AVATAR_ENGINE
// Autor: YARVIS + Laia - Girona
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
export const VOCAB_REAL = { kitchen50: ["cook","kitchen","knead","knife","plate","fork","oven","fry","boil","chop","blend","bake","stir","taste","recipe","ingredient","spice","salt","pepper","pan","pot","sauce","dish","meal","breakfast","lunch","dinner","hungry","delicious","Cook/Cocinar","Bake/Hornear","Boil/Hervir","Fry/Freir"], move16: ["run","walk","jump","move","travel","go","come","arrive","leave","return","PUSH/Empujar","PULL/Tirar","LIFT/Levantar","DROP/Soltar","THROW/Lanzar","CATCH/Atrapar","JUMP/Saltar","ROLL/Rodar","SLIDE/Deslizar","CLIMB/Trepar","FALL/Caer","FLOAT/Flotar"], collHaveTake: ["have a shower","have breakfast","have a break","take a break","take notes","have fun","take care","have a look","have a dream","take a chance","Have a drink/rest/shower/dream/look/idea/bath/party/chat/break","Take a break/look/chance/photo/risk/seat/shower/note/bus/time","Do work/dishes/yoga/homework/best/research/exercise"], verbPrep40: ["talk ABOUT","work DURING","walk AROUND","fight AGAINST","look AFTER","sit UNDER","arrive BEFORE","choose BETWEEN","believe IN","depend ON","think ABOUT","wait FOR","look FOR","care ABOUT","agree WITH","apologize FOR","pay FOR","listen TO","arrive AT/IN"], sinceForUntil: ["since 2020","for 3 years","until tomorrow","since Monday","for a while","since yesterday","for a long time","until now","since Monday/2010/morning/yesterday/we met/I was a child","during the meeting/summer/war/night/class","while I was cooking","2 days ago","already done, not yet finished, just finished, ever/never"], adjPerson: ["Kind/Rude/Smart/Funny/Honest/Lazy/Brave/Generous/Shy/Confident","confident","happy","kind","brave","honest","loyal","hardworking","generous"], adjEmotion: ["Happy/Sad/Angry/Excited/Scared/Nervous/Proud/Jealous/Worried/Grateful","anxious","excited","grateful","frustrated","motivated","overwhelmed","proud","stressed","inspired"], adjObject: ["New/Old/Big/Cheap/Useful/Expensive/Modern/Empty/Heavy/Light/Sharp/Soft/Dangerous/Safe","expensive","cheap","useful","useless","modern","ancient","broken","valuable"], survival50: ["I have a question","Can you help me?","I don't understand","What does it mean?","Can you explain?","Let me think","I'm not sure","I agree/disagree","I'm ready/not ready","In my opinion","money","save","spend","invest","earn","bank","debt","rich","poor","budget","salary","income","expense","profit","loss","cost","price","value","wealth","cash","coin","loan","credit","interest","account","wallet","pay","buy","sell","trade","market","business","company","client","boss","job","work","career","success","failure","risk","opportunity","goal","plan","habit","discipline","freedom","future","life"], conectores40: ["Moreover","Furthermore","However","Therefore","For example","For instance","Finally","In contrast","Meanwhile","Nevertheless","Instead","Although","Because","Since","So","Then","After that","First of all","Secondly","On the other hand","In fact","Actually","Basically","Essentially","In addition","As a result","Thus","Hence","Furthermore","Besides","Otherwise"], silentLetters: ["knife/knee/know/knock","doubt/debt/bomb/climb","gnome/sign/design/foreign","honest/hour/honor","castle/listen/often/fasten","write/wrong/wrist/wrap","should/walk/palm/calm","island/salmon","receipt/psychology","lamb/comb/tomb","know","knee","knock","write","wrong","hour","honest","island","debt","psychology"], phrasalVerbs50: ["turn on/off, put on/off, get up, wake up, go out, come back, look for, look after, give up, find out, carry on, turn up, bring up, call off, break down, run out of, take off, set up, grow up, deal with, look forward to, get along with, put up with, run into","give up","keep up","set up","save up","pay off","cut down","turn down","bring up","grow up","wake up","look up","find out","figure out","work out"], business: ["budget/profit/loss/investment/meeting/deadline/target/growth/risk/loan/debt/salary/income/expense/saving/bank","confidence","consistency","commitment","company","cold call","contract","client","co-founder","corporate","commerce","collaboration","communication","competition"], idioms: ["over the moon, under the weather, piece of cake, break a leg, costs an arm and a leg, hit the books, once in a blue moon","break the ice","hit the books","piece of cake","cost an arm and a leg","under the weather","once in a blue moon","kill two birds","let the cat out","break a leg","so far so good"], pronPoss: ["I/me/my/mine/myself","you/your/yours/yourself","he/him/his/himself","she/her/hers/herself","we/us/our/ours/ourselves","they/them/their/theirs/themselves","this/that/these/those","someone/anyone/everyone/no one"], prepTime: ["in the morning","on Monday","at night","in 2024","on 15th May","at 8pm","in December","at the weekend","on time","in time","at the moment","on holiday","in summer","at Christmas","on my birthday"], quantifiers: ["a lot of","many","much","some","any","a few","a little","no","all","both","each","every","either","neither","several","enough","too much","too many"], superDicSyllables: { co: ["cook","confidence","consistency","cold","contract","co-founder","commitment","company","cost","cold call","come up"], kne: ["knead","knee","kneel","knife","know","knock"], hap: ["happy","happiness","happily","happen","happening","perhaps"], hav: ["have a shower","have breakfast","have fun","have a break","have to","have a look","have an idea","have a dream"], tak: ["take a break","take notes","take care","take off","take action","take a chance"], sav: ["save","saving","savings","save up","saver"], mon: ["money","month","Monday","morning","Moreover","moment"], fai: ["fail","failure","failing","fair","faith","faithful"], wor: ["work","worry","work out","world","word","worth","work during"], tim: ["time","timing","time management","sometimes","meantime","Meanwhile"], kno: ["know","knowledge","known","knows","knew"], wri: ["write","wrong","wrist","wrap","writing"] } };

// ============== NUEVO V16: MARIONETA 34 BONES - ARTICULACIONES INDEPENDIENTES ==============
export const MARIONETTE_JOINTS = {
  Head_Bone: { id: 'Head_Bone', axes: 'XYZ', range: [-35,35], independent: true, child: ['Eye_L','Eye_R','Mouth'] },
  Spine_02: { id: 'Spine_02-Chest', axes: 'Y', range: [-20,20], physics: 'breathing', independent: true },
  Spine_03: { id: 'Spine_03-Neck', axes: 'XYZ', independent: true },
  Shoulder_L: { id: 'Shoulder.L', ik_chain: true, parent: 'Spine_02', independent: true },
  Elbow_L: { id: 'Elbow.L', ik: 'Shoulder.L->Wrist.L', independent: true },
  Wrist_L: { id: 'Wrist.L', actions: ['point','open_palm','fist','wave','open_big','open_palm_down'], independent: true },
  Shoulder_R: { id: 'Shoulder.R', ik_chain: true, parent: 'Spine_02', independent: true },
  Elbow_R: { id: 'Elbow.R', independent: true },
  Wrist_R: { id: 'Wrist.R', actions: ['point','open_palm','clipboard','wave','open_big'], independent: true },
  Hip_L: { id: 'Hip.L', independent: true }, Knee_L: { id: 'Knee.L', independent: true }, Ankle_L: { id: 'Ankle.L', independent: true },
  Hip_R: { id: 'Hip.R', independent: true }, Knee_R: { id: 'Knee.R', independent: true }, Ankle_R: { id: 'Ankle.R', independent: true },
  Eye_L: { id: 'Eye_L', points: 8, actions: ['blink','gaze','squint','tracking'], independent: true },
  Eye_R: { id: 'Eye_R', points: 8, actions: ['blink','gaze','squint','tracking'], independent: true },
  Mouth: { id: 'Mouth', visemes: 6, list: ['CLOSED','AH','AA','O','E-I','M-B-P'], actions: ['lip_sync','smile_closed','smile_open'], independent: true },
  Hair_Bob: { id: 'Hair_Bob', physics: 'spring', independent: true }
};

// ============== NUEVO V16: MOTOR DE INTENCIONES DE INGENIERA - 6 INTENCIONES REALES ==============
export const INTENTION_MOTOR = {
  FOUNDATION: { id: 'FOUNDATION', name: 'Cimiento', desc: 'Primero el cimiento, tete. Sin esto no hay edificio.', joints: { Head_Bone: [-5,10,0], Spine_02: -15, Wrist_L: 'open_palm_down', Wrist_R: 'open_palm_down' }, tts: 'Primero el cimiento, tete. Sin esto no hay edificio.', sap_type: 'FOUNDATION', color: '#60a5fa' },
  SCAFFOLDING: { id: 'SCAFFOLDING', name: 'Andamiaje', desc: 'Monta piezas, formula + example', joints: { Shoulder_L: [45,30,0], Shoulder_R: [-45,-30,0], Wrist_L: 'point', Wrist_R: 'point', Eye_L: 'tracking' }, tts: 'Mira, esta pieza encaja con esta otra.', sap_type: 'GRAMMAR', color: '#00d4ff' },
  STRICT_ENGINEER: { id: 'STRICT_ENGINEER', name: 'Ingeniera Estricta', desc: 'Quirúrgica, fuga detectada', joints: { Shoulder_L: [40,0,0], Shoulder_R: [-40,0,0], Elbow_L: 'crossed', Elbow_R: 'crossed', Head_Bone: [-10,10,0], Eye_L: 'squint_0.8' }, tts: 'Ojo tete, trampa hispana. Fuga detectada. Es HAS, no have.', sap_type: 'ERR', color: '#f59e0b' },
  FLOW_OBSERVER: { id: 'FLOW_OBSERVER', name: 'Observadora Flow', desc: 'Te observo en flow, no interrumpe', joints: { Shoulder_L: [0,0,0], Spine_02: 0, Head_Bone: { gaze: 'tracking' }, Mouth: 'smile_closed' }, tts: 'Te observo, vas en flow.', sap_type: 'FLOW', color: '#8b5cf6' },
  ELEVATION: { id: 'ELEVATION', name: 'Elevación', desc: 'Subiste un piso del edificio', joints: { Shoulder_L: [0,120,0], Shoulder_R: [0,120,0], Spine_02: 15, Hip_R: 'jump', Wrist_L: 'wave', Mouth: 'AA' }, tts: 'BOOM! Lo clavaste! Subiste un piso entero.', sap_type: 'XP', color: '#22c55e' },
  TRANSMISSION: { id: 'TRANSMISSION', name: 'Transmisión por Capas', desc: 'Capa completa, escupe SAP', joints: { Shoulder_L: [-30,30,0], Shoulder_R: [30,-30,0], Wrist_L: 'open_big', Wrist_R: 'open_big', Mouth: 'lip_sync' }, tts: 'Esto ya es una capa completa. Ya es tuya. Mira todos estos datos SAP!', sap_type: 'TRANSMIT', color: '#00d4ff' }
};

// ============== AVATAR ENGINE V16 - TU V15 ACTUALIZADO SIN ROMPER FRAME MAP ==============
export const AVATAR_ENGINE_HOLO = {
  sprite: "./laia_HOLO_CLEAN_16.png",
  totalFrames: 16,
  frameMap: {
    strict: 0, point_left: 1, explain_open: 2, crossed_arms: 3,
    celebratory: 4, strict2: 5, point_glow: 6, explain2: 7,
    crossed_clip: 8, open_big: 9, strict3: 10, point3: 11,
    explain3: 12, crossed2: 13, open2: 14, strict4: 15
  },
  emotions: {
    HOLO_STRICT: { frame: 0, name: "STRICT", color: "#00d4ff", tts: "Ojo tete, trampa hispana. Es HAS, no have. Frame 0.", anim: "strict", intention: INTENTION_MOTOR.STRICT_ENGINEER },
    HOLO_CELEB: { frame: 4, name: "CELEBRATORY", color: "#22c55e", tts: "Boom! Lo clavaste! +50 XP Frame 4", anim: "celebratory", intention: INTENTION_MOTOR.ELEVATION },
    HOLO_EXPLAIN: { frame: 2, name: "EXPLAIN", color: "#00d4ff", tts: "Te explico paso a paso. Frame 2", anim: "explain", intention: INTENTION_MOTOR.SCAFFOLDING },
    HOLO_CROSSED: { frame: 3, name: "CROSSED", color: "#00d4ff", tts: "Te observo. Frame 3", anim: "crossed", intention: INTENTION_MOTOR.FLOW_OBSERVER },
    HOLO_CLIP: { frame: 8, name: "CLIPBOARD", color: "#00d4ff", tts: "Tengo tu SAP, voy a escupir datos como pins. Frame 8", anim: "clipboard", intention: INTENTION_MOTOR.TRANSMISSION },
    HOLO_OPEN: { frame: 9, name: "OPEN_BIG", color: "#22c55e", tts: "Mira todos estos datos SAP! Frame 9", anim: "open", intention: INTENTION_MOTOR.TRANSMISSION },
    HOLO_FOUNDATION: { frame: 2, name: "FOUNDATION", color: "#60a5fa", tts: "Primero el cimiento, tete.", anim: "foundation", intention: INTENTION_MOTOR.FOUNDATION }
  },
  decideByMetrics(m){
    let result;
    if(m.same_error_count >= 3) result = { frame: 0, key: "HOLO_STRICT", emotion: "STRICT_ENGINEER", tts: "Tete, 3 veces lo mismo! Frame 0. 0 XP. Fuga en cimiento.", data: this.emotions.HOLO_STRICT, intention: INTENTION_MOTOR.STRICT_ENGINEER };
    else if(m.same_error_count === 2) result = { frame: 10, key: "HOLO_STRICT", emotion: "STRICT_ENGINEER", tts: "Ojo, vuelve al foco. Frame 10. Andamiaje suelto.", data: this.emotions.HOLO_STRICT, intention: INTENTION_MOTOR.STRICT_ENGINEER };
    else if(m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) result = { frame: 4, key: "HOLO_CELEB", emotion: "ELEVATION", tts: "Boom! Frame 4 celebrando. Piso subido.", data: this.emotions.HOLO_CELEB, intention: INTENTION_MOTOR.ELEVATION };
    else if(m.cefr_level==="B1" && m.flow_mode) result = { frame: 3, key: "HOLO_CROSSED", emotion: "FLOW_OBSERVER", tts: "Te observo, vas en flow. Frame 3", data: this.emotions.HOLO_CROSSED, intention: INTENTION_MOTOR.FLOW_OBSERVER };
    else if(m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) result = { frame: 2, key: "HOLO_EXPLAIN", emotion: "SCAFFOLDING", tts: "Respira, vamos juntos. Frame 2. Te monto el andamiaje.", data: this.emotions.HOLO_EXPLAIN, intention: INTENTION_MOTOR.SCAFFOLDING };
    else if(m.is_new_area) result = { frame: 2, key: "HOLO_EXPLAIN", emotion: "FOUNDATION", tts: "Nuevo cimiento, vamos a construir.", data: this.emotions.HOLO_FOUNDATION, intention: INTENTION_MOTOR.FOUNDATION };
    else result = { frame: 9, key: "HOLO_OPEN", emotion: "TRANSMISSION", tts: "Vamos tete, tu puedes. Frame 9 - Transmisión.", data: this.emotions.HOLO_OPEN, intention: INTENTION_MOTOR.TRANSMISSION };
    result.joints = result.intention.joints;
    result.pose = result.intention;
    return result;
  },
  focusFrame(index){ return Math.max(0, Math.min(15, index)); },
  getFrameByName(name){ return this.frameMap[name]?? 0; }
};
export const AVATAR_ENGINE_V6 = AVATAR_ENGINE_HOLO;
export const AVATAR_ENGINE_V7_MARIONETTE = AVATAR_ENGINE_HOLO;
export const EMOTION_ENGINE = AVATAR_ENGINE_HOLO;

export const LAYA_FINAL = {
  version: "16 V16 UNIFICADO FINAL - TODO INTACTO + MARIONETA 34 BONES + 6 INTENCIONES INGENIERA + WANDERER",
  VOCAB: VOCAB_REAL,
  GRAMMAR: GRAMMAR_REAL,
  AVATAR: AVATAR_ENGINE_HOLO,
  INTENTIONS: INTENTION_MOTOR,
  JOINTS: MARIONETTE_JOINTS,
  AREAS: {
    1: { name:"Money Basics", topic:"Why Most People Never Become Rich", vocab:["collHaveTake","survival50","pronPoss"], grammar:["PS_3RD_S","COND_1"], future:"COND_1", level:"A1", baseFrame:2 },
    2: { name:"Saving", topic:"The Power of Saving Small", vocab:["survival50","quantifiers","sinceForUntil"], grammar:["THERE_QUANT","PRES_PERF"], future:"FUT_GOING", level:"A1", baseFrame:2 },
    3: { name:"Smart Spending", topic:"Smart Spending Habits", vocab:["adjObject","survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"WILL_VS_GOING", level:"A1", baseFrame:2 },
    4: { name:"Investing", topic:"How Investing Builds Freedom", vocab:["conectores40","business"], grammar:["FUT_WILL","COND_1"], future:"FUT_PERF", level:"A2", baseFrame:4 },
    5: { name:"Work", topic:"Why Hard Work Matters", vocab:["move16","survival50"], grammar:["PAST_SIMP","PAST_CONT"], future:"COND_2", level:"A2", baseFrame:0 },
    6: { name:"Career", topic:"How to Grow in Your Career", vocab:["survival50","business","verbPrep40"], grammar:["PRES_PERF","PAST_PERF"], future:"FUT_CONT", level:"B1", baseFrame:2 },
    7: { name:"Opportunity", topic:"Why English Is The Language of Opportunity", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","MOD_CAN"], future:"COND_1", level:"A2", baseFrame:4 },
    8: { name:"Business", topic:"How Small Business Starts", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"FUT_GOING", level:"A2", baseFrame:2 },
    9: { name:"Time Is Money", topic:"Why Time Is More Valuable Than Money", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","PRES_PERF"], future:"FUT_PERF", level:"A1", baseFrame:2 },
    10:{ name:"Rich vs Poor Mind", topic:"How Rich People Think Different", vocab:["adjPerson","conectores40"], grammar:["PS_3RD_S","COMP_SUP"], future:"COND_2", level:"A2", baseFrame:10 },
    11:{ name:"Positive Mindset", topic:"Why a Positive Mindset Helps Overcome Challenges", vocab:["adjEmotion","conectores40"], grammar:["PAST_SIMP","PRES_PERF"], future:"COND_0", level:"A2", baseFrame:2 },
    12:{ name:"Growth Mindset", topic:"The Power of Growth Mindset", vocab:["adjPerson","survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"A2", baseFrame:4 },
    13:{ name:"Confidence", topic:"How to Build Real Confidence", vocab:["survival50","adjPerson","pronPoss"], grammar:["MOD_CAN","MOD_MUST"], future:"FUT_WILL", level:"A2", baseFrame:4 },
    14:{ name:"Fear", topic:"Why Fear Stops Most People", vocab:["adjEmotion","survival50"], grammar:["MOD_CAN","PRES_PERF"], future:"COND_2", level:"A2", baseFrame:2 },
    15:{ name:"Failure", topic:"Why Failure Is Your Best Teacher", vocab:["conectores40","survival50"], grammar:["PRES_PERF","PAST_PERF"], future:"COND_3", level:"B1", baseFrame:4 },
    16:{ name:"Success", topic:"What Success Really Means", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","PRES_CONT"], future:"FUT_PERF", level:"A2", baseFrame:4 },
    17:{ name:"Progress", topic:"The Power of Progress", vocab:["move16","prepTime"], grammar:["PAST_SIMP","PAST_CONT"], future:"FUT_CONT", level:"A2", baseFrame:2 },
    18:{ name:"Taking Action", topic:"Why Taking Action Can Change Your Life", vocab:["move16","phrasalVerbs50"], grammar:["PAST_SIMP","MOD_MUST"], future:"COND_1", level:"A2", baseFrame:0 },
    19:{ name:"Discipline", topic:"Why Discipline Beats Motivation", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2", baseFrame:0 },
    20:{ name:"Motivation", topic:"Where Real Motivation Comes From", vocab:["survival50","adjEmotion"], grammar:["PRES_CONT","PRES_PERF"], future:"WILL_VS_GOING", level:"A2", baseFrame:4 },
    21:{ name:"Focus", topic:"The Power of Deep Focus", vocab:["conectores40","business"], grammar:["PS_3RD_S","GERUND_INF"], future:"FUT_WILL", level:"A2", baseFrame:2 },
    22:{ name:"Procrastination", topic:"Why We Procrastinate", vocab:["sinceForUntil","prepTime"], grammar:["PS_3RD_S","PRES_CONT"], future:"COND_2", level:"A2", baseFrame:2 },
    23:{ name:"Gratitude", topic:"Why Gratitude Changes Everything", vocab:["adjEmotion","pronPoss"], grammar:["PRON_PER_POSS","PRES_PERF"], future:"COND_0", level:"A2", baseFrame:4 },
    24:{ name:"Happiness", topic:"How to Find Real Happiness", vocab:["adjEmotion","conectores40"], grammar:["PS_3RD_S","PAST_SIMP"], future:"COND_1", level:"A2", baseFrame:2 },
    25:{ name:"Stress", topic:"How to Handle Stress", vocab:["adjEmotion","verbPrep40"], grammar:["PRES_CONT","MOD_MIGHT"], future:"WILL_VS_GOING", level:"A2", baseFrame:2 },
    26:{ name:"Good Habits", topic:"Why Building Good Habits Leads to Success", vocab:["kitchen50","collHaveTake"], grammar:["PS_3RD_S","ART_DET"], future:"COND_0", level:"A1", baseFrame:2 },
    27:{ name:"Bad Habits", topic:"The Money Habits That Keep You Poor", vocab:["collHaveTake","survival50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_1", level:"A1", baseFrame:10 },
    28:{ name:"Morning Routine", topic:"The Power of a Morning Routine", vocab:["sinceForUntil","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1", baseFrame:4 },
    29:{ name:"Goals", topic:"The Power of Setting Goals", vocab:["survival50","business"], grammar:["FUT_WILL","FUT_GOING"], future:"COND_1", level:"A2", baseFrame:4 },
    30:{ name:"Planning", topic:"Why Planning Saves Your Future", vocab:["conectores40","business"], grammar:["WILL_VS_GOING","CONN_LOGIC"], future:"FUT_CONT", level:"A2", baseFrame:2 },
    31:{ name:"Time Management", topic:"How to Manage Your Time", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","THERE_QUANT"], future:"COND_2", level:"A1", baseFrame:0 },
    32:{ name:"Health", topic:"Why Health Is Real Wealth", vocab:["adjPerson","move16"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_1", level:"A1", baseFrame:2 },
    33:{ name:"Sleep", topic:"The Power of Good Sleep", vocab:["move16","prepTime"], grammar:["PS_3RD_S","PAST_SIMP"], future:"WILL_VS_GOING", level:"A1", baseFrame:2 },
    34:{ name:"Healthy Food", topic:"How Food Affects Your Energy", vocab:["kitchen50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_0", level:"A1", baseFrame:2 },
    35:{ name:"Fitness", topic:"Why Small Exercise Changes Your Life", vocab:["move16","adjEmotion"], grammar:["PRES_CONT","PRES_PERF_CONT"], future:"FUT_GOING", level:"A2", baseFrame:4 },
    36:{ name:"Learning", topic:"Learn More, Earn More", vocab:["survival50","verbPrep40"], grammar:["PRES_PERF","RELATIVE"], future:"FUT_PERF", level:"B1", baseFrame:4 },
    37:{ name:"Reading", topic:"Why Reading Makes You Richer", vocab:["conectores40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"COND_2", level:"B1", baseFrame:2 },
    38:{ name:"Consistency", topic:"Why Consistency Beats Talent", vocab:["verbPrep40","conectores40"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_0", level:"A2", baseFrame:0 },
    39:{ name:"Patience", topic:"The Power of Patience", vocab:["adjPerson","sinceForUntil"], grammar:["PS_3RD_S","PAST_PERF"], future:"FUT_CONT", level:"B1", baseFrame:2 },
    40:{ name:"Kindness", topic:"Why Kindness Is Strength", vocab:["adjPerson","pronPoss"], grammar:["PRON_PER_POSS","MOD_CAN"], future:"COND_1", level:"A1", baseFrame:4 },
    41:{ name:"Family", topic:"My Family Is My Strength", vocab:["survival50","pronPoss","adjPerson"], grammar:["PRON_PER_POSS","THERE_QUANT"], future:"COND_2", level:"A1", baseFrame:2 },
    42:{ name:"Grandmother", topic:"My Grandmother Is My Inspiration", vocab:["adjPerson","pronPoss","sinceForUntil"], grammar:["USED_TO","PAST_CONT"], future:"COND_2", level:"B1", baseFrame:2 },
    43:{ name:"Friends", topic:"How Real Friends Help You Grow", vocab:["adjPerson","pronPoss"], grammar:["PS_3RD_S","RELATIVE"], future:"COND_1", level:"A2", baseFrame:2 },
    44:{ name:"Love", topic:"Why Love Makes Us Stronger", vocab:["adjEmotion","pronPoss"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_3", level:"B1", baseFrame:2 },
    45:{ name:"Respect", topic:"Why Respect Is Everything", vocab:["verbPrep40","adjPerson"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2", baseFrame:10 },
    46:{ name:"Honesty", topic:"Why Honesty Builds Trust", vocab:["adjPerson","business"], grammar:["PS_3RD_S","REPORTED"], future:"COND_1", level:"B1", baseFrame:2 },
    47:{ name:"Responsibility", topic:"The Power of Responsibility", vocab:["verbPrep40","quantifiers","pronPoss"], grammar:["THERE_QUANT","PASS_BASIC"], future:"FUT_PERF", level:"A1", baseFrame:0 },
    48:{ name:"Delivery Life", topic:"My Life Delivering Food", vocab:["move16","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1", baseFrame:2 },
    49:{ name:"Alignment", topic:"Why Alignment Creates Success", vocab:["conectores40","business","quantifiers"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"B1", baseFrame:4 },
    50:{ name:"Willpower", topic:"The Power of Willpower", vocab:["move16","adjEmotion","conectores40"], grammar:["FUT_WILL","FUT_CONT"], future:"FUT_PERF", level:"B2", baseFrame:4 }
  },
  SUPER_DIC: {
    search(syllable){
      const s = syllable.toLowerCase();
      const dic = VOCAB_REAL.superDicSyllables;
      for(const key in dic){ if(key.includes(s) || s.includes(key)) return dic[key]; }
      const all = Object.values(VOCAB_REAL).flat().filter(v=>typeof v==="string");
      return all.filter(w=>w.toLowerCase().includes(s)).slice(0,8);
    }
  },
  MEMORY: {
    get(){ try{ return JSON.parse(localStorage.getItem("LAYA_MEMORY_V9")||"{}"); }catch{ return {}; } },
    save(m){ localStorage.setItem("LAYA_MEMORY_V9", JSON.stringify(m)); },
    update(sig, ok, hes){
      const mem = this.get();
      if(!mem[sig]) mem[sig]={ errors:0, oks:0, hes:[] };
      if(ok){ mem[sig].oks++; mem[sig].errors=Math.max(0, mem[sig].errors-1); } else { mem[sig].errors++; }
      mem[sig].hes.push(hes); if(mem[sig].hes.length>10) mem[sig].hes.shift();
      this.save(mem); return mem;
    }
  },
  STORIES: {
    "Money Basics": "Hello everyone. Today I want to talk about why most people never become rich. I have a friend. His name is Carlos. He works hard every day. He has a good salary. But he has a problem. There is a lot of money in his account on Monday, but on Friday there is no money. Why? Because he spends all his money. He buys expensive things. If you want to be rich, you must save money. My grandmother always said: save a little every day. Since 2020 I have saved money. For three years I have saved a lot. I used to spend everything. Now I save. My dream is big. This is my money, not yours. I did it myself. Remember: money is made by discipline. Quote: Wealth is a habit. Thank you.",
    "Saving": "Hello everyone. Today I want to talk about the power of saving small. There is a lot of money in small savings. There are many ways to save. I have never saved before, but now I do. Since 2020 I have saved for my family. For a long time I saved a little. I work on Monday at 8am in December. If you save now, you will be rich later. However, you must be consistent. My family is my strength. This is my dream. Thank you.",
    "default": "Hello everyone. Today I want to talk about {topic}. There is a lot to learn. Since Monday I have been thinking about this. For a long time I did not understand. I have a question. Can you help me? I used to make many mistakes. I have a dream. This is my book, not yours. I did it myself. My family is my strength. I work on Monday at 8am in December in Salou. There is a lot of {vocab} in my life. If you {verb}, you will be rich later. However, you must work hard. Therefore, you will succeed. For example, my grandmother taught me discipline. She used to save money. Now I save too. Quote: Wealth is a mindset. Thank you."
  },
  generate(areaId, level, metrics){
    const area = this.AREAS[areaId];
    if(!area) return { prompt:"Elige area primero tete!", story:"Elige area primero tete!", meta:{ area:"?", topic:"?", level, grammar_main:{id:"?",formula:"?",example:"?"}, grammar_future:{id:"?",formula:"?",example:"?"}, vocab:[], emotion:"FOUNDATION", intention: INTENTION_MOTOR.FOUNDATION, joints: INTENTION_MOTOR.FOUNDATION.joints, avatar_file:"./laia_HOLO_CLEAN_16.png", avatar_frame:2, xp:0, bloqueado:false } };
    const gMain = GRAMMAR_REAL[area.grammar[0]] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.grammar[0]) || Object.values(GRAMMAR_REAL)[0];
    const gSecond = area.grammar[1]? (GRAMMAR_REAL[area.grammar[1]] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.grammar[1])) : null;
    const gFuture = GRAMMAR_REAL[area.future] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.future) || GRAMMAR_REAL.COND_1;
    const vocabList = area.vocab.map(v=>{ const val=VOCAB_REAL[v]; if(!val) return []; return Array.isArray(val)?val:Object.values(val).flat(); }).flat().slice(0,10);
    const avatarData = AVATAR_ENGINE_HOLO.decideByMetrics({...metrics, cefr_level: level});
    const bloqueado = metrics.same_error_count >=3;
    const xp = bloqueado? 0 : (level==="A1"?10:level==="A2"?15:level==="B1"?20:25);
    const wordCount = {A1:"130-160", A2:"150-180", B1:"160-190", B2:"180-220"}[level] || "150-180";
    let baseStory = this.STORIES[area.name] || this.STORIES["default"];
    baseStory = baseStory.replace("{topic}", area.topic.toLowerCase()).replace("{vocab}", vocabList[0] || "money").replace("{verb}", "save");
    let extra = "";
    if(baseStory.indexOf("Since")==-1 && baseStory.indexOf("since")==-1) extra += " Since 2020 I have worked hard. ";
    if(baseStory.indexOf("There is")==-1) extra += " There is a lot of opportunity. There are many ways. ";
    if(baseStory.indexOf("If you")==-1) extra += " If you save now, you will be rich later. ";
    const story = (baseStory + extra).trim();
    const prompt = "Level " + level + " - Topic: " + area.topic + " AREA " + areaId + ": " + area.name + " Story: " + story + " XP: " + xp + " HOLO_FRAME: " + avatarData.frame + " INTENTION: " + avatarData.emotion;
    return {
      prompt: prompt,
      story: story,
      meta: { area: area.name, topic: area.topic, level, grammar_main: gMain, grammar_second: gSecond, grammar_future: gFuture, vocab: vocabList, emotion: avatarData.emotion, intention: avatarData.intention, joints: avatarData.joints, avatar_file:"./laia_HOLO_CLEAN_16.png", avatar_frame: avatarData.frame, avatar_key: avatarData.key, xp, bloqueado, mistake_prevention: gMain.mistake, wordCount, superDic: VOCAB_REAL.superDicSyllables, holo: avatarData },
      quizAuto: { tense_choice: gMain.example, conditional: gFuture.example, mistake_fix: gMain.mistake, blocked: bloqueado },
      avatarState: avatarData.data,
      pose: avatarData.intention
    };
  }
};
export const LAYA_FINAL_COMPLETO = LAYA_FINAL;

// ============== LAYA_SAP V16 - GENERA SAP + ESCUPE PINS + SOPORTA MARIONETA ==============
export const LAYA_SAP = {
  generateSAP(metrics, grammarSig, word) {
    const mem = LAYA_FINAL.MEMORY.get();
    const gMem = mem[grammarSig] || {errors:0, oks:0, hes:[]};
    const avgHes = gMem.hes.length? Math.round(gMem.hes.reduce((a,b)=>a+b,0)/gMem.hes.length) : 0;
    return {
      header: { mandt: "100", user: "LAYA_USER", date: new Date().toISOString().slice(0,10).replace(/-/g,''), time: new Date().toTimeString().slice(0,8).replace(/:/g,''), area: grammarSig, word: word },
      evolution: {
        XP_TOTAL: metrics.xp_total, STREAK_DAYS: metrics.streak_days, ACCURACY_7D: Math.round(metrics.accuracy_7d*100) + "%",
        SAME_ERROR: gMem.errors, OKS: gMem.oks, HESITATION_MS: avgHes, LEVEL: metrics.level,
        AVATAR: AVATAR_ENGINE_HOLO.decideByMetrics(metrics).emotion, NEXT_LEVEL_NEED: this.getNextNeed(metrics)
      },
      detail: {
        grammarChain: this.getGrammarProgress(grammarSig),
        vocabChain: this.getVocabChain(word),
        memoryLog: gMem,
        performance: avgHes > 3000? "SLOW - SCAFFOLDING" : avgHes < 1000 && gMem.oks > 3? "FAST - FLOW_OBSERVER" : "NORMAL - FOUNDATION"
      }
    };
  },
  getNextNeed(m){
    if(m.streak_days < 3) return `Falta ${3-m.streak_days} dias para FLOW_OBSERVER`;
    if(m.accuracy_7d < 0.7) return `Falta ${Math.round((0.7-m.accuracy_7d)*100)}% para FLOW_OBSERVER`;
    if(m.accuracy_7d < 0.9) return `Falta ${Math.round((0.9-m.accuracy_7d)*100)}% para ELEVATION`;
    return "MAX LEVEL - LAYA MASTER";
  },
  getGrammarProgress(sig){
    const order = ["PRON_PER_POSS","ART_DET","THERE_QUANT","PREP_IN_ON_AT","PS_3RD_S","PRES_CONT","PAST_SIMP","FUT_GOING","FUT_WILL","MOD_CAN","MOD_MUST","COUNT_UNCOUNT","COMP_SUP","CONN_LOGIC","GERUND_INF","PRES_PERF","PAST_CONT","WILL_VS_GOING","COND_0","COND_1","USED_TO","QUESTION_TAGS","PAST_PERF","MOD_MIGHT","REPORTED","RELATIVE","COND_2","PAST_PERF_CONT","PRES_PERF_CONT","FUT_CONT","FUT_PERF","PASS_BASIC","PASS_ADV","COND_3","MOD_PAST_REGRET"];
    const idx = order.indexOf(sig);
    return `${idx+1}/35 - ${Math.round((idx+1)/35*100)}%`;
  },
  getVocabChain(word){
    const s = word.toLowerCase().slice(0,3);
    const base = VOCAB_REAL.superDicSyllables[s] || [];
    return { root: s, count: base.length, family: base.slice(0,5) };
  },
  renderToHologram(sapData){
    const bubble = document.getElementById('bubble');
    const state = document.getElementById('laia-state');
    if(!bubble) return;
    const e = sapData.evolution; const h = sapData.header;
    bubble.innerHTML = `
      <div style="font-size:9px;color:#00d4ff;letter-spacing:1px">SAP // LAYA V16 MARIONETTE - ${e.AVATAR}</div>
      <div style="margin:4px 0;font-size:11px;color:#fff;font-weight:bold">${h.area} | ${h.word} | ${sapData.detail.grammarChain}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;margin-top:6px">
        <span style="background:rgba(0,212,255,0.2);padding:3px 6px;border-radius:10px">⭐ XP ${e.XP_TOTAL}</span>
        <span style="background:rgba(34,197,94,0.2);padding:3px 6px;border-radius:10px">🔥 ${e.STREAK_DAYS}d</span>
        <span style="background:rgba(96,165,250,0.2);padding:3px 6px;border-radius:10px">🎯 ${e.ACCURACY_7D}</span>
        <span style="background:rgba(245,158,11,0.2);padding:3px 6px;border-radius:10px">⚠️ ERR ${e.SAME_ERROR}</span>
      </div>
      <div style="margin-top:6px;font-size:9px;color:#9ca3af">HES: ${e.HESITATION_MS}ms | ${sapData.detail.performance}<br>NEXT: ${e.NEXT_LEVEL_NEED}</div>
      <div style="margin-top:4px;font-size:8px;color:#60a5fa">MANDT ${h.mandt} | ${h.date} ${h.time} | ${e.AVATAR} | JOINTS:${Object.keys(INTENTION_MOTOR[e.AVATAR]?.joints||{}).length} | V16</div>`;
    bubble.classList.remove('hidden');
    if(state) state.textContent = `${e.AVATAR} • ${e.ACCURACY_7D} • V16-MARIONETTE`;
  }
};

// ============== HOLOGRAMA + WANDERER + MARIONETA UNIFICADO V16 ==============
export class LaiaHologramSmart {
  constructor(){
    this.el = null; this.sprite = null; this.bubble = null;
    this.total = 16; this.currentFrame = 0; this.isMoving = false;
    this.frameMap = AVATAR_ENGINE_HOLO.frameMap;
    this.zones = {
      welcome: { x: 5, y: 5, frame: 'celebratory', pose: 'ELEVATION' },
      reading: { x: 68, y: 10, frame: 'explain_open', pose: 'SCAFFOLDING' },
      example: { x: 70, y: 35, frame: 'point_left', pose: 'SCAFFOLDING' },
      input: { x: 8, y: 55, frame: 'explain_open', pose: 'FLOW_OBSERVER' },
      vocab: { x: 72, y: 48, frame: 'crossed_arms', pose: 'TRANSMISSION' },
      check: { x: 15, y: 75, frame: 'point_left', pose: 'FOUNDATION' },
      feedback_ok: { x: 45, y: 35, frame: 'celebratory', scale: 1.3, pose: 'ELEVATION' },
      feedback_err: { x: 12, y: 50, frame: 'strict', scale: 1.1, pose: 'STRICT_ENGINEER' },
      lab: { x: 70, y: 18, frame: 'strict', pose: 'FLOW_OBSERVER' },
      center: { x: 45, y: 35, frame: 'open_big', scale: 1.4, pose: 'TRANSMISSION' }
    };
    this.APP_ZONES = {
      welcome: { x: 50, y: 30, anchor: 'center', pose: 'ELEVATION', msg: 'Bienvenido tete, soy Laya, tu ingeniera de lenguaje' },
      reading_title: { x: 10, y: 8, anchor: 'top-left', pose: 'FOUNDATION', pointer: 'title' },
      reading_text: { x: 75, y: 15, anchor: 'right', pose: 'SCAFFOLDING', pointer: '.story-text' },
      reading_highlight: { x: 5, y: 35, anchor: 'left', pose: 'SCAFFOLDING', pointer: 'dynamic' },
      example_box: { x: 70, y: 40, anchor: 'right', pose: 'SCAFFOLDING', pointer: '.grammar-example' },
      vocab_word: { x: 80, y: 50, anchor: 'right', pose: 'TRANSMISSION', pointer: '.vocab-card' },
      vocab_family: { x: 10, y: 60, anchor: 'bottom-left', pose: 'TRANSMISSION', pointer: null },
      input_field: { x: 8, y: 55, anchor: 'left', pose: 'FLOW_OBSERVER', pointer: '#user-input', scale: 0.9 },
      input_hint: { x: 15, y: 75, anchor: 'bottom-left', pose: 'SCAFFOLDING', pointer: null },
      feedback_ok: { x: 50, y: 25, anchor: 'center', pose: 'ELEVATION', scale: 1.4, confetti: true },
      feedback_err: { x: 12, y: 48, anchor: 'left', pose: 'STRICT_ENGINEER', scale: 1.1, shake: true },
      lab_button: { x: 85, y: 12, anchor: 'top-right', pose: 'FLOW_OBSERVER', pointer: '#lab-btn' },
      sap_dashboard: { x: 50, y: 45, anchor: 'center', pose: 'TRANSMISSION', scale: 1.5, spitPins: true }
    };
    this.init();
  }
  init(){
    if(!document.getElementById('laia-hologram')){
      const div = document.createElement('div');
      div.id = 'laia-hologram';
      div.innerHTML = `<div id="laia-sprite"></div><div id="laia-glow"></div><div id="bubble" class="hidden"></div><div id="laia-pin-container"></div><div id="laia-state"></div>`;
      document.body.appendChild(div);
      const style = document.createElement('style');
      style.textContent = `
        #laia-hologram{position:fixed;left:5%;top:5%;width:110px;height:220px;z-index:9999;pointer-events:none;transition:all 1.1s cubic-bezier(0.34,1.56,0.64,1);filter:drop-shadow(0 0 18px #00d4ff) drop-shadow(0 0 35px #00d4ff);animation:laiaFloat 3s ease-in-out infinite}
        #laia-sprite{width:100%;height:100%;background:url('./laia_HOLO_CLEAN_16.png') 0 0 / 1600% 100%;image-rendering:crisp-edges}
        #laia-glow{position:absolute;inset:-15px;background:radial-gradient(circle at 50% 80%, rgba(0,212,255,0.3) 0%, transparent 70%);z-index:-1;animation:laiaPulse 2s infinite}
        #bubble{position:absolute;left:120px;top:20px;background:rgba(10,15,30,0.92);backdrop-filter:blur(12px);border:1px solid rgba(0,212,255,0.5);color:white;padding:12px 14px;border-radius:14px;font-size:12px;width:210px;pointer-events:auto;box-shadow:0 0 25px rgba(0,212,255,0.3)}
        #bubble.hidden{display:none}
        #laia-pin-container{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9998}
       .laia-pin{position:absolute;background:linear-gradient(135deg, rgba(0,212,255,0.95), rgba(139,92,246,0.95));color:white;padding:10px 14px;border-radius:12px;font-size:10px;animation:pinFloat 4s ease-out forwards}
        @keyframes laiaFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes laiaPulse{0%,100%{opacity:0.6}50%{opacity:1}}
        @keyframes pinFloat{0%{transform:translateY(0) scale(0.8);opacity:0}20%{opacity:1}100%{transform:translateY(-80px) scale(1.1);opacity:0}}
       .laia-walking{animation:laiaWalk 0.5s infinite alternate}
        @keyframes laiaWalk{0%{transform:translateX(-2px)}100%{transform:translateX(2px)}}
       .shake{animation:shake 0.5s}
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
      `;
      document.head.appendChild(style);
      this.el = div;
    }
  }
  goTo(zoneName, context = {}){
    const zone = this.APP_ZONES[zoneName] || this.zones[zoneName];
    if(!zone ||!this.el) return;
    const pose = INTENTION_MOTOR[zone.pose] || INTENTION_MOTOR.TRANSMISSION;
    this.el.style.left = (zone.x || 5) + '%';
    this.el.style.top = (zone.y || 5) + '%';
    if(zone.scale) this.el.style.transform = `scale(${zone.scale})`;
    console.log(`[LAYA V16] goTo ${zoneName} -> ${pose.name}`, pose.joints);
    if(context.sapData) LAYA_SAP.renderToHologram(context.sapData);
  }
  renderToHologram(sapData){ return LAYA_SAP.renderToHologram(sapData); }
  applyPose(pose){ console.log(`[MARIONETA] Aplicando ${pose.name}`, pose.joints); }
  spitSAPPins(sapData, pose){ LAYA_SAP.renderToHologram(sapData); }
}
export class LaiaWandererEngine extends LaiaHologramSmart {}
export class LaiaMarionetteV3 extends LaiaHologramSmart {}
export class LaiaHologramSmartV16 extends LaiaHologramSmart {}

// COMPATIBILIDAD: Export para tu LAIA_SAP_HOLOGRAM.js viejo que importe de aquí
export const LAYA_SAP_HOLOGRAM = LAYA_SAP;