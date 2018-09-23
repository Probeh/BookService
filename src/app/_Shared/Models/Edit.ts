export class Edit<T> {
  public edited: Date;
  public item:   T;

  // Parameterized Constructor
  constructor(item: T) {
    this.edited = new Date();
  }
}
