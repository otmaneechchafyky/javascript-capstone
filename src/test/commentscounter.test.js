import Comments from '../modules/comments.js';

test('count how many comments', () => {
  const comments = [
    {
      Comment: 'first test',
      username: 'otmane',
      creation_date: '2023-05-26',
    },
    {
      username: 'emmanuel',
      Comment: 'second test',
      creation_date: '2023-05-26',
    },
    {
      Comment: 'third test',
      creation_date: '2023-05-26',
      username: 'amine',
    },
    {
      Comment: 'good',
      creation_date: '2023-05-26',
      username: 'luck',
    },
  ];
  const count = Comments.countFn(comments);
  expect(count).toBe(4);
});