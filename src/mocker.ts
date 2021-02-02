/**
 * mocker class
 */
export class Mocker {
  private m: Function;

  constructor(m: Function) {
    this.m = m;
  }

  public mock(): any {
    return this.m();
  }
}
