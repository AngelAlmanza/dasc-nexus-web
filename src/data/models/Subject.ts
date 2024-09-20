import { BaseModel, Career, Plan } from "@/data/models";

export class Subject extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
    private _key: string,
    private _credits: number,
    private _theory_hours: number,
    private _practice_hours: number,
    private _total_hours: number,
    private _plan: Plan,
    private _career: Career,
    private _id_area: number,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get key(): string {
    return this._key;
  }

  public set key(value: string) {
    this._key = value;
  }

  public get credits(): number {
    return this._credits;
  }

  public set credits(value: number) {
    this._credits = value;
  }

  public get theory_hours(): number {
    return this._theory_hours;
  }

  public set theory_hours(value: number) {
    this._theory_hours = value;
  }

  public get practice_hours(): number {
    return this._practice_hours;
  }

  public set practice_hours(value: number) {
    this._practice_hours = value;
  }

  public get total_hours(): number {
    return this._total_hours;
  }

  public set total_hours(value: number) {
    this._total_hours = value;
  }

  public get plan(): Plan {
    return this._plan;
  }

  public set plan(value: Plan) {
    this._plan = value;
  }

  public get career(): Career {
    return this._career;
  }

  public set career(value: Career) {
    this._career = value;
  }

  public get id_area(): number {
    return this._id_area;
  }

  public set id_area(value: number) {
    this._id_area = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
      key: this._key,
      credits: this._credits,
      theory_hours: this._theory_hours,
      practice_hours: this._practice_hours,
      total_hours: this._total_hours,
      plan: this._plan.toJSON(),
      career: this._career.toJSON(),
      id_area: this._id_area,
    };
  }
}
