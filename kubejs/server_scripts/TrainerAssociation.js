// Trainer Association summon: Trainer Card on a Trainer Spawner

var RCT_TRAINER_ASSOCIATION = Java.loadClass('com.gitlab.srcmc.rctmod.world.entities.TrainerAssociation');
var RCT_MOD = Java.loadClass('com.gitlab.srcmc.rctmod.api.RCTMod');

BlockEvents.rightClicked('rctmod:trainer_spawner', event => {
    if (event.item.id != 'rctmod:trainer_card') return;

    var player = event.player;
    var level = event.level;
    var pos = event.block.pos;
    var range = RCT_MOD.getInstance().getServerConfig().maxHorizontalDistanceToPlayers();

    if (!level.getEntitiesOfClass(RCT_TRAINER_ASSOCIATION, player.getBoundingBox().inflate(range)).isEmpty()) {
        player.tell('A rep is already nearby');
    } else if (!level.getBlockState(pos.above()).isAir() || !level.getBlockState(pos.above(2)).isAir()) {
        player.tell('Spawner obstructed');
    } else {
        var rep = RCT_TRAINER_ASSOCIATION.getEntityType().create(level);
        rep.setPos(pos.getX() + 0.5, pos.getY() + 1, pos.getZ() + 0.5);
        rep.setPlayerTarget(player);
        level.addFreshEntity(rep);
    }

    event.cancel();
});
