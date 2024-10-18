import { BaseModel } from "@/data/models";

export class Classroom extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
    private _building: number,
    private _floor: number,
    private _long_desc: string,
    private _capacity: number,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get building(): number {
    return this._building;
  }

  public set building(value: number) {
    this._building = value;
  }

  public get floor(): number {
    return this._floor;
  }

  public set floor(value: number) {
    this._floor = value;
  }

  public get long_desc(): string {
    return this.long_desc;
  }

  public set long_desc(value: string) {
    this.long_desc = value;
  }

  public get capacity(): number {
    return this._capacity;
  }

  public set capacity(value: number) {
    this._capacity = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
      building: this._building,
      floor: this._floor,
      long_desc: this._long_desc,
      capacity: this._capacity,
    };
  }
}
