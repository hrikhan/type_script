type User = {
    id: number;
    name: string;
    date: number;
};

type createUserDTO = {
    name: string;
};

export class UserService {
    private users: User[] = [];

    createUser(dto: createUserDTO): User {
        const user: User = {
            id: this.users.length + 1,
            name: dto.name,
            date: Date.now()
        };

        this.users.push(user);
        return user;
    }

    findAll(): User[] {
        return this.users;
    }
}

const userService = new UserService();
console.log("Creating user 'Hridoy' via DTO:", userService.createUser({ name: "Hridoy" }));
console.log("All users:", userService.findAll());