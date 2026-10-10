// LENGUAJE-PRO-V5-6-IMATGES-DEFINITIU.js
// Version: 5.0 - 6 Imatges Oficials + 28 Tenses + 72 Vocab - FINAL
// Repo: lenguaje-pro
// Data: 10-10-2026
// Laia: brown wavy short, black blazer, white shirt, gray pants, clipboard

// ================= VOCAB REAL - 72 IMATGES =================
const VOCAB_REAL = {
  kitchen50: ["Cook/Bake/Boil/Fry/Chop/Peel/Mix/Knead/Pour/Taste/Serve/Mash/Squeeze/Flip/Store/Freeze","Dish/Pot/Pan/Knife/Oven/Stove"],
  move16: ["PUSH/PULL/LIFT/DROP/THROW/CATCH/JUMP/ROLL/SLIDE/CLIMB/FALL/FLOAT"],
  collocations: { have:["Have a drink/rest/shower"], take:["Take a break/look/chance/photo"], do:["Do work/dishes/yoga"], make:["Make a mess/money/decision"], go:["Go home/shopping/crazy"], get:["Get lost/ready/married"], put:["Put on/off"] },
  verbPrep40: ["talk ABOUT","work DURING","look AFTER","believe IN","depend ON","wait FOR","care ABOUT","agree WITH","listen TO","arrive AT/IN"],
  timeMarkers: { since:"since Monday/2010", for:"for a while/2 weeks", until:"until tomorrow/5pm", during:"during meeting", while:"while cooking", already_yet_just:"already/yet/just/ever/never" },
  adjectives: { pers:["Kind/Rude/Smart/Funny/Honest/Brave/Shy/Confident"], emocion:["Happy/Sad/Angry/Excited/Scared/Nervous/Proud"], objeto:["New/Old/Big/Cheap/Useful/Expensive"] },
  survival50: ["I have a question","Can you help me?","I don't understand","What does it mean?","Can you explain?","In my opinion","Could you repeat?"],
  conectores40: ["Moreover","However","Therefore","For example","Finally","In contrast","Meanwhile","Nevertheless","Although","Because"],
  silentLetters: ["knife/knee/know","doubt/debt/bomb","gnome/sign/design","honest/hour","castle/listen","write/wrong/wrist"],
  phrasalVerbs50: ["turn on/off, get up, go out, come back, look for, look after, give up, find out, run out of, take off"],
  business: ["budget/profit/loss/investment/deadline/target/growth/risk/loan/debt/salary"],
  idioms: ["over the moon, piece of cake, costs an arm and a leg"]
};

