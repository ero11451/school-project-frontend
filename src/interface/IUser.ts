export interface IUser  {
  id: string,
  userName: string,
  email: string,
  phoneNumber: string,
  user_name: string,
  password: string,
  bio: string,
  userImgUrl: string,
  gender: number,
  userType: number,
  status: number,
  token?:string,
  username?:string
  isAdmin?: boolean
  // phoneNumberConfirmed: true,
  // twoFactorEnabled: true,
  // emailConfirmed: true,
  // normalizedUserName: string,
  // normalizedEmail: string,
  // passwordHash: string,
  // securityStamp: string,
  // concurrencyStamp: string,
  // lockoutEnd: "2024-08-11T16:05:58.987Z",
  // lockoutEnabled: true,
  // accessFailedCount: 0,
}
  

  // "user": {
  //       "id": 4,
  //       "username": "osamuyi_ero",
  //       "password": "AQAAAAIAAYagAAAAEP2aVbPoQmhR0K1GjJZ5G/s4mV6kdpr/CxAwdMf3Fm4f5dq1I3CnwCFgdCiX9V7KFA==",
  //       "email": "osamuyi_ero@gmail.com",
  //       "bio": null,
  //       "userImgUrl": null,
  //       "gender": 2,
  //       "userType": 0,
  //       "status": 0,
  //       "passwordHash": null,
  //       "passwordSalt": null
  //   }