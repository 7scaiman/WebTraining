var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, " : Typescript version is ").concat(this.version, "]");
    };
    return Typescript;
}());
var car = /** @class */ (function () {
    function car(model) {
        this.numberOfWheels = 4;
        this.model = model;
    }
    return car;
}());
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ""; /// можна буде використовувати в класі наслідника але визивати його немодна (наприклад cat.voice
        this.color = "black"; // якщо нічого не вказувати то по дефолту вони будут пабліками
    }
    Animal.prototype.go = function () {
        console.log("go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var animal = new Animal();
/// animal.go() неможна бо приват
var cat = new Cat();
//// cat.voice неможна бо протектед
cat.setVoice("test");
console.log(cat.color);
//==================
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Component on render");
    };
    AppComponent.prototype.info = function () {
        return "";
    };
    return AppComponent;
}(Component));
