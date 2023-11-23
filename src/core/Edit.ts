import { EDIT_PREFIXES } from "../constants";
import { EditTypes, PrefixTypes } from "../types";

export class Edit {
  type: EditTypes;
  prefix: PrefixTypes;
  prev: string;
  current: string;

  constructor(type: EditTypes, prev: string, current: string) {
    this.type = type;
    this.prefix = EDIT_PREFIXES[type];
    this.prev = prev;
    this.current = current;
  }
}
