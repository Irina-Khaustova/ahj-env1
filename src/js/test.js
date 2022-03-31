import demo from './app';

test('проверка работы функции', () => {
  const received = 'привет';
  const expected = demo('привет');
  expect(received).toEqual(expected);
});
