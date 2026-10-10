// LENGUAJE-PRO-V6-COMPLETO-DEFINITIVO.js
// Version: 6.0 DEFINITIVO - 6 Imatges Oficials + 28 Gram + 72 Vocab + 50 Areas
// Repo: lenguaje-pro - 10-10-2026
// Laia: brown wavy short, black blazer, white shirt, gray pants, clipboard

// ================= VOCAB REAL V4 - 72 IMATGES SENCERES =================
const VOCAB_REAL = {
  kitchen50: ["Cook/Cocinar","Bake/Hornear","Boil/Hervir","Fry/Freir","Chop/Picar","Peel/Pelar","Mix/Mezclar","Knead/Amasar","Pour/Verter","Taste/Probar","Serve/Servir","Mash/Machacar","Squeeze/Exprimir","Flip/Voltear","Store/Guardar","Freeze/Congelar","Dish/Utensil/Pot/Pan/Knife/Board/Oven/Stove/Spice/Sauce"],
  move16: ["PUSH/Empujar","PULL/Tirar","LIFT/Levantar","DROP/Soltar","THROW/Lanzar","CATCH/Atrapar","JUMP/Saltar","ROLL/Rodar","SLIDE/Deslizar","CLIMB/Trepar","FALL/Caer","FLOAT/Flotar","SWING/Columpiar","HANG/Colgar","CRAWL/Gatear","DIG/Cavar"],
  collocations: {
    have: ["Have a drink/rest/shower/dream/look/idea/bath/party/chat/break"],
    take: ["Take a break/look/chance/photo/risk/seat/shower/note/bus/time"],
    do: ["Do work/dishes/yoga/homework/best/research/exercise/damage/laundry"],
    make: ["Make a mess/money/decision/bed/coffee/difference/plan/effort/sense"],
    go: ["Go home/shopping/crazy/bald/wrong/missing/viral/bankrupt/on foot"],
    get: ["Get lost/ready/married/tired/angry/dressed/paid/hurt/used to"],
    put: ["Put on jacket/makeup/off lights/away toys/up with noise/down ideas/out fire"]
  },
  verbPrep40: ["talk ABOUT","work DURING","walk AROUND","fight AGAINST","look AFTER","sit UNDER","arrive BEFORE","choose BETWEEN","believe IN","depend ON","think ABOUT","wait FOR","look FOR","care ABOUT","agree WITH","apologize FOR","pay FOR","listen TO","arrive AT/IN"],
  timeMarkers: {
    since: "since Monday/2010/morning/yesterday/we met/I was a child",
    for: "for a while/two weeks/my family/a long time/ages/2 hours",
    until: "until tomorrow/5 o'clock/I return/next year/midnight",
    during: "during the meeting/summer/war/night/class",
    while: "while I was cooking/you were sleeping/studying",
    ago: "2 days ago/a long time ago/an hour ago",
    already_yet_just: "already done, not yet finished, just finished, ever/never"
  },
  adjectives: {
    pers: ["Kind/Rude/Smart/Funny/Honest/Lazy/Brave/Generous/Shy/Confident/Stingy/Curious/Patient/Hardworking"],
    emocion: ["Happy/Sad/Angry/Excited/Scared/Nervous/Proud/Jealous/Worried/Grateful/Anxious/Relieved/Overwhelmed"],
    objeto: ["New/Old/Big/Cheap/Useful/Expensive/Modern/Empty/Heavy/Light/Sharp/Soft/Dangerous/Safe"],
    comparative: ["better than, worse than, more important than, as...as, not as...as, the best, the worst"]
  },
  survival50: ["I have a question","Can you help me?","I don't understand","What does it mean?","Can you explain?","Let me think","I'm not sure","I agree/disagree","I'm ready/not ready","In my opinion","From my point of view","Could you repeat?","How do you say...?","What do you think?","That makes sense","Absolutely","Definitely","I see your point","It depends"],
  conectores40: ["Moreover","Furthermore","However","Therefore","For example","For instance","Finally","In contrast","Meanwhile","Nevertheless","Instead","Although","Because","Since","So","Then","After that","First of all","Secondly","On the other hand","In fact","Actually","Basically","Essentially","In addition","As a result"],
  silentLetters: ["knife/knee/know/knock","doubt/debt/bomb/climb","gnome/sign/design/foreign","honest/hour/honor","castle/listen/often/fasten","write/wrong/wrist/wrap","should/walk/palm/calm","island/salmon","receipt/psychology","lamb/comb/tomb"],
  phrasalVerbs50: ["turn on/off, put on/off, get up, wake up, go out, come back, look for, look after, give up, find out, carry on, turn up, bring up, call off, break down, run out of, take off, set up, grow up, deal with, look forward to, get along with, put up with, run into"],
  business: ["budget/profit/loss/investment/meeting/deadline/target/growth/risk/loan/debt/salary/income/expense/saving/bank"],
  idioms: ["over the moon, under the weather, piece of cake, break a leg, costs an arm and a leg, hit the books, once in a blue moon"]
};

