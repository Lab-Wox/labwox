import { Button } from "../../utils"
import closeCart from "../../assets/closeCart.png"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from "../../utils/cartSlice";
import {TbTrashXFilled}  from "react-icons/tb"

function CartModal({ closeModal }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].pricing
  }

  const displayCartItems =  cartItems?.map(item => (
    <div key={item.code} className="flex justify-between items-center gap-x-10 bg-greyii lg:p-2 p-1 rounded-lg">
      <p className="flex flex-col justify-center text-base">
        <span className="text-grey mb-2 underline">{item.testTitle}</span>
        <span className="text-blackii font-bold">₦ {item.pricing}.00</span>
      </p>
      <button onClick={() => dispatch(removeItem(item.id))}>
        <TbTrashXFilled className="text-greyiii" />
      </button>
      </div>
             )) 
    
  

  return (
    <section 
      onBlur={closeModal}
      className="lg:w-[500px] w-[300px] absolute lg:top-[80px] top-[50px] lg:right-0 right-2 bg-white z-20 lg:px-6 px-2 lg:py-10 py-5 border border-grey/50 rounded-lg">
          <div className="flex justify-between items-center mb-10">
              <p className="flex flex-col">
                <span className="text-neutral-800 lg:text-2xl text-base font-medium tracking-tight">Cart</span>
          <span className=" text-grey lg:text-base text-sm font-normal leading-tight"> Please add items from the <Link
            onClick={closeModal}
                 to={`/testListing`} className="text-orange underline">Test Listing</Link></span>
              </p>
              <div
                  onClick={closeModal}
                  className="lg:w-6 w-4 lg:h-6 h-4 cursor-pointer">
                  <img src={closeCart} alt="close cart modal"/>
              </div>
              
          </div>
          
          <div className="mb-10 flex flex-col gap-y-3">
             {displayCartItems}
      </div>
      
      {cartItems.length > 0 &&
        <div>
          <hr className="text-greyiii"/>
          <p className="flex justify-between my-4">
          <span className="font-bold text-greyiii">Order Total</span>
          <span className="font-bold">₦ {total}.00</span>
        </p>
        </div>
        }
          
          <NavLink to={`cart`} onClick={closeModal}>
              <Button bgColor={`orange`} text={`View Full`} textColor={`white`} width={`full`} />
          </NavLink>
          
    </section>
  )
}

export default CartModal