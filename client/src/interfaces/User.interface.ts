export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  prevState: null
}

export interface UserForm extends Partial<User> {}

export interface LoginForm {
  name: string
  password: string;
  email: string;
  generic:  string;
}
export interface UserI {
  user: User;
}
