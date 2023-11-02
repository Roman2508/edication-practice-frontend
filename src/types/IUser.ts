export interface IUser {
  id: string
  name: string
  email: string
  phone: string | null
  group: { name: string; courseNumber: number }
  picture: string
}
