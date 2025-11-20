import type { RawMessage } from "@minecraft/server";

export const GameEventTypeValues = [
    "AfterGameStart",
    "BeforeMeetingStart",
    "AfterMeetingStart",
    "SkillUse",
    "SkillUseInMeeting",
    "Death",
] as const;
type GameEventType = (typeof GameEventTypeValues)[number];

interface RoleKey {
    addonId: string;
    roleId: string;
}

type RoleRef = RoleKey;

export interface RoleDefinition {
    id: string;
    name: RawMessage;
    description: RawMessage;
    faction: string;
    isExcludedFromSurvivalCheck?: boolean; // 主に狂人枠で使用
    count?: {
        max?: number;
        step?: number;
    };
    color?: string; // 指定しなければ、factionに基づいて自動で決定される
    divinationResult?: string; // 占い結果
    mediumResult?: string; // 霊視結果
    knownRoles?: string[]; // 初期に知っている役職
    handleGmaeEvents?: GameEventType[]; // 処理するゲームイベント
    appearance?: {
        toSelf?: RoleRef; // 自分目線の表示 (呪われし者とか)
        toOthers?: RoleRef; // 他人目線の表示 (テレパシストとか)
        toWerewolves?: RoleRef; // 人狼目線の表示 (スパイとか)
    };
    sortIndex: number; // ソート順
}

export const roles: RoleDefinition[] = [
    {
        id: "villager",
        name: { translate: "" },
        description: { translate: "" },
        faction: "villager",
        count: { max: 40 },
        sortIndex: 0,
    },
    {
        id: "seer",
        name: {},
        description: {},
        faction: "villager",
        sortIndex: 1,
    },
    {
        id: "medium",
        name: {},
        description: {},
        faction: "villager",
        sortIndex: 2,
    },
    {
        id: "knight",
        name: {},
        description: {},
        faction: "villager",
        sortIndex: 3,
    },
    {
        id: "werewolf",
        name: {},
        description: {},
        faction: "werewolf",
        sortIndex: 4,
    },
    {
        id: "great-wolf",
        name: {},
        description: {},
        faction: "werewolf",
        sortIndex: 5,
    },
    {
        id: "madman",
        name: {},
        description: {},
        faction: "werewolf",
        isExcludedFromSurvivalCheck: true,
        sortIndex: 6,
    },
];
