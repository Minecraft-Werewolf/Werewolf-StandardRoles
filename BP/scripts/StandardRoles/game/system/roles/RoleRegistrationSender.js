import { system } from "@minecraft/server";
import { roles } from "../../../data/roles";
import { SCRIPT_EVENT_ID_PREFIX } from "../../../../Kairo/constants/scriptevent";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_ID_SUFFIX } from "../../../constants/scriptevent";
import { properties } from "../../../../properties";
export class RoleRegistrationSender {
    constructor(roleManager) {
        this.roleManager = roleManager;
    }
    static create(roleManager) {
        return new RoleRegistrationSender(roleManager);
    }
    send() {
        const data = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_RESPONSE,
            addonId: properties.id,
            roles: roles,
        };
        system.sendScriptEvent(`${SCRIPT_EVENT_ID_PREFIX.KAIRO}:${SCRIPT_EVENT_ID_SUFFIX.WEREWOLF_GAMEMANAGER}`, `${JSON.stringify(data)}`);
    }
}
