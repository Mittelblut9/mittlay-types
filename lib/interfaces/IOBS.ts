type ObsSourceType = 'OBS_SOURCE_TYPE_INPUT';
type ObsBlendMode = 'OBS_BLEND_NORMAL';

export interface ObsSceneItemInterface {
    inputKind: string;
    isGroup: boolean | null;
    sceneItemBlendMode: ObsBlendMode;
    sceneItemEnabled: boolean;
    sceneItemId: number;
    sceneItemIndex: number;
    sceneItemLocked: boolean;
    sceneItemTransform: object;
    sourceName: string;
    sourceType: ObsSourceType;
    sourceUuid: string;
}

export interface ObsSceneItemListInterface {
    sceneItems: ObsSceneItemInterface[];
}
