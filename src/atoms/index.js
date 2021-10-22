import { atom } from 'recoil';

export const navShownAtom = atom({
    key: 'navShownAtom',
    default: false,
});

export const userAtom = atom({
    key: 'user',
    default: '',
});
