"use strict";
///in Nestjs evry service layer is a clas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userservice = void 0;
class Userservice {
    constructor() {
        this.user = [];
    }
    createUsers(name) {
        const user = { id: this.user.length + 1, name: name, data: Date.now() };
        this.user.push(user);
        return user;
    }
    findAll() {
        return this.user;
    }
}
exports.Userservice = Userservice;
//
//# sourceMappingURL=claas-service-layer.js.map