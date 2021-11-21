import { atom } from 'recoil';

export const navShownAtom = atom({
    key: 'navShownAtom',
    default: false,
});

export const userAtom = atom({
    key: 'user',
    default: '',
});

export const fetchCacheAtom = atom({
    key: 'fetchCache',
    default: new Object(),
});
