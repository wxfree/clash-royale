import Person from './person'
class Student extends Person {
  private _school: string
  constructor(name: string, age: number, school: string) {
    super(name, age)
    this._school = school
  }
}
