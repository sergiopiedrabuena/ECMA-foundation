//transforma en array en objeto llave:valor
const entries = new Map([["name", "oscar"], ['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));