// LENGUAJE-PRO-V8-JARVIS-DEFINITIVO.js
// Version: 8.0 JARVIS - Laia ES la app + 28 Gram + 72 Vocab + 50 Areas + SuperDiccionario
// Repo: lenguaje-pro - 14-10-2026
// Laia: brown wavy short, black blazer, white shirt, gray pants, clipboard

// ================= VOCAB REAL V4 - 72 FAMILIAS (INTACTO) =================
const VOCAB_REAL = {
  kitchen50: ["Cook/Cocinar","Bake/Hornear","Boil/Hervir","Fry/Freir","Chop/Picar","Peel/Pelar","Mix/Mezclar","Knead/Amasar","Pour/Verter","Taste/Probar","Serve/Servir","Mash/Machacar","Squeeze/Exprimir","Flip/Voltear","Store/Guardar","Freeze/Congelar","Dish/Utensil/Pot/Pan/Knife/Board/Oven/Stove/Spice/Sauce"],
  move16: ["PUSH/Empujar","PULL/Tirar","LIFT/Levantar","DROP/Soltar","THROW/Lanzar","CATCH/Atrapar","JUMP/Saltar","ROLL/Rodar","SLIDE/Deslizar","CLIMB/Trepar","FALL/Caer","FLOAT/Flotar","SWING/Columpiar","HANG/Colgar","CRAWL/Gatear","DIG/Cavar"],
  collocations: { have: ["Have a drink/rest/shower/dream/look/idea/bath/party/chat/break"], take: ["Take a break/look/chance/photo/risk/seat/shower/note/bus/time"], do: ["Do work/dishes/yoga/homework/best/research/exercise/damage/laundry"], make: ["Make a mess/money/decision/bed/coffee/difference/plan/effort/sense"], go: ["Go home/shopping/crazy/bald/wrong/missing/viral/bankrupt/on foot"], get: ["Get lost/ready/married/tired/angry/dressed/paid/hurt/used to"], put: ["Put on jacket/makeup/off lights/away toys/up with noise/down ideas/out fire"] },
  verbPrep40: ["talk ABOUT","work DURING","walk AROUND","fight AGAINST","look AFTER","sit UNDER","arrive BEFORE","choose BETWEEN","believe IN","depend ON","think ABOUT","wait FOR","look FOR","care ABOUT","agree WITH","apologize FOR","pay FOR","listen TO","arrive AT/IN"],
  timeMarkers: { since: "since Monday/2010/morning/yesterday/we met/I was a child", for: "for a while/two weeks/my family/a long time/ages/2 hours", until: "until tomorrow/5 o'clock/I return/next year/midnight", during: "during the meeting/summer/war/night/class", while: "while I was cooking/you were sleeping/studying", ago: "2 days ago/a long time ago/an hour ago", already_yet_just: "already done, not yet finished, just finished, ever/never" },
  adjectives: { pers: ["Kind/Rude/Smart/Funny/Honest/Lazy/Brave/Generous/Shy/Confident/Stingy/Curious/Patient/Hardworking"], emocion: ["Happy/Sad/Angry/Excited/Scared/Nervous/Proud/Jealous/Worried/Grateful/Anxious/Relieved/Overwhelmed"], objeto: ["New/Old/Big/Cheap/Useful/Expensive/Modern/Empty/Heavy/Light/Sharp/Soft/Dangerous/Safe"], comparative: ["better than, worse than, more important than, as...as, not as...as, the best, the worst"] },
  survival50: ["I have a question","Can you help me?","I don't understand","What does it mean?","Can you explain?","Let me think","I'm not sure","I agree/disagree","I'm ready/not ready","In my opinion","From my point of view","Could you repeat?","How do you say...?","What do you think?","That makes sense","Absolutely","Definitely","I see your point","It depends"],
  conectores40: ["Moreover","Furthermore","However","Therefore","For example","For instance","Finally","In contrast","Meanwhile","Nevertheless","Instead","Although","Because","Since","So","Then","After that","First of all","Secondly","On the other hand","In fact","Actually","Basically","Essentially","In addition","As a result"],
  silentLetters: ["knife/knee/know/knock","doubt/debt/bomb/climb","gnome/sign/design/foreign","honest/hour/honor","castle/listen/often/fasten","write/wrong/wrist/wrap","should/walk/palm/calm","island/salmon","receipt/psychology","lamb/comb/tomb"],
  phrasalVerbs50: ["turn on/off, put on/off, get up, wake up, go out, come back, look for, look after, give up, find out, carry on, turn up, bring up, call off, break down, run out of, take off, set up, grow up, deal with, look forward to, get along with, put up with, run into"],
  business: ["budget/profit/loss/investment/meeting/deadline/target/growth/risk/loan/debt/salary/income/expense/saving/bank"],
  idioms: ["over the moon, under the weather, piece of cake, break a leg, costs an arm and a leg, hit the books, once in a blue moon"]
};

