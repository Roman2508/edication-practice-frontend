import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import backIcon from '../assets/back.svg'

export const Layout: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <>
      <Header />

      {pathname !== '/' && (
        <div className="container">
          <button onClick={() => navigate('/')} className="back-button">
            {/* <button onClick={() => navigate(-1)} className="back-button"> */}
            <img src={backIcon} alt="back icon" />
            <span>Аптеки</span>
          </button>
        </div>
      )}

      <div className="layout">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}
