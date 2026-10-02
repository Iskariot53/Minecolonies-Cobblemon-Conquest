let MCSkill = Java.loadClass('com.minecolonies.api.entity.citizen.Skill');

// Stat blocks
const jobBuffs = {
    'minecolonies:alchemist': [MCSkill.Dexterity, MCSkill.Mana],
    'minecolonies:ranger': [MCSkill.Agility, MCSkill.Adaptability],
    'minecolonies:baker': [MCSkill.Knowledge, MCSkill.Dexterity],
    'minecolonies:beekeeper': [MCSkill.Dexterity, MCSkill.Adaptability],
    'minecolonies:blacksmith': [MCSkill.Strength, MCSkill.Focus],
    'minecolonies:stonesmeltery': [MCSkill.Athletics, MCSkill.Dexterity],
    'minecolonies:builder': [MCSkill.Adaptability, MCSkill.Athletics],
    'minecolonies:sawmill': [MCSkill.Knowledge, MCSkill.Dexterity],
    'minecolonies:cavalry': [MCSkill.Adaptability, MCSkill.Athletics],
    'minecolonies:chef': [MCSkill.Creativity, MCSkill.Knowledge],
    'minecolonies:chickenherder': [MCSkill.Adaptability, MCSkill.Agility],
    'minecolonies:composter': [MCSkill.Stamina, MCSkill.Athletics],
    'minecolonies:concretemixer': [MCSkill.Stamina, MCSkill.Dexterity],
    'minecolonies:deliveryman': [MCSkill.Agility, MCSkill.Adaptability],
    'minecolonies:cowboy': [MCSkill.Athletics, MCSkill.Stamina],
    'minecolonies:crusher': [MCSkill.Stamina, MCSkill.Strength],
    'minecolonies:healer': [MCSkill.Mana, MCSkill.Knowledge],
    'minecolonies:druid': [MCSkill.Mana, MCSkill.Focus],
    'minecolonies:dyer': [MCSkill.Creativity, MCSkill.Dexterity],
    'minecolonies:enchanter': [MCSkill.Mana, MCSkill.Knowledge],
    'minecolonies:farmer': [MCSkill.Stamina, MCSkill.Athletics],
    'minecolonies:fisherman': [MCSkill.Focus, MCSkill.Agility],
    'minecolonies:fletcher': [MCSkill.Dexterity, MCSkill.Creativity],
    'minecolonies:florist': [MCSkill.Dexterity, MCSkill.Agility],
    'minecolonies:lumberjack': [MCSkill.Strength, MCSkill.Focus],
    'minecolonies:glassblower': [MCSkill.Creativity, MCSkill.Focus],
    'minecolonies:knight': [MCSkill.Adaptability, MCSkill.Stamina],
    'minecolonies:mechanic': [MCSkill.Knowledge, MCSkill.Agility],
    'minecolonies:miner': [MCSkill.Strength, MCSkill.Stamina],
    'minecolonies:netherworker': [MCSkill.Stamina, MCSkill.Athletics],
    'minecolonies:planter': [MCSkill.Agility, MCSkill.Dexterity],
    'minecolonies:quarrier': [MCSkill.Strength, MCSkill.Stamina],
    'minecolonies:rabbitherder': [MCSkill.Agility, MCSkill.Athletics],
    'minecolonies:researcher': [MCSkill.Knowledge, MCSkill.Mana],
    'minecolonies:shepherd': [MCSkill.Focus, MCSkill.Strength],
    'minecolonies:sifter': [MCSkill.Focus, MCSkill.Strength],
    'minecolonies:smelter': [MCSkill.Athletics, MCSkill.Strength],
    'minecolonies:stablemaster': [MCSkill.Athletics, MCSkill.Stamina],
    'minecolonies:stonemason': [MCSkill.Creativity, MCSkill.Dexterity],
    'minecolonies:swineherder': [MCSkill.Strength, MCSkill.Athletics],
    'minecolonies:teacher': [MCSkill.Knowledge, MCSkill.Mana],
    'minecolonies:undertaker': [MCSkill.Strength, MCSkill.Mana],
    'minecolonies:cook': [MCSkill.Adaptability, MCSkill.Knowledge],

    // mctradepost
    'mctradepost:shopkeeper': [MCSkill.Creativity, MCSkill.Knowledge],
    'mctradepost:guestservices': [MCSkill.Adaptability, MCSkill.Creativity],
    'mctradepost:bartender': [MCSkill.Agility, MCSkill.Focus],
    'mctradepost:recyclingengineer': [MCSkill.Strength, MCSkill.Focus],
    'mctradepost:stationmaster': [MCSkill.Knowledge, MCSkill.Focus],
    'mctradepost:animaltrainer': [MCSkill.Dexterity, MCSkill.Athletics],
    'mctradepost:scout': [MCSkill.Stamina, MCSkill.Knowledge],
    'mctradepost:dairyworker': [MCSkill.Knowledge, MCSkill.Focus],
    'mctradepost:stewmelier': [MCSkill.Creativity, MCSkill.Focus],
    // cclogistics
    'cclogistics:logistics_coordinator': [MCSkill.Knowledge, MCSkill.Agility],
    'cclogistics:freight_inspector': [MCSkill.Intelligence, MCSkill.Knowledge],
    'cclogistics:packer_agent': [MCSkill.Stamina, MCSkill.Agility],
    // greenhousegardener
    'greenhousegardener:horticulturist': [MCSkill.Creativity, MCSkill.Knowledge],
    'greenhousegardener:rancher': [MCSkill.Strength, MCSkill.Athletics],
    // cmoncol 
    'cmoncol:rancher': [MCSkill.Stamina, MCSkill.Agility],
    'cmoncol:attendant': [MCSkill.Mana, MCSkill.Knowledge],
    'cmoncol:ev_trainer': [MCSkill.Athletics, MCSkill.Strength],
    'cmoncol:harvester': [MCSkill.Agility, MCSkill.Stamina],
    'cmoncol:pokeball_workshop': [MCSkill.Dexterity, MCSkill.Agility],
    'cmoncol:nurse': [MCSkill.Intelligence, MCSkill.Adaptability],
    'cmoncol:pokemon_guard': [MCSkill.Athletics, MCSkill.Strength],
    'cmoncol:science_lab': [MCSkill.Intelligence, MCSkill.Knowledge],
    'cmoncol:gym': [MCSkill.Knowledge, MCSkill.Mana],
    'cmoncol:wonder_trader': [MCSkill.Mana, MCSkill.Knowledge],
    'cmoncol:pokemerchant': [MCSkill.Adaptability, MCSkill.Intelligence],
    'cmoncol:ranger': [MCSkill.Agility, MCSkill.Athletics]
};

