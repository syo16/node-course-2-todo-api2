// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to the DB');
    }
    console.log('connected to mongo server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Shoichiro Osaki'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c2495bafa10f80dbf5c733a')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    // client.close();
});