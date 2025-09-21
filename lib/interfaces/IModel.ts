import type { Models } from 'appwrite';
import { Badges, ProjectElements, ProjectTypeTech, SystemLogLevel, ThemeMode, ThemeStyles, UserRole } from '../enum/enum';
import { ScreenElementInterface, ScreenElementTwitchAssetInterface } from './IScreenElements';

export interface SessionInterface extends Models.Document {
    current: boolean;
    providerUid: string;
    userId: string;
}

export interface UserInterface extends Models.Document {
    active: boolean;
    username: string;
    clients: ClientInterface[];
    profile: ProfileInterface;
    userId: string;
    deleted: boolean;
}

export interface ProjectInterface extends Models.Document {
    client: ClientInterface;
    name: string;
    type: ProjectTypeTech;
    forceReload: boolean;
    elements?: ScreenElementInterface[] | null;
    theme: ThemeStyles;
    mode: ThemeMode;
    isLive: boolean;
    isLocked: boolean;
    isActiveInObs: boolean;
    reloadObsSource: boolean;
    background: string;
}

export interface ClientInterface extends Models.Document {
    name: string;
    avatar_url: string;
    active: boolean;
    user: UserInterface | null;
    mngmtActive: boolean;
}

export interface SystemLogsInterface extends Models.Document {
    message: string;
    level: SystemLogLevel;
}

export interface ClientEditorInterface extends Models.Document {
    client: ClientInterface;
    user: UserInterface;
    role: UserRole;
}

export interface ProfileInterface extends Models.Document {
    connection: ProfileConnectionInterface;
    avatar: string | null;
}

export interface ProfileConnectionInterface extends ProfileConnectionDataInterface, Models.Document {
    profile: ProfileInterface;
}

export interface ProfileConnectionDataInterface {
    streamelements_token?: string;
    spotify_access_token?: string;
    spotify_refresh_token?: string;
}

export interface SystemInterface extends Models.Document {
    panic: boolean;
    maintenance: boolean;
}

export interface AuditLogInterface extends Models.Document {
    message: string;
    client: ClientInterface;
    user: UserInterface;
    project: ProjectInterface;
}

export interface ShareInterface extends Models.Document {
    name: string;
    project: ProjectInterface;
}

export interface TwitchOverlayGetAsset {
    asset: URL;
    screenElementAsset: ScreenElementTwitchAssetInterface;
}

export interface ChangeLogDataInterface {
    version: string;
    date: string;
    changes: {
        new: string[];
        fixed: string[];
        improvements: string[];
    };
    notes: string[];
}

export interface MigrationInterface extends Models.Document {
    file: string;
    status: 'done' | 'error';
}

export interface ElementManagerInterface extends Models.Document {
    name: ProjectTypeTech | ProjectElements;
    badge: Badges;
    isActive: boolean;
    _isEdited: boolean;
}

export interface ProjectObsInterface extends Models.Document {
    scene: string;
    source: string;
    sourceId: number;
    projectId: string;
    isOverlay: boolean;
}

export interface ProjectShareInterface extends Models.Document {
    name: string;
    project: ProjectInterface;
}

export interface ProjectAssetsInterface extends Models.Document {
    assetId: string;
    folderId: string;
    projectId: ProjectInterface['$id'];
}

export interface AssetFolderInterface extends Models.Document {
    name: string;
    parentId: string | null;
    clientId: ClientInterface['$id'];
}

export interface AssetInterface extends Models.Document {
    clientId: string;
    assetId: string;
    fileName: string;
    folderId: string | null;
}

export interface ClientObsInterface extends Models.Document {
    clientId: string;
    projectId: string;
    isActive: boolean;
}

export interface SyncedElementModelInterface extends Models.Document {
    sourceElementId: string;
    sourceProjectId: string;
    targetElementId: string;
    targetProjectId: string;
}

export interface SyncedElementInterface {
    sourceElementId: string;
    sourceProjectId: string;
    targetElementId: string;
    targetProjectId: string;
}

export interface IAuthId {
    projectId: string;
    client: ClientInterface;
}

export interface AuthStoreInterface {
    spotify: {
        accessToken: string;
        refreshToken: string;
    };
    streamelements: {
        token: string;
    };
}
