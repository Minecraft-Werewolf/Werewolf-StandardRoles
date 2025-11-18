import { KairoUtils, type KairoCommand } from "../../../../Kairo/utils/KairoUtils";
import { properties } from "../../../../properties";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../../constants/systems";
import { factions } from "../../../data/factions";
import { FactionManager } from "./FactionManager";

export class FactionRegistrationRequester {
    private constructor(private readonly factionManager: FactionManager) {}
    public static create(factionManager: FactionManager): FactionRegistrationRequester {
        return new FactionRegistrationRequester(factionManager);
    }

    public request(): void {
        const data: KairoCommand = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.FACTION_REGISTRATION_REQUEST,
            addonId: properties.id,
            factions: factions,
        };

        KairoUtils.sendKairoCommand(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, data);
    }
}
