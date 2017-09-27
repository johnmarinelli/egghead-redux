const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};


describe('toggle todo', () => {
  it('toggles todo', () => {
    const todoBefore = {
      id: 0,
      text: 'Learn redux',
      completed: false
    };

    const todoAfter = {
      id: 0,
      text: 'Learn redux',
      completed: true
    };

    expect(toggleTodo(todoBefore))
      .toEqual(todoAfter);
  });
});
