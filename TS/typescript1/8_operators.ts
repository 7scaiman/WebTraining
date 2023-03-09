interface Person{
    name:string
    age:number
}
type PersongKeys = keyof Person /// name | age

let  key: PersongKeys = "name"

key = "age"

type User = {
    _id: number
    name: string
    email:string
    CreatedAt:Date
}

type UserKeysNoMeta = Exclude<keyof User, "_id"|"CreatedAt">  /// name | email

type UserKeysNoMeta2 = Pick<User,"name" | "email"> /// name | email

let u1 = "name"
u1 = "_id"