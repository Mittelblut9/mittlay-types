import type { Models } from 'appwrite';
import type { ProjectElementLogAction, ProjectElements, ProjectLogAction, TimeViewerVariant, TwitchOverlayOptions } from '../enum/enum';
import { ProjectInterface, UserInterface } from './IModel';
import { CounterDirection } from '../enum/enum';

export interface ScreenElementInterface extends Models.Document {
    project: ProjectInterface;
    remove: boolean;
    hide: boolean;
    top: number;
    left: number;
    type: ProjectElements;
    hideBackground: boolean;
    newCreated: boolean;
    opacity: number;
    showInShare: boolean;
    isLocked: boolean;
    isSynced: boolean;
    fontFamily: string;
    fontSize: number;
    fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    fontColor: string;
    customCss: string;
    customJs: string;
    isInsideRotation: boolean;
    text: ScreenElementTextInterface;
    counter: ScreenElementCounterInterface;
    spotify: ScreenElementSpotifyInterface;
    timeViewer: ScreenElementTimeViewerInterface;
    twitch: ScreenElementTwitchInterface;
    bingo: ScreenElementBingoInterface;
    logoRotation: ScreenElementLogoRotationInterface;
    rotation: ScreenElementRotationInterface;
    _actions: ScreenElementEditAction[];
}

export interface ScreenElementTextInterface extends Models.Document {
    $id: string;
    text: string;
}

export interface ScreenElementCounterInterface extends Models.Document {
    count: number;
    text: string;
    showOnChange: boolean;
    socDirection: CounterDirection;
}

export interface ScreenElementSubathonInterface extends Models.Document {
    name: string;
    timerStarted: string;
    timerStartedDate: Date;
    active: boolean;
    timeEachSub: number;
    timeEachDonation: number;
    timeEachBit: number;
    reversed: boolean;
    showFooterDates: boolean;
    hasEnded: boolean;
}

export interface ScreenElementCustomCodeInterface extends Models.Document {
    code: string;
}

// skipcq: JS-0322
export interface ScreenElementSpotifyInterface extends Models.Document {}

export interface ScreenElementTimeViewerInterface extends Models.Document {
    date: Date | string;
    pauseDate: Date | string;
    totalTime: number;
    isRunning: boolean;
    text: string;
    text2?: string | null;
    type: string;
    variant: TimeViewerVariant;
}

export interface ScreenElementTwitchInterface extends Models.Document {
    activeOptions: TwitchOverlayOptions[];
    assets: ScreenElementTwitchAssetInterface[];
    skipQueue: boolean;
    muted: boolean;
}

export interface ScreenElementTwitchAssetInterface {
    option: TwitchOverlayOptions;
    value: string; // Storage file id
    isAudio: boolean;
    isVideo: boolean;
    isImage: boolean;
}

export interface ScreenElementEditAction {
    action: ProjectElementLogAction | ProjectLogAction;
    editor: UserInterface;
    timestamp: Date;
}

export interface ScreenElementBingoInterface extends Models.Document {
    columns: number;
    rows: number;
    [key: `column-${number}`]: string;
}

export interface ScreenElementLogoRotationInterface extends Models.Document {
    files: string[];
    width: number;
    height: number;
    duration: number;
}

export interface ScreenElementRotationInterface extends Models.Document {
    elementIds: string[];
    duration: number;
}
