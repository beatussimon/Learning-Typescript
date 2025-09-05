"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id == 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(1);
console.log(customer);
console.log(customer?.birthdate.getFullYear());
//# sourceMappingURL=index.js.map