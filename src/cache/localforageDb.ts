import localforage from "localforage";

var localforageStore = localforage.createInstance({
  driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name        : 'react-query-and-dexi',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'localforageTest', // Should be alphanumeric, with underscores.
  description : 'some description'
});

export default localforageStore