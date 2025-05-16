const commands = [
  {
    "name": "ActionShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "ActionShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Aim",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 0.0,
    "speedMultiplier": null,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BleedingShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BodyShot1",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BodyShot2",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 1.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BodyShot3",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 1.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BurstShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "BurstShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "ChargeShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "ChargeShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "ConcealShot",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "ConfusionShot",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.3,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 100.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "CripplingShot",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "DisarmingShot1",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "DisarmingShot2",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.75,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "DiveShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "ATTACKER_FORCE_PRONE",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "DoubleTap",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.8,
    "speedMultiplier": 2.1,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "EyeShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "FanShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FastBlast",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 6.0,
    "speedMultiplier": 3.05,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireAcidCone1",
    "weaponType": "ACIDRIFLE",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 5.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireAcidCone2",
    "weaponType": "ACIDRIFLE",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 6.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireAcidSingle1",
    "weaponType": "ACIDRIFLE",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireAcidSingle2",
    "weaponType": "ACIDRIFLE",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 8.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireLightningCone1",
    "weaponType": "LIGHTNINGRIFLE",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireLightningCone2",
    "weaponType": "LIGHTNINGRIFLE",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireLightningSingle1",
    "weaponType": "LIGHTNINGRIFLE",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FireLightningSingle2",
    "weaponType": "LIGHTNINGRIFLE",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "FlameCone1",
    "weaponType": "FLAMETHROWER",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 5.0,
    "speedMultiplier": 4.0,
    "dotEffects": [
      {
        "type": "ONFIRE",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 100.0,
        "duration": 60.0
      }
    ],
    "stateEffects": []
  },
  {
    "name": "FlameCone2",
    "weaponType": "FLAMETHROWER",
    "range": 16,
    "targetType": "cone",
    "damageMultiplier": 6.0,
    "speedMultiplier": 4.0,
    "dotEffects": [
      {
        "type": "ONFIRE",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 100.0,
        "duration": 60.0
      }
    ],
    "stateEffects": []
  },
  {
    "name": "FlameSingle1",
    "weaponType": "FLAMETHROWER",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 4.0,
    "dotEffects": [
      {
        "type": "ONFIRE",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 100.0,
        "duration": 60.0
      }
    ],
    "stateEffects": []
  },
  {
    "name": "FlameSingle2",
    "weaponType": "FLAMETHROWER",
    "range": 16,
    "targetType": "single",
    "damageMultiplier": 8.0,
    "speedMultiplier": 4.0,
    "dotEffects": [
      {
        "type": "ONFIRE",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 100.0,
        "duration": 60.0
      }
    ],
    "stateEffects": []
  },
  {
    "name": "FlurryShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "FlurryShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "FlushingShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      },
      {
        "type": "POSTUREUP_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "FlushingShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      },
      {
        "type": "POSTUREUP_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "FullAutoArea1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 30.0
      },
      {
        "type": "BLIND_EFFECT",
        "chance": 30.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 30.0
      }
    ]
  },
  {
    "name": "FullAutoArea2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 30.0
      },
      {
        "type": "BLIND_EFFECT",
        "chance": 30.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 30.0
      }
    ]
  },
  {
    "name": "FullAutoSingle1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 30.0
      },
      {
        "type": "BLIND_EFFECT",
        "chance": 30.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 30.0
      }
    ]
  },
  {
    "name": "FullAutoSingle2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 30.0
      },
      {
        "type": "BLIND_EFFECT",
        "chance": 30.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 30.0
      }
    ]
  },
  {
    "name": "HeadShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "HeadShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "HeadShot3",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "HealthShot1",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "HealthShot2",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "KipUpShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "ATTACKER_FORCE_STANDING",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "KnockdownFire",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 85.0
      },
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "LastDitch",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 6.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "LegShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "LegShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "LegShot3",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "LowBlow",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hBlindHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hBlindHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hBodyHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hBodyHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hBodyHit3",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.5,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hDizzyHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hDizzyHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.5,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hHealthHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hHealthHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hHit3",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 40.0
      }
    ]
  },
  {
    "name": "Melee1hLunge1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hLunge2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee1hScatterHit1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hScatterHit2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hSpinAttack1",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee1hSpinAttack2",
    "weaponType": "ONEHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 40.0
      }
    ]
  },
  {
    "name": "Melee2hArea1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hArea2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hArea3",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hHeadHit1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hHeadHit2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.75,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hHeadHit3",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.5,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hHit1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hHit2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hHit3",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 50.0
      }
    ]
  },
  {
    "name": "Melee2hLunge1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hLunge2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hMindHit1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hMindHit2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hSpinAttack1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hSpinAttack2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Melee2hSweep1",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Melee2hSweep2",
    "weaponType": "TWOHANDMELEEWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "MindShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "MindShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "MultiTargetPistolShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 4.2,
    "speedMultiplier": 3.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "OverChargeShot1",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.75,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "OverChargeShot2",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.75,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PanicShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 2.0,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "NEXTATTACKDELAY_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PistolMeleeDefense1",
    "weaponType": "PISTOLWEAPON",
    "range": 10,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PistolMeleeDefense2",
    "weaponType": "PISTOLWEAPON",
    "range": 10,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 65.0
      }
    ]
  },
  {
    "name": "PointBlankArea1",
    "weaponType": "RANGEDWEAPON",
    "range": 12,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PointBlankArea2",
    "weaponType": "PISTOLWEAPON",
    "range": 12,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PointBlankSingle1",
    "weaponType": "RANGEDWEAPON",
    "range": 12,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PointBlankSingle2",
    "weaponType": "PISTOLWEAPON",
    "range": 10,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 1.8,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmActionHit1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmActionHit2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmArea1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.75,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmArea2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.75,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "PolearmHit1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmHit2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "PolearmHit3",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      },
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PolearmLegHit1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmLegHit2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.75,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmLegHit3",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmLunge1",
    "weaponType": "POLEARMWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PolearmLunge2",
    "weaponType": "POLEARMWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PolearmSpinAttack1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "PolearmSpinAttack2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "PolearmStun1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PolearmStun2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 60.0
      }
    ]
  },
  {
    "name": "PolearmSweep1",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "PolearmSweep2",
    "weaponType": "POLEARMWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "RollShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "ATTACKER_FORCE_CROUCH",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Saber1hComboHit1",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber1hComboHit2",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 40.0
      }
    ]
  },
  {
    "name": "Saber1hComboHit3",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.5,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 40.0
      }
    ]
  },
  {
    "name": "Saber1hFlurry",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.5,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 75.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "Saber1hFlurry2",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 4.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 85.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 85.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "Saber1hHeadHit1",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber1hHeadHit2",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.75,
    "speedMultiplier": 1.75,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber1hHeadHit3",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.25,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 60.0
      }
    ]
  },
  {
    "name": "Saber1hHit1",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber1hHit2",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 50.0
      }
    ]
  },
  {
    "name": "Saber1hHit3",
    "weaponType": "ONEHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "Saber2hBodyHit1",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hBodyHit2",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.75,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hBodyHit3",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.25,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hFrenzy",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.5,
    "speedMultiplier": 3.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 75.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "Saber2hHit1",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hHit2",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hHit3",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "Saber2hPhantom",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.5,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 85.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 85.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "Saber2hSweep1",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Saber2hSweep2",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "Saber2hSweep3",
    "weaponType": "TWOHANDJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 3.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberPolearmDervish",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.5,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 75.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "SaberPolearmDervish2",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.5,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 85.0
      },
      {
        "type": "DIZZY_EFFECT",
        "chance": 85.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "SaberPolearmHit1",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberPolearmHit2",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 50.0
      }
    ]
  },
  {
    "name": "SaberPolearmHit3",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "SaberPolearmLegHit1",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberPolearmLegHit2",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberPolearmLegHit3",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.25,
    "speedMultiplier": 2.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberPolearmSpinAttack1",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 0.75,
    "speedMultiplier": 1.25,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberPolearmSpinAttack2",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 1.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberPolearmSpinAttack3",
    "weaponType": "POLEARMJEDIWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberSlash1",
    "weaponType": "JEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.25,
    "dotEffects": [
      {
        "type": "BLEEDING",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 25.0,
        "strength": 50.0,
        "duration": 30.0
      },
      {
        "type": "BLEEDING",
        "pool": "ACTION",
        "potency": 0.0,
        "chance": 25.0,
        "strength": 50.0,
        "duration": 30.0
      },
      {
        "type": "BLEEDING",
        "pool": "MIND",
        "potency": 0.0,
        "chance": 25.0,
        "strength": 50.0,
        "duration": 30.0
      }
    ],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberSlash2",
    "weaponType": "JEDIWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [
      {
        "type": "BLEEDING",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 75.0,
        "duration": 60.0
      },
      {
        "type": "BLEEDING",
        "pool": "ACTION",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 75.0,
        "duration": 60.0
      },
      {
        "type": "BLEEDING",
        "pool": "MIND",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 75.0,
        "duration": 60.0
      }
    ],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberThrow1",
    "weaponType": "JEDIWEAPON",
    "range": 32,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SaberThrow2",
    "weaponType": "JEDIWEAPON",
    "range": 32,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SaberThrow3",
    "weaponType": "JEDIWEAPON",
    "range": 32,
    "targetType": "cone",
    "damageMultiplier": 2.0,
    "speedMultiplier": 4.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "ScatterShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "ScatterShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SniperShot",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": null,
    "speedMultiplier": null,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "SprayShot",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 3.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 60.0
      },
      {
        "type": "BLIND_EFFECT",
        "chance": 100.0
      },
      {
        "type": "STUN_EFFECT",
        "chance": 30.0
      }
    ]
  },
  {
    "name": "StartleShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREUP_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "StartleShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 4.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREUP_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "StoppingShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "StrafeShot1",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "REMOVE_COVER_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "StrafeShot2",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 5.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "REMOVE_COVER_EFFECT",
        "chance": 75.0
      }
    ]
  },
  {
    "name": "SuppressionFire1",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SuppressionFire2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "SurpriseShot",
    "weaponType": "RIFLEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "ThreatenShot",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 0.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "TorsoShot",
    "weaponType": "PISTOLWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.3,
    "dotEffects": [
      {
        "type": "ONFIRE",
        "pool": "HEALTH",
        "potency": 0.0,
        "chance": 100.0,
        "strength": 30.0,
        "duration": 30.0
      }
    ],
    "stateEffects": []
  },
  {
    "name": "UnarmedBlind1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedBodyHit1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedCombo1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedCombo2",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 4.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedDizzy1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedHeadHit1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedHit1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedHit2",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.5,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedHit3",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 4.0,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "BLIND_EFFECT",
        "chance": 40.0
      }
    ]
  },
  {
    "name": "UnarmedKnockdown1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedKnockdown2",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "DIZZY_EFFECT",
        "chance": 75.0
      },
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedLegHit1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.5,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedLunge1",
    "weaponType": "UNARMEDWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 2.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "POSTUREDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedLunge2",
    "weaponType": "UNARMEDWEAPON",
    "range": 20,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnarmedSpinAttack1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 2.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedSpinAttack2",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "circle",
    "damageMultiplier": 3.0,
    "speedMultiplier": 3.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "UnarmedStun1",
    "weaponType": "UNARMEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 1.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 100.0
      }
    ]
  },
  {
    "name": "UnderHandShot",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 3.0,
    "speedMultiplier": 1.5,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "KNOCKDOWN_EFFECT",
        "chance": 85.0
      }
    ]
  },
  {
    "name": "WarningShot",
    "weaponType": "RANGEDWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 0.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": []
  },
  {
    "name": "WildShot1",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "single",
    "damageMultiplier": 2.25,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 50.0
      }
    ]
  },
  {
    "name": "WildShot2",
    "weaponType": "CARBINEWEAPON",
    "range": -1,
    "targetType": "cone",
    "damageMultiplier": 3.0,
    "speedMultiplier": 2.0,
    "dotEffects": [],
    "stateEffects": [
      {
        "type": "STUN_EFFECT",
        "chance": 50.0
      }
    ]
  }
];