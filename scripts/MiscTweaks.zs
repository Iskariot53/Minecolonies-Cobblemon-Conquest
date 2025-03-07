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