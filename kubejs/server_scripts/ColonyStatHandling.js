let MCSkill = Java.loadClass('com.minecolonies.api.entity.citizen.Skill');

// Generate a random integer between x/min and y/max 
function getRandomBuff(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.EntityJoinLevelEvent', event => {
    const entity = event.getEntity();
    const level = event.getLevel();

    if (level.isClientSide()) return;
    if (entity.type !== 'minecolonies:citizen' && entity.type !== 'minecolonies:visitor') return;

    if (!entity.persistentData.getBoolean('initial_stats_buffed')) {
        
        level.getServer().scheduleInTicks(20, (callback) => {
            
            if (!entity || !entity.isAlive()) return;

            const citizenData = typeof entity.getCitizenData === 'function' ? entity.getCitizenData() : null;
            
            if (citizenData != null) {
                const skillHandler = citizenData.getCitizenSkillHandler();

                // Roll a random number between x and y for each stat
                skillHandler.incrementLevel(MCSkill.Athletics, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Dexterity, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Strength, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Agility, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Stamina, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Mana, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Adaptability, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Focus, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Creativity, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Knowledge, getRandomBuff(5, 15));
                skillHandler.incrementLevel(MCSkill.Intelligence, getRandomBuff(5, 15));

                entity.markDirty(0);
                entity.persistentData.putBoolean('initial_stats_buffed', true);
                
                console.info(`[Citizen Buff] Randomized baseline stats applied to ${entity.getDisplayName().getString()}`);
            }
        });
    }
});