import { atom } from 'recoil'

const userAtomState = atom({
  key: 'userState',
  default: null,
})

export { userAtomState }
