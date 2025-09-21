import type { Models } from 'appwrite';

export interface AppwriteStorage extends Models.Document {
    bucketId: string;
    chunksTotal: number;
    chunksUploaded: number;
    mimeType: string;
    name: string;
    signature: string;
    sizeOriginal: number;
}
