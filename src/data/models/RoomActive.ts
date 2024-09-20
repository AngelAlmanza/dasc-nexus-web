import { BaseModel, Classroom } from "@/data/models";

export class RoomActive extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _classroom: Classroom,
    private _active: boolean,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get classroom(): Classroom {
    return this._classroom;
  }

  public set classroom(value: Classroom) {
    this._classroom = value;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      classroom: this._classroom.toJSON(),
      active: this._active,
    };
  }
}
