import {atom} from 'recoil';
import { UserModel } from '../models/authentication/userModel';

export const userState = atom<UserModel | null>({
    key: 'userState',
    default: null,
});