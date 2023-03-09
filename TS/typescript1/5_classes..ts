class Typescript{
    version : string

    constructor(version: string) {
        this.version = version
    }
    info(name:string){
        return `[${name} : Typescript version is ${this.version}]`
    }
}
class car {
    readonly model : string /// редонлі можна перезаписати тільки в конструкторі
    readonly  numberOfWheels:number=4
    constructor(model : string) {
        this.model = model
    }
}
class Car2{
    readonly  numberOfWheels:number=4
    constructor(readonly model: string)
    {
    }
}

class Animal {
    protected voice: string = ""  /// можна буде використовувати в класі наслідника але визивати його немодна (наприклад cat.voice
    public color : string = "black" // якщо нічого не вказувати то по дефолту вони будут пабліками
    private go(){ //// можна використовувати тілки в цему класі
        console.log("go")
    }
}
class  Cat extends  Animal{
    public setVoice(voice: string): void{
        this.voice =voice
    }
}
const animal = new Animal()
/// animal.go() неможна бо приват
const cat = new Cat()
//// cat.voice неможна бо протектед
cat.setVoice("test")
console.log(cat.color)

//==================

abstract class Component { /// потрібні для наслідування
    abstract  render(): void
    abstract  info() : string
}

class AppComponent extends  Component{
    render(): void {
        console.log("Component on render")
    }
    info(): string {
        return "";
    }
}