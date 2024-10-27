import { BaseModel, Career } from "@/data/models";

export class Group extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _semester: number,
    private _shift: number,
    private _career: Career,
    private _careerId: number,
    private _planId: number,
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

  public get careerId(): number {
    return this._careerId;
  }

  public set careerId(value: number) {
    this._careerId = value;
  }

  public get planId(): number {
    return this._planId;
  }

  public set planId(value: number) {
    this._planId = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      semester: this._semester,
      shift: this._shift,
      careerId: this._careerId,
      planId: this._planId,
      career: this._career.toJSON(),
    };
  }
}
