import type { SettingDefinition } from "../@modules/game-manager/constants/types";
import { registerSettings } from "../internal/registerBridge";

export const settings: SettingDefinition[] = [];

registerSettings(settings);