// ================= GRAMMAR REAL V4 - 28 ESTRUCTURES =================
const GRAMMAR_REAL = [
  { id: "Present Simple", formula: "Sub + V1(s/es) + obj", example: "He plays football every day", use: "Habits, facts, routines", level: "A1", mistake: "He play -> He PLAYS (3rd person s)" },
  { id: "Present Continuous", formula: "Sub + am/is/are + V-ing", example: "I am studying English now", use: "Now, temporary actions", level: "A1" },
  { id: "Present Perfect", formula: "Sub + has/have + V3", example: "She has finished her work", use: "Experience, result now, ever/never", level: "A2", keywords: "already, yet, just, ever, never, since, for" },
  { id: "Present Perfect Continuous", formula: "Sub + has/have + been + V-ing", example: "I have been working for 2 hours", use: "Duration until now", level: "B1" },
  { id: "Past Simple", formula: "Sub + V2 / was-were", example: "I swam yesterday / I was at home", use: "Finished past", level: "A1" },
  { id: "Past Continuous", formula: "Sub + was/were + V-ing", example: "I was cooking when he arrived", use: "Interrupted past, background", level: "A2" },
  { id: "Past Perfect", formula: "Sub + had + V3", example: "I had eaten before he came", use: "Before another past action", level: "B1" },
  { id: "Past Perfect Continuous", formula: "Sub + had + been + V-ing", example: "I had been waiting for 1 hour when he came", use: "Duration before past", level: "B1" },
  { id: "Future Simple Will", formula: "Sub + will + V1", example: "I will help you / It will rain tomorrow", use: "Spontaneous decision, prediction", level: "A1" },
  { id: "Future Going To", formula: "Sub + am/is/are + going to + V1", example: "I am going to study tomorrow", use: "Plan, intention, evidence", level: "A1" },
  { id: "Future Continuous", formula: "Sub + will be + V-ing", example: "I will be working at 8pm tomorrow", use: "Action in progress in future", level: "B1" },
  { id: "Future Perfect", formula: "Sub + will have + V3", example: "I will have finished by 5pm", use: "Completed before future point", level: "B2" },
  { id: "Will vs Going To", formula: "Will = decision now / Going to = plan", example: "It's going to rain (clouds) vs I will answer (now)", use: "Distinció clau", level: "A2" },
  { id: "Modals Ability", formula: "can/could/be able to / managed to", example: "I can swim / I could swim when I was 5 / I was able to escape", use: "Ability", level: "A1" },
  { id: "Modals Obligation", formula: "must/have to/should/have got to/need to", example: "You must wear uniform / You have to study / You should rest", use: "Obligation, advice", level: "A2" },
  { id: "Modals Possibility Deduction", formula: "might/may/could/must/can't (deduction)", example: "It might rain / He must be tired / She can't be at home", use: "Possibility, deduction", level: "B1" },
  { id: "Modals Past Regret", formula: "should have / could have / would have + V3", example: "You should have called me / I could have helped", use: "Regret, criticism past", level: "B2" },
  { id: "Zero Conditional", formula: "If + Present Simple, Present Simple", example: "If you heat water, it boils", use: "General truth, scientific", level: "A2" },
  { id: "First Conditional", formula: "If + Present Simple, will + V1", example: "If it rains, I will stay home", use: "Real future possibility", level: "A2" },
  { id: "Second Conditional", formula: "If + Past Simple, would + V1", example: "If I had money, I would travel around the world", use: "Unreal present, imaginary", level: "B1" },
  { id: "Third Conditional", formula: "If + had + V3, would have + V3", example: "If I had studied, I would have passed the exam", use: "Unreal past, regret", level: "B2" },
  { id: "Passive Voice Present Past", formula: "Sub + be + V3 + by agent", example: "The cake was made by Maria / English is spoken here", use: "Focus on action", level: "B1" },
  { id: "Passive Voice Perfect Future", formula: "has been V3 / will be V3 / is being V3", example: "The work has been finished / The house is being built", use: "Passive advanced", level: "B2" },
  { id: "Reported Speech", formula: "He said (that) he was tired / asked if", example: "'I am tired' -> He said he was tired", use: "Reportar", level: "B1" },
  { id: "Relative Clauses", formula: "who/which/that/where/when/whose", example: "The man who lives here is kind / The book that I read", use: "Describe noun", level: "B1" },
  { id: "Gerund vs Infinitive", formula: "enjoy + V-ing / want + to + V1 / stop + V-ing vs to V1", example: "I enjoy cooking / I want to cook / I stopped smoking", use: "Verb patterns", level: "B1" },
  { id: "Comparatives Superlatives", formula: "more...than / most / -er than / -est / as...as", example: "More expensive than / The most expensive / As big as", use: "Comparison", level: "A2" },
  { id: "Articles A An The", formula: "a/an = new, the = known, Ø = general/plural", example: "A dog is an animal. The dog is mine. Dogs are friendly", use: "Articles", level: "A1" },
  { id: "Countable Uncountable", formula: "much/many, a lot of, few/little, some/any", example: "Much water, many books, a lot of time, few friends, little money", use: "Quantity", level: "A2" }
];

