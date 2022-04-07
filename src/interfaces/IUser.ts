
export interface IUser {
  name?: string;
  surname?: string;
  birthdate?: string;
  sessionID?: string;
  readonly token?: string | undefined;
}