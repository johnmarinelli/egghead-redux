import { schema } from 'normalizr';

/*
 * define API responses
 * todo: returned from ADD_TODO
 * arrayOfTodos: returned from FETCH_TODOS
 */
export const todo = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todo);
