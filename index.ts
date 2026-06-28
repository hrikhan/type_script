import './variable';
import './funtion_type';
import './interfaces';
import { UserService } from './dto';

console.log("\n--- Running UserService ---");
const userService = new UserService();
console.log("Creating user 'Hridoy':", userService.createUser({ name: "Hridoy" }));
console.log("Creating user 'Alice':", userService.createUser({ name: "Alice" }));
// console.log("All users:", userService.findAll());
