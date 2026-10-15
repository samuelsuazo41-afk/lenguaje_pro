// LAIA_SAP_HOLOGRAM.js - V2 FINAL - HOLOGRAMA 16 FRAMES AZUL + IA QUE ESCUPE DATOS SAP COMO PINS
// Basado en tu V1 + integración con sprite 16 frames laia_HOLO_CLEAN_16.png
// Autor: YARVIS + Laia - Girona
import { LAYA_FINAL, GRAMMAR_REAL, VOCAB_REAL, AVATAR_ENGINE_V6 } from './LAYA_FINAL_COMPLETO.js';

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
        AVATAR: AVATAR_ENGINE_V6.decideByMetrics(metrics), NEXT_LEVEL_NEED: this.getNextNeed(metrics)
      },
      detail: {
        grammarChain: this.getGrammarProgress(grammarSig),
        vocabChain: this.getVocabChain(word),
        memoryLog: gMem,
        performance: avgHes > 3000? "SLOW - EMPATICA" : avgHes < 1000 && gMem.oks > 3? "FAST - OBSERVER FLOW" : "NORMAL - COLEGA"
      }
    };
  },
  getNextNeed(m){
    if(m.streak_days < 3) return `Falta ${3-m.streak_days} dias para EMPATICA`;
    if(m.accuracy_7d < 0.7) return `Falta ${Math.round((0.7-m.accuracy_7d)*100)}% para OBSERVER`;
    if(m.accuracy_7d < 0.9) return `Falta ${Math.round((0.9-m.accuracy_7d)*100)}% para CELEBRATORIA`;
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
      <div style="font-size:9px;color:#00d4ff;letter-spacing:1px">SAP // LAYA HOLO 16 FRAMES</div>
      <div style="margin:4px 0;font-size:11px;color:#fff;font-weight:bold">${h.area} | ${h.word} | ${sapData.detail.grammarChain}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;margin-top:6px">
        <span style="background:rgba(0,212,255,0.2);padding:3px 6px;border-radius:10px">⭐ XP ${e.XP_TOTAL}</span>
        <span style="background:rgba(34,197,94,0.2);padding:3px 6px;border-radius:10px">🔥 ${e.STREAK_DAYS}d</span>
        <span style="background:rgba(96,165,250,0.2);padding:3px 6px;border-radius:10px">🎯 ${e.ACCURACY_7D}</span>
        <span style="background:rgba(245,158,11,0.2);padding:3px 6px;border-radius:10px">⚠️ ERR ${e.SAME_ERROR}</span>
      </div>
      <div style="margin-top:6px;font-size:9px;color:#9ca3af">HES: ${e.HESITATION_MS}ms | ${sapData.detail.performance}<br>NEXT: ${e.NEXT_LEVEL_NEED}</div>
      <div style="margin-top:4px;font-size:8px;color:#60a5fa">MANDT ${h.mandt} | ${h.date} ${h.time} | ${e.AVATAR} | HOLO-16</div>`;
    bubble.classList.remove('hidden');
    if(state) state.textContent = `${e.AVATAR} • ${e.ACCURACY_7D} • HOLO16`;
  }
};

// HOLOGRAMA INTELIGENTE 16 FRAMES AZUL - QUE SE MUEVE Y ESCUPE DATOS COMO PINS
export class LaiaHologramSmart {
  constructor(){
    this.el = null; this.sprite = null; this.bubble = null;
    this.total = 16; this.currentFrame = 0; this.isMoving = false;
    this.frameMap = {
      strict: 0, point_left: 1, explain_open: 2, crossed_arms: 3,
      celebratory: 4, strict2: 5, point_glow: 6, explain2: 7,
      crossed_clip: 8, open_big: 9, strict3: 10, point3: 11,
      explain3: 12, crossed2: 13, open2: 14, strict4: 15
    };
    this.zones = {
      welcome: { x: 5, y: 5, frame: 'celebratory' },
      reading: { x: 68, y: 10, frame: 'explain_open' },
      example: { x: 70, y: 35, frame: 'point_left' },
      input: { x: 8, y: 55, frame: 'explain_open' },
      vocab: { x: 72, y: 48, frame: 'crossed_arms' },
      check: { x: 15, y: 75, frame: 'point_left' },
      feedback_ok: { x: 45, y: 35, frame: 'celebratory', scale: 1.3 },
      feedback_err: { x: 12, y: 50, frame: 'strict', scale: 1.1 },
      lab: { x: 70, y: 18, frame: 'strict' },
      center: { x: 45, y: 35, frame: 'open_big', scale: 1.4 }
    };
    this.init();
  }

  init(){
    if(!document.getElementById('laia-hologram')){
      const div = document.createElement('div');
      div.id = 'laia-hologram';
      div.innerHTML = `<div id="laia-sprite"></div><div id="laia-glow"></div><div id="bubble" class="hidden"></div><div id="laia-pin-container"></div>`;
      document.body.appendChild(div);
      const style = document.createElement('style');
      style.textContent = `
        #laia-hologram{position:fixed;left:5%;top:5%;width:110px;height:220px;z-index:9999;pointer-events:none;transition:all 1.1s cubic-bezier(0.34,1.56,0.64,1);filter:drop-shadow(0 0 18px #00d4ff) drop-shadow(0 0 35px #00d4ff);animation:laiaFloat 3s ease-in-out infinite}
        #laia-sprite{width:100%;height:100%;background:url('./laia_HOLO_CLEAN_16.png') 0 0 / 1600% 100%;image-rendering:crisp-edges}
        #laia-glow{position:absolute;inset:-15px;background:radial-gradient(circle at 50% 80%, rgba(0,212,255,0.3) 0%, transparent 70%);z-index:-1;animation:laiaPulse 2s infinite}
        #bubble{position:absolute;left:120px;top:20px;background:rgba(10,15,30,0.92);backdrop-filter:blur(12px);border:1px solid rgba(0,212,255,0.5);color:white;padding:12px 14px;border-radius:14px;font-size:12px;width:210px;pointer-events:auto;box-shadow:0 0 25px rgba(0,212,255,0.3)}
        #bubble.hidden{display:none}
        #laia-pin-container{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9998}
       .laia-pin{position:absolute;background:linear-gradient(135deg, rgba(0,212,255,0.95), rgba(139,92,246,0.95));color:white;padding:10px
