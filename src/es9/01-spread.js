const user = {username: 'serghip', age: 27,country:'ARG'};
const {username, ...values} = user
console.log(username);
console.log(values);