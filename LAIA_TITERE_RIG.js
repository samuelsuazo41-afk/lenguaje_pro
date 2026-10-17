// LAIA_TITERE_RIG.js - Motor de pasos reales - 34 bones simulados en DOM
export class LaiaTitereRig {
  constructor(hologramEl){
    this.el = hologramEl;
    this.legs = { hipL:0, kneeL:0, hipR:0, kneeR:0 };
    this.isWalking = false;
    this.x = 5; this.y = 5;
  }

  // CAMINAR DE VERDAD DE A -> B con pasos
  async walkTo(targetX, targetY, intention){
    if(this.isWalking) return;
    this.isWalking = true;
    this.el.classList.add('laia-walking-mode');
    
    const startX = this.x; const startY = this.y;
    const dist = Math.hypot(targetX-startX, targetY-startY);
    const steps = Math.max(3, Math.floor(dist/12)); // 1 paso cada 12%
    const duration = steps * 280; // 280ms por paso

    // Aplica intención antes de caminar
    if(intention) window.laia.applyPose(intention);

    for(let i=0;i<=steps;i++){
      const p = i/steps;
      this.x = startX + (targetX-startX)*p;
      this.y = startY + (targetY-startY)*p;
      this.el.style.left = this.x + '%';
      this.el.style.top = this.y + '%';
      
      // Simula balanceo de cadera y rodillas
      const legPhase = Math.sin(p * Math.PI * steps * 2);
      this.el.style.transform = `translateY(${legPhase*3}px) rotate(${legPhase*2}deg) scale(${window.laia.APP_ZONES[window.laia.currentZone]?.scale||1})`;
      
      await new Promise(r=>setTimeout(r, 280));
    }
    
    this.isWalking = false;
    this.el.classList.remove('laia-walking-mode');
    this.el.style.transform = `scale(${window.laia.APP_ZONES[window.laia.currentZone]?.scale||1})`;
  }
}
