export interface IUserSignup{
    userId:string
	userName:string
	email:string
	displayName:string
    memberSince:Date
}
export interface ISignupResponse{
    token:string;
    success:boolean;
    message:string;
    user:IUserSignup
}