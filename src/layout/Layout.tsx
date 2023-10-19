import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container" style={{ marginTop: "40px" }}>
        <Outlet />
      </div>
    </>
  )
}
