import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Layout } from "./layout/Layout"
import { PharmacyPage } from "./pages/PharmacyPage"
import PrintPage from "./pages/PrintPage"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<PharmacyPage />} path="/pharmacy/:id" />
        <Route element={<PrintPage />} path="/print" />
        <Route element={<div>settings</div>} path="/settings" />
      </Route>
    </Routes>
  )
}

export default App
