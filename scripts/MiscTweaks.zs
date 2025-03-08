craftingTable.addJsonRecipe("cobblemon.healing_machine",
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
craftingTable.addJsonRecipe("megas.keystone",
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
craftingTable.addJsonRecipe("megas.blank_z",
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
craftingTable.remove(<item:mega_showdown:tera_orb>);
craftingTable.addJsonRecipe("brendons_bottlecaps.goldencap",
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


