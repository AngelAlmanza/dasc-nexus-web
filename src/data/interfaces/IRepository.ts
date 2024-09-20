/**
 * IRepository interface
 * @description - This interface is used to define the methods that a repository class should implement
 * @param T - The type of the entity
 * @param K - The type of the data that is used to create or update the entity
 * @method getAll - Get all entities
 * @method getById - Get an entity by id
 * @method create - Create an entity
 * @method update - Update an entity
 * @method delete - Delete an entity
 */
export interface IRepository<T, K> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(data: K): Promise<T>;
  update(id: number, data: K): Promise<T>;
  delete(id: number): Promise<boolean>;
}
