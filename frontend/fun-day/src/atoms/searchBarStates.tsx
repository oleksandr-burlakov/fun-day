import {atom} from 'recoil';

export const searchState = atom({
    key: 'searchState',
    default: '',
});

export const sortState = atom({
    key: 'sortState',
    default: 'name'
});

export const orderState = atom({
    key: 'orderState',
    default: 'asc'
});