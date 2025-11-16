import { system } from "@minecraft/server";
import { roles } from "../../../data/roles";
import type { RoleManager } from "./RoleManager";
import { SCRIPT_EVENT_ID_PREFIX } from "../../../../Kairo/constants/scriptevent";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_ID_SUFFIX } from "../../../constants/scriptevent";
import { properties } from "../../../../properties";
import type { Command } from "../ScriptEventReceiver";

export class RoleRegistrationSender {
    private constructor(private readonly roleManager: RoleManager) {}
    public static create(roleManager: RoleManager): RoleRegistrationSender {
        return new RoleRegistrationSender(roleManager);
    }

    public send(): void {
        const data: Command = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_RESPONSE,
            addonId: properties.id,
            roles: roles,
        };

        system.sendScriptEvent(
            `${SCRIPT_EVENT_ID_PREFIX.KAIRO}:${SCRIPT_EVENT_ID_SUFFIX.WEREWOLF_GAMEMANAGER}`,
            `${JSON.stringify(data)}`,
        );
    }
}
