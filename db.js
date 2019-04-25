const { DataStore } = require('notarealdb');
const store = new DataStore('./database');
module.exports = {
    students: store.collection('students'),
    college: store.collection('college')
};