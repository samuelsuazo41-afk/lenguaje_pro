// LAIA_SAP_HOLOGRAM.js - V16.1 MARIONETA FINAL + PARCHE WALK REAL - COMPLETO
// BASE: V16 MARIONETA + rig de títere con pasos reales - Ya no teletransporta
// Autor: YARVIS + Laia - Girona - Batalla del títere
import { LAYA_FINAL, VOCAB_REAL, AVATAR_ENGINE_HOLO, INTENTION_MOTOR, MARIONETTE_JOINTS } from './LAYA_FINAL_COMPLETO.js';

// ============== LAYA_SAP V16.1 - CON INTENCIONES + JOINTS ==============
export const LAYA_SAP = {
  generateSAP(metrics, grammarSig, word) {
    const mem = LAYA_FINAL.MEMORY.get();
    const gMem = mem[grammarSig] || {errors:0, oks:0, hes:[]};
    const avgHes = gMem.hes.length? Math.round(gMem.hes.reduce((a,b)=>a+b,0)/gMem.hes.length) : 0;
    const avatarDecision = AVATAR_ENGINE_HOLO.decideByMetrics(metrics);
    return {
      header: { mandt: "100", user: "LAYA_USER", date: new Date().toISOString().slice(0,10).replace(/-/g,''), time: new Date().toTimeString().slice(0,8).replace(/:/g,''), area: grammarSig, word: word },
      evolution: {
        XP_TOTAL: metrics.xp_total, STREAK_DAYS: metrics.streak_days, ACCURACY_7D: Math.round(metrics.accuracy_7d*100) + "%",
        SAME_ERROR: gMem.errors, OKS: gMem.oks, HESITATION_MS: avgHes, LEVEL: metrics.level,
        AVATAR: avatarDecision.emotion, INTENTION: avatarDecision.intention.name, JOINTS: avatarDecision.joints, NEXT_LEVEL_NEED: this.getNextNeed(metrics)
      },
      detail: {
        grammarChain: this.getGrammarProgress(grammarSig),
        vocabChain: this.getVocabChain(word),
        memoryLog: gMem,
        performance: avgHes > 3000? "SLOW - SCAFFOLDING" : avgHes < 1000 && gMem.oks > 3? "FAST - FLOW_OBSERVER" : "NORMAL - FOUNDATION",
        avatarDecision
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
    const s = word ? word.toLowerCase().slice(0,3) : 'sav';
    const base = VOCAB_REAL.superDicSyllables[s] || [];
    return { root: s, count: base.length, family: base.slice(0,5) };
  },
  renderToHologram(sapData){
    const bubble = document.getElementById('bubble');
    const state = document.getElementById('laia-state');
    if(!bubble) return;
    const e = sapData.evolution; const h = sapData.header;
    const intention = e.INTENTION || 'TRANSMISSION';
    bubble.innerHTML = `
      <div style="font-size:9px;color:#00d4ff;letter-spacing:1px">SAP // LAYA V16.1 MARIONETA // ${intention}</div>
      <div style="margin:4px 0;font-size:11px;color:#fff;font-weight:bold">${h.area} | ${h.word} | ${sapData.detail.grammarChain}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;margin-top:6px">
        <span style="background:rgba(0,212,255,0.2);padding:3px 6px;border-radius:10px">⭐ XP ${e.XP_TOTAL}</span>
        <span style="background:rgba(34,197,94,0.2);padding:3px 6px;border-radius:10px">🔥 ${e.STREAK_DAYS}d</span>
        <span style="background:rgba(96,165,250,0.2);padding:3px 6px;border-radius:10px">🎯 ${e.ACCURACY_7D}</span>
        <span style="background:rgba(245,158,11,0.2);padding:3px 6px;border-radius:10px">⚠️ ERR ${e.SAME_ERROR}</span>
      </div>
      <div style="margin-top:6px;font-size:9px;color:#9ca3af">HES: ${e.HESITATION_MS}ms | ${sapData.detail.performance}<br>NEXT: ${e.NEXT_LEVEL_NEED}<br>JOINTS: ${Object.keys(e.JOINTS||{}).join(', ')}</div>
      <div style="margin-top:4px;font-size:8px;color:#60a5fa">MANDT ${h.mandt} | ${h.date} ${h.time} | ${e.AVATAR} | ${intention} | V16.1-WALK</div>`;
    bubble.classList.remove('hidden');
    if(state) state.textContent = `${e.AVATAR} • ${intention} • ${e.ACCURACY_7D}`;
  }
};

// ============== HOLOGRAMA MARIONETA + WANDERER V16.1 CON PARCHE WALK ==============
export class LaiaHologramSmart {
  constructor(){
    this.el = null; this.sprite = null; this.bubble = null;
    this.total = 16; this.currentFrame = 0; this.isMoving = false;
    this.currentZone = 'welcome';
    this.titereRig = null;
    this.frameMap = AVATAR_ENGINE_HOLO.frameMap;
    this.joints = MARIONETTE_JOINTS;
    this.intentions = INTENTION_MOTOR;
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
      div.innerHTML = `<div id="laia-sprite"></div><div id="laia-glow"></div><div id="bubble" class="hidden"></div><div id="laia-pin-container"></div><div id="laia-state" style="position:absolute;bottom:-20px;left:0;font-size:9px;color:#00d4ff;width:200px;text-align:center"></div>`;
      document.body.appendChild(div);
      const style = document.createElement('style');
      style.textContent = `
        #laia-hologram{position:fixed;left:5%;top:5%;width:110px;height:220px;z-index:9999;pointer-events:none;transition:all 0.8s cubic-bezier(0.34,1.56,0.64,1);filter:drop-shadow(0 0 18px #00d4ff) drop-shadow(0 0 35px #00d4ff);animation:laiaFloat 3s ease-in-out infinite}
        #laia-sprite{width:100%;height:100%;background:url('./laia_HOLO_CLEAN_16.png') 0 0 / 1600% 100%;image-rendering:crisp-edges;transition:background-position 0.2s}
        #laia-glow{position:absolute;inset:-15px;background:radial-gradient(circle at 50% 80%, rgba(0,212,255,0.3) 0%, transparent 70%);z-index:-1;animation:laiaPulse 2s infinite}
        #bubble{position:absolute;left:120px;top:20px;background:rgba(10,15,30,0.92);backdrop-filter:blur(12px);border:1px solid rgba(0,212,255,0.5);color:white;padding:12px 14px;border-radius:14px;font-size:12px;width:230px;pointer-events:auto;box-shadow:0 0 25px rgba(0,212,255,0.3)}
        #bubble.hidden{display:none}
        #laia-pin-container{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9998}
        .laia-pin{position:absolute;background:linear-gradient(135deg, rgba(0,212,255,0.95), rgba(139,92,246,0.95));color:white;padding:10px 14px;border-radius:12px;font-size:10px;animation:pinFloat 4s ease-out forwards;box-shadow:0 4px 15px rgba(0,212,255,0.4)}
        .laia-walking-mode{animation:laiaWalkTranslate 0.28s infinite alternate}
        .laia-walking-mode #laia-sprite{animation:walkCycle 0.28s infinite alternate steps(2)}
        @keyframes laiaFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes laiaPulse{0%,100%{opacity:0.6}50%{opacity:1}}
        @keyframes pinFloat{0%{transform:translateY(0) scale(0.8);opacity:0}20%{opacity:1}100%{transform:translateY(-80px) scale(1.1);opacity:0}}
        @keyframes walkCycle{0%{transform:translateY(-3px) rotate(-1.5deg) scaleY(0.98)}100%{transform:translateY(1px) rotate(1.5deg) scaleY(1.02)}}
        @keyframes laiaWalkTranslate{0%{transform:translateX(-2px)}100%{transform:translateX(2px)}}
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
        .shake{animation:shake 0.5s}
      `;
      document.head.appendChild(style);
      this.el = div;
      this.sprite = div.querySelector('#laia-sprite');
      this.bubble = div.querySelector('#bubble');
    } else {
      this.el = document.getElementById('laia-hologram');
      this.sprite = document.getElementById('laia-sprite');
      this.bubble = document.getElementById('bubble');
    }
  }

  setFrameByName(name){
    const idx = this.frameMap[name] ?? 0;
    this.currentFrame = idx;
    if(this.sprite){
      const percent = idx * (100/15);
      this.sprite.style.backgroundPosition = `${percent}% 0`;
    }
  }

  applyPose(pose){
    if(!pose || !pose.joints) return;
    console.log(`[MARIONETA V16.1] ${pose.name} ->`, pose.joints);
    if(pose.id === 'STRICT_ENGINEER') this.setFrameByName('strict');
    else if(pose.id === 'ELEVATION') this.setFrameByName('celebratory');
    else if(pose.id === 'SCAFFOLDING') this.setFrameByName('explain_open');
    else if(pose.id === 'FLOW_OBSERVER') this.setFrameByName('crossed_arms');
    else if(pose.id === 'FOUNDATION') this.setFrameByName('explain_open');
    else this.setFrameByName('open_big');
  }

  // PARCHE WALK REAL - YA NO TELETRANSPORTA, CAMINA CON PASOS
  async goTo(zoneName, context = {}){
    const zone = this.APP_ZONES[zoneName] || this.zones[zoneName];
    if(!zone || !this.el) return;
    this.currentZone = zoneName;
    const pose = this.intentions[zone.pose] || INTENTION_MOTOR[zone.pose] || INTENTION_MOTOR.TRANSMISSION;
    
    // MOTOR DE PASOS - TITERE RIG
    if(!this.titereRig){
      try{
        const { LaiaTitereRig } = await import('./marionette/LAIA_TITERE_RIG.js');
        this.titereRig = new LaiaTitereRig(this.el);
      } catch(e){
        // Fallback si no existe aún el archivo - crea uno inline
        console.log('[TITERE] Rig no encontrado, usando fallback walk inline');
        this.titereRig = {
          x: parseFloat(this.el.style.left)||5,
          y: parseFloat(this.el.style.top)||5,
          isWalking:false,
          async walkTo(tx, ty){
            if(this.isWalking) return; this.isWalking=true;
            this.el = document.getElementById('laia-hologram');
            this.el.classList.add('laia-walking-mode');
            const sx=this.x, sy=this.y;
            const steps=Math.max(3, Math.floor(Math.hypot(tx-sx, ty-sy)/10));
            for(let i=0;i<=steps;i++){
              const p=i/steps; this.x=sx+(tx-sx)*p; this.y=sy+(ty-sy)*p;
              this.el.style.left=this.x+'%'; this.el.style.top=this.y+'%';
              await new Promise(r=>setTimeout(r,260));
            }
            this.el.classList.remove('laia-walking-mode'); this.isWalking=false;
          }
        };
        this.titereRig.el = this.el;
      }
    }
    
    // CAMINA
    await this.titereRig.walkTo(zone.x, zone.y, pose);
    
    // Llega, aplica pose e intención
    if(zone.scale) this.el.style.transform = `scale(${zone.scale})`;
    else this.el.style.transform = `scale(1)`;
    this.applyPose(pose);
    if(context.sapData) this.renderToHologram(context.sapData);
    if(zone.confetti) this.celebrate();
    if(zone.shake) { this.el.classList.add('shake'); setTimeout(()=>this.el.classList.remove('shake'),500); }
  }

  spitSAPPins(sapData){
    if(!sapData) return;
    const container = document.getElementById('laia-pin-container');
    if(!container) return;
    const pins = [
      `⭐ XP ${sapData.evolution.XP_TOTAL}`,
      `🎯 ${sapData.evolution.ACCURACY_7D}`,
      `🔥 ${sapData.evolution.STREAK_DAYS}d`,
      `📚 ${sapData.detail.grammarChain}`,
      `💬 ${sapData.detail.vocabChain.family?.join(', ') || sapData.header.word}`
    ];
    pins.forEach((txt,i)=>{
      const pin = document.createElement('div');
      pin.className = 'laia-pin';
      pin.style.left = (50 + Math.random()*30) + '%';
      pin.style.top = (40 + Math.random()*20) + '%';
      pin.style.animationDelay = (i*0.2) + 's';
      pin.textContent = txt;
      container.appendChild(pin);
      setTimeout(()=> pin.remove(), 4000);
    });
  }

  celebrate(){
    this.spitSAPPins({ evolution:{ XP_TOTAL:'+50', ACCURACY_7D:'100%', STREAK_DAYS: 'UP!'}, detail:{ grammarChain:'LEVEL UP!', vocabChain:{ family:[] } }, header:{ word:'BOOM!' } });
  }

  renderToHologram(sapData){
    LAYA_SAP.renderToHologram(sapData);
    const intention = sapData?.detail?.avatarDecision?.intention;
    if(intention) this.applyPose(intention);
    if(intention && (intention.id === 'TRANSMISSION' || intention.id === 'ELEVATION')){
      this.spitSAPPins(sapData);
    }
  }
}

export class LaiaWandererEngine extends LaiaHologramSmart {}
export class LaiaMarionetteV3 extends LaiaHologramSmart {}
export const LaiaHologramSmartV16 = LaiaHologramSmart;
export const AVATAR_ENGINE_V6 = AVATAR_ENGINE_HOLO;
export const LAYA_SAP_HOLOGRAM = LAYA_SAP;