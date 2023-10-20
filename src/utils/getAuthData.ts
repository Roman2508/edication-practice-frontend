import { IAuthData } from "../components/GoogleLogin/GoogleLogin"

export const getAuthData = (): IAuthData | null => {
  const data = window.localStorage.getItem("pharm-practice")

  if (data) {
    return JSON.parse(data)
  }

  return null
}