// ================= AVATAR ENGINE V6 - 6 IMATGES OFICIALS DEFINITIVES =================
export const AVATAR_ENGINE_V6 = {
  name: "Laia Oficial 6 Imatges - lenguaje-pro",
  base_style: "brown wavy short, black blazer, white shirt, gray pants, clipboard, flat cartoon HD",
  render: { type: "Rive", file: "laia_6.riv", size_kb: 150, position: "fixed bottom-right 40%, always visible, idle_blink" },
  files: {
    IMG_0_FURIOUS: { id: 0, file: "laia_0_furious.jpg", src_ref: "wa_image_3479569861984805003_0", desc: "molt enfadada furiosa assenyalant esquerra", anim: "pointing_loop_hard", tts: { text: "Tete, parem. És HAS, no have. Present Simple tercera persona!", rate: 0.9, tone: "firme" }, trigger: "same_error_count >=3", block: true },
    IMG_1_OBSERVER: { id: 1, file: "laia_1_observer.jpg", src_ref: "wa_image_3479569861984805003_1", desc: "braços creuats observant clipboard pit", anim: "idle_blink", tts: { text: "...", rate: 0, tone: "silence" }, trigger: "cefr >=B1 && flow_mode" },
    IMG_2_EMPATICA: { id: 2, file: "laia_2_empatica.jpg", src_ref: "wa_image_3479569861984805003_2", desc: "mà oberta explicant empatica", anim: "soft_breathe_open_hand", tts: { text: "Tranquil, in/on/at i els condicionals ho confon tothom.", rate: 1.0, tone: "suave" }, trigger: "hesitation_ms >4000 || accuracy_7d <0.5" },
    IMG_3_CELEBRATORIA: { id: 3, file: "laia_3_celebratoria.jpg", src_ref: "wa_image_3479569861984805003_3", desc: "somriure gran feliç assenyalant esquerra celebrant", anim: "jump_confetti", tts: { text: "¡BOOM! ¡Lo has clavado! Level up!", rate: 1.3, tone: "alegre" }, trigger: "streak_days >=7 || level_up || accuracy>=0.9" },
    IMG_4_COLEGA: { id: 4, file: "laia_4_colega.jpg", src_ref: "wa_image_3479569861984805003_4", desc: "somriure suau colega assenyalant tutorial", anim: "pointing_side_happy", tts: { text: "Va tete, aquesta te la saps! Knead és amasar.", rate: 1.1, tone: "cercana" }, trigger: "accuracy_7d >=0.8 || tutorial" },
    IMG_5_STRICT_LIGHT: { id: 5, file: "laia_5_strict_light.jpg", src_ref: "wa_image_7868338970047449473_0", desc: "molesta lleu assenyalant esquerra cella aixecada", anim: "pointing_side_left", tts: { text: "Tete, això ja ho hem vist.", rate: 1.0, tone: "seria" }, trigger: "same_error_count == 2", block: false }
  },
  decideByMetrics: (m) => {
    if (m.same_error_count >= 3) return "IMG_0_FURIOUS";
    if (m.same_error_count === 2) return "IMG_5_STRICT_LIGHT";
    if (m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) return "IMG_3_CELEBRATORIA";
    if (m.cefr_level === "B1" && m.flow_mode) return "IMG_1_OBSERVER";
    if (m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) return "IMG_2_EMPATICA";
    if (m.accuracy_7d >= 0.8) return "IMG_4_COLEGA";
    return "IMG_4_COLEGA";
  }
};

