craftingTable.addJsonRecipe("minecraft.shulker_shell",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "   ",
        "B B",
        "AAA"
    ],
    "key": {
        "A": {
            "item": "minecraft:purpur_block"
        },
        "B": {
            "item": "minecraft:purpur_slab"
        }
    },
    "result": {
        "count": 1,
        "id": "minecraft:shulker_shell"
    }
});
craftingTable.remove(<item:cobblemon:beast_ball>);
craftingTable.addJsonRecipe("cobblemon.beast_ball",
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "ABA",
        "BCB",
        "ABA"
    ],
    "key": {
        "A": {
            "item": "minecraft:gold_ingot"
        },
        "B": {
            "item": "minecraft:echo_shard"
        },
		"C": {
            "item": "tmtceic:netherite_pokeball_frame"
        }
    },
    "result": {
        "count": 8,
        "id": "cobblemon:beast_ball"
    }
});
craftingTable.remove(<item:cobblemon:master_ball>);
craftingTable.addJsonRecipe("cobblemon.master_ball", 
{
    "type": "minecraft:crafting_shaped",
    "pattern": [
        "DAD",
        "BCB",
        "EAE"
    ],
    "key": {
        "A": {
            "item": "minecraft:shulker_shell"
        },
        "B": {
            "item": "minecraft:nether_star"
        },
        "C": {
            "item": "tmtceic:netherite_pokeball_frame"
        },
		"D": {
            "item": "cobblemon:pink_apricorn"
        },
		"E": {
            "item": "cobblemon:white_apricorn"
        }
    },
    "result": {
        "count": 1,
        "id": "cobblemon:master_ball"
    }
});
craftingTable.removeByName("tomtaru:heavy_ball");
craftingTable.removeByName("tomtaru:moon_ball");
craftingTable.removeByName("tomtaru:sport_ball");
craftingTable.removeByName("tomtaru:heal_ball");
craftingTable.removeByName("tomtaru:quick_ball");
craftingTable.removeByName("tomtaru:fast_ball");