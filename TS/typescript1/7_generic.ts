const  arrayOfNumbers: Array<number> = [1,2,2,2,2]
const  arrayOfString: Array<string> =["w","we"]

function reverse<T>(array:T[]):T[]{
    return array.reverse()
}

function reverse2(array:any[]){
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfString)
reverse2(arrayOfNumbers)
reverse2(arrayOfString)