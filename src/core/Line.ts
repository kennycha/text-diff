export class Line {
  num: number;
  text: string;

  constructor(num: number, text: string) {
    this.num = num;
    this.text = text;
  }

  eq(otherLine: Line) {
    return this.text === otherLine.text;
  }

  ne(otherLine: Line) {
    return this.text !== otherLine.text;
  }
}
