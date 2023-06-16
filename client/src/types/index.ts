export type ObjectId = string;
export type UserSubmitForm = {
    email: string;
    password: string;
    generic: string
};
export type UserT = {
    email: string;
    //name: string;
  } | null;

export type AuthState = {
    authenticated: boolean;
    user: UserT;
    loading: boolean;
};

export type Action =
  | { type: 'LOGIN'; payload: UserT }
  | { type: 'POPULATE'; payload: UserT }
  | { type: 'LOGOUT' }
  | { type: 'STOP_LOADING' };
export type Dispatch = React.Dispatch<Action>;