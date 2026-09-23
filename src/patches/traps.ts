import * as ap from "archipelago.js";

let trapenemy_settings = {};
trapenemy_settings.type = "trap-dummy";

export function sendTrap(item: ap.Item){
  switch(item.name) {
    case "Forgetfulness Trap":
      sc.model.player.exp = 0
      break;
    case "Naked Trap":
      sc.model.player.setEquipment(1,-1)
      sc.model.player.setEquipment(2,-1)
      sc.model.player.setEquipment(3,-1)
      sc.model.player.setEquipment(4,-1)
      sc.model.player.setEquipment(5,-1)
      break;
    case "Bomb Trap":
      let trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, 0, 0, 0, {enemyInfo: trapenemy_settings})
      trapenemy.setTarget(ig.game.playerEntity, true);
      trapenemy.setAction("Bombing");
      break;
    case "Overload Trap":
      sc.model.player.addElementLoad(200);
      break;
    case "Poverty Trap":
      sc.model.player.credit = Math.floor(sc.model.player.credit * 0.8);
      break;
    case "Override Trap":
      sc.model.player.resetSkillTree(0);
      sc.model.player.resetSkillTree(1);
      sc.model.player.resetSkillTree(2);
      sc.model.player.resetSkillTree(3);
      sc.model.player.resetSkillTree(4);
      break;
    case "Laser Of Doom Trap":
      let trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, 0, 0, 0, {enemyInfo: trapenemy_settings})
      trapenemy.setTarget(ig.game.playerEntity, true);
      trapenemy.setAction("Laser");
      break;
    case "Zoom Trap":
      let camera_zoom = new ig.Event( { steps:[ { type: "SET_CAMERA_ZOOM", zoom: 2.0, duration: 5, transition: "EASE_IN_OUT" } ] }); 
      ig.game.events.callEvent(camera_zoom,ig.EventRunType.PARALLEL);
      break;
    case "Winded Trap":
      // Reduce max dashes by 1
      sc.model.player.params.addItemBuff(["DASH-STEP-MINUS"],40,-1)
      break;
    case "Clumsy Trap":
      sc.model.player.params.addItemBuff(["NO-DASH"],40,-1)
      // Remove ability to dash temporarily
      break;
    case "Artless Trap":
      // SP regens slower
      sc.model.player.params.addItemBuff(["LOW-SP-REGEN"],40,-1)
      break;
    case "Combo Breaker Trap":
      // this one is still clunky, only updates after finishing a rank level
      sc.model.combatRank = 0
      sc.model.increaseCombatRank(0)
      break;
    case "Drunk Trap":
      // Negative Scope 
      sc.model.player.params.addItemBuff(["DRUNK"],40,-1)
      break;
    case "Ice Cage Trap":
      // Spawn 4 ice blocks nearby, not enough to cage the player, and/or make them despawn after a while
      // let trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, 0, 0, 0, {enemyInfo: trapenemy_settings})
      // trapenemy.setTarget(ig.game.playerEntity, true);
      // trapenemy.setAction("IceTrap");
      break;
    case "Element Swap Trap":
      sc.model.player.scrollElementMode(Math.floor(Math.random()*3-1),false,false);
      break;
    case "Landmark Trap":
      for (let area of Object.keys(sc.map.activeLandmarks)) {
        for (let landmark of Object.keys(sc.map.activeLandmarks[area])) {
          if (sc.map.activeLandmarks[area][landmark].active) { sc.map.activeLandmarks[area][landmark].active = false }
        }
      }
      break;
    case "SP Trap":
      sc.model.player.params.consumeSp(sc.model.player.spLevel*4) 
      break;
  }
}
export function patch(plugin: MwRandomizer) {
  sc.STAT_CHANGE_SETTINGS["DASH-STEP-MINUS"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.DASH_STEP,
    value: -1,
    icon: "stat-dash",
    grade: "stat-rank-1",
  };
  sc.STAT_CHANGE_SETTINGS["NO-DASH"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.DASH_STEP,
    value: -10,
    icon: "stat-dash",
    grade: "stat-rank-1",
  };
  sc.STAT_CHANGE_SETTINGS["LOW-SP-REGEN"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.SP_REGEN,
    value: -1,
    icon: "stat-sp-regen",
    grade: "stat-rank-3",
  };
  sc.STAT_CHANGE_SETTINGS["LOW-HP"] = {
    change: sc.STAT_CHANGE_TYPE.STATS,
    type: sc.STAT_PARAM_TYPE.HP,
    value: 0.1,
    icon: "stat-hp",
    grade: "stat-rank-1",
  };
  sc.STAT_CHANGE_SETTINGS["DRUNK"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.AIM_STABILITY,
    value: -2,
    icon: "stat-overheat",
    grade: "stat-rank-1",
  };
  sc.STAT_PARAM_TYPE.AIM_STABILITY = { key: "AIM_STABILITY" };
}