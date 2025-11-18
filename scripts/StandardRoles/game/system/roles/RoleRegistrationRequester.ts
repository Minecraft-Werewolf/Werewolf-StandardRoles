import { KairoUtils, type KairoCommand } from "../../../../Kairo/utils/KairoUtils";
import { properties } from "../../../../properties";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../../constants/systems";
import { roles } from "../../../data/roles";
import { RoleManager } from "./RoleManager";

export class RoleRegistrationRequester {
    private constructor(private readonly roleManager: RoleManager) {}
    public static create(roleManager: RoleManager): RoleRegistrationRequester {
        return new RoleRegistrationRequester(roleManager);
    }

    public request(): void {
        const data: KairoCommand = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_REQUEST,
            addonId: properties.id,
            roles: roles,
        };

        KairoUtils.sendKairoCommand(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, data);
    }
}
