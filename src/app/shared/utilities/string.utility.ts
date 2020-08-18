export class StringUtility {
  static randomString(): string {
    return Math.random().toString(36).substring(2, 12);
  }

  static padLeft(val: number, digits: number): string {
    return val.toString().padStart(digits, '0');
  }
}
