import { passwords } from './passwords';

export default function commonPassword(password: string): boolean {
  var lowercase = password.toLowerCase();
  return passwords.indexOf(lowercase) > -1;
}
