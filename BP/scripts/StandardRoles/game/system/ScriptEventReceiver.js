import { ConsoleManager } from "../../../Kairo/utils/ConsoleManager";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_MESSAGES } from "../../constants/scriptevent";
import { GameWorldState } from "../SystemManager";
export class ScriptEventReceiver {
    constructor(systemManager) {
        this.systemManager = systemManager;
    }
    static create(systemManager) {
        return new ScriptEventReceiver(systemManager);
    }
    handleScriptEvent(message) {
        let data;
        try {
            data = JSON.parse(message);
        }
        catch {
            ConsoleManager.warn(`[ScriptEventReceiver] Invalid JSON: ${message}`);
            return;
        }
        if (!data || typeof data.commandId !== "string") {
            ConsoleManager.warn(`[ScriptEventReceiver] Missing command: ${message}`);
            return;
        }
        console.log(data.commandId);
        switch (data.commandId) {
            case SCRIPT_EVENT_COMMAND_IDS.WORLD_STATE_CHANGE:
                this.handleWorldStateChange(data.worldState);
                break;
            case SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_REQUEST:
                this.systemManager.getRoleManager().sendRegistrationRoles();
            default:
                break;
        }
    }
    handleWorldStateChange(args) {
        const state = args[0];
        switch (state) {
            case SCRIPT_EVENT_MESSAGES.IN_GAME:
                this.systemManager.changeWorldState(GameWorldState.InGame);
                break;
            case SCRIPT_EVENT_MESSAGES.OUT_GAME:
                this.systemManager.changeWorldState(GameWorldState.OutGame);
                break;
        }
    }
}
