import { IFactory } from "@/data/interfaces";
import { Teacher } from "@/data/models";
import { faker } from "@faker-js/faker";

export class TeacherFactory implements IFactory<Teacher> {
  public fake(): Teacher {
    return new Teacher(
      faker.number.int(),
      faker.date.recent(),
      faker.date.recent(),
      faker.person.firstName(),
      faker.person.lastName(),
      faker.date.past(),
      faker.lorem.words(4),
      faker.phone.number({ style: "human" }),
      faker.internet.email(),
    );
  }
}
