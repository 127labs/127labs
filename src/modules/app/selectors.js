import { NAME } from './constants'

export const state = (store) => store[NAME]
export const isPinging = (store) => state(store).isPinging
