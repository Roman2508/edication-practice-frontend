import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Alert, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { Home } from "./pages/Home"
import { gql } from "./graphql/client"
import { IAlert } from "./types/IAlert"
import { Layout } from "./layout/Layout"
import PrintPage from "./pages/PrintPage"
import { PharmacyPage } from "./pages/PharmacyPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage"
import { getAuthData } from "./utils/getAuthData"
import SelectedSuccessfullyPage from "./pages/SelectedSuccessfullyPage"

interface IAppContext {
  alert: IAlert
  canUserChoosePracticeBase: boolean
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}

const appInitialData = {
  alert: {
    isShow: false,
    message: "",
    severity: undefined,
  },
  canUserChoosePracticeBase: false,
  setAlert: () => {},
}

export const AppContext = React.createContext<IAppContext>(appInitialData)

const App = () => {
  const user = getAuthData()
  const navigate = useNavigate()

  const [alert, setAlert] = React.useState({
    isShow: false,
    message: "",
    severity: undefined,
  })
  const [canUserChoosePracticeBase, setCanUserChoosePracticeBase] = React.useState(true)

  React.useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const data = await gql.CanUserChoosePracticeBase({ userId: user.id })

        if (data.selectedBasesOfPractices.data[0]) {
          setCanUserChoosePracticeBase(false)
        }
      }

      fetchData()
    }
  }, [user])

  React.useEffect(() => {
    if (!canUserChoosePracticeBase) {
      // navigate("/selected")
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

      <AppContext.Provider value={{ alert, canUserChoosePracticeBase, setAlert }}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<PharmacyPage />} path="/pharmacy/:id" />
            <Route element={<PrintPage />} path="/print" />
            <Route element={<SettingsPage />} path="/settings" />
          </Route>

          <Route element={<LoginPage />} path="/auth" />
          <Route element={<SelectedSuccessfullyPage />} path="/selected" />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
