ServerEvents.recipes(event => {
    var SMARTPHONE_COLOURS = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'pink', 'gray', 'light_gray',
        'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'lime', 'black'
    ];
    var TERA_TYPES = [
        'bug', 'dark', 'dragon', 'electric', 'fairy', 'fire', 'fighting', 'flying', 'ghost',
        'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water', 'stellar'
    ];

    // Removals, shaped crafting only
    var removed = ['tiab:time_in_a_bottle', 'cobblemon:beast_ball', 'cobblemon:master_ball'];
    SMARTPHONE_COLOURS.forEach(colour => removed.push('cobblemon_smartphone:' + colour + '_smartphone'));
    removed.forEach(id => event.remove({ output: id, type: 'minecraft:crafting_shaped' }));

    // Removals by recipe id
    [
        'oritech:crafting/pulverizeralt',
        'oritech:crafting/assembleralt',
        'oritech:crafting/centrifugealt',
        'oritech:crafting/alloy/steel',
        'mega_showdown:tera_orb',
        'atm_recipes:mega_showdown/form_changes/red_orb',
        'atm_recipes:mega_showdown/form_changes/blue_orb',
        'cobblemon:reveal_glass',
        'atm_recipes:mega_showdown/form_changes/rusted_sword',
        'atm_recipes:mega_showdown/form_changes/rusted_shield',
        'legendarymonuments:rusted_sword',
        'legendarymonuments:rusted_shield',
        'mekanism:compat/ae2/sand_to_silicon'
    ].forEach(id => event.remove({ id: id }));

    // Productive Bees'
    [
        'bee_produce/eternal_starlight/amaramber_bee',
        'bee_produce/eternal_starlight/deepsilver_bee',
        'bee_produce/eternal_starlight/glacite_bee',
        'bee_produce/eternal_starlight/malarite_bee',
        'bee_produce/eternal_starlight/starlit_diamond_bee',
        'bee_conversion/eternal_starlight/amaramber_bee',
        'bee_conversion/eternal_starlight/glacite_bee',
        'bee_conversion/eternal_starlight/malarite_bee',
        'bee_conversion/eternal_starlight/starlit_diamond_bee',
        'bee_breeding/eternal_starlight/deepsilver_bee'
    ].forEach(id => event.remove({ id: 'productivebees:' + id }));

    // Mega Showdown Tweaks
    [
        'draco', 'dread', 'earth', 'fist', 'flame', 'icicle', 'insect', 'iron', 'meadow',
        'mind', 'pixie', 'sky', 'splash', 'spooky', 'stone', 'toxic', 'zap'
    ].forEach(plate => event.remove({ id: 'mega_showdown:' + plate + 'plate' }));

    // Cobblemon
    event.shaped('cobblemon:healing_machine', ['B B', 'ACA', 'AAA'], {
        A: 'mekanism:ingot_osmium',
        B: 'create:brass_ingot',
        C: 'mekanism:alloy_infused'
    }).id('mcc:healing_machine');

    event.shaped('8x cobblemon:beast_ball', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:echo_shard',
        C: 'tmtceic:netherite_pokeball_frame'
    }).id('mcc:beast_ball');

    event.shaped('cobblemon:master_ball', ['DAD', 'BCB', 'EAE'], {
        A: 'minecraft:shulker_shell',
        B: 'minecraft:nether_star',
        C: 'tmtceic:netherite_pokeball_frame',
        D: 'cobblemon:pink_apricorn',
        E: 'cobblemon:white_apricorn'
    }).id('mcc:master_ball');

    // Mega Showdown
    event.shaped('mega_showdown:keystone', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:diamond',
        B: 'mega_showdown:mega_stone',
        C: 'minecraft:netherite_ingot'
    }).id('mcc:keystone');

    event.shaped('mega_showdown:blank_z', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:diamond',
        B: 'minecraft:emerald',
        C: 'minecraft:netherite_ingot'
    }).id('mcc:blank_z');

    TERA_TYPES.forEach(type => {
        event.shaped('mega_showdown:tera_orb', [' B ', 'BAB', ' B '], {
            A: 'minecraft:diamond',
            B: 'mega_showdown:' + type + '_tera_shard'
        }).id('mcc:tera_orb_' + type);
    });

    // Smartphones
    SMARTPHONE_COLOURS.forEach(colour => {
        event.shaped('cobblemon_smartphone:' + colour + '_smartphone', ['BDB', 'ACA', 'AEA'], {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:' + colour + '_dye',
            C: 'cobblemon:healing_machine',
            D: 'cobblemonboxlink:box_link',
            E: 'minecraft:ender_chest'
        }).id('mcc:' + colour + '_smartphone');
    });

    // Misc
    event.shaped('minecraft:shulker_shell', ['   ', 'B B', 'AAA'], {
        A: 'minecraft:purpur_block',
        B: 'minecraft:purpur_slab'
    }).id('mcc:shulker_shell');

    event.shaped('deeperdarker:warden_upgrade_smithing_template', ['ACA', 'BDB', 'ACA'], {
        A: 'minecraft:echo_shard',
        B: 'deeperdarker:heart_of_the_deep',
        C: 'deeperdarker:warden_carapace',
        D: 'minecraft:netherite_upgrade_smithing_template'
    }).id('mcc:warden_upgrade_smithing_template');

    // Bells & Whistles
    event.remove({ id: 'bellsandwhistles:metro/metro_window' });
    event.shapeless('6x bellsandwhistles:metro_window', ['bellsandwhistles:metro_casing', '#c:glass_panes'])
        .id('bellsandwhistles:metro/metro_window');

    event.shapeless('create:rose_quartz', ['2x create:rose_quartz_block'])
        .id('mcc:rose_quartz_from_blocks_of_rose_quartz');
    event.shapeless('create:rose_quartz', ['4x biomesoplenty:rose_quartz_block'])
        .id('mcc:rose_quartz_from_bop_blocks_of_rose_quartz');

    event.custom({
        type: 'productivebees:bee_conversion',
        source: 'productivebees:radioactive',
        result: 'productivebees:wasted_radioactive',
        item: { item: 'mekanism:pellet_polonium' },
        chance: 5,
        conditions: [
            { type: 'productivebees:bee_exists', bee: 'productivebees:radioactive' },
            { type: 'productivebees:bee_exists', bee: 'productivebees:wasted_radioactive' }
        ]
    }).id('mcc:wasted_radioactive_bee_conversion');

    // Masterwork blueprint
    event.custom({
        type: 'cce:shaped',
        pattern: ['ABA', 'ACA', 'AAA'],
        key: {
            A: { item: 'cobblemonparts:ambiguous_shard' },
            B: { item: 'cobblemonparts:masterwork_blueprint' },
            C: { item: 'minecraft:end_stone' }
        },
        result: { id: 'cobblemonparts:masterwork_blueprint', count: 2 },
        keep_remainders: false
    }).id('mcc:masterwork_blueprint');

    // Create Sifter
    var shard = stone => 'cobblemonparts:' + stone + '_stone_shard';
    var SIFTING = [
        ['minecraft:gravel', 'andesite_mesh', false, [
            ['createsifter:raw_tin_piece', 0.133], ['createsifter:raw_aluminum_piece', 0.133],
            ['createsifter:raw_lead_piece', 0.178], ['createsifter:raw_nickel_piece', 0.178],
            ['createsifter:raw_silver_piece', 0.089], ['createsifter:raw_platinum_piece', 0.089]
        ]],
        ['minecraft:gravel', 'brass_mesh', false, [
            ['create:crushed_raw_tin', 0.1], ['create:crushed_raw_aluminum', 0.1],
            ['create:crushed_raw_lead', 0.1], ['create:crushed_raw_nickel', 0.1],
            ['create:crushed_raw_silver', 0.05], ['create:crushed_raw_platinum', 0.05],
            ['create:crushed_raw_osmium', 0.1], ['mekanism:fluorite_gem', 0.1]
        ]],
        ['minecraft:gravel', 'advanced_brass_mesh', false, [
            ['create:crushed_raw_tin', 0.2], ['create:crushed_raw_aluminum', 0.2],
            ['create:crushed_raw_lead', 0.25], ['create:crushed_raw_nickel', 0.25],
            ['create:crushed_raw_silver', 0.15], ['create:crushed_raw_platinum', 0.15],
            ['create:crushed_raw_osmium', 0.25], ['mekanism:fluorite_gem', 0.2]
        ]],
        ['createsifter:dust', 'andesite_mesh', false, [[shard('thunder'), 0.1]]],
        ['createsifter:dust', 'brass_mesh', false, [[shard('thunder'), 0.2]]],
        ['createsifter:dust', 'advanced_brass_mesh', false, [['create:crushed_raw_uranium', 0.2]]],
        ['minecraft:dirt', 'string_mesh', true, [[shard('water'), 0.1], [shard('ice'), 0.1]]],
        ['minecraft:dirt', 'brass_mesh', true, [[shard('water'), 0.2], [shard('ice'), 0.2]]],
        ['minecraft:dirt', 'string_mesh', false, [[shard('leaf'), 0.1]]],
        ['minecraft:dirt', 'andesite_mesh', false, [[shard('leaf'), 0.2]]],
        ['minecraft:sand', 'andesite_mesh', false, [[shard('sun'), 0.1]]],
        ['minecraft:sand', 'brass_mesh', false, [[shard('sun'), 0.2]]],
        ['createsifter:crushed_netherrack', 'brass_mesh', false, [[shard('fire'), 0.1]]],
        ['createsifter:crushed_netherrack', 'advanced_brass_mesh', false, [[shard('fire'), 0.2]]],
        ['createsifter:crushed_basalt', 'sturdy_mesh', false, [[shard('dusk'), 0.1]]],
        ['createsifter:crushed_basalt', 'advanced_sturdy_mesh', false, [[shard('dusk'), 0.2]]],
        ['createsifter:crushed_end_stone', 'sturdy_mesh', false, [[shard('moon'), 0.1], [shard('shiny'), 0.1], [shard('dawn'), 0.1]]],
        ['createsifter:crushed_end_stone', 'advanced_sturdy_mesh', false, [[shard('moon'), 0.2], [shard('shiny'), 0.2], [shard('dawn'), 0.2]]]
    ];
    SIFTING.forEach(r => {
        var recipe = {
            type: 'createsifter:sifting',
            input: { item: r[0] },
            mesh: { id: 'createsifter:' + r[1], count: 1 },
            results: r[3].map(o => { return { id: o[0], chance: o[1] }; }),
            processingTime: 500
        };
        if (r[2]) recipe.waterlogged = true;
        event.custom(recipe).id('mcc:sifting/' + r[0].split(':')[1] + '_' + r[1].replace('_mesh', '') + (r[2] ? '_waterlogged' : ''));
    });

    // Sifter inputs
    [
        ['minecraft:sand', 'createsifter:dust'],
        ['minecraft:netherrack', 'createsifter:crushed_netherrack'],
        ['minecraft:end_stone', 'createsifter:crushed_end_stone'],
        ['minecraft:basalt', 'createsifter:crushed_basalt']
    ].forEach(b => {
        var name = b[1].split(':')[1];
        event.custom({
            type: 'oritech:pulverizer',
            ingredients: [{ item: b[0] }],
            results: [{ count: 1, id: b[1] }],
            time: 200
        }).id('mcc:oritech/pulverizer/' + name);
        event.custom({
            type: 'immersiveengineering:crusher',
            energy: 1600,
            input: { item: b[0] },
            result: { id: b[1] }
        }).id('mcc:immersiveengineering/crusher/' + name);
        event.custom({
            type: 'mekanism:crushing',
            input: { count: 1, item: b[0] },
            output: { count: 1, id: b[1] }
        }).id('mcc:mekanism/crushing/' + name);
    });
});
