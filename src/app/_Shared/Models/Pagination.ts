export class Pagination<T> {
  public kind:       string;
  public totalItems: number;
  public items:      T[] = new Array<T>();

  // Parameterized Constructor
  constructor(kind?: string, totalItems?: number, items?: T[]) {
    this.kind = kind;
    this.totalItems = totalItems;
    if (items) { this.items = items; }
  }
}
