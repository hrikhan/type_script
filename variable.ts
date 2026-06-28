let userName: string = 'hridoy';
let age: number = 10;
let anthing: any = "hello";
anthing = 10;

console.log(userName, age, anthing);

let id: string | number;// union

// let status : "pending"|"success"|"failed";// literal types

type Nullable<T> = T | null;