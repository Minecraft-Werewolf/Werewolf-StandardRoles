import type { SystemManager } from "../../SystemManager";
import { RoleRegistrationSender } from "./RoleRegistrationSender";

export class RoleManager {
    private readonly roleRegistrationSender: RoleRegistrationSender;
    private constructor(private readonly systemManager: SystemManager) {
        this.roleRegistrationSender = RoleRegistrationSender.create(this);
    }
    public static create(systemManager: SystemManager): RoleManager {
        return new RoleManager(systemManager);
    }

    public sendRegistrationRoles(): void {
        this.roleRegistrationSender.send();
    }
}
