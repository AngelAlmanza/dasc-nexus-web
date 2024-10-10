import { BaseModel } from "@/data/models";

export class Teacher extends BaseModel {
  public constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    private _name: string,
    private _lastname: string,
    private _birthday: Date,
    private _address: string,
    private _phone: string,
    private _email: string,
  ) {
    super(id, createdAt, updatedAt);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public get birthday(): Date {
    return this._birthday;
  }

  public set birthday(value: Date) {
    this._birthday = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public toJSON(): object {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this._name,
      lastname: this._lastname,
      birthday: this._birthday,
      address: this._address,
      phone: this._phone,
      email: this._email,
    };
  }
}
