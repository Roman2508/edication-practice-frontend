import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Layout } from './layout/Layout'
import { PharmacyPage } from './pages/PharmacyPage'
import PrintPage from './pages/PrintPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { SettingsPage } from './pages/SettingsPage/SettingsPage'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<PharmacyPage />} path="/pharmacy/:id" />
        <Route element={<PrintPage />} path="/print" />
        <Route element={<SettingsPage />} path="/settings" />
      </Route>

      <Route element={<LoginPage />} path="/auth" />
    </Routes>
  )
}

export default App