// ================= GRAMMAR REAL V4 - 28 ESTRUCTURAS + SIGNATURE =================
const GRAMMAR_REAL = [
  { id: "Present Simple", sig: "PS_3RD_S", formula: "Sub + V1(s/es) + obj", example: "He plays football every day", use: "Habits, facts, routines", level: "A1", mistake: "He play -> He PLAYS (3rd person s)" },
  { id: "Present Continuous", sig: "PRES_CONT", formula: "Sub + am/is/are + V-ing", example: "I am studying English now", use: "Now, temporary actions", level: "A1" },
  { id: "Present Perfect", sig: "PRES_PERF", formula: "Sub + has/have + V3", example: "She has finished her work", use: "Experience, result now", level: "A2", keywords: "already, yet, just, ever, never, since, for" },
  { id: "Present Perfect Continuous", sig: "PRES_PERF_CONT", formula: "Sub + has/have + been + V-ing", example: "I have been working for 2 hours", use: "Duration until now", level: "B1" },
  { id: "Past Simple", sig: "PAST_SIMP", formula: "Sub + V2 / was-were", example: "I swam yesterday", use: "Finished past", level: "A1" },
  { id: "Past Continuous", sig: "PAST_CONT", formula: "Sub + was/were + V-ing", example: "I was cooking when he arrived", use: "Interrupted past", level: "A2" },
  { id: "Past Perfect", sig: "PAST_PERF", formula: "Sub + had + V3", example: "I had eaten before he came", use: "Before another past", level: "B1" },
  { id: "Past Perfect Continuous", sig: "PAST_PERF_CONT", formula: "Sub + had + been + V-ing", example: "I had been waiting for 1 hour", use: "Duration before past", level: "B1" },
  { id: "Future Simple Will", sig: "FUT_WILL", formula: "Sub + will + V1", example: "I will help you", use: "Spontaneous decision", level: "A1" },
  { id: "Future Going To", sig: "FUT_GOING", formula: "Sub + am/is/are + going to + V1", example: "I am going to study tomorrow", use: "Plan, intention", level: "A1" },
  { id: "Future Continuous", sig: "FUT_CONT", formula: "Sub + will be + V-ing", example: "I will be working at 8pm", use: "Action in progress in future", level: "B1" },
  { id: "Future Perfect", sig: "FUT_PERF", formula: "Sub + will have + V3", example: "I will have finished by 5pm", use: "Completed before future", level: "B2" },
  { id: "Will vs Going To", sig: "WILL_VS_GOING", formula: "Will = decision now / Going to = plan", example: "It's going to rain vs I will answer", use: "Distinció clau", level: "A2" },
  { id: "Modals Ability", sig: "MODAL_ABIL", formula: "can/could/be able to", example: "I can swim", use: "Ability", level: "A1" },
  { id: "Modals Obligation", sig: "MODAL_OBL", formula: "must/have to/should", example: "You must wear uniform", use: "Obligation", level: "A2" },
  { id: "Modals Possibility Deduction", sig: "MODAL_DED", formula: "might/may/could/must/can't", example: "He must be tired", use: "Possibility", level: "B1" },
  { id: "Modals Past Regret", sig: "MODAL_REGRET", formula: "should have / could have + V3", example: "You should have called", use: "Regret", level: "B2" },
  { id: "Zero Conditional", sig: "COND_0", formula: "If + Present Simple, Present Simple", example: "If you heat water, it boils", use: "General truth", level: "A2" },
  { id: "First Conditional", sig: "COND_1", formula: "If + Present Simple, will + V1", example: "If it rains, I will stay home", use: "Real future", level: "A2" },
  { id: "Second Conditional", sig: "COND_2", formula: "If + Past Simple, would + V1", example: "If I had money, I would travel", use: "Unreal present", level: "B1" },
  { id: "Third Conditional", sig: "COND_3", formula: "If + had + V3, would have + V3", example: "If I had studied, I would have passed", use: "Unreal past", level: "B2" },
  { id: "Passive Voice Present Past", sig: "PASS_BASIC", formula: "Sub + be + V3 + by agent", example: "The cake was made by Maria", use: "Focus on action", level: "B1" },
  { id: "Passive Voice Perfect Future", sig: "PASS_ADV", formula: "has been V3 / will be V3", example: "The work has been finished", use: "Passive advanced", level: "B2" },
  { id: "Reported Speech", sig: "REPORTED", formula: "He said (that) he was tired", example: "'I am tired' -> He said he was tired", use: "Reportar", level: "B1" },
  { id: "Relative Clauses", sig: "RELATIVE", formula: "who/which/that/where/when/whose", example: "The man who lives here is kind", use: "Describe noun", level: "B1" },
  { id: "Gerund vs Infinitive", sig: "GERUND_INF", formula: "enjoy + V-ing / want + to + V1", example: "I enjoy cooking / I want to cook", use: "Verb patterns", level: "B1" },
  { id: "Comparatives Superlatives", sig: "COMP_SUP", formula: "more...than / most / -er than", example: "More expensive than", use: "Comparison", level: "A2" },
  { id: "Articles A An The", sig: "ARTICLES", formula: "a/an = new, the = known, Ø = general", example: "A dog is an animal. The dog is mine", use: "Articles", level: "A1" },
  { id: "Countable Uncountable", sig: "COUNT_UNC", formula: "much/many, a lot of, few/little", example: "Much water, many books", use: "Quantity", level: "A2" }
];

