import {IUserInfo} from "../interface";




export async function getUserInfo(): Promise<IUserInfo>{
  return pikax;
}






const pikax: IUserInfo = {
  username: 'pikax',


  favorites: [
    "Berserk",
    'Gintama',
  ]

};
