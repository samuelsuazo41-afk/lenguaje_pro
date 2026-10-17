// /marionette/LAIA_TITERE_RIG.js - Motor de pasos reales - 34 bones simulados - V16.1.1 FINAL
export class LaiaTitereRig {
  constructor(hologramEl){
    this.el = hologramEl;
    this.legs = { hipL:0, kneeL:0, hipR:0, kneeR:0 };
    this.isWalking = false;
    this.x = 5; this.y = 5;
  }

  async walkTo(targetX, targetY, intention){
    if(this.isWalking) return;
    this.isWalking = true;
    this.el.classList.add('laia-walking-mode');
    
    const startX = this.x; const startY = this.y;
    const dist = Math.hypot(targetX-startX, targetY-startY);
    const steps = Math.max(3, Math.floor(dist/12));
    
    if(intention && window.laia) window.laia.applyPose(intention);

    for(let i=0;i<=steps;i++){
      const p = i/steps;
      this.x = startX + (targetX-startX)*p;
      this.y = startY + (targetY-startY)*p;
      this.el.style.left = this.x + '%';
      this.el.style.top = this.y + '%';
      
      const legPhase = Math.sin(p * Math.PI * steps * 2);
      const scale = window.laia?.APP_ZONES?.[window.laia.currentZone]?.scale || 1;
      this.el.style.transform = `translateY(${legPhase*3}px) rotate(${legPhase*1.5}deg) scale(${scale})`;
      
      await new Promise(r=>setTimeout(r, 260));
    }
    
    this.isWalking = false;
    this.el.classList.remove('laia-walking-mode');
    const finalScale = window.laia?.APP_ZONES?.[window.laia.currentZone]?.scale || 1;
    this.el.style.transform = `scale(${finalScale})`;
  }
}