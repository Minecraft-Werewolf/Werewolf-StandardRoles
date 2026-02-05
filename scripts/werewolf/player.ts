import type { SelfPlayerData } from "@mc-werewolf/game-engine";
import { registerRuntimePlayerDefaults } from "../internal/runtimeRegistry";

export type { SelfPlayerData };

// 任意にプロパティを追加可能。
// ここで定義したものがデフォルト値となります。
export const playerData: SelfPlayerData = {
    playerId: "", // playerId は各プレイヤーのIdが自動で割り振られます。(このままにしておいてください)
    isProtected: false, // 騎士の守護
};

registerRuntimePlayerDefaults(playerData);
