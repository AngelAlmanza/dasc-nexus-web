import { BaseModel } from "@/data/models";

export class Term extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _start: Date,
    private _end: Date,
    private _active: boolean,
    private _plan_end: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get init(): Date {
    return this._start;
  }

  public set init(value: Date) {
    this._start = value;
  }

  public get end(): Date {
    return this._end;
  }

  public set end(value: Date) {
    this._end = value;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
  }

  public get plan_end(): Date {
    return this._plan_end;
  }

  public set plan_end(value: Date) {
    this._plan_end = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      start: this._start,
      end: this._end,
      active: this._active,
      plan_end: this._plan_end,
    };
  }
}
