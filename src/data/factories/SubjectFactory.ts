import { MajorFactory, PlanFactory } from "@/data/factories";
import { IFactory } from "@/data/interfaces";
import { Subject } from "@/data/models";
import { faker } from "@faker-js/faker";

const careerFactory = new MajorFactory();
const planFactory = new PlanFactory();

export class SubjectFactory implements IFactory<Subject> {
  public fake(): Subject {
    return new Subject(
      faker.number.int(),
      faker.date.recent(),
      faker.date.recent(),
      faker.lorem.words(3),
      faker.lorem.words(1),
      faker.number.int({ min: 1, max: 10 }),
      faker.number.int({ min: 1, max: 4 }),
      faker.number.int({ min: 1, max: 4 }),
      faker.number.int({ min: 1, max: 4 }),
      planFactory.fake(),
      careerFactory.fake(),
      faker.number.int({ min: 1, max: 4 }),
    );
  }
}