// ================= SUPER DICCIONARIO + INDICE SILABA (NUEVO V8) =================
export const SUPER_DICCIONARIO = {
  indexSilaba: {
    co: ["cook","bake","boil","cold","cost","confidence","consistency"],
    knead: ["knead"], amasar: ["knead"], cook: ["cook"],
    hap: ["happy","happiness"], push: ["push"], pull: ["pull"],
    have: ["have a drink","have a shower"], take: ["take a break"],
    // Generado desde VOCAB_REAL automáticamente
  },
  buscar: (input) => {
    const key = input.toLowerCase().slice(0,2);
    return SUPER_DICCIONARIO.indexSilaba[key] || SUPER_DICCIONARIO.indexSilaba[input.toLowerCase()] || [];
  }
};

// ================= AVATAR ENGINE V6 -> AHORA INTERNO (NO SE MUESTRA) =================
export const AVATAR_ENGINE_V6 = {
  name: "Laia Interna 6 Micro-anim",
  files: {
    IMG_0_FURIOUS: { id: 0, file: "laia_0_furious.png", desc: "molt enfadada", anim: "shake_hard_4px", tts: { text: "Tete, parem. És HAS, no have. Present Simple tercera persona!", rate: 0.9, tone: "firme" }, trigger: "same_error_count >=3", block: true },
    IMG_1_OBSERVER: { id: 1, file: "laia_1_observer.png", desc: "braços creuats", anim: "idle_blink_180ms", tts: { text: "...", rate: 0, tone: "silence" }, trigger: "cefr >=B1 && flow_mode" },
    IMG_2_EMPATICA: { id: 2, file: "laia_2_empatica.png", desc: "mà oberta", anim: "soft_breathe_open_hand", tts: { text: "Tranquil, in/on/at i els condicionals ho confon tothom.", rate: 1.0, tone: "suave" }, trigger: "hesitation_ms >4000 || accuracy_7d <0.5" },
    IMG_3_CELEBRATORIA: { id: 3, file: "laia_3_celebratoria.png", desc: "somriure gran", anim: "jump_confetti", tts: { text: "¡BOOM! ¡Lo has clavado! Level up!", rate: 1.3, tone: "alegre" }, trigger: "streak_days >=7 || level_up || accuracy>=0.9" },
    IMG_4_COLEGA: { id: 4, file: "laia_4_colega.png", desc: "somriure suau colega", anim: "pointing_side_happy_subtle", tts: { text: "Va tete, aquesta te la saps! Knead és amasar.", rate: 1.1, tone: "cercana" }, trigger: "accuracy_7d >=0.8 || tutorial" },
    IMG_5_STRICT_LIGHT: { id: 5, file: "laia_5_strict_light.png", desc: "molesta lleu", anim: "tint_bg_8pct_red", tts: { text: "Tete, això ja ho hem vist.", rate: 1.0, tone: "seria" }, trigger: "same_error_count == 2", block: false }
  },
  decideByMetrics: (m) => {
    if (m.same_error_count >= 3) return "IMG_0_FURIOUS";
    if (m.same_error_count === 2) return "IMG_5_STRICT_LIGHT";
    if (m.streak_days >= 7 || m.level_up || (m.accuracy_7d||0) >= 0.9) return "IMG_3_CELEBRATORIA";
    if (m.cefr_level === "B1" && m.flow_mode) return "IMG_1_OBSERVER";
    if ((m.hesitation_ms||0) > 4000 || (m.accuracy_7d||0) < 0.5) return "IMG_2_EMPATICA";
    return "IMG_4_COLEGA";
  }
};

