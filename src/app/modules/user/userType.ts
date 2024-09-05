export type TUserRole = 'SUPER_ADMIN' | 'ADMIN' | 'DOCTOR' | 'PATIENT';
type TUserStatus = 'ACTIVE' | 'BLOCKED';

// Admin type
export interface IAdmin {
  name: string;
  email: string; 
  profilePhoto: string;
  contractNumber: string;
  isDeleted: boolean;
}

// User type
export interface IUser {
  email: string;
  password: string; 
  role: TUserRole;
  status?: TUserStatus;
  admin?: IAdmin; 
}
