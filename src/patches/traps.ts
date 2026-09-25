import * as ap from "archipelago.js";
import MwRandomizer from "../plugin";

let trapenemy_settings = {};
trapenemy_settings.type = "trap-dummy";
let trapenemy = null

export function sendTrap(item: ap.Item){
  switch(item.name) {
    case "Forgetfulness Trap":
      sc.model.player.exp = 0;
      break;
    case "Naked Trap":
      sc.model.player.setEquipment(1,-1);
      sc.model.player.setEquipment(2,-1);
      sc.model.player.setEquipment(3,-1);
      sc.model.player.setEquipment(4,-1);
      sc.model.player.setEquipment(5,-1);
      break;
    case "Poverty Trap":
      sc.model.player.credit = Math.floor(sc.model.player.credit * 0.8);
      break;
    case "Overload Trap":
      sc.model.player.addElementLoad(200);
      break;
    case "Override Trap":
      sc.model.player.resetSkillTree(0);
      sc.model.player.resetSkillTree(1);
      sc.model.player.resetSkillTree(2);
      sc.model.player.resetSkillTree(3);
      sc.model.player.resetSkillTree(4);
      break;
    case "Bomb Trap":
      trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, -150,-150,0, {enemyInfo: trapenemy_settings});
      // trapenemy.setTarget(ig.game.playerEntity, true);
      trapenemy.doEnemyAction("Bombing", true);
      break;
    case "Laser Of Doom Trap":
      trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, -150,-150,0, {enemyInfo: trapenemy_settings});
      // trapenemy.setTarget(ig.game.playerEntity, true);
      trapenemy.doEnemyAction("Laser", true);
      break;
    case "Zoom Trap":
    case "Zoom Out Trap":
      let zoom = 4;
      if (item.name == "Zoom Out Trap") { zoom = 0.25; }
      ig.game.events.callEvent(new ig.Event({ name:'Zoom Event Trap', steps: [ { type: 'WAIT', time: 0.5 },{ type: 'SET_CAMERA_TARGET', entity: { "player": true } }, { type: 'SET_CAMERA_ZOOM', zoom: 4, duration: 10, transition: 'EASE_IN_OUT' }, { type: 'WAIT', time: 10 }, ], }), ig.EventRunType.PARALLEL);
      break;
    case "Winded Trap":
      sc.model.player.params.addItemBuff(["DASH-STEP-MINUS"],30,-1);
      break;
    case "Clumsy Trap":
      sc.model.player.params.addItemBuff(["NO-DASH"],30,-1);
      break;
    case "Artless Trap":
      sc.model.player.params.addItemBuff(["LOW-SP-REGEN"],30,-1);
      break;
    case "Drunk Trap":
      sc.model.player.params.addItemBuff(["DRUNK"],30,-1);
      break;
    case "Burglar's Rope Trap":
      sc.model.player.params.addItemBuff(["ZERO-XP"],30,-1);
      break;
    case "Combo Breaker Trap":
      // this one is still clunky, only updates after finishing a rank level
      sc.model.combatRank = 0;
      sc.model.increaseCombatRank(0);
      break;
    case "Ice Cage Trap":
      trapenemy = ig.game.spawnEntity(ig.ENTITY.Enemy, -150,-150,0, {enemyInfo: trapenemy_settings});
      // trapenemy.setTarget(ig.game.playerEntity, true);
      // trapenemy.doEnemyAction("IceCage")
      break;
    case "Element Swap Trap":
      sc.model.player.scrollElementMode(Math.floor(Math.random()*3-1),false,false);
      break;
    case "Landmark Trap":
      for (let area of Object.keys(sc.map.activeLandmarks)) {
        for (let landmark of Object.keys(sc.map.activeLandmarks[area])) {
          if (sc.map.activeLandmarks[area][landmark].active) { sc.map.activeLandmarks[area][landmark].active = false; }
        }
      }
      break;
    case "SP Trap":
      sc.model.player.params.consumeSp(sc.model.player.spLevel*4);
      break;
    case "Failed Hack Trap":
      ig.game.events.callEvent(new ig.Event({ name:'Failed Hack Trap', steps: [ { type: 'WAIT', time: 1 },{ "entity": { "player": true }, "action": [ { "duration": -1, "align": "BOTTOM", "rotateFace": 0, "flipLeftFace": false, "wait": false, "waitSkip": 0, "actionDetached": false, "fixPos": false, "type": "SHOW_EFFECT", "effect": { "sheet": "area.arid", "name": "hackDashCharge" }, "offset": { "x": 0, "y": 0, "z": 0 } }, { "value": 96, "type": "SET_FLOAT_HEIGHT" }, { "time": 0.5, "type": "WAIT" } ], "repeating": false, "wait": true, "keepState": false, "immediately": false, "type": "DO_ACTION" }, { "entity": { "player": true }, "action": [ { "value": 96, "type": "SET_FLOAT_HEIGHT" }, { "duration": -1, "align": "BOTTOM", "rotateFace": 0, "flipLeftFace": false, "wait": false, "waitSkip": 0, "actionDetached": false, "fixPos": false, "type": "SHOW_EFFECT", "effect": { "sheet": "area.arid", "name": "hackDashCharge2" }, "offset": { "x": 0, "y": 0, "z": 0 } }, { "wait": false, "viaWalkConfig": false, "type": "SHOW_ANIMATION", "anim": "specialSwirlEndTop" }, { "time": 1, "type": "WAIT" } ], "repeating": false, "wait": true, "keepState": false, "immediately": false, "type": "DO_ACTION" }, { "entity": { "player": true }, "action": [ { "duration": -1, "align": "BOTTOM", "rotateFace": 0, "flipLeftFace": false, "wait": false, "waitSkip": 0, "actionDetached": false, "fixPos": false, "type": "SHOW_EFFECT", "effect": { "sheet": "area.arid", "name": "hackDash" }, "offset": { "x": 0, "y": 0, "z": 0 } }, { "wait": false, "type": "SHOW_EXTERN_ANIM", "anim": { "sheet": "player-poses", "name": "drill" } }, { "value": 0, "type": "SET_FLOAT_HEIGHT" }, { "value": -800, "type": "SET_Z_VEL" }, { "type": "WAIT_UNTIL_ON_GROUND" } ], "repeating": false, "wait": true, "keepState": false, "immediately": false, "type": "DO_ACTION" }, { "entity": { "player": true }, "action": [ { "wait": false, "type": "SHOW_EXTERN_ANIM", "anim": { "sheet": "player-poses", "name": "floored" } }, { "duration": 0, "align": "BOTTOM", "rotateFace": 0, "flipLeftFace": false, "wait": false, "waitSkip": 0, "actionDetached": false, "fixPos": false, "type": "SHOW_EFFECT", "effect": { "sheet": "area.arid", "name": "hackFail" }, "offset": { "x": 0, "y": 0, "z": 0 } }, { "time": 0.4, "type": "WAIT" }, { "duration": 0, "align": "BOTTOM", "rotateFace": 0, "flipLeftFace": false, "wait": true, "waitSkip": 0, "actionDetached": false, "fixPos": false, "type": "SHOW_EFFECT", "effect": { "sheet": "dust", "name": "large" }, "offset": { "x": 0, "y": 0, "z": 0 } }, { "time": 1, "type": "WAIT" } ], "repeating": false, "wait": true, "keepState": false, "immediately": false, "type": "DO_ACTION" }, ] }), ig.EventRunType.PARALLEL);
      break;
    case "Full Course Trap":
      // add sounds
      ig.game.events.callEvent(new ig.Event({ name:'Full Course Trap', steps: [{ type: 'WAIT', time: 1 }, { type: "DO_ACTION", entity: { "player": true }, action: [{ type: 'SHOW_ANIMATION', entity: { "player": true }, anim: "itemFetch", followUp:"itemEatSlow", wait: true},{ type: 'SHOW_ANIMATION', entity: { "player": true }, anim: "itemEatSlow", followUp:"itemEffect", wait: true},{ type: 'SHOW_ANIMATION', entity: { "player": true }, anim: "itemEatSlow", followUp:"itemEffect", wait: true},{ type: 'SHOW_ANIMATION', entity: { "player": true }, anim: "itemEatSlow", followUp:"itemEffect", wait: true},{ type: 'SHOW_ANIMATION', entity: { "player": true }, anim: "itemEffect", followUp:"itemEffectLoop", wait: true}]}, { type: 'WAIT', time: 5 }, ], }), ig.EventRunType.PARALLEL);
      break;
    case "Blocked Trap":
      ig.vars.set("events.blockedTrap", true);
      break;
    case "Prepare to Hi Trap":
      ig.game.events.callEvent(new ig.Event({ name:'0 HP Trap', steps: [ { type: 'WAIT', time: 1 },{ type: "REGEN_HP", target: { "player": true }, value: -1, showNumbers: true}] }), ig.EventRunType.PARALLEL);
      break;
    case "Death Trap":
      ig.game.events.callEvent(new ig.Event({ name:'Kill Trap', steps: [ { type: 'WAIT', time: 0.5 },{ type: "MANUAL_COMBATANT_KILL", entity: { "player": true }}] }), ig.EventRunType.PARALLEL);
      break;
  }
}
export function patch(plugin: MwRandomizer) {
  sc.STAT_CHANGE_SETTINGS["DASH-STEP-MINUS"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.DASH_STEP,
    value: -1,
    icon: "stat-dash",
    grade: "stat-rank-down-3",
  };
  sc.STAT_CHANGE_SETTINGS["NO-DASH"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.DASH_STEP,
    value: -10,
    icon: "stat-dash",
    grade: "stat-rank-down-3",
  };
  sc.STAT_CHANGE_SETTINGS["LOW-SP-REGEN"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: sc.STAT_PARAM_TYPE.SP_REGEN,
    value: -1,
    icon: "stat-sp-regen",
    grade: "stat-rank-down-3",
  };
  sc.STAT_CHANGE_SETTINGS["LOW-HP"] = {
    change: sc.STAT_CHANGE_TYPE.STATS,
    type: sc.STAT_PARAM_TYPE.HP,
    value: 0.1,
    icon: "stat-hp",
    grade: "stat-rank-down-3",
  };
  sc.STAT_CHANGE_SETTINGS["DRUNK"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: { key: "AIM_SPEED" },
    value: -2,
    icon: "stat-overheat",
    grade: "stat-rank-down-3",
  };
  sc.STAT_CHANGE_SETTINGS["ZERO-XP"] = {
    change: sc.STAT_CHANGE_TYPE.MODIFIER,
    type: { key: "XP_ZERO" },
    value: 1,
    icon: "stat-overheat",
    grade: "stat-rank-down-3",
  };

  ig.module("game.feature.puzzle.trap-puzzle-steps") .requires("game.feature.puzzle.puzzle-steps") .defines(function () { 
    var b = Vec3.create();
    ig.ACTION_STEP.ICE_CAGE = ig.ActionStepBase.extend({
      gfx: null,
      count: null,
      offset: null,
      align: null,
      area: null,
      zVary: null,
      _wm: new ig.Config({
        attributes: {
          offset: {
            _type: "Offset",
            _info:
              "Offset relative to entity ground center from which to shoot",
          },
          align: {
            _type: "String",
            _info: "Alignment relative to entity from which to shoot",
            _select: ig.ENTITY_ALIGN,
          },
          area: {
            _type: "Vec2",
            _info: "Area on which to rain the ice pillars randomly",
          },
          zVary: { _type: "Number", _info: "Value to +- vary the z height" },
        },
      }),
      init: function (a) {
        this.offset = a.offset;
        this.align = a.align;
        this.area = a.area;
        this.zVary = a.zVary || 0;
        a = {sheet: "media/entity/style/cold-dng-destruct.png"}
        this.gfx = new ig.Image(a.sheet);
      },
      clearCached: function () {
        this.gfx.decreaseRef();
      },
      start: function (a) {
        a = a.getAlignedPos(this.align, b);
        this.offset && Vec3.add(a, this.offset);
        var h = 5;
        var j
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x + this.area.x, a.y + this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x + this.area.x, a.y + this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x - this.area.x, a.y + this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x - this.area.x, a.y - this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x, a.y + this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x, a.y - this.area.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x + this.area.x, a.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
        j = ig.game.spawnEntity( ig.ENTITY.Destructible, a.x - this.area.x, a.y, a.z + h, { desType: sc.DESTRUCTIBLE_TYPE["iceBlock"], permaDestruct: true, blockNavMap: true }, false );
      },
    });
  });
}