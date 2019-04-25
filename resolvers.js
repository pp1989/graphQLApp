const db = require('./db')
const Query = {

//     test: () => 'Test Success , GraphQL server is up & running !!',
//     // students:()=>db.students.list(),
    
//     // studentById:(root,args,context,info) => {
//     //     //args will contain parameter passed in query
//     //     return db.students.get(args.id);
//     //     }
greeting:()=>{
    return "hello, I am from science !!!"
    },
    students:()=>db.students.list()
   }
 

module.exports = {Query}