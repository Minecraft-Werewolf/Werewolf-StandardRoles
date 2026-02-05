import type { GameEventHandlerMap } from "../../@modules/game-manager/game/ingame/game/SkillManager";
import { knightSkillHandlers } from "./knight";
import { mediumSkillHandlers } from "./medium";
import { seerSkillHandlers } from "./seer";
import { registerRoleSkillHandlers } from "../../internal/registerBridge";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {
    seer: seerSkillHandlers,
    medium: mediumSkillHandlers,
    knight: knightSkillHandlers,
};

registerRoleSkillHandlers(roleSkillHandlers);
