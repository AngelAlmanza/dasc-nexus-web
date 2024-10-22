import { BaseModel, Career } from "@/data/models";

export class Plan extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
    private _start: Date,
    private _end: Date,
    private _career: Career,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get start(): Date {
    return this._start;
  }

  public set start(value: Date) {
    this._start = value;
  }

  public get end(): Date {
    return this._end;
  }

  public set end(value: Date) {
    this._end = value;
  }

  public get career(): Career {
    return this.career;
  }

  public set career(value: Career) {
    this.career = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
      start: this._start,
      end: this._end,
      career: this._career.toJSON(),
    };
  }
}
