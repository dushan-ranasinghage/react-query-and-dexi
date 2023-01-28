import Dexie, { Table } from 'dexie';

// Models
import { Photo } from './models/Photo';

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  photos!: Table<Photo>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
        Photo: '++id, albumId, title, url, thumbnailUrl' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();