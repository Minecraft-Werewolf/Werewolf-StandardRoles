import { BaseEventManager } from "../../events/BaseEventManager";
import type { InGameManager } from "../InGameManager";
import { InGameEntityHurt } from "./EntityHurt";

export class InGameEventManager extends BaseEventManager {
    private entityHurt: InGameEntityHurt;
    private constructor(private readonly inGameManager: InGameManager) {
        super();
        this.entityHurt = InGameEntityHurt.create(this);
    }

    public static create(inGameManager: InGameManager): InGameEventManager {
        return new InGameEventManager(inGameManager);
    }

    public override subscribeAll(): void {
        this.entityHurt.subscribe();
    }

    public override unsubscribeAll(): void {
        this.entityHurt.unsubscribe();
    }

    public getInGameManager(): InGameManager {
        return this.inGameManager;
    }
}
