const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c274ff50f4be217eef3df12';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById('5c24b5938fb4d1104afd3e76').then((user) => {
    if (!user) {
        return console.log('Unable to find the user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});