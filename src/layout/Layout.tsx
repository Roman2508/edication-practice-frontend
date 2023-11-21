import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Header } from "../components/Header/Header"
import BackIcon from "../assets/back.svg"

export const Layout: React.FC = () => {
  // const navigate = useNavigate()
  // const { pathname } = useLocation()
  return (
    <>
      <Header />

      {/* {pathname !== "/" && (
        <>
          <div className="container">
            <button onClick={() => navigate("/")} className="back-button">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5701 9C20.5701 9.34093 20.4346 9.6679 20.1936 9.90897C19.9525 10.15 19.6255 10.2855 19.2846 10.2855L4.39099 10.2855L9.91085 15.8028C10.1522 16.0441 10.2878 16.3715 10.2878 16.7129C10.2878 17.0543 10.1522 17.3816 9.91085 17.623C9.66947 17.8644 9.34209 18 9.00073 18C8.65937 18 8.33199 17.8644 8.09061 17.623L0.377713 9.91012C0.258 9.79071 0.163022 9.64886 0.0982178 9.49268C0.0334137 9.33651 5.60851e-05 9.16908 5.60999e-05 9C5.61147e-05 8.83091 0.0334137 8.66349 0.0982178 8.50732C0.163022 8.35114 0.258 8.20929 0.377713 8.08988L8.09061 0.376983C8.33199 0.135604 8.65937 -1.04127e-06 9.00073 -1.01142e-06C9.34209 -9.81581e-07 9.66947 0.135604 9.91085 0.376983C10.1522 0.618363 10.2878 0.945743 10.2878 1.2871C10.2878 1.62847 10.1522 1.95585 9.91085 2.19723L4.39099 7.71452L19.2846 7.71452C19.6255 7.71452 19.9525 7.84995 20.1936 8.09103C20.4346 8.3321 20.5701 8.65907 20.5701 9Z"
                  fill="#ddd"
                />
              </svg>

              <span>Аптеки</span>
            </button>
          </div>
        </>
      )} */}

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
