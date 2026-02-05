import { world } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import {
    registerSecondUpdateHandler,
    registerTickUpdateHandler,
} from "../internal/definitionRegistryBridge";
import type { GameEventContext } from "@mc-werewolf/game-engine";

export const onTickUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;

    const players = world.getPlayers();
    players.forEach((player) => {
        const playerData = playersData.find((pd) => pd.playerId === player.id);
        if (!playerData) return;

        if (playerData.isProtected) {
            player.addEffect(MinecraftEffectTypes.Resistance, 2, {
                amplifier: 255,
                showParticles: false,
            });
        }
    });
};

export const onSecondUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;
};

registerTickUpdateHandler(onTickUpdate);
registerSecondUpdateHandler(onSecondUpdate);
