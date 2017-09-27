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

export const fetchTodos = (filter) => (
  delay(500)
    .then(() => {
      switch (filter) {
        case 'all': return db.todos;
        case 'active': return db.todos.filter(t => !t.completed);
        case 'completed': return db.todos.filter(t => t.completed);
        default: return db.todos;
      }
    })
);
