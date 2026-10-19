// laia_actor_brain.js - ACTOR V1 - AUTONOMO - V16
// Rescata 3 joyas de LAIA_TITERE_RIG.js + INTENTION_MOTOR intacto
// Autor: YARVIS + Laia - Girona - Actor Autonomo

import { INTENTION_MOTOR, AVATAR_ENGINE_HOLO, LAYA_FINAL } from '../LAYA_FINAL_COMPLETO.js';
import navmesh from './navmesh.json' assert { type: 'json' };

export class LaiaActorBrain {
  constructor(rendererEl) {
    this.el = rendererEl || document.getElementById('laia-hologram');
    this.navmesh = navmesh.zones;
    this.intentions = INTENTION_MOTOR;
    this.isWalking = false;
    this.currentZone = 'welcome';
    this.x = 50; this.y = 30;
    console.log('[ACTOR V1] Brain init - 6 intenciones:', Object.keys(this.intentions));
  }

  // JOYA 1 RESCATADA DE TITERE_RIG: dist/12 = steps + walk real no teleport
  async walkTo(targetX, targetY, intention) {
    if (this.isWalking) return;
    this.isWalking = true;
    if (this.el) this.el.classList.add('laia-walking-mode');

    const sx = this.x, sy = this.y;
    const dist = Math.hypot(targetX - sx, targetY - sy);
    const steps = Math.max(4, Math.floor(dist / 12)); // TU FORMULA ORIGINAL DIST/12

    for (let i = 0; i <= steps; i++) {
      const p = i / steps;
      // ease in-out para que no sea robot
      const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      this.x = sx + (targetX - sx) * ease;
      this.y = sy + (targetY - sy) * ease;
      if (this.el) {
        this.el.style.left = this.x + '%';
        this.el.style.top = this.y + '%';
      }
      await new Promise(r => setTimeout(r, 180));
    }

    if (this.el) this.el.classList.remove('laia-walking-mode');
    this.isWalking = false;
  }

  // JOYA 2 RESCATADA: applyPose(intention) - No angulos, intencion
  applyPose(intentionId) {
    const pose = this.intentions[intentionId] || this.intentions.TRANSMISSION;
    console.log(`[ACTOR] ${pose.id} -> ${pose.name}`, pose.joints);
    
    // Aqui en V1 conectamos con la malla GLB
    // this.actorGLB.playAnimation(pose.id)
    // this.actorGLB.setJoints(pose.joints)
    
    // Fallback visual V1 para tu index.html actual hasta tener GLB
    if (this.el) {
      const state = document.getElementById('laia-state');
      if (state) state.textContent = `${pose.id} • ${pose.name}`;
      // Cambia color de glow segun intencion
      this.el.style.filter = `drop-shadow(0 0 18px ${pose.color}) drop-shadow(0 0 35px ${pose.color})`;
    }
    return pose;
  }

  // JOYA 3 RESCATADA + TU DECIDE: decideByMetrics -> intention
  decideIntention(metrics) {
    const decision = AVATAR_ENGINE_HOLO.decideByMetrics(metrics);
    return decision.intention || this.intentions.TRANSMISSION;
  }

  // GO TO REAL - Usa navmesh.json
  async goTo(zoneName, context = {}) {
    const zone = this.navmesh[zoneName];
    if (!zone) {
      console.warn(`[ACTOR] Zona ${zoneName} no existe en navmesh`);
      return;
    }
    this.currentZone = zoneName;
    const intention = this.intentions[zone.pose] || this.intentions.TRANSMISSION;

    // CAMINA con pasos reales
    await this.walkTo(zone.x, zone.y, intention);

    // Aplica pose + escala + efectos
    if (zone.scale && this.el) this.el.style.transform = `scale(${zone.scale})`;
    else if (this.el) this.el.style.transform = `scale(1)`;

    this.applyPose(intention.id);

    // SAP
    if (context.sapData && window.LAYA_SAP) {
      window.LAYA_SAP.renderToHologram(context.sapData);
    }

    if (zone.confetti && this.el) {
      this.el.classList.add('shake');
      setTimeout(() => this.el.classList.remove('shake'), 600);
    }

    console.log(`[ACTOR V1] Llegada a ${zoneName} -> ${intention.id} en ${zone.x}%/${zone.y}%`);
  }
}

// Compatibilidad para tu LAIA_SAP_HOLOGRAM.js viejo
export const LaiaHologramSmart = LaiaActorBrain;
export const LaiaHologramSmartV16 = LaiaActorBrain;
export const LaiaWandererEngine = LaiaActorBrain;
export const LaiaMarionetteV3 = LaiaActorBrain;
