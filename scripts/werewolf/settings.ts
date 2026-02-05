import type { SettingDefinition } from "@mc-werewolf/game-engine";
import { registerSettingDefinitions } from "../internal/definitionRegistryBridge";

export const settings: SettingDefinition[] = [];

registerSettingDefinitions(settings);
