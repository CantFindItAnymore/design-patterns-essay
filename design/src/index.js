class People {
  constructor(name, house) {
    this.name = name
    this.house = house
  }
  say() {

  }
}

class A extends People {
  constructor(name, house) {
    super(name, house)
  }
  say() {
    alert('IM A')
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house)
  }
  say() {
    alert('IM B')
  }
}

class House {
  constructor(city) {
    this.city = city
  }
  getCity() {
    alert(this.city)
  }
}

// 测试代码
let aHouse = new House('北京')
let a = new A('a', aHouse)
a.say()

let bHouse = new House('四川')
let b = new B('b', bHouse)
b.say()