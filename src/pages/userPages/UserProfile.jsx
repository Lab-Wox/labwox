import { Outlet } from "react-router-dom"
import UserProfileMenu from "./UserProfileMenu"
import { UserAuth } from "../../context/AuthContext"
import { useEffect, useState } from "react"


const UserProfile = () => {
  const { userData } = UserAuth()
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // If userData is already available, setLoading to false
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

  return (
    <div className="bg-whitebgii lg:flex flex-col lg:flex-row w-full lg:px-[70px] lg:py-[40px] px-4 py-4 gap-x-6">
      {isLoading ?
        <div className="h-[70vh] w-full flex items-center justify-center lg:text-6xl text-4xl animate-pulse">Loading...</div> :
        <>
          <div className="lg:w-[30%] w-full">
            <UserProfileMenu />
          </div>
          <div className="lg:w-[70%] w-full">
            <Outlet />
          </div>
        </>
        }

    </div>
  )
}

export default UserProfile