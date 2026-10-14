// LAYA_SAP_HOLOGRAM.js - V1 - Holograma Laia con datos SAP + Evolución
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
      <div style="font-size:9px;color:#8b5cf6;letter-spacing:1px">SAP // LAYA EVOLUTION STREAM</div>
      <div style="margin:4px 0;font-size:11px;color:#fff;font-weight:bold">${h.area} | ${h.word} | ${sapData.detail.grammarChain}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;margin-top:6px">
        <span style="background:rgba(139,92,246,0.2);padding:3px 6px;border-radius:10px">⭐ XP ${e.XP_TOTAL}</span>
        <span style="background:rgba(34,197,94,0.2);padding:3px 6px;border-radius:10px">🔥 ${e.STREAK_DAYS}d</span>
        <span style="background:rgba(96,165,250,0.2);padding:3px 6px;border-radius:10px">🎯 ${e.ACCURACY_7D}</span>
        <span style="background:rgba(245,158,11,0.2);padding:3px 6px;border-radius:10px">⚠️ ERR ${e.SAME_ERROR}</span>
      </div>
      <div style="margin-top:6px;font-size:9px;color:#9ca3af">HES: ${e.HESITATION_MS}ms | ${sapData.detail.performance}<br>NEXT: ${e.NEXT_LEVEL_NEED}</div>
      <div style="margin-top:4px;font-size:8px;color:#60a5fa">MANDT ${h.mandt} | ${h.date} ${h.time} | ${e.AVATAR}</div>`;
    bubble.classList.remove('hidden');
    if(state) state.textContent = `${e.AVATAR} • ${e.ACCURACY_7D} • EVOL`;
  }
};

export const LAYA_EVOLUTION = {
  expandSyllable(syllable) {
    const s = syllable.toLowerCase().slice(0,3);
    const direct = VOCAB_REAL.superDicSyllables[s] || [];
    const allVocab = Object.values(VOCAB_REAL).flat().filter(v=>typeof v==="string");
    const cousins = allVocab.filter(w => w.toLowerCase().includes(s)).slice(0,20);
    const linkedGrammar = Object.values(GRAMMAR_REAL).filter(g => direct.some(w => g.example.toLowerCase().includes(w.toLowerCase().split('/')[0]))).slice(0,3);
    return { syllable: s, core: direct, extended: [...new Set([...direct,...cousins])], grammarLink: linkedGrammar.map(g=>({sig:g.sig, id:g.id, example:g.example})), evolution: this.traceEvolution(s) };
  },
  traceEvolution(syllable) {
    const map = {
      co: { root:"COM- (juntos)", level:"A1->B2", chain:["cook","confidence","consistency","cold call","co-founder","collaboration"] },
      wor: { root:"WER- (trabajar)", level:"A1->B1", chain:["work","worry","work out","world","worth"] },
      sav: { root:"SAVE", level:"A1->A2", chain:["save","saving","savings","save up","saver"] },
      mon: { root:"MON- (dinero)", level:"A1->A2", chain:["money","month","Monday","morning","Moreover"] }
    };
    return map[syllable] || { root:`${syllable.toUpperCase()}`, level:"A1", chain:[] };
  },
  explore(word, grammarSig, metrics) {
    const clean = word.toLowerCase().replace(/[^a-z]/g,'').slice(0,3);
    return { syllable: this.expandSyllable(clean), lab: LAYA_SAP.generateSAP(metrics, grammarSig, word), grammarChain: LAYA_SAP.getGrammarProgress(grammarSig) };
  }
};