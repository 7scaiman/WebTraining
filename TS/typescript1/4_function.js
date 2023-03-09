function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
var a = add(1, 2);
var b = toUpperCase("hello");
console.log(a);
console.log(b);
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined };
    }
    return { x: a, y: b };
}
console.log("Empty:", position());
console.log("One param:", position(42));
console.log("Two param:", position(14, 4));
