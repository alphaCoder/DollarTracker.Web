export interface IUser{
    userId:string
	userName:string
	email:string
	displayName:string
    memberSince:Date,
    aboutMe:string,
    phoneNo:string
}
export interface ILoginResponse{
    token:string;
    success:boolean;
    message:string;
    user:IUser
}