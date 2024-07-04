export function toHaveDoneItem(received: { done: boolean }): jest.CustomMatcherResult {
  if (typeof received !== 'object') {
    throw Error('Проверяемый елемент должен быть объектом')
  }
  
  const pass = received.done;
  return {
    pass,
    message: pass ? () => `Выполненая задача есть в списке` : () => `Выполненной задачи нет в списке`
  }
}
