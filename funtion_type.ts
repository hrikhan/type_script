function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20))


//tye funtion real world

function loginUser(email: string, password: string): boolean {
    if (email === "admin@test.com" && password === "1234") {
        return true;
    }
    return false;
}
console.log(loginUser("admin@test.com", "1234"))