// ================= GRAMMAR REAL - 28 ESTRUCTURES =================
const GRAMMAR_REAL = [
  { id:"Present Simple", formula:"Sub + V1(s/es)", example:"He plays every day", use:"Habits", level:"A1", mistake:"He play -> He PLAYS" },
  { id:"Present Continuous", formula:"am/is/are + V-ing", example:"I am studying now", use:"Now", level:"A1" },
  { id:"Present Perfect", formula:"has/have + V3", example:"She has finished", use:"Experience", level:"A2", keywords:"already/yet/just/ever/never" },
  { id:"Present Perfect Continuous", formula:"has/have + been + V-ing", example:"I have been working 2h", use:"Duration", level:"B1" },
  { id:"Past Simple", formula:"V2 / was-were", example:"I swam yesterday", use:"Finished past", level:"A1" },
  { id:"Past Continuous", formula:"was/were + V-ing", example:"I was cooking when he arrived", use:"Interrupted", level:"A2" },
  { id:"Past Perfect", formula:"had + V3", example:"I had eaten before he came", use:"Before past", level:"B1" },
  { id:"Past Perfect Continuous", formula:"had + been + V-ing", example:"I had been waiting 1h", use:"Duration before past", level:"B1" },
  { id:"Future Simple Will", formula:"will + V1", example:"I will help you", use:"Decision now", level:"A1" },
  { id:"Future Going To", formula:"going to + V1", example:"I am going to study", use:"Plan", level:"A1" },
  { id:"Future Continuous", formula:"will be + V-ing", example:"I will be working at 8pm", use:"Progress in future", level:"B1" },
  { id:"Future Perfect", formula:"will have + V3", example:"I will have finished by 5pm", use:"Completed before future", level:"B2" },
  { id:"Will vs Going To", formula:"Will=now / Going to=plan", example:"It's going to rain vs I will answer", use:"Distinction", level:"A2" },
  { id:"Modals Ability", formula:"can/could/be able to", example:"I can swim", use:"Ability", level:"A1" },
  { id:"Modals Obligation", formula:"must/have to/should", example:"You must wear uniform", use:"Obligation", level:"A2" },
  { id:"Modals Possibility", formula:"might/may/could/must", example:"It might rain / He must be tired", use:"Deduction", level:"B1" },
  { id:"Modals Past", formula:"should have + V3", example:"You should have called", use:"Regret", level:"B2" },
  { id:"Zero Conditional", formula:"If+Present, Present", example:"If you heat water, it boils", use:"Truth", level:"A2" },
  { id:"First Conditional", formula:"If+Present, will+V1", example:"If it rains, I will stay", use:"Real future", level:"A2" },
  { id:"Second Conditional", formula:"If+Past, would+V1", example:"If I had money, I would travel", use:"Unreal present", level:"B1" },
  { id:"Third Conditional", formula:"If+had+V3, would have+V3", example:"If I had studied, I would have passed", use:"Unreal past", level:"B2" },
  { id:"Passive Present Past", formula:"be + V3", example:"Cake was made by Maria", use:"Focus action", level:"B1" },
  { id:"Passive Perfect Future", formula:"has been / will be / is being + V3", example:"Work has been finished", use:"Passive advanced", level:"B2" },
  { id:"Reported Speech", formula:"said he was...", example:"'I am tired'->He said he was tired", use:"Report", level:"B1" },
  { id:"Relative Clauses", formula:"who/which/that/where", example:"Man who lives here is kind", use:"Describe", level:"B1" },
  { id:"Gerund Infinitive", formula:"enjoy+V-ing / want+to+V1", example:"enjoy cooking / want to cook", use:"Patterns", level:"B1" },
  { id:"Comparatives", formula:"more...than / -er than / as...as", example:"More expensive than", use:"Comparison", level:"A2" },
  { id:"Articles", formula:"a/an=new, the=known", example:"A dog. The dog is mine", use:"Articles", level:"A1" },
  { id:"Countable", formula:"much/many/a lot of", example:"Much water, many books", use:"Quantity", level:"A2" }
];

