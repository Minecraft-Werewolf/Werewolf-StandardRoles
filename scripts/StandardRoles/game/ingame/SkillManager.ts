import type { GameEventType } from "../../data/roles";
import type { InGameManager } from "./InGameManager";

export class SkillManager {
    private constructor(private readonly inGameManager: InGameManager) {}
    public static create(inGameManager: InGameManager): SkillManager {
        return new SkillManager(inGameManager);
    }

    public async emitPlayerEvent(
        playerId: string,
        eventType: GameEventType,
        ctxPayload?: unknown,
    ): Promise<void> {}
}
