export class Users{
    public id: number;
    public f_name: string;
    public s_name: string;
    public email: string;
    public password: string;
    public mobile: string;

    constructor(
        id: number,
        f_name: string,
        s_name: string,
        email: string,
        password: string,
        mobile: string)
        {
            this.id = id;
            this.f_name = f_name;
            this.s_name = s_name;
            this.email = email;
            this.password = password;
            this.mobile = mobile;
        }
}