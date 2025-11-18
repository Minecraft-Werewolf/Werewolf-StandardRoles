import type { SystemManager } from "../../SystemManager";
import { FactionDefinitionsSender } from "./FactionDefinitionsSender";

export class FactionManager {
    private readonly factionDefinitionsSender: FactionDefinitionsSender;
    private constructor(private readonly systemManager: SystemManager) {
        this.factionDefinitionsSender = FactionDefinitionsSender.create(this);
    }
    public static create(systemManager: SystemManager): FactionManager {
        return new FactionManager(systemManager);
    }

    public sendFactionDefinitions(): void {
        this.factionDefinitionsSender.send();
    }
}
