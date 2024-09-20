import { BaseModel, Teacher, Subject } from "@/data/models";

export class TeacherSubject extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _teacher: Teacher,
    private _subject: Subject,
    private _active: boolean,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get teacher(): Teacher {
    return this._teacher;
  }

  public set teacher(value: Teacher) {
    this._teacher = value;
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
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
      teacher: this._teacher.toJSON(),
      subject: this._subject.toJSON(),
      active: this._active,
    };
  }
}
