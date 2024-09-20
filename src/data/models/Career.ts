import { BaseModel } from "@/data/models";

export class Career extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
    };
  }
}
