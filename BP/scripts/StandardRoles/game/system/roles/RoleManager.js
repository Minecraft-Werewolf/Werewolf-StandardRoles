import { RoleRegistrationSender } from "./RoleRegistrationSender";
export class RoleManager {
    constructor(systemManager) {
        this.systemManager = systemManager;
        this.roleRegistrationSender = RoleRegistrationSender.create(this);
    }
    static create(systemManager) {
        return new RoleManager(systemManager);
    }
    sendRegistrationRoles() {
        this.roleRegistrationSender.send();
    }
}
