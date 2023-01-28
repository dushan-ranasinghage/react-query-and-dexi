import Dexie, { Table } from 'dexie';

// Models
import { IPhoto } from './models/Photo';

export class MySubClassedDexie extends Dexie {
  // 'photos' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  photos!: Table<IPhoto>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      photos: '++id, albumId, title, url, thumbnailUrl' // Primary key and indexed props
    });
  }
}



export const db = new MySubClassedDexie();