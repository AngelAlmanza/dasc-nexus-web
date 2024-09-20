export abstract class BaseModel {
  public constructor(
    protected readonly _id: number,
    protected readonly _createdAt: Date,
    protected _updatedAt: Date,
  ) {}

  public get id(): number {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  public abstract toJSON(): object;
}
