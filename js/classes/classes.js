"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.isActive = true;
    }
    announce() {
        return "my name is" + this.name;
    }
}
exports.Customer = Customer;
