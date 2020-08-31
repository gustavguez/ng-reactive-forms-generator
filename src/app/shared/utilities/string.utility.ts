export class StringUtility {
  static randomString(): string {
    return Math.random().toString(36).substring(2, 12);
  }

  static padLeft(val: number, digits: number): string {
    return val.toString().padStart(digits, '0');
  }

  static upperCaseFirstLetter(val: string): string {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }

  static replace(val: string, need: string, newValue: string): string {
    return val.split(need).join(newValue);
  }
}
