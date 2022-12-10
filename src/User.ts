class User{
    private readonly lastname: string;
    private readonly firstname: string;
    private readonly birthday: string;
    private readonly adress:string;
    public readonly position: string;

    constructor(lastname: string,
                firstname: string,
                birthday: string,
                adress: string,
                position: string) {
        this.lastname =lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.adress = adress;
        this.position = position
    }
    getLastname():string {
        return this.lastname; }

    getFirstname(): string {
        return this.firstname;
    }

    getBirthday(): string {
        return this.birthday;
    }

    getAdress(): string {
        return this.adress;
    }

    getPosition(): string {
        return this.position;
    }

}

export default User;



