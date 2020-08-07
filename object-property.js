const students = [
    {id: 21, name: 'Omar sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'}
];
// you can use find too which will be only one as you know
// filter korte chaile filter kora jete pare
// kono ekta array er modhe kono ekta object thakle tumi tar property dhore niye aste parbe jemon id or name
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
console.log(bigger);
