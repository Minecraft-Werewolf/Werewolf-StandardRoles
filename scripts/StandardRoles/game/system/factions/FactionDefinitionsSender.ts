import { KairoUtils, type KairoCommand } from "../../../../Kairo/utils/KairoUtils";
import { properties } from "../../../../properties";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_ID_SUFFIX } from "../../../constants/scriptevent";
import { factions } from "../../../data/factions";
import type { FactionManager } from "./FactionManager";

export class FactionDefinitionsSender {
    private constructor(private readonly factionManager: FactionManager) {}
    public static create(factionManager: FactionManager): FactionDefinitionsSender {
        return new FactionDefinitionsSender(factionManager);
    }

    public send(): void {
        const data: KairoCommand = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.FACTION_REGISTRATION_RESPONSE,
            addonId: properties.id,
            factions: factions,
        };

        KairoUtils.sendKairoCommand(SCRIPT_EVENT_ID_SUFFIX.WEREWOLF_GAMEMANAGER, data);
    }
}
