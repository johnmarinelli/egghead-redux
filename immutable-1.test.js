const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

describe('add counter', () => {
  it('appends to list', () => {
    const listBefore = [];
    const listAfter = [0];
    expect(
      addCounter(listBefore)
    ).toEqual(listAfter);
  });

  it('removes from list', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    expect(
      removeCounter(listBefore, 1)
    ).toEqual(listAfter);
  });

  it('increments counter at index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    expect(
      incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
  });
});
