import jwt_decode from "jwt-decode"
import { GoogleLogin } from "@react-oauth/google"
import { gql } from "../../graphql/client"

export interface IAuthData {
  email: string
  name: string
  picture: string
}

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential || "")
        const response = decoded as IAuthData

        if (!Object.keys(response).length) {
          alert("Помилка при авторизації!")
          return
        }

        const student = await gql.GetOneStudent({ email: response.email })

        const userData = {
          email: response.email,
          name: response.name,
          picture: response.picture,
        }
        if (student) {
          window.localStorage.setItem("pharm-practice", JSON.stringify(userData))

          window.location.replace("/")
        } else {
          const newStudent = await gql.CreateStudent({ ...userData })

          window.localStorage.setItem("pharm-practice", JSON.stringify(newStudent))
        }
      }}
      onError={() => {
        alert("Помилка при авторизації")
        console.log("Login Failed")
      }}
      auto_select
    />
  )
}

export default Login
