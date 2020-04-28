function getCurrentWeek() {
  const today = new Date();
  const week = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today.setDate(today.getDate() - today.getDay() + i));
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let date = d.getDate();
    date = date < 10 ? '0' + date : date;
    week.push(`${year}-${month}-${date}`);
  }
  return week;
}
console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/