export const EMOTION_ENGINE = { decide: (m) => AVATAR_ENGINE_V6.decideByMetrics(m) };

// ================= MOTOR FINAL 50 ÀREES - COMPLET =================
export const LAYA_FINAL = {
  version: "6.0 DEFINITIVO - 6 Imatges + 28 Gram + 72 Vocab + 50 Areas - lenguaje-pro",
  VOCAB: VOCAB_REAL,
  GRAMMAR: GRAMMAR_REAL,
  AVATAR: AVATAR_ENGINE_V6,

  AREAS: {
    1: { name: "Money Basics", topic: "Why Most People Never Become Rich", vocab: "collocations.have", grammar: ["Present Simple","Modals Possibility Deduction"], future: "First Conditional", baseImg: "IMG_4_COLEGA" },
    2: { name: "Saving", topic: "The Power of Saving Small", vocab: "timeMarkers", grammar: ["Present Perfect","Present Perfect Continuous"], future: "Future Going To", baseImg: "IMG_4_COLEGA" },
    3: { name: "Smart Spending", topic: "Smart Spending Habits", vocab: "adjectives.objeto", grammar: ["Present Simple","Countable Uncountable"], future: "Will vs Going To", baseImg: "IMG_4_COLEGA" },
    4: { name: "Investing", topic: "How Investing Builds Freedom", vocab: "conectores40", grammar: ["Future Simple Will","First Conditional"], future: "Future Perfect", baseImg: "IMG_4_COLEGA" },
    5: { name: "Work", topic: "Why Hard Work Matters", vocab: "move16", grammar: ["Past Simple","Past Continuous"], future: "Second Conditional", baseImg: "IMG_0_FURIOUS" },
    6: { name: "Career", topic: "How to Grow in Your Career", vocab: "survival50", grammar: ["Present Perfect","Past Perfect"], future: "Future Continuous", baseImg: "IMG_4_COLEGA" },
    7: { name: "Opportunity", topic: "Why English Is The Language of Opportunity", vocab: "conectores40", grammar: ["Present Simple","Modals Ability"], future: "First Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    8: { name: "Business", topic: "How Small Business Starts", vocab: "verbPrep40", grammar: ["Present Simple","Passive Voice Present Past"], future: "Future Going To", baseImg: "IMG_4_COLEGA" },
    9: { name: "Time Is Money", topic: "Why Time Is More Valuable Than Money", vocab: "timeMarkers", grammar: ["Present Perfect","Articles A An The"], future: "Future Perfect", baseImg: "IMG_2_EMPATICA" },
    10:{ name: "Rich vs Poor Mind", topic: "How Rich People Think Different", vocab: "adjectives.pers", grammar: ["Present Simple","Comparatives Superlatives"], future: "Second Conditional", baseImg: "IMG_5_STRICT_LIGHT" },
    11:{ name: "Positive Mindset", topic: "Why a Positive Mindset Helps Overcome Challenges", vocab: "adjectives.emocion", grammar: ["Past Simple","Present Perfect"], future: "Zero Conditional", baseImg: "IMG_2_EMPATICA" },
    12:{ name: "Growth Mindset", topic: "The Power of Growth Mindset", vocab: "adjectives.pers", grammar: ["Present Simple","Gerund vs Infinitive"], future: "First Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    13:{ name: "Confidence", topic: "How to Build Real Confidence", vocab: "survival50", grammar: ["Modals Ability","Modals Obligation"], future: "Future Simple Will", baseImg: "IMG_3_CELEBRATORIA" },
    14:{ name: "Fear", topic: "Why Fear Stops Most People", vocab: "adjectives.emocion", grammar: ["Present Simple","Past Simple"], future: "Second Conditional", baseImg: "IMG_2_EMPATICA" },
    15:{ name: "Failure", topic: "Why Failure Is Your Best Teacher", vocab: "conectores40", grammar: ["Present Perfect","Past Perfect"], future: "Third Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    16:{ name: "Success", topic: "What Success Really Means", vocab: "conectores40", grammar: ["Present Simple","Present Continuous"], future: "Future Perfect", baseImg: "IMG_3_CELEBRATORIA" },
    17:{ name: "Progress", topic: "The Power of Progress", vocab: "move16", grammar: ["Past Simple","Past Continuous"], future: "Future Continuous", baseImg: "IMG_4_COLEGA" },
    18:{ name: "Taking Action", topic: "Why Taking Action Can Change Your Life", vocab: "move16", grammar: ["Past Simple","Modals Obligation"], future: "First Conditional", baseImg: "IMG_0_FURIOUS" },
    19:{ name: "Discipline", topic: "Why Discipline Beats Motivation", vocab: "verbPrep40", grammar: ["Present Simple","Modals Obligation"], future: "Zero Conditional", baseImg: "IMG_0_FURIOUS" },
    20:{ name: "Motivation", topic: "Where Real Motivation Comes From", vocab: "survival50", grammar: ["Present Continuous","Present Perfect"], future: "Will vs Going To", baseImg: "IMG_3_CELEBRATORIA" },
    21:{ name: "Focus", topic: "The Power of Deep Focus", vocab: "conectores40", grammar: ["Present Simple","Gerund vs Infinitive"], future: "Future Simple Will", baseImg: "IMG_4_COLEGA" },
    22:{ name: "Procrastination", topic: "Why We Procrastinate", vocab: "timeMarkers", grammar: ["Present Simple","Present Continuous"], future: "Second Conditional", baseImg: "IMG_2_EMPATICA" },
    23:{ name: "Gratitude", topic: "Why Gratitude Changes Everything", vocab: "adjectives.emocion", grammar: ["Present Perfect","Present Simple"], future: "Zero Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    24:{ name: "Happiness", topic: "How to Find Real Happiness", vocab: "adjectives.emocion", grammar: ["Present Simple","Past Simple"], future: "First Conditional", baseImg: "IMG_2_EMPATICA" },
    25:{ name: "Stress", topic: "How to Handle Stress", vocab: "adjectives.emocion", grammar: ["Present Continuous","Modals Possibility Deduction"], future: "Will vs Going To", baseImg: "IMG_2_EMPATICA" },
    26:{ name: "Good Habits", topic: "Why Building Good Habits Leads to Success", vocab: "kitchen50", grammar: ["Present Simple","Articles A An The"], future: "Zero Conditional", baseImg: "IMG_4_COLEGA" },
    27:{ name: "Bad Habits", topic: "The Money Habits That Keep You Poor", vocab: "collocations.have", grammar: ["Present Simple","Countable Uncountable"], future: "First Conditional", baseImg: "IMG_5_STRICT_LIGHT" },
    28:{ name: "Morning Routine", topic: "The Power of a Morning Routine", vocab: "timeMarkers", grammar: ["Present Simple","Present Continuous"], future: "Future Going To", baseImg: "IMG_3_CELEBRATORIA" },
    29:{ name: "Goals", topic: "The Power of Setting Goals", vocab: "survival50", grammar: ["Future Simple Will","Future Going To"], future: "First Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    30:{ name: "Planning", topic: "Why Planning Saves Your Future", vocab: "conectores40", grammar: ["Future Simple Will","Future Perfect"], future: "Future Continuous", baseImg: "IMG_4_COLEGA" },
    31:{ name: "Time Management", topic: "How to Manage Your Time", vocab: "timeMarkers", grammar: ["Present Perfect","Modals Obligation"], future: "Second Conditional", baseImg: "IMG_0_FURIOUS" },
    32:{ name: "Health", topic: "Why Health Is Real Wealth", vocab: "adjectives.pers", grammar: ["Present Simple","Modals Obligation"], future: "First Conditional", baseImg: "IMG_2_EMPATICA" },
    33:{ name: "Sleep", topic: "The Power of Good Sleep", vocab: "move16", grammar: ["Present Simple","Past Simple"], future: "Will vs Going To", baseImg: "IMG_4_COLEGA" },
    34:{ name: "Healthy Food", topic: "How Food Affects Your Energy", vocab: "kitchen50", grammar: ["Present Simple","Countable Uncountable"], future: "Zero Conditional", baseImg: "IMG_4_COLEGA" },
    35:{ name: "Fitness", topic: "Why Small Exercise Changes Your Life", vocab: "move16", grammar: ["Present Continuous","Present Perfect Continuous"], future: "Future Going To", baseImg: "IMG_3_CELEBRATORIA" },
    36:{ name: "Learning", topic: "Learn More, Earn More", vocab: "survival50", grammar: ["Present Perfect","Relative Clauses"], future: "Future Perfect", baseImg: "IMG_3_CELEBRATORIA" },
    37:{ name: "Reading", topic: "Why Reading Makes You Richer", vocab: "conectores40", grammar: ["Present Simple","Passive Voice Present Past"], future: "Second Conditional", baseImg: "IMG_4_COLEGA" },
    38:{ name: "Consistency", topic: "Why Consistency Beats Talent", vocab: "verbPrep40", grammar: ["Present Simple","Present Perfect"], future: "Zero Conditional", baseImg: "IMG_0_FURIOUS" },
    39:{ name: "Patience", topic: "The Power of Patience", vocab: "adjectives.pers", grammar: ["Present Simple","Past Perfect"], future: "Future Continuous", baseImg: "IMG_2_EMPATICA" },
    40:{ name: "Kindness", topic: "Why Kindness Is Strength", vocab: "adjectives.pers", grammar: ["Present Simple","Modals Ability"], future: "First Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    41:{ name: "Family", topic: "My Family Is My Strength", vocab: "survival50", grammar: ["Present Simple","Past Simple"], future: "Second Conditional", baseImg: "IMG_2_EMPATICA" },
    42:{ name: "Grandmother", topic: "My Grandmother Is My Inspiration", vocab: "adjectives.pers", grammar: ["Past Simple","Past Continuous","Used To"], future: "Second Conditional", baseImg: "IMG_4_COLEGA" },
    43:{ name: "Friends", topic: "How Real Friends Help You Grow", vocab: "adjectives.pers", grammar: ["Present Simple","Relative Clauses"], future: "First Conditional", baseImg: "IMG_4_COLEGA" },
    44:{ name: "Love", topic: "Why Love Makes Us Stronger", vocab: "adjectives.emocion", grammar: ["Present Simple","Present Perfect"], future: "Third Conditional", baseImg: "IMG_2_EMPATICA" },
    45:{ name: "Respect", topic: "Why Respect Is Everything", vocab: "verbPrep40", grammar: ["Present Simple","Modals Obligation"], future: "Zero Conditional", baseImg: "IMG_5_STRICT_LIGHT" },
    46:{ name: "Honesty", topic: "Why Honesty Builds Trust", vocab: "adjectives.pers", grammar: ["Present Simple","Reported Speech"], future: "First Conditional", baseImg: "IMG_4_COLEGA" },
    47:{ name: "Responsibility", topic: "The Power of Responsibility", vocab: "verbPrep40", grammar: ["Present Simple","Passive Voice Present Past"], future: "Future Perfect", baseImg: "IMG_0_FURIOUS" },
    48:{ name: "Delivery Life", topic: "My Life Delivering Food", vocab: "move16", grammar: ["Present Continuous","Past Simple"], future: "Future Going To", baseImg: "IMG_4_COLEGA" },
    49:{ name: "Alignment", topic: "Why Alignment Creates Success", vocab: "conectores40", grammar: ["Present Simple","Gerund vs Infinitive"], future: "First Conditional", baseImg: "IMG_3_CELEBRATORIA" },
    50:{ name: "Willpower", topic: "The Power of Willpower", vocab: "move16", grammar: ["Future Simple Will","Future Continuous"], future: "Future Perfect", baseImg: "IMG_3_CELEBRATORIA" }
  },

  generate: function(areaId, level = "A2", userMetrics = {}) {
    const area = this.AREAS[areaId];
    const grammarMain = GRAMMAR_REAL.find(g=>g.id===area.grammar[0]);
    const grammarSecond = GRAMMAR_REAL.find(g=>g.id===area.grammar[1]) || null;
    const grammarFuture = GRAMMAR_REAL.find(g=>g.id===area.future);
    const vocabRaw = this.VOCAB[area.vocab.split(".")[0]] || this.VOCAB.kitchen50;
    const vocabList = Array.isArray(vocabRaw)? vocabRaw : Object.values(vocabRaw).flat();
    const imgKey = EMOTION_ENGINE.decide({...userMetrics, cefr_level: level});
    const avatar = AVATAR_ENGINE_V6.files[imgKey];
    const wordCount = { A1: "130-160", A2: "150-180", B1: "160-190", B2: "180-220" }[level];

    return {
      meta: {
        area: area.name, topic: area.topic, level,
        grammar_main: grammarMain,
        grammar_second: grammarSecond,
        grammar_future: grammarFuture,
        vocab: vocabList.slice(0,6),
        emotion: imgKey,
        avatar_file: avatar.file,
        xp: level==="A1"?10:level==="A2"?15:level==="B1"?20:25,
        srs: vocabList.slice(0,5),
        mistake_prevention: grammarMain.mistake
      },
      avatarState: avatar,
      prompt: `
Level ${level} - Topic: ${area.topic}
GRAMMAR MAIN: ${grammarMain.formula} | Ex: ${grammarMain.example} | Use: ${grammarMain.use}
${grammarSecond?`GRAMMAR 2: ${grammarSecond.formula} | Ex: ${grammarSecond.example}`:''}
FUTURE/CONDITIONAL: ${grammarFuture.formula} | Ex: ${grammarFuture.example} | Use: ${grammarFuture.use}
Mistake to fix: ${grammarMain.mistake || 'none'}
Vocab ONLY: ${vocabList.slice(0,6).join(", ")}
Must include: ${level==="B1"||level==="B2"?"Passive or Reported Speech + If clause + Time marker (since/for/until)":"Time marker (since/for/until) + 1 If clause"}
Word count: ${wordCount}, Max 15-22 words/sentence
Structure 6 blocks: Title, Hello everyone Today I want to talk about..., One day he decided to..., Over time/After some time..., So remember..., Quote: "Wealth is..." + Thank you.
Style: Super simple like images, no difficult words, emotional.
`.trim(),
      quizAuto: {
        tense_choice: `Will vs Going to: Look! Those clouds! It ___ (rain) -> is going to rain`,
        conditional: `${grammarFuture.id}: Complete: If I ___ (have) money, I ___ (travel) -> ${grammarFuture.example}`,
        mistake_fix: grammarMain.mistake,
        passive: `Make passive: Maria made the cake -> The cake was made by Maria`,
        vocab: `What is '${vocabList[0]}'? Noun/Verb/Adjective? Translate.`
      }
    };
  }
};
