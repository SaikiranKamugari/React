const person = '{"name":"John Doe","age":30,"address":{"city":"New York","zip":"10001"}}';
const jsonString = JSON.stringify(person);
console.log(jsonString);

const parse = JSON.parse(jsonString);
console.log(parse);


