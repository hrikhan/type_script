"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./variable");
require("./funtion_type");
require("./interfaces");
const claas_service_layer_1 = require("./claas-service-layer");
console.log("\n--- Running UserService ---");
const userService = new claas_service_layer_1.Userservice();
console.log("Creating user 'Hridoy':", userService.createUsers("Hridoy"));
console.log("Creating user 'Alice':", userService.createUsers("Alice"));
console.log("All users:", userService.findAll());
//# sourceMappingURL=index.js.map