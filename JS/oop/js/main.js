// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTrail: true
// }
//
// class Animal {
//     static type = "ANIMAL" /// можна визивати тільки через Animal.type
//
//     constructor(option) {
//        this.name = option.name
//        this.age = option.age
//        this.hasTrail = option.hasTrail
//        this.type = option.type
//     }
//     voice(){
//         return "I am Animal"
//     }
//     Myname(){
//       return "My name:"+this.name
//     }
// }
//
// // const am1 = new Animal({name : "Jerry",age:2,hasTrail:true,type:"cat"})
// // console.log(am1)
// class Cat extends Animal{
//     static type = "CAT"
//     constructor(op) {
//         super(op)   /// потрібен в дочерніх класах  як цей. Він визиває конструктор родителя(в цему випадку class Animal)
//         this.color = op.color
//     }
//
//     voice() {
//        console.log(super.voice())   /// через super  вожна визвати метод з батьківського
//         console.log("I am cat")
//     }
//     get ageInfo() {
//         return this.age * 7
//     }
//     set ageInfo(newAge){            //// визивається так am2.ageInfo = 8
//         this.age = newAge
//     }
// }
//
// const am2 = new Cat({
//     name : "Jerry",
//     age:2,
//     hasTrail:true,
//     type:"cat",
//     color:"black"
// })
//  console.log(am2.ageInfo)

// приклади

class Component {
    constructor(selector) {
        this.$el = document.getElementById(selector)
    }
    hide(){
        this.$el.style.display = 'none'
    }
    show(){
        this.$el.style.display = 'block'
    }
}
class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color

    }
}
const box1 = new Box({
    selector : "box1",
    size: 100,
    color:"red"
})
const box2 = new Box({
    selector : "box2",
    size: 100,
    color:"blue"
})

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius ='50%'
    }
}

const  c = new Circle({
    selector : "box3",
    size: 90,
    color:"Yellow"
})
