craftingTable.addJsonRecipe("cobblemon_conquest.healing_machine",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "B B",
        "ACA",
        "AAA"
    ],
    "key": {
        "A": {
            "item": "mekanism:ingot_osmium"
        },
        "B": {
            "item": "create:brass_ingot"
        },
		"C": {
            "item": "mekanism:alloy_infused"
        }
    },
    "result": {
        "count": 1,
        "id": "cobblemon:healing_machine"
    }
});
craftingTable.remove(<item:tiab:time_in_a_bottle>);
craftingTable.addJsonRecipe("cobblemon_conquest.keystone",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "ABA",
        "BCB",
        "ABA"
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:mega_stone"
        },
		"C": {
            "item": "minecraft:netherite_ingot"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:keystone"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.blank_z",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "ABA",
        "BCB",
        "ABA"
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "minecraft:emerald"
        },
		"C": {
            "item": "minecraft:netherite_ingot"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:blank-z"
    }
});
craftingTable.remove(<item:brendons_bottlecaps:goldencap>);
craftingTable.addJsonRecipe("cobblemon_conquest.goldencap",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "ABC",
        "DEF",
        "GHI"
    ],
    "key": {
        "A": {
            "item": "brendons_bottlecaps:atksilvercap"
        },
        "B": {
            "item": "brendons_bottlecaps:spatksilvercap"
        },
		"C": {
            "item": "brendons_bottlecaps:speedsilvercap"
        },
		"D": {
            "item": "minecraft:echo_shard"
        },
        "E": {
            "item": "minecraft:dragon_breath"
        },
		"F": {
            "item": "minecraft:nether_star"
        },
		"G": {
            "item": "brendons_bottlecaps:defsilvercap"
        },
		"H": {
            "item": "brendons_bottlecaps:spdefsilvercap"
        },
		"I": {
            "item": "brendons_bottlecaps:hpsilvercap"
        }
		
    },
    "result": {
        "count": 1,
        "id": "brendons_bottlecaps:goldencap"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.warden_upgrade_smithing_template",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "ACA",
        "BDB",
        "ACA"
    ],
    "key": {
        "A": {
            "item": "minecraft:echo_shard"
        },
        "B": {
            "item": "deeperdarker:heart_of_the_deep"
        },
		"C": {
            "item": "deeperdarker:warden_carapace"
        },
		"D": {
            "item": "minecraft:netherite_upgrade_smithing_template"
        }
    },
    "result": {
        "count": 1,
        "id": "deeperdarker:warden_upgrade_smithing_template"
    }
});
craftingTable.remove(<item:berrypouch:berry_pouch_30>);
craftingTable.addJsonRecipe("cobblemon_conquest.berry_pouch_small",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " C ",
        "BDB",
        " B "
    ],
    "key": {
        "B": {
            "item": "immersiveengineering:hemp_fabric"
        },
		"C": {
            "tag": "cobblemon:berries"
        },
		"D": {
            "item": "create:item_vault"
        }
    },
    "result": {
        "count": 1,
        "id": "berrypouch:berry_pouch_30"
    }
});
craftingTable.remove(<item:berrypouch:berry_pouch_69>);
smithing.addTransformRecipe("cobblemon_conquest.berry_pouch_large", <item:berrypouch:berry_pouch_69>, <item:eternal_starlight:pungency_fruit_upgrade_smithing_template>, <item:berrypouch:berry_pouch_30>, <item:eternal_starlight:pungency_fruit>);
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_bug",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:bug_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_dark",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:dark_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_dragon",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:dragon_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_electric",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:electric_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_fairy",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:fairy_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_fire",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:fire_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_fighting",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:fighting_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_flying",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:flying_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_ghost",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:ghost_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_grass",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:grass_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_ground",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:ground_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_ice",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:ice_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_normal",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:normal_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_poison",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:poison_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_psychic",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:psychic_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_rock",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:rock_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_steel",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:steel_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.addJsonRecipe("cobblemon_conquest.tera_orb_water",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        " B ",
        "BAB",
        " B "
    ],
    "key": {
        "A": {
            "item": "minecraft:diamond"
        },
        "B": {
            "item": "mega_showdown:water_tera_shard"
        }
    },
    "result": {
        "count": 1,
        "id": "mega_showdown:tera_orb"
    }
});
craftingTable.removeByName("cobblemon:red_orb");
craftingTable.removeByName("cobblemon:blue_orb");
craftingTable.addShaped("cobblemon_conquest.masterwork_blueprint", <item:cobblemonparts:masterwork_blueprint> * 2, [
    [<item:cobblemonparts:ambiguous_shard>, <item:cobblemonparts:masterwork_blueprint>, <item:cobblemonparts:ambiguous_shard>],
    [<item:cobblemonparts:ambiguous_shard>, <item:minecraft:end_stone>, <item:cobblemonparts:ambiguous_shard>],
    [<item:cobblemonparts:ambiguous_shard>, <item:cobblemonparts:ambiguous_shard>, <item:cobblemonparts:ambiguous_shard>]
]);