// ================= MOTOR FINAL 50 ÀREES - JARVIS SIN baseImg =================
export const LAYA_FINAL = {
  version: "8.0 JARVIS - Laia ES la app",
  VOCAB: VOCAB_REAL,
  GRAMMAR: GRAMMAR_REAL,
  AVATAR: AVATAR_ENGINE_V6,
  AREAS: {
    1:{ name:"Money Basics", topic:"Why Most People Never Become Rich", vocab:"collocations.have", grammar:["Present Simple","Modals Possibility Deduction"], future:"First Conditional" },
    2:{ name:"Saving", topic:"The Power of Saving Small", vocab:"timeMarkers", grammar:["Present Perfect","Present Perfect Continuous"], future:"Future Going To" },
    3:{ name:"Smart Spending", topic:"Smart Spending Habits", vocab:"adjectives.objeto", grammar:["Present Simple","Countable Uncountable"], future:"Will vs Going To" },
    4:{ name:"Investing", topic:"How Investing Builds Freedom", vocab:"conectores40", grammar:["Future Simple Will","First Conditional"], future:"Future Perfect" },
    5:{ name:"Work", topic:"Why Hard Work Matters", vocab:"move16", grammar:["Past Simple","Past Continuous"], future:"Second Conditional" },
    6:{ name:"Career", topic:"How to Grow in Your Career", vocab:"survival50", grammar:["Present Perfect","Past Perfect"], future:"Future Continuous" },
    7:{ name:"Opportunity", topic:"Why English Is The Language of Opportunity", vocab:"conectores40", grammar:["Present Simple","Modals Ability"], future:"First Conditional" },
    8:{ name:"Business", topic:"How Small Business Starts", vocab:"verbPrep40", grammar:["Present Simple","Passive Voice Present Past"], future:"Future Going To" },
    9:{ name:"Time Is Money", topic:"Why Time Is More Valuable Than Money", vocab:"timeMarkers", grammar:["Present Perfect","Articles A An The"], future:"Future Perfect" },
    10:{ name:"Rich vs Poor Mind", topic:"How Rich People Think Different", vocab:"adjectives.pers", grammar:["Present Simple","Comparatives Superlatives"], future:"Second Conditional" },
    11:{ name:"Positive Mindset", topic:"Why a Positive Mindset Helps Overcome Challenges", vocab:"adjectives.emocion", grammar:["Past Simple","Present Perfect"], future:"Zero Conditional" },
    12:{ name:"Growth Mindset", topic:"The Power of Growth Mindset", vocab:"adjectives.pers", grammar:["Present Simple","Gerund vs Infinitive"], future:"First Conditional" },
    13:{ name:"Confidence", topic:"How to Build Real Confidence", vocab:"survival50", grammar:["Modals Ability","Modals Obligation"], future:"Future Simple Will" },
    14:{ name:"Fear", topic:"Why Fear Stops Most People", vocab:"adjectives.emocion", grammar:["Present Simple","Past Simple"], future:"Second Conditional" },
    15:{ name:"Failure", topic:"Why Failure Is Your Best Teacher", vocab:"conectores40", grammar:["Present Perfect","Past Perfect"], future:"Third Conditional" },
    16:{ name:"Success", topic:"What Success Really Means", vocab:"conectores40", grammar:["Present Simple","Present Continuous"], future:"Future Perfect" },
    17:{ name:"Progress", topic:"The Power of Progress", vocab:"move16", grammar:["Past Simple","Past Continuous"], future:"Future Continuous" },
    18:{ name:"Taking Action", topic:"Why Taking Action Can Change Your Life", vocab:"move16", grammar:["Past Simple","Modals Obligation"], future:"First Conditional" },
    19:{ name:"Discipline", topic:"Why Discipline Beats Motivation", vocab:"verbPrep40", grammar:["Present Simple","Modals Obligation"], future:"Zero Conditional" },
    20:{ name:"Motivation", topic:"Where Real Motivation Comes From", vocab:"survival50", grammar:["Present Continuous","Present Perfect"], future:"Will vs Going To" },
    21:{ name:"Focus", topic:"The Power of Deep Focus", vocab:"conectores40", grammar:["Present Simple","Gerund vs Infinitive"], future:"Future Simple Will" },
    22:{ name:"Procrastination", topic:"Why We Procrastinate", vocab:"timeMarkers", grammar:["Present Simple","Present Continuous"], future:"Second Conditional" },
    23:{ name:"Gratitude", topic:"Why Gratitude Changes Everything", vocab:"adjectives.emocion", grammar:["Present Perfect","Present Simple"], future:"Zero Conditional" },
    24:{ name:"Happiness", topic:"How to Find Real Happiness", vocab:"adjectives.emocion", grammar:["Present Simple","Past Simple"], future:"First Conditional" },
    25:{ name:"Stress", topic:"How to Handle Stress", vocab:"adjectives.emocion", grammar:["Present Continuous","Modals Possibility Deduction"], future:"Will vs Going To" },
    26:{ name:"Good Habits", topic:"Why Building Good Habits Leads to Success", vocab:"kitchen50", grammar:["Present Simple","Articles A An The"], future:"Zero Conditional" },
    27:{ name:"Bad Habits", topic:"The Money Habits That Keep You Poor", vocab:"collocations.have", grammar:["Present Simple","Countable Uncountable"], future:"First Conditional" },
    28:{ name:"Morning Routine", topic:"The Power of a Morning Routine", vocab:"timeMarkers", grammar:["Present Simple","Present Continuous"], future:"Future Going To" },
    29:{ name:"Goals", topic:"The Power of Setting Goals", vocab:"survival50", grammar:["Future Simple Will","Future Going To"], future:"First Conditional" },
    30:{ name:"Planning", topic:"Why Planning Saves Your Future", vocab:"conectores40", grammar:["Future Simple Will","Future Perfect"], future:"Future Continuous" },
    31:{ name:"Time Management", topic:"How to Manage Your Time", vocab:"timeMarkers", grammar:["Present Perfect","Modals Obligation"], future:"Second Conditional" },
    32:{ name:"Health", topic:"Why Health Is Real Wealth", vocab:"adjectives.pers", grammar:["Present Simple","Modals Obligation"], future:"First Conditional" },
    33:{ name:"Sleep", topic:"The Power of Good Sleep", vocab:"move16", grammar:["Present Simple","Past Simple"], future:"Will vs Going To" },
    34:{ name:"Healthy Food", topic:"How Food Affects Your Energy", vocab:"kitchen50", grammar:["Present Simple","Countable Uncountable"], future:"Zero Conditional" },
    35:{ name:"Fitness", topic:"Why Small Exercise Changes Your Life", vocab:"move16", grammar:["Present Continuous","Present Perfect Continuous"], future:"Future Going To" },
    36:{ name:"Learning", topic:"Learn More, Earn More", vocab:"survival50", grammar:["Present Perfect","Relative Clauses"], future:"Future Perfect" },
    37:{ name:"Reading", topic:"Why Reading Makes You Richer", vocab:"conectores40", grammar:["Present Simple","Passive Voice Present Past"], future:"Second Conditional" },
    38:{ name:"Consistency", topic:"Why Consistency Beats Talent", vocab:"verbPrep40", grammar:["Present Simple","Present Perfect"], future:"Zero Conditional" },
    39:{ name:"Patience", topic:"The Power of Patience", vocab:"adjectives.pers", grammar:["Present Simple","Past Perfect"], future:"Future Continuous" },
    40:{ name:"Kindness", topic:"Why Kindness Is Strength", vocab:"adjectives.pers", grammar:["Present Simple","Modals Ability"], future:"First Conditional" },
    41:{ name:"Family", topic:"My Family Is My Strength", vocab:"survival50", grammar:["Present Simple","Past Simple"], future:"Second Conditional" },
    42:{ name:"Grandmother", topic:"My Grandmother Is My Inspiration", vocab:"adjectives.pers", grammar:["Past Simple","Past Continuous"], future:"Second Conditional" },
    43:{ name:"Friends", topic:"How Real Friends Help You Grow", vocab:"adjectives.pers", grammar:["Present Simple","Relative Clauses"], future:"First Conditional" },
    44:{ name:"Love", topic:"Why Love Makes Us Stronger", vocab:"adjectives.emocion", grammar:["Present Simple","Present Perfect"], future:"Third Conditional" },
    45:{ name:"Respect", topic:"Why Respect Is Everything", vocab:"verbPrep40", grammar:["Present Simple","Modals Obligation"], future:"Zero Conditional" },
    46:{ name:"Honesty", topic:"Why Honesty Builds Trust", vocab:"adjectives.pers", grammar:["Present Simple","Reported Speech"], future:"First Conditional" },
    47:{ name:"Responsibility", topic:"The Power of Responsibility", vocab:"verbPrep40", grammar:["Present Simple","Passive Voice Present Past"], future:"Future Perfect" },
    48:{ name:"Delivery Life", topic:"My Life Delivering Food", vocab:"move16", grammar:["Present Continuous","Past Simple"], future:"Future Going To" },
    49:{ name:"Alignment", topic:"Why Alignment Creates Success", vocab:"conectores40", grammar:["Present Simple","Gerund vs Infinitive"], future:"First Conditional" },
    50:{ name:"Willpower", topic:"The Power of Willpower", vocab:"move16", grammar:["Future Simple Will","Future Continuous"], future:"Future Perfect" }
  }
};

