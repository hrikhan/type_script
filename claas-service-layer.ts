///in Nestjs evry service layer is a clas

 type User ={
    id :number;
    name :string;
    date :number;
};

export class UserService {
    private users : User[] =[];
    createUser(name :string ) : User{
        const user : User = {
            id :this.users.length+1,
            name :name,
            date :new Date().getTime(),
        };
        this.users.push(user);
        return user;
    }

    findAll(): User[]{
        return this.users;
        
    }

    
}