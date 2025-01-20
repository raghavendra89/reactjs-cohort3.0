import { useRef,useMemo } from "react";
import { nanoid } from "nanoid";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "../store/imports-store";
import { CartItem } from "../Components/imports-components";

export default function CheckoutSection(){
    const checkoutIdRef=useRef(nanoid());
    const cartItems=useRecoilValue(cartItemsAtom);
    const cartItemsArray=useMemo(()=>Object.values(cartItems),[cartItems]);
    const totalPrice=useMemo(()=>cartItemsArray.reduce((acc,item)=>acc+(parseFloat(item.price)*parseFloat(item.quantity)),0),
                            [cartItemsArray]);

    const totalItems=useMemo(()=>cartItemsArray.reduce((acc,item)=>acc+parseInt(item.quantity),0),[cartItemsArray])


    console.log('Amazon Checkout Component');

    return(
        <>
            <div id={`checkoutBox ${checkoutIdRef.current}`} className="flex flex-wrap md:flex-nowrap justify-between gap-4">
                <div data-unique="checkout-leftPart" className="bg-white rounded-xl p-4">
                    <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
                    <div data-unique="items" className="space-y-4">
                        {
                            cartItemsArray.map(item =>
                                <CartItem key={item.id} id={item.id} />
                            )
                        }
                    </div>
                </div>
                <div data-unique="checkout-rightPart" className="bg-white rounded-xl p-4 h-fit w-max">
                    <h1 className="text-2xl font-semibold">Order Summary</h1>
                    <div className="flex flex-wrap justify-between">
                        <span>Items ({totalItems})</span>
                        <span>TotalPrice: {totalPrice}</span>
                    </div>
                </div>
            </div>
        </>
    );
}