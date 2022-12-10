    import User from "./User";

let readlineSync = require('readline-sync');
class UserManager {
    users: User[] = [];


    addUser(): void {
        let lastname = readlineSync.question('Add Lastname: ')
        let firstname = readlineSync.question('Add Firstname: ')
        let birthday = readlineSync.question('Add Birthday: ')
        let adress = readlineSync.question('Add Adress: ')
        let position = readlineSync.question('Add Position: ')
        let user = new User(lastname,firstname, birthday, adress, position);
        this.users.push(user)
    }

    showList() {
        console.table(this.users)
    }

    deleteUser() {
        let index = readlineSync.question('Nhap vi tri can xoa: ');
        this.users.splice(index, 1)
    }

}

export default UserManager
