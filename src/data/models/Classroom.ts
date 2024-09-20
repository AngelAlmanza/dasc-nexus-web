import { BaseModel } from "@/data/models";

export class Classroom extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
    private _building: number,
    private _floor: number,
    private _long_description: string,
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

  public get long_description(): string {
    return this._long_description;
  }

  public set long_description(value: string) {
    this._long_description = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
      building: this._building,
      floor: this._floor,
      long_description: this._long_description,
    };
  }
}
