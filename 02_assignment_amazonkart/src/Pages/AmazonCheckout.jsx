import { useEffect, useRef,useState } from "react";
import { Header,Footer, Container, CartItem } from "../Components/imports-components";
import { nanoid } from "nanoid";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "../store/imports-store";

export default function AmazonCheckout(){
    const checkoutIdRef=useRef(nanoid());
    const cartItems=useRecoilValue(cartItemsAtom);
    

    return(<>
            <Header/>
            <Container className="py-4 bg-slate-200 !max-w-full">
                <div id={`checkoutBox ${checkoutIdRef}`} className="flex flex-wrap md:flex-nowrap justify-between gap-4">
                    <div data-unique="checkout-leftPart" className="bg-white rounded-xl p-4">
                        <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
                        <div data-unique="items" className="space-y-4">
                            {
                                cartItems.map(item=><CartItem key={item.title+item.price} title={item.title} 
                                    img={item.img} price={item.price}/>)
                            }
                        </div>
                    </div>
                    <div data-unique="checkout-rightPart" className="bg-white rounded-xl p-4 h-fit w-max">
                        <h1 className="text-2xl font-semibold">Order Summary</h1>
                        <div className="flex flex-wrap justify-between">
                            <span>Items ({cartItems.length})</span>
                            <span>TotalPrice</span>
                        </div>
                    </div>
                </div>
                </Container>
            <Footer />
        </>
    );
}