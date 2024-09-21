import { IFactory } from "@/data/interfaces";
import { Classroom } from "@/data/models";
import { faker } from "@faker-js/faker";

export class ClassroomFactory implements IFactory<Classroom> {
  public fake(): Classroom {
    return new Classroom(
      faker.number.int(),
      faker.date.recent(),
      faker.date.recent(),
      faker.person.firstName(),
      faker.number.int({ min: 1, max: 2 }),
      faker.number.int({ min: 1, max: 2 }),
      faker.lorem.paragraph(4),
    );
  }
}
