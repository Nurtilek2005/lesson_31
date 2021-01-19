let tasks = [
  'Сходить в магазин',
  'Приготовить обед',
  'Поесть',
  'Отдохнуть',
  'Работать'
];

for(let item of tasks) {
  let task = $('<li>');
  task.text(item);
  $('.todo').append(task);
}