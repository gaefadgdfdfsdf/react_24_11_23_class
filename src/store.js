import { atom } from "recoil";

export const counterState = atom({
    key : 'counterState',
    default : 0
})

export const textState = atom({
    key : 'textState',
    default : 'value값만 불러올 수도 있다!'
})