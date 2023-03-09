const isFetching: boolean = true
const isLoading: boolean = false

const int :number = 21
const float : number = 2.1
const num : number = 3e10

const str : string = "Hello"

const numberArray : number[] = [1,2,3,4,5,]
const numberArray2 : Array<number> = [1,2,3,4,5,]   /// Запись дженерік

const words: string[] = ["Hello","Typescript"]

// Tuple
const contact : [string,number] = ["Vlad",12321]

// Any
let variable : any = 42
variable = "New String"
variable = []

///===  Void нічого не повертає
function  sayMyName(name: string) : void {
    console.log(name)
}
sayMyName("Hitler")

// Never  - якщо функція не дійде до кінця
function throwError(message: string):never{
            throw new Error("message")
}
function infinite() : never{
    while (true){
    }
}

//Type можна свій тип зробити
type Login = string

const login : Login = "2"

type ID = string | number  /// може бути стрінгом або намбером

const id : ID = 1
const id2 : ID = "1"

/// null , undefined

type SomeType = string | null | undefined




