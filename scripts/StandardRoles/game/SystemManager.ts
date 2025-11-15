export class SystemManager {
    private constructor() {}

    private static instance: SystemManager | null = null;
    public static getInstance(): SystemManager {
        if (this.instance === null) {
            this.instance = new SystemManager();
        }
        return this.instance;
    }
}
