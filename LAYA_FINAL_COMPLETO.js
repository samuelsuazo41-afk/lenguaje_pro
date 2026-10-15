// LAYA_FINAL_COMPLETO.js - V10.1 FINAL - TODO INCLUIDO + HISTORIAS REALES
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
export const AVATAR_ENGINE_V6 = {
  files: {
    IMG_0_FURIOUS: { id:0, file:"laia_0_furiosa.png", tts:{ text:"¡Tete, 3 veces lo mismo! Parem. Es HAS, no have. Hasta que no lo clavas, 0 XP.", rate:0.85 }, emotion:"FURIOSA", color:"#ef4444", anim:"shake" },
    IMG_1_OBSERVER: { id:1, file:"laia_1_observer.png", tts:{ text:"Te observo. Vas en flow, no te interrumpo.", rate:1.0 }, emotion:"OBSERVER", color:"#60a5fa", anim:"idle" },
    IMG_2_EMPATICA: { id:2, file:"laia_2_empatica.png", tts:{ text:"Respira. Se que cuesta. Vamos a hacerlo juntos.", rate:0.9 }, emotion:"EMPATICA", color:"#a78bfa", anim:"soft" },
    IMG_3_CELEBRATORIA: { id:3, file:"laia_3_celebratoria.png", tts:{ text:"Boom! Lo clavaste! Esa es mi gente!", rate:1.25 }, emotion:"CELEBRATORIA", color:"#22c55e", anim:"jump" },
    IMG_4_COLEGA: { id:4, file:"laia_4_colega.png", tts:{ text:"Vamos tete, tu puedes. Elige un area y le damos cana.", rate:1.1 }, emotion:"COLEGA", color:"#8b5cf6", anim:"float" },
    IMG_5_STRICT_LIGHT: { id:5, file:"laia_5_strict_light.png", tts:{ text:"Ojo. Te estas desviando. Vuelve al foco.", rate:1.0 }, emotion:"STRICT", color:"#f59e0b", anim:"pulse" }
  },
  decideByMetrics(m){
    if(m.same_error_count >= 3) return "IMG_0_FURIOUS";
    if(m.same_error_count === 2) return "IMG_5_STRICT_LIGHT";
    if(m.streak_days >= 7 || m.level_up || m.accuracy_7d >= 0.9) return "IMG_3_CELEBRATORIA";
    if(m.cefr_level==="B1" && m.flow_mode) return "IMG_1_OBSERVER";
    if(m.hesitation_ms > 4000 || m.accuracy_7d < 0.5) return "IMG_2_EMPATICA";
    return "IMG_4_COLEGA";
  }
};
export const EMOTION_ENGINE = AVATAR_ENGINE_V6;
export const LAYA_FINAL = {
  version: "10.1 COMPLETO + HISTORIAS REALES - TODO",
  VOCAB: VOCAB_REAL,
  GRAMMAR: GRAMMAR_REAL,
  AVATAR: AVATAR_ENGINE_V6,
  AREAS: {
    1: { name:"Money Basics", topic:"Why Most People Never Become Rich", vocab:["collHaveTake","survival50","pronPoss"], grammar:["PS_3RD_S","COND_1"], future:"COND_1", level:"A1", baseImg:"IMG_4_COLEGA" },
    2: { name:"Saving", topic:"The Power of Saving Small", vocab:["survival50","quantifiers","sinceForUntil"], grammar:["THERE_QUANT","PRES_PERF"], future:"FUT_GOING", level:"A1", baseImg:"IMG_4_COLEGA" },
    3: { name:"Smart Spending", topic:"Smart Spending Habits", vocab:["adjObject","survival50"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"WILL_VS_GOING", level:"A1", baseImg:"IMG_4_COLEGA" },
    4: { name:"Investing", topic:"How Investing Builds Freedom", vocab:["conectores40","business"], grammar:["FUT_WILL","COND_1"], future:"FUT_PERF", level:"A2", baseImg:"IMG_4_COLEGA" },
    5: { name:"Work", topic:"Why Hard Work Matters", vocab:["move16","survival50"], grammar:["PAST_SIMP","PAST_CONT"], future:"COND_2", level:"A2", baseImg:"IMG_0_FURIOUS" },
    6: { name:"Career", topic:"How to Grow in Your Career", vocab:["survival50","business","verbPrep40"], grammar:["PRES_PERF","PAST_PERF"], future:"FUT_CONT", level:"B1", baseImg:"IMG_4_COLEGA" },
    7: { name:"Opportunity", topic:"Why English Is The Language of Opportunity", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","MOD_CAN"], future:"COND_1", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    8: { name:"Business", topic:"How Small Business Starts", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"FUT_GOING", level:"A2", baseImg:"IMG_4_COLEGA" },
    9: { name:"Time Is Money", topic:"Why Time Is More Valuable Than Money", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","PRES_PERF"], future:"FUT_PERF", level:"A1", baseImg:"IMG_2_EMPATICA" },
    10:{ name:"Rich vs Poor Mind", topic:"How Rich People Think Different", vocab:["adjPerson","conectores40"], grammar:["PS_3RD_S","COMP_SUP"], future:"COND_2", level:"A2", baseImg:"IMG_5_STRICT_LIGHT" },
    11:{ name:"Positive Mindset", topic:"Why a Positive Mindset Helps Overcome Challenges", vocab:["adjEmotion","conectores40"], grammar:["PAST_SIMP","PRES_PERF"], future:"COND_0", level:"A2", baseImg:"IMG_2_EMPATICA" },
    12:{ name:"Growth Mindset", topic:"The Power of Growth Mindset", vocab:["adjPerson","survival50"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    13:{ name:"Confidence", topic:"How to Build Real Confidence", vocab:["survival50","adjPerson","pronPoss"], grammar:["MOD_CAN","MOD_MUST"], future:"FUT_WILL", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    14:{ name:"Fear", topic:"Why Fear Stops Most People", vocab:["adjEmotion","survival50"], grammar:["MOD_CAN","PRES_PERF"], future:"COND_2", level:"A2", baseImg:"IMG_2_EMPATICA" },
    15:{ name:"Failure", topic:"Why Failure Is Your Best Teacher", vocab:["conectores40","survival50"], grammar:["PRES_PERF","PAST_PERF"], future:"COND_3", level:"B1", baseImg:"IMG_3_CELEBRATORIA" },
    16:{ name:"Success", topic:"What Success Really Means", vocab:["conectores40","survival50"], grammar:["PS_3RD_S","PRES_CONT"], future:"FUT_PERF", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    17:{ name:"Progress", topic:"The Power of Progress", vocab:["move16","prepTime"], grammar:["PAST_SIMP","PAST_CONT"], future:"FUT_CONT", level:"A2", baseImg:"IMG_4_COLEGA" },
    18:{ name:"Taking Action", topic:"Why Taking Action Can Change Your Life", vocab:["move16","phrasalVerbs50"], grammar:["PAST_SIMP","MOD_MUST"], future:"COND_1", level:"A2", baseImg:"IMG_0_FURIOUS" },
    19:{ name:"Discipline", topic:"Why Discipline Beats Motivation", vocab:["verbPrep40","business"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2", baseImg:"IMG_0_FURIOUS" },
    20:{ name:"Motivation", topic:"Where Real Motivation Comes From", vocab:["survival50","adjEmotion"], grammar:["PRES_CONT","PRES_PERF"], future:"WILL_VS_GOING", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    21:{ name:"Focus", topic:"The Power of Deep Focus", vocab:["conectores40","business"], grammar:["PS_3RD_S","GERUND_INF"], future:"FUT_WILL", level:"A2", baseImg:"IMG_4_COLEGA" },
    22:{ name:"Procrastination", topic:"Why We Procrastinate", vocab:["sinceForUntil","prepTime"], grammar:["PS_3RD_S","PRES_CONT"], future:"COND_2", level:"A2", baseImg:"IMG_2_EMPATICA" },
    23:{ name:"Gratitude", topic:"Why Gratitude Changes Everything", vocab:["adjEmotion","pronPoss"], grammar:["PRON_PER_POSS","PRES_PERF"], future:"COND_0", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    24:{ name:"Happiness", topic:"How to Find Real Happiness", vocab:["adjEmotion","conectores40"], grammar:["PS_3RD_S","PAST_SIMP"], future:"COND_1", level:"A2", baseImg:"IMG_2_EMPATICA" },
    25:{ name:"Stress", topic:"How to Handle Stress", vocab:["adjEmotion","verbPrep40"], grammar:["PRES_CONT","MOD_MIGHT"], future:"WILL_VS_GOING", level:"A2", baseImg:"IMG_2_EMPATICA" },
    26:{ name:"Good Habits", topic:"Why Building Good Habits Leads to Success", vocab:["kitchen50","collHaveTake"], grammar:["PS_3RD_S","ART_DET"], future:"COND_0", level:"A1", baseImg:"IMG_4_COLEGA" },
    27:{ name:"Bad Habits", topic:"The Money Habits That Keep You Poor", vocab:["collHaveTake","survival50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_1", level:"A1", baseImg:"IMG_5_STRICT_LIGHT" },
    28:{ name:"Morning Routine", topic:"The Power of a Morning Routine", vocab:["sinceForUntil","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1", baseImg:"IMG_3_CELEBRATORIA" },
    29:{ name:"Goals", topic:"The Power of Setting Goals", vocab:["survival50","business"], grammar:["FUT_WILL","FUT_GOING"], future:"COND_1", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    30:{ name:"Planning", topic:"Why Planning Saves Your Future", vocab:["conectores40","business"], grammar:["WILL_VS_GOING","CONN_LOGIC"], future:"FUT_CONT", level:"A2", baseImg:"IMG_4_COLEGA" },
    31:{ name:"Time Management", topic:"How to Manage Your Time", vocab:["sinceForUntil","prepTime","quantifiers"], grammar:["PREP_IN_ON_AT","THERE_QUANT"], future:"COND_2", level:"A1", baseImg:"IMG_0_FURIOUS" },
    32:{ name:"Health", topic:"Why Health Is Real Wealth", vocab:["adjPerson","move16"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_1", level:"A1", baseImg:"IMG_2_EMPATICA" },
    33:{ name:"Sleep", topic:"The Power of Good Sleep", vocab:["move16","prepTime"], grammar:["PS_3RD_S","PAST_SIMP"], future:"WILL_VS_GOING", level:"A1", baseImg:"IMG_4_COLEGA" },
    34:{ name:"Healthy Food", topic:"How Food Affects Your Energy", vocab:["kitchen50","quantifiers"], grammar:["PS_3RD_S","COUNT_UNCOUNT"], future:"COND_0", level:"A1", baseImg:"IMG_4_COLEGA" },
    35:{ name:"Fitness", topic:"Why Small Exercise Changes Your Life", vocab:["move16","adjEmotion"], grammar:["PRES_CONT","PRES_PERF_CONT"], future:"FUT_GOING", level:"A2", baseImg:"IMG_3_CELEBRATORIA" },
    36:{ name:"Learning", topic:"Learn More, Earn More", vocab:["survival50","verbPrep40"], grammar:["PRES_PERF","RELATIVE"], future:"FUT_PERF", level:"B1", baseImg:"IMG_3_CELEBRATORIA" },
    37:{ name:"Reading", topic:"Why Reading Makes You Richer", vocab:["conectores40","business"], grammar:["PS_3RD_S","PASS_BASIC"], future:"COND_2", level:"B1", baseImg:"IMG_4_COLEGA" },
    38:{ name:"Consistency", topic:"Why Consistency Beats Talent", vocab:["verbPrep40","conectores40"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_0", level:"A2", baseImg:"IMG_0_FURIOUS" },
    39:{ name:"Patience", topic:"The Power of Patience", vocab:["adjPerson","sinceForUntil"], grammar:["PS_3RD_S","PAST_PERF"], future:"FUT_CONT", level:"B1", baseImg:"IMG_2_EMPATICA" },
    40:{ name:"Kindness", topic:"Why Kindness Is Strength", vocab:["adjPerson","pronPoss"], grammar:["PRON_PER_POSS","MOD_CAN"], future:"COND_1", level:"A1", baseImg:"IMG_3_CELEBRATORIA" },
    41:{ name:"Family", topic:"My Family Is My Strength", vocab:["survival50","pronPoss","adjPerson"], grammar:["PRON_PER_POSS","THERE_QUANT"], future:"COND_2", level:"A1", baseImg:"IMG_2_EMPATICA" },
    42:{ name:"Grandmother", topic:"My Grandmother Is My Inspiration", vocab:["adjPerson","pronPoss","sinceForUntil"], grammar:["USED_TO","PAST_CONT"], future:"COND_2", level:"B1", baseImg:"IMG_4_COLEGA" },
    43:{ name:"Friends", topic:"How Real Friends Help You Grow", vocab:["adjPerson","pronPoss"], grammar:["PS_3RD_S","RELATIVE"], future:"COND_1", level:"A2", baseImg:"IMG_4_COLEGA" },
    44:{ name:"Love", topic:"Why Love Makes Us Stronger", vocab:["adjEmotion","pronPoss"], grammar:["PS_3RD_S","PRES_PERF"], future:"COND_3", level:"B1", baseImg:"IMG_2_EMPATICA" },
    45:{ name:"Respect", topic:"Why Respect Is Everything", vocab:["verbPrep40","adjPerson"], grammar:["PS_3RD_S","MOD_MUST"], future:"COND_0", level:"A2", baseImg:"IMG_5_STRICT_LIGHT" },
    46:{ name:"Honesty", topic:"Why Honesty Builds Trust", vocab:["adjPerson","business"], grammar:["PS_3RD_S","REPORTED"], future:"COND_1", level:"B1", baseImg:"IMG_4_COLEGA" },
    47:{ name:"Responsibility", topic:"The Power of Responsibility", vocab:["verbPrep40","quantifiers","pronPoss"], grammar:["THERE_QUANT","PASS_BASIC"], future:"FUT_PERF", level:"A1", baseImg:"IMG_0_FURIOUS" },
    48:{ name:"Delivery Life", topic:"My Life Delivering Food", vocab:["move16","prepTime","collHaveTake"], grammar:["PREP_IN_ON_AT","PRES_CONT"], future:"FUT_GOING", level:"A1", baseImg:"IMG_4_COLEGA" },
    49:{ name:"Alignment", topic:"Why Alignment Creates Success", vocab:["conectores40","business","quantifiers"], grammar:["PS_3RD_S","GERUND_INF"], future:"COND_1", level:"B1", baseImg:"IMG_3_CELEBRATORIA" },
    50:{ name:"Willpower", topic:"The Power of Willpower", vocab:["move16","adjEmotion","conectores40"], grammar:["FUT_WILL","FUT_CONT"], future:"FUT_PERF", level:"B2", baseImg:"IMG_3_CELEBRATORIA" }
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
    if(!area) return { prompt:"Elige area primero tete!", story:"Elige area primero tete!", meta:{ area:"?", topic:"?", level, grammar_main:{id:"?",formula:"?",example:"?"}, grammar_future:{id:"?",formula:"?",example:"?"}, vocab:[], emotion:"COLEGA", avatar_file:"laia_4_colega.png", xp:0, bloqueado:false } };
    const gMain = GRAMMAR_REAL[area.grammar[0]] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.grammar[0]) || Object.values(GRAMMAR_REAL)[0];
    const gSecond = area.grammar[1]? (GRAMMAR_REAL[area.grammar[1]] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.grammar[1])) : null;
    const gFuture = GRAMMAR_REAL[area.future] || Object.values(GRAMMAR_REAL).find(g=>g.id===area.future) || GRAMMAR_REAL.COND_1;
    const vocabList = area.vocab.map(v=>{ const val=VOCAB_REAL[v]; if(!val) return []; return Array.isArray(val)?val:Object.values(val).flat(); }).flat().slice(0,10);
    const avatarKey = AVATAR_ENGINE_V6.decideByMetrics({...metrics, cefr_level: level});
    const avatar = AVATAR_ENGINE_V6.files[avatarKey];
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
    const prompt = "Level " + level + " - Topic: " + area.topic + " AREA " + areaId + ": " + area.name + " Story: " + story + " XP: " + xp;
    return {
      prompt: prompt,
      story: story,
      meta: { area: area.name, topic: area.topic, level, grammar_main: gMain, grammar_second: gSecond, grammar_future: gFuture, vocab: vocabList, emotion: avatar.emotion, avatar_file: avatar.file, avatar_key: avatarKey, xp, bloqueado, mistake_prevention: gMain.mistake, wordCount, superDic: VOCAB_REAL.superDicSyllables },
      quizAuto: { tense_choice: gMain.example, conditional: gFuture.example, mistake_fix: gMain.mistake, blocked: bloqueado },
      avatarState: avatar
    };
  }
};
export const LAYA_FINAL_COMPLETO = LAYA_FINAL;