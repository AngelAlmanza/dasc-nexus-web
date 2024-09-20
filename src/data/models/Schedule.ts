import { Day } from "@/core/enums";
import {
  BaseModel,
  Classroom,
  Group,
  Plan,
  Subject,
  Teacher,
  Term,
} from "@/data/models";

export class Schedule extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _subject: Subject,
    private _group: Group,
    private _teacher: Teacher,
    private _term: Term,
    private _classroom: Classroom,
    private _plan: Plan,
    private _day: Day,
    private _time: string,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
  }

  public get group(): Group {
    return this._group;
  }

  public set group(value: Group) {
    this._group = value;
  }

  public get teacher(): Teacher {
    return this._teacher;
  }

  public set teacher(value: Teacher) {
    this._teacher = value;
  }

  public get term(): Term {
    return this._term;
  }

  public set term(value: Term) {
    this._term = value;
  }

  public get classroom(): Classroom {
    return this._classroom;
  }

  public set classroom(value: Classroom) {
    this._classroom = value;
  }

  public get plan(): Plan {
    return this._plan;
  }

  public get day(): Day {
    return this._day;
  }

  public set day(value: Day) {
    this._day = value;
  }

  public get time(): string {
    return this._time;
  }

  public set time(value: string) {
    this._time = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      subject: this._subject.toJSON(),
      group: this._group.toJSON(),
      teacher: this._teacher.toJSON(),
      term: this._term.toJSON(),
      classroom: this._classroom.toJSON(),
      plan: this._plan.toJSON(),
      day: this._day,
      time: this._time,
    };
  }
}
