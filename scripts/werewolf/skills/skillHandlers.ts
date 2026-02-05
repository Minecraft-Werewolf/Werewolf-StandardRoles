import { knightSkillHandlers } from "./knight";
import { mediumSkillHandlers } from "./medium";
import { seerSkillHandlers } from "./seer";
import { registerRoleSkillHandlerMap } from "../../internal/definitionRegistryBridge";
import type { GameEventHandlerMap } from "@mc-werewolf/game-engine";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {
    seer: seerSkillHandlers,
    medium: mediumSkillHandlers,
    knight: knightSkillHandlers,
};

registerRoleSkillHandlerMap(roleSkillHandlers);
