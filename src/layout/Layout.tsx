import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <div className="layout">
        <div className="container-wrapper">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
