import { MajorFactory } from "@/data/factories";
import { IFactory } from "@/data/interfaces";
import { Plan } from "@/data/models";
import { faker } from "@faker-js/faker";

const careerFactory = new MajorFactory();

export class PlanFactory implements IFactory<Plan> {
  public fake(): Plan {
    return new Plan(
      faker.number.int(),
      faker.date.recent(),
      faker.date.recent(),
      faker.date.recent(),
      faker.date.future(),
      careerFactory.fake(),
    );
  }
}