// ================= AVATAR ENGINE V5 - NOMÉS 6 IMATGES TEUES =================
export const AVATAR_ENGINE_V5 = {
  name: "Laia Oficial 6 Imatges - lenguaje-pro",
  base_style: "brown wavy short, black blazer, white shirt, gray pants, clipboard, flat cartoon HD",
  render: { type:"Rive", file:"laia_6.riv", size_kb:150, position:"fixed bottom-right 40%, always visible, idle_blink" },
  files: {
    IMG_0_FURIOUS: { id:0, file:"laia_0_furious.jpg", desc:"molt enfadada assenyalant esquerra, clipboard", src:"wa_image_3479569861984805003_0", anim:"pointing_loop_hard", tts:{text:"Tete, parem. És HAS, no have. Tercera persona!", rate:0.9, tone:"firme"}, trigger:"same_error>=3 || third_person_error", block:true },
    IMG_1_OBSERVER: { id:1, file:"laia_1_observer.jpg", desc:"braços creuats observant, clipboard pit", src:"wa_image_3479569861984805003_1", anim:"idle_blink", tts:{text:"...", rate:0, tone:"silence"}, trigger:"cefr>=B1 && flow_mode" },
    IMG_2_EMPATICA: { id:2, file:"laia_2_empatica.jpg", desc:"mà oberta presentant, somriure suau empatica", src:"wa_image_3479569861984805003_2", anim:"soft_breathe_open_hand", tts:{text:"Tranquil, els condicionals ho confon tothom de Tarragona.", rate:1.0, tone:"suave"}, trigger:"hesitation>4000 || accuracy<0.5 || second_conditional" },
    IMG_3_CELEBRATORIA: { id:3, file:"laia_3_celebratoria.jpg", desc:"somriure gran feliç assenyalant esquerra celebrant", src:"wa_image_3479569861984805003_3", anim:"jump_confetti", tts:{text:"¡BOOM! ¡Lo has clavado! Level up desbloquejat!", rate:1.3, tone:"alegre"}, trigger:"streak>=7 || level_up || accuracy>=0.9" },
    IMG_4_COLEGA: { id:4, file:"laia_4_colega.jpg", desc:"somriure suau colega assenyalant esquerra tutorial", src:"wa_image_3479569861984805003_4", anim:"pointing_side_happy", tts:{text:"Va tete, aquesta te la saps! Knead és amasar.", rate:1.1, tone:"cercana"}, trigger:"accuracy>=0.8 || tutorial || area 42" },
    IMG_5_STRICT_LIGHT: { id:5, file:"laia_5_strict_light.jpg", desc:"molesta lleu assenyalant, ceja aixecada", src:"extra_de_8_anterior", anim:"pointing_side_left", tts:{text:"Tete, això ja ho hem vist. Atenció.", rate:1.0, tone:"seria"}, trigger:"same_error==2" }
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

export const EMOTION_ENGINE = { decide:(m)=>AVATAR_ENGINE_V5.decideByMetrics(m) };

export const LAYA_FINAL = {
  version:"5.0 DEFINITIVO - 6 Imatges + 28 Gram + 72 Vocab - lenguaje-pro",
  VOCAB:VOCAB_REAL, GRAMMAR:GRAMMAR_REAL, AVATAR:AVATAR_ENGINE_V5,
  AREAS:{
    1:{name:"Money Basics",topic:"Why Most People Never Become Rich",vocab:"collocations.have",grammar:["Present Simple","Modals Possibility"],future:"First Conditional",baseImg:"IMG_4_COLEGA"},
    2:{name:"Saving",topic:"The Power of Saving Small",vocab:"timeMarkers",grammar:["Present Perfect","Present Perfect Continuous"],future:"Future Going To",baseImg:"IMG_4_COLEGA"},
    42:{name:"Grandmother",topic:"My Grandmother Is My Inspiration",vocab:"adjectives.pers",grammar:["Past Simple","Past Continuous"],future:"Second Conditional",baseImg:"IMG_4_COLEGA"},
    50:{name:"Willpower",topic:"The Power of Willpower",vocab:"move16",grammar:["Future Simple Will","Future Continuous"],future:"Future Perfect",baseImg:"IMG_3_CELEBRATORIA"}
    // Dev: expandeix fins 50 amb mateixa estructura - baseImg sempre una de les 6
  },
  generate:function(areaId,level="A2",metrics={}){
    const area=this.AREAS[areaId]||this.AREAS[1];
    const gMain=GRAMMAR_REAL.find(g=>g.id===area.grammar[0]);
    const gFuture=GRAMMAR_REAL.find(g=>g.id===area.future);
    const imgKey=EMOTION_ENGINE.decide({...metrics,cefr_level:level});
    const avatar=AVATAR_ENGINE_V5.files[imgKey];
    return{
      meta:{area:area.name,topic:area.topic,level,grammar_main:gMain,grammar_future:gFuture,emotion:imgKey,avatar_file:avatar.file,xp:level==="A1"?10:level==="A2"?15:20},
      avatarState:avatar,
      prompt:`Level ${level} - ${area.topic} - Grammar: ${gMain.formula} (${gMain.example}) + Future: ${gFuture.formula} (${gFuture.example}) - Mistake: ${gMain.mistake||"none"} - Must include time marker + If clause - 150 words - Simple style`,
      quiz:{fix:gMain.mistake,conditional:`${gFuture.id}: ${gFuture.example}`,vocab:area.vocab}
    };
  }
};