// ================= CLASE PRINCIPAL - LAIA ES LA APP (JARVIS) =================
export class LaiaApp {
  constructor(idioma = 'en') {
    this.idioma = idioma;
    this._memoria = new Map(); // userId -> {signature, count, accuracy_7d, hesitation, streak, cefr, flow}
    this._cohorte = new Map(); // signature -> total fails (para aprenderDeUso)
  }

  _getMetrics(userId) {
    return this._memoria.get(userId) || { same_error_count:0, same_error_sig:null, accuracy_7d:0.8, hesitation_ms:0, streak_days:0, cefr_level:"A2", flow_mode:false, level_up:false };
  }

  _updateMemoria(userId, sig, esAcierto, hesitation_ms) {
    let m = this._getMetrics(userId);
    if (esAcierto) {
      if (m.same_error_sig === sig) { m.same_error_count = 0; m.same_error_sig = null; }
      m.accuracy_7d = Math.min(1, m.accuracy_7d*0.9 + 0.1);
    } else {
      if (m.same_error_sig === sig) m.same_error_count++;
      else { m.same_error_sig = sig; m.same_error_count = 1; }
      m.accuracy_7d = Math.max(0, m.accuracy_7d*0.9);
      this._cohorte.set(sig, (this._cohorte.get(sig)||0)+1);
    }
    m.hesitation_ms = hesitation_ms;
    this._memoria.set(userId, m);
    return m;
  }

