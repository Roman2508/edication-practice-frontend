import React from "react"
import { Alert, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

import { Home } from "./pages/Home"
import { gql } from "./graphql/client"
import { IAlert } from "./types/IAlert"
import { Layout } from "./layout/Layout"
import PrintPage from "./pages/PrintPage"
import { getAuthData } from "./utils/getAuthData"
import { PharmacyPage } from "./pages/PharmacyPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import { IAuthData } from "./components/GoogleLogin/GoogleLogin"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage"
import SelectedSuccessfullyPage from "./pages/SelectedSuccessfullyPage"

interface IAppContext {
  alert: IAlert
  canUserChoosePracticeBase: boolean
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
  user: IAuthData | null
  setUser: React.Dispatch<React.SetStateAction<IAuthData | null>>
}

const appInitialData: IAppContext = {
  alert: {
    isShow: false,
    message: "",
    severity: undefined,
  },
  canUserChoosePracticeBase: false,
  setAlert: () => {},
  user: null,
  setUser: () => {},
}

export const AppContext = React.createContext<IAppContext>(appInitialData)

const App = () => {
  const auth = getAuthData()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [alert, setAlert] = React.useState({
    isShow: false,
    message: "",
    severity: undefined,
  })
  const [user, setUser] = React.useState<IAuthData | null>(null)
  const [canUserChoosePracticeBase, setCanUserChoosePracticeBase] = React.useState(true)

  React.useEffect(() => {
    if (auth && auth.id) {
      const fetchData = async () => {
        const data = await gql.CanUserChoosePracticeBase({ userId: auth.id })

        if (data.selectedBasesOfPractices.data[0]) {
          setCanUserChoosePracticeBase(false)
        }

        const responce = await gql.GetMe({ id: auth.id })

        if (!responce.students.data[0]) {
          navigate("/auth")
          return
        }

        const { name, middleName, email, access, picture, group } =
          responce.students.data[0].attributes

        const groupData = group.data[0]
          ? {
              name: group.data[0].attributes.name,
              courseNumber: group.data[0].attributes.courseNumber,
            }
          : null

        const me = {
          name,
          email,
          access,
          picture,
          middleName,
          id: auth.id,
          group: groupData,
        }

        window.localStorage.setItem("pharm-practice", JSON.stringify(me))

        setUser(me)
      }
      fetchData()
    } else {
      navigate("/auth")
    }
  }, [auth?.id])

  React.useEffect(() => {
    if (!canUserChoosePracticeBase) {
      navigate("/selected")
    }
    if (pathname === "/selected" && canUserChoosePracticeBase) {
      navigate("/")
    }
  }, [canUserChoosePracticeBase])

  return (
    <>
      {alert.isShow && (
        <Alert variant="filled" severity={alert.severity} className="alert">
          <span>{alert.message}</span>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => setAlert((prev) => ({ ...prev, isShow: false }))}
          >
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Alert>
      )}

      <AppContext.Provider value={{ alert, canUserChoosePracticeBase, setAlert, user, setUser }}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<PharmacyPage />} path="/pharmacy/:id" />
            <Route element={<PrintPage />} path="/print" />
            <Route element={<SettingsPage />} path="/settings" />
          </Route>

          <Route element={<SelectedSuccessfullyPage />} path="/selected" />
          <Route element={<LoginPage />} path="/auth" />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
