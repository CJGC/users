export class UserDto {

    public id : number;
    public name : string;
    public doc : string;
    public lastname : string;
    public profile : string;

    constructor() {
        this.id = 0;
        this.doc = "";
        this.name = "";
        this.lastname = "";
        this.profile = "";
    }

}