export interface StreamElementsInterface {
    onEvent: (cb: Function) => void;
}

export interface StreamElementsEvent {
    event: string;
    data: StreamElementsEventData;
}

export interface StreamElementsEventQueue extends StreamElementsEvent {
    active: boolean;
    runs: boolean;
}

export interface StreamElementsEventData {
    activityId: string;
    channel: string;
    createdAt: Date;
    data: {
        amount: number;
        avatar: string;
        displayName: string;
        providerId: string;
        username: string;
        tier: 'prime';
        message: string;
    };
    isMock: true;
    provider: 'twitch';
    sessionEventsCount: number;
    type: string;
    updatedAt: Date;
}
