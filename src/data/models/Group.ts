import { BaseModel, Career } from "@/data/models";

export class Group extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _semester: number,
    private _shift: number,
    private _career: Career,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get semester(): number {
    return this._semester;
  }

  public set semester(value: number) {
    this._semester = value;
  }

  public get shift(): number {
    return this._shift;
  }

  public set shift(value: number) {
    this._shift = value;
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
      semester: this._semester,
      shift: this._shift,
      career: this._career.toJSON(),
    };
  }
}
