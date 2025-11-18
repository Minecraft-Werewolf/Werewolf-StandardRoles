import type { SystemManager } from "../../SystemManager";
import { RoleDefinitionsSender } from "./RoleDefinitionsSender";

export class RoleManager {
    private readonly roleDefinitionsSender: RoleDefinitionsSender;
    private constructor(private readonly systemManager: SystemManager) {
        this.roleDefinitionsSender = RoleDefinitionsSender.create(this);
    }
    public static create(systemManager: SystemManager): RoleManager {
        return new RoleManager(systemManager);
    }

    public sendRoleDefinitions(): void {
        this.roleDefinitionsSender.send();
    }
}
