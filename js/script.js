let users = [
  {
    firstName: 'Mike',
    lastName: 'Wazowski',
    login: '#wazowski',
    followers: '50',
  },
  {
    firstName: 'Sam',
    lastName: 'Burner',
    login: '#burner',
    followers: '25',
  },
  {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    login: '#pupkin',
    followers: '500',
  },
  {
    firstName: 'Jack',
    lastName: 'London',
    login: '#london',
    followers: '115',
  },
  {
    firstName: 'Brad',
    lastName: 'Pitt',
    login: '#pitt',
    followers: '5',
  },
];

for(let item of users) {
  let user = $('<li>');
  // let login = $("<a href=" + "item.login + >"item.login  + "</a>");
  console.log(login);
  user.text(  `${item.firstName} ${item.lastName}`  );
  user.append(login);
  $('.twitter__list').append(user);
}