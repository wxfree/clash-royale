export default class Person {
  protected _name: string
  protected _age: number
  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }
  public get name(): string {
    return this._name
  }
  public get age(): number {
    return this._age
  }
  public introduce() {
    console.log(
      `My name is ${this._name}, I am ${this._age} years old`
    )
  }
}
