//lesson 1
// const func = (name:string):void => {
//
// }
//
// func('max')

// interface Iuser {
//     name:string,
//     age:number,
//     house:number
// }
//
// const user1:Iuser = {
//     name: 'max',
//     age:18,
//     house:60
// }

// interface Iuser {
//     name: string,
//     age: number,
//     house?: number
// }
//
// const user1:Iuser = {
//     name: 'max',
//     age: 18,
// }

// interface Iuser<T> {
//     name: string,
//     age: number,
//     house: T
// }
//
// const user1:Iuser<boolean> = {
//     name: "max",
//     age: 18,
//     house: true,
// }

// class User {
//
//     constructor(private name:string, private age:number) {
//     }
//
//     getName(){
//         return this.name
//     }
//
// }
//
// let user1 = new User('max', 18)
//
// console.log(user1.getName())
//
// const user2:User[] = [
//     new User('max', 18),
//     new User('kate', 18),
//     new User('helen', 18),
// ]

// interface IElectro {
//     enginepower:number;
//
//     getLedStatus():boolean;
// }
//
// class Car implements IElectro {
//     enginepower: number;
//
//     getLedStatus(): boolean {
//         return false;
//     }
//
//     constructor(private Brand:string, private seats:number, private year:number) {
//     }
//
//     start(){
//         console.log('RRRrrrrr')
//     }
//
//     getInfo(){
//         return `Brand: ${this.Brand} - Seats: ${this.seats} - Year: ${this.year}`
//     }
// }

// class Car {
//
//     constructor(private Brand:string, private seats:number, private year:number) {
//     }
//
//     start(){
//         console.log('RRRrrrrr')
//     }
//
//     getInfo(){
//         return `Brand: ${this.Brand} - Seats: ${this.seats} - Year: ${this.year}`
//     }
// }

// class Electrocar extends Car {
//
//     constructor(Brand: string, seats: number, year: number) {
//         super(Brand, seats, year);
//     }
// }

// abstract class Shape {
//     abstract Perimetr():number;
//     abstract Area():number;
// }
//
// class Triangle extends Shape {
//     Area(): number {
//         return this.a + this.b + this.c;
//     }
//
//     Perimetr(): number {
//         return this.a * this.b * this.c;
//     }
//
//     constructor(private a:number, private b:number, private c:number) {
//         super();
//     }
// }
//
// class Rectangle extends Shape {
//     Area(): number {
//         return this.a + this.b;
//     }
//
//     Perimetr(): number {
//         return this.a * this.b;
//     }
//
//     constructor(private a:number, private b:number) {
//         super();
//     }
// }
//
// const shapes:Shape[] = [
//     new Triangle(4,5,7),
//     new Rectangle(3,5)
// ]
//
// for (const shape of shapes) {
//     console.log(shape.constructor['name'])
//     console.log(shape.Area())
//     console.log(shape.Perimetr())
// }

