import { NavLink } from "react-router-dom"
import { AiOutlineArrowRight }from "react-icons/ai"

function UserProfileOrders() {

  return (
    <section>
      <p className="text-blackii font-medium text-2xl">My Orders</p>
      <div className="bg-white flex justify-between p-10">
        <p className="flex flex-col">
          <span>LabWox-31A6E00727</span>
          <span>Jan 23, 2023, 02:39p.m</span>
          <span>₦5,000</span>
          <span>Unpaid</span>
        </p>
        <NavLink to className={`flex items-center gap-x-2 text-yellow`}>
          <span>View Details</span>
          <span><AiOutlineArrowRight/></span>
        </NavLink>
      </div>
    </section>
  )
}

export default UserProfileOrders