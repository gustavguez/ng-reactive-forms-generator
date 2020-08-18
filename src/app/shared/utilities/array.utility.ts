export class ArrayUtility {
  // Suggest current timezone hours
  static find(
    items: any[],
    id: any,
    callback: (item: any, index?: any) => void,
    compareKey?: string
  ): void {
    // Check id key
    const key: string = compareKey ? compareKey : 'id';

    // Check items
    if (items instanceof Array) {
      let found: boolean = false;

      // Found it
      items.every((item: any, index: number) => {
        found = item[key] === id;

        if (found) {
          callback(item, index);
        }
        return !found;
      });
    }
  }

  static each(items: any, callback: (item: any, index?: any) => void): void {
    // Array
    if (items instanceof Array) {
      items.forEach((item: any, index: number) => {
        callback(item, index);
      });
    } else if (items && typeof items === 'object') {
      // Object
      for (const index in items) {
        callback(items[index], index);
      }
    }
  }

  static every(
    items: any[],
    callback: (item: any, index?: any) => boolean
  ): void {
    if (items instanceof Array) {
      items.every((item: any, index: number) => callback(item, index));
    }
  }

  static getDisplayKeys(
    items: any[],
    idKey?: string,
    displayKey?: string
  ): any {
    const displayKeys: any = {};

    // Default keys
    idKey = idKey ? idKey : 'id';
    displayKey = displayKey ? displayKey : 'name';

    // Each
    ArrayUtility.each(items, (obj: any) => {
      displayKeys[obj[idKey]] = obj[displayKey];
    });
    return displayKeys;
  }

  static getSelectedKeys(items: []): any[] {
    const selected: any[] = [];

    // Iterate
    ArrayUtility.each(items, (val: boolean, key: any) => {
      if (val) {
        selected.push(key);
      }
    });
    return selected;
  }

  static filter(
    items: any[],
    callback: (item: any, index?: any) => any
  ): any[] {
    let result: any[] = [];
    if (items instanceof Array) {
      result = items.filter((item: any, index: number) =>
        callback(item, index)
      );
    }
    return result;
  }

  static map(items: any[], callback: (item: any, index?: any) => any): any[] {
    let result: any[] = [];
    if (items instanceof Array) {
      result = items.map((item: any, index: number) => callback(item, index));
    }
    return result;
  }

  static sort(items: any[], compareKey: string): any[] {
    const result: any[] = items.sort((itemA: any, itemB: any) => {
      if (itemA[compareKey] < itemB[compareKey]) {
        return -1;
      }
      if (itemA[compareKey] > itemB[compareKey]) {
        return 1;
      }
      return 0;
    });
    return result;
  }

  static hasValue(items: any[]): boolean {
    return items instanceof Array && items.length > 0;
  }
}
