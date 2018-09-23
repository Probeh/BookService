import { Edit } from "./Edit";

export class Result<T> {
  public created: Date;
  public item:    T;
  public edits?:  Edit<T>[] = new Array<Edit<T>>();

  // Default Constructor
  constructor(item: T) {
    this.created = new Date();
    this.item = item;
  }
}
