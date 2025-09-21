export enum ProjectTypeTech {
    Screen = 'screen',
}

export enum SystemLogLevel {
    Debug = 'debug',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Critical = 'critical',
}

export enum UserRole {
    SystemAdmin = 'System-Admin',
    Admin = 'Admin',
    SuperEditor = 'Super-Editor',
    Editor = 'Editor',
    /**
    * @deprecated Use UserRole.Admin instead
    */
    Streamer = 'Streamer',
}

export enum Tables {
    Clients = 'client',
    ClientsAuth = 'client_auth',
    ClientsEditors = 'client_editor',
    Profiles = 'profile',
    ProfilesConnection = 'profile_connection',
    Projects = 'project',
    ScreenElements = 'screen_element',
    System = 'system',
    SystemLogs = 'system_logs',
    Users = 'user',
    ScreenElementText = 'screen_element_text',
    ScreenElementCounter = 'screen_element_counter',
    /**
     * @deprecated since Version 3.18.0
     */
    ScreenElementRank = 'screen_element_rank',
    ScreenElementSubathon = 'screen_element_subathon',
    ScreenElementTwitchChat = 'screen_element_twitch_chat',
    ScreenElementSpotify = 'screen_element_spotify',
    AuditLogs = 'audit_logs',
    Share = 'project_share',
    ScreenElementsTimeViewer = 'screen_element_timeviewer',
    ScreenElementTwitchOverlay = 'screen_element_twitch',
    ScreenElementBingo = 'screen_element_bingo',
    Migrations = 'migrations',
    ElementManager = 'element_manager',
    /**
      * @deprecated since Version 3.0.0
    */
    ScreenElementCustomCode = 'screen_element_customCode',
    /**
      * @deprecated since Version 3.10.0
    */
    ProjectObs = 'project_obs',
    /**
      * @deprecated since Version 3.10.0
    */
    ProjectObsSyncs = 'project_obs_syncs',
    ProjectAssets = 'project_assets',
    AssetFolder = 'asset_folder',
    ClientObs = 'client_obs',
    SyncedElements = 'synced_elements',
    ScreenElementLogoRotation = 'screen_element_logo_rotation',
    ScreenElementRotation = 'screen_element_rotation',
    AuthId = 'auth_id',
}

export enum RankTypes {
    CounterStrike = 'CounterStrike',
    Fortnite = 'Fortnite',
    LeagueOfLegends = 'LeagueOfLegends',
    Overwatch = 'Overwatch',
    RainbowSixSiege = 'RainbowSixSiege',
    Valorant = 'Valorant',
}

export enum ProjectElements {
    text = 'Text',
    timer = 'Timer',
    stopwatch = 'Stopwatch',
    counter = 'Counter',
    twitchChat = 'TwitchChat',
    twitchOverlay = 'TwitchOverlay',
    /**
     * @deprecated since Version 3.18.0
     */
    rank = 'Rank',
    subathon = 'Subathon',
    /**
     * @deprecated since Version 3.0.0
     */
    customCode = 'CustomCode',
    spotify = 'Spotify',
    timeViewer = 'TimeViewer',
    bingo = 'Bingo',
    LogoRotation = 'LogoRotation',
    Rotation = 'Rotation',
}

export enum SettingsTab {
    Dashboard = 'dashboard',
    Users = 'users',
    Clients = 'client',
    Projects = 'projects',
    Logs = 'logs',
    Settings = 'settings',
    StreamerEditoren = 'streamerEditoren',
    AdminAuditLogs = 'adminAuditLogs',
    ElementManager = 'elementManager',
}

export enum TwitchOverlayOptions {
    Follow = 'follow',
    Subscriber = 'subscriber',
    CommunityGiftPurchase = 'communityGiftPurchase',
    Tip = 'tip',
    Cheer = 'cheer',
    Raid = 'raid',
}

export enum TwitchChatSize {
    small = 1,
    medium = 2,
    large = 3,
}

export enum TwitchChatFont {
    baloo = 0,
    segoe = 1,
    roboto = 2,
    lato = 3,
    notosans = 4,
    sourcecodepro = 5,
    impact = 6,
    comfortaa = 7,
    dancingscript = 8,
    indieflower = 9,
    presstart2p = 10,
    wallpoet = 11,
}

export enum TwitchChatStroke {
    none = 0,
    thin = 1,
    medium = 2,
    thick = 3,
    thicker = 4,
}

export enum TwitchChatShadow {
    none = 0,
    small = 1,
    medium = 2,
    large = 3,
}

export enum CookieNames {
    streamElementsToken = 'streamElementsToken',
    spotifyAccessToken = 'spotifyAccessToken',
    spotifyRefreshToken = 'spotifyRefreshToken',
    hasSeenChangeLog = 'hasSeenChangeLog',
    showFutureChangeLog = 'showFutureChangeLog',
    TwitchEmbeddedStreamer = 'twitchEmbeddedStreamer',
}

export enum ThemeStyles {
    Base = 'base',
    Sunset = 'sunset',
    Sea = 'sea',
    minimalistic = 'minimalistic',
}

export enum ThemeMode {
    Light = 'light',
    Dark = 'dark',
}

export enum LocalStorageKeys {
    SpotifyAfterAuthRedirect = 'spotifyAfterAuthRedirect',
    SpotifyAuthorized = 'spotifyAuthorized',
    projectSaved = 'projectSaved',
    SpotifyAccessToken = 'spotifyAccessToken',
    SpotifyRefreshToken = 'spotifyRefreshToken',
    EditorSettings = 'editorSettings',
}

export enum Badges {
    Alpha = 'error',
    Beta = 'info',
    New = 'primary',
    Soon = 'warning',
    None = 'none',
}

export enum ProjectElementLogAction {
    Create = 'create',
    Update = 'update',
    Delete = 'delete',
    BackgroundHidden = 'backgroundHidden',
    Hidden = 'hidden',
    OpacityChanged = 'opacityChanged',
    ShowInShare = 'showInShare',
    DeleteProject = 'deleteProject',
    CounterChanged = 'counterChanged',
    Lock = 'lock',
    ElementMoved = 'elementMoved',
    TimeViewerPaused = 'timeViewerPaused',
    TimeViewerResumed = 'timeViewerResumed',
    SyncedElementCreated = 'syncedElementCreated',
    Duplicated = 'duplicated',
    RotationDurationChanged = 'rotationDurationChanged',
}

export enum ProjectLogAction {
    BackgroundChanged = 'backgroundChanged',
}

// @deprecated since Version 3.10.0
export enum ProjectObsSyncStatus {
    Pending = 'pending',
    Completed = 'completed',
    Error = 'error',
}

export enum TimeViewerVariant {
    Default = 'default',
    NoTextFront = 'noTextFront',
    NoTextBack = 'noTextBack',
    NoTextInBetween = 'noTextInBetween',
}

export enum CounterDirection {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}
