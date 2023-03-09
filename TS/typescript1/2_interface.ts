interface Rect {
    readonly id: string ,   //// readonly - означає тільки для читання, не можна змініваит
    color?: string         //// ? означає не обовязково
    size: {
        width: number,
        height: number
    }
}
const  rect1 : Rect = {
    id: "12",
    size:{
        width: 20,
        height: 20,
    },
    color: "#ccc"
}
const  rect2 : Rect = {
    id: "12",
    size:{
        width: 20,
        height: 20,
    }
}
rect2.color = "black"

const rect3 = {} as Rect
const  rec4 = <Rect>{} /// стара запис

///=============

interface  RectWithArea extends  Rect{   /// extends - унаслідувати від Rect
    getArea : () => number
}


const  rect5: RectWithArea ={
    id:"123",
    size:{
        width:20,
        height:20,
    },
    getArea() : number{
        return this.size.width * this.size.height
    }
}
///===========

interface  Iclock  {
    time: Date
    setTime(date: Date) : void
}
class Clock implements  Iclock {  /// implements повинен реалізувати методи Iclock
    time:Date = new Date()
    setTime(date: Date) {
     this.time = date
    }
}
/// =========
interface  Styles {
    //// border:string не валідна бо є не тілбки бордер
    [key: string] : string
}

const  css : Styles =  {
    border:"1px solid black",
    marginTop: '2px',
    borderRadius: '5px',
}
