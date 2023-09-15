import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string
export interface User {
  name: string
  email: string
  github: string

}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'Peter Doe',
    email: 'peterdoe@gmail.com',
    github: 'peterdoe'
  },
  {
    id: '2',
    name: 'Jhon Smith',
    email: 'johnsmith@gmail.com',
    github: 'johnsmith'
  },
  {
    id: '3',
    name: 'Carmen Silla',
    email: 'carmensilla@gmail.com',
    github: 'carmensilla'
  },
  {
    id: '4',
    name: 'Victor Pelon',
    email: 'victormelo@gmail.com',
    github: 'cojo'
  }
]

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const index = state.findIndex(user => user.id === action.payload)
      state.splice(index, 1)
    }
  }
})

export default userSlice.reducer
export const { deleteUserById } = userSlice.actions
