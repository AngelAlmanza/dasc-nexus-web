import { BaseModel } from "@/data/models";

export class Building extends BaseModel {
    public constructor(
        id: number,
        createdAt: Date,
        updatedAt: Date,
        private _name: string,
        private _numberplants: number,
    ) {
        super(id, createdAt, updatedAt);
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get numberplants(): number {
        return this._numberplants;
    }

    public set numberplants(value: number) {
        this._numberplants = value;
    }

    public toJSON(): object {
        return {
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            name: this._name,
            numberplants: this._numberplants,
        };
    }
}