  async aprender({ userId, input, areaId = 34, level = "A2", hesitation_ms = 0 }) {
    const area = LAYA_FINAL.AREAS[areaId];
    const grammarMain = GRAMMAR_REAL.find(g=>g.id===area.grammar[0]);
    const grammarFuture = GRAMMAR_REAL.find(g=>g.id===area.future);
    const sig = grammarMain.sig;

    // 1. Detectar error simple (heurística V8 - puedes mejorar con NLP)
    const esAcierto =!input.toLowerCase().includes("he have") &&!input.toLowerCase().includes("he play ");

    // 2. Actualizar memoria
    const metrics = this._updateMemoria(userId, sig, esAcierto, hesitation_ms);

    // 3. Decidir personalidad INTERNA
    const estadoKey = AVATAR_ENGINE_V6.decideByMetrics(metrics);
    const avatarState = AVATAR_ENGINE_V6.files[estadoKey];
    const bloquea = metrics.same_error_count >=3;

    // 4. Generar siguiente lección si no bloquea
    const vocabRaw = LAYA_FINAL.VOCAB[area.vocab.split(".")[0]] || LAYA_FINAL.VOCAB.kitchen50;
    const vocabList = Array.isArray(vocabRaw)? vocabRaw : Object.values(vocabRaw).flat();

    return {
      ui: {
        feedback: avatarState.tts.text, // "Tete, parem..." - CON PERSONALIDAD EN TEXTO
        correccion: bloquea? grammarMain.mistake : null,
        siguiente: bloquea? null : { areaId: areaId+1, level, foco: grammarFuture.id, vocab: vocabList.slice(0,5) },
        bloqueado: bloquea,
        xp: bloquea? 0 : (level==="A1"?10:level==="A2"?15:20),
        superDic: SUPER_DICCIONARIO.buscar(input) // ["cook","knead"...] para tu asistente
      },
      _interno: {
        estado: estadoKey,
        tono: avatarState.tts.tone,
        rate: avatarState.tts.rate,
        animacion: { type: avatarState.anim, duration: bloquea?600:180, tint: estadoKey==="IMG_3_CELEBRATORIA"?"confetti": estadoKey==="IMG_0_FURIOUS"?"red_8pct":null },
        bloquearAvance: bloquea,
        metrics // oculto para debug, no mostrar al usuario
      }
    };
  }

