import { IFactory } from "@/data/interfaces";
import { Career } from "@/data/models";
import { faker } from "@faker-js/faker";

export class MajorFactory implements IFactory<Career> {
  public fake(): Career {
    return new Career(
      faker.number.int(),
      faker.date.recent(),
      faker.date.recent(),
      faker.lorem.sentence(),
    );
  }
}
