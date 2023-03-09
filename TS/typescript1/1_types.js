var isFetching = true;
var isLoading = false;
var int = 21;
var float = 2.1;
var num = 3e10;
var str = "Hello";
var numberArray = [1, 2, 3, 4, 5,];
var numberArray2 = [1, 2, 3, 4, 5,]; /// Запись дженерік
var words = ["Hello", "Typescript"];
// Tuple
var contact = ["Vlad", 12321];
// Any
var variable = 42;
variable = "New String";
variable = [];
///===  Void нічого не повертає
function sayMyName(name) {
    console.log(name);
}
sayMyName("Hitler");
// Never  - якщо функція не дійде до кінця
function throwError(message) {
    throw new Error("message");
}
function infinite() {
    while (true) {
    }
}
var login = "2";
var id = 1;
var id2 = "1";