  aprenderDeUso() {
    // Devuelve top errores de cohorte para priorizar en generate()
    return [...this._cohorte.entries()].sort((a,b)=>b[1]-a[1]).slice(0,3);
  }

  generate(areaId, level="A2", userMetrics={}) {
    // Wrapper compatible con tu V6, pero ya sin mostrar avatar grande
    const area = LAYA_FINAL.AREAS[areaId];
    const grammarMain = GRAMMAR_REAL.find(g=>g.id===area.grammar[0]);
    const grammarSecond = GRAMMAR_REAL.find(g=>g.id===area.grammar[1])||null;
    const grammarFuture = GRAMMAR_REAL.find(g=>g.id===area.future);
    const vocabRaw = LAYA_FINAL.VOCAB[area.vocab.split(".")[0]] || LAYA_FINAL.VOCAB.kitchen50;
    const vocabList = Array.isArray(vocabRaw)? vocabRaw : Object.values(vocabRaw).flat();
    const imgKey = AVATAR_ENGINE_V6.decideByMetrics({...userMetrics, cefr_level: level});
    const avatar = AVATAR_ENGINE_V6.files[imgKey];

    return {
      meta: { area: area.name, topic: area.topic, level, grammar_main: grammarMain, grammar_second: grammarSecond, grammar_future: grammarFuture, vocab: vocabList.slice(0,6), emotion: imgKey, xp: level==="A1"?10:15 },
      avatarState: avatar, // interno
      prompt: `Level ${level} - Topic: ${area.topic} | GRAMMAR MAIN: ${grammarMain.formula} | Ex: ${grammarMain.example} | Vocab ONLY: ${vocabList.slice(0,6).join(", ")} | Must include: Time marker + If clause | Word count 150-180 | Style super simple`.trim(),
      ui_preview: { feedback: avatar.tts.text, bloqueado: false }
    };
  }
}