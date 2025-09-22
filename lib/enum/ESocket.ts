/** SERVER */

export enum ESocketServer {
    PING = 'ping',
    SYSTEM_HEALTH = 'system:health',
}

export enum ESocketNamespace {
    LOCAL = '/',
    GLOBAL = '/global',
    PROJECT = '/project',
    EDITOR = '/editor',
}


/** CLIENT */

export enum ESocketClient {
    PONG = 'pong',
    SYSTEM_HEALTH = 'system:health',
}