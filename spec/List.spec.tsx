describe('Список задач', () => {
  it.todo('Не может быть больше 10 невыполненых задач')
  it.todo('При отсутствии задач в списке')

  it('В списке есть выполненый пример', () => {
    expect([
      { label: 'Купить молока', done: false },
      { label: 'Выгулять собаку', done: true }
    ]).toContainEqual(expect.toHaveDoneItem());
  })
})