const BUFF_AMOUNT = 10;

// Driven by ColonyEvents.citizenJobChanged, bridged from MineColonies' own event bus by
// cce (com.cce.compat.minecolonies.ColonyEventBridge).
//
// Either job may be null: previousJob on a first hire, job on a dismissal.
ColonyEvents.citizenJobChanged(event => {
    var citizen = event.citizen;
    if (!citizen) return;

    var skillHandler = citizen.getCitizenSkillHandler();
    if (!skillHandler) return;

    // Registry keys arrive as Java strings; wrap them before using as object keys.
    var previousJob = event.previousJob ? String(event.previousJob) : '';
    var newJob = event.job ? String(event.job) : '';

    if (previousJob === newJob) return;

    var changed = false;

    if (previousJob !== '' && jobBuffs[previousJob]) {
        var oldSkills = jobBuffs[previousJob];
        for (var i = 0; i < oldSkills.length; i++) {
            skillHandler.incrementLevel(oldSkills[i], -BUFF_AMOUNT);
        }
        changed = true;
        console.info(`[Job System] Removed +${BUFF_AMOUNT} ${previousJob} buff`);
    }

    if (newJob !== '' && jobBuffs[newJob]) {
        var newSkills = jobBuffs[newJob];
        for (var j = 0; j < newSkills.length; j++) {
            skillHandler.incrementLevel(newSkills[j], BUFF_AMOUNT);
        }
        changed = true;
        console.info(`[Job System] Applied +${BUFF_AMOUNT} ${newJob} buff`);
    }

    // markDirty takes an int - it is ICivilianData.markDirty(int), inherited, not a no-arg.
    if (changed) citizen.markDirty(0);
});