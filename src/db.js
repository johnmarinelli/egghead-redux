import { v4 } from 'node-uuid';

const db = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true
    },
    {
      id: v4(),
      text: 'yo',
      completed: false
    },
    {
      id: v4(),
      text: 'leggo',
      completed: false
    },
  ]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const addTodo = (text) => 
  delay(500)
    .then(() => {
      const todo = {
        id: v4(),
        text,
        completed: false
      };
      db.todos.push(todo);
      return todo;
    })

export const toggleTodo = (id) =>
  delay(500)
    .then(() => {
      const todo = db.todos.find(t => t.id === id);
      todo.completed = !todo.completed;
      return todo;
    })

export const fetchTodos = (filter) => (
  delay(2000)
    .then(() => {
      if (Math.random() > 0.95) throw new Error('boom');
      switch (filter) {
        case 'all': return db.todos;
        case 'active': return db.todos.filter(t => !t.completed);
        case 'completed': return db.todos.filter(t => t.completed);
        default: return new Error(`Unknown filter: ${filter}`);
      }
    })
);
