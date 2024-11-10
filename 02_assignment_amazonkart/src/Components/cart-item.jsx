import { useRef,useState } from 'react';
import { nanoid } from 'nanoid';
import {Button} from '../Reusables/imports-reusables';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { deleteCartItemSelectorFamily } from '../store/atoms/cartItems-Atom';

export default function CartItem({id,price='369',title=''}){
const idRef=useRef(nanoid());
const [isInStock,setIsInStock]=useState(true);
const [itemQuantity,setItemQuantity]=useState(1);
const setDeleteCartItem=useSetRecoilState(deleteCartItemSelectorFamily(id));

const quantityBtnClasses='bg-slate-300 rounded-md text-xl px-3 py-1';

    return(

        <div id={`cart-item ${idRef.current}`} className='flex flex-wrap md:flex-nowrap justify-between gap-4 px-4'>
        <div data-unique="cart-left-part" className='flex flex-wrap md:flex-nowrap space-x-2'>
            <div data-unique="cart-item-image" className="bg-slate-300" style={{"height":"90px",width:"90px"}}>
            </div>
            <div data-unique="cart-item-details">
                <span role="heading" data-unique="cart-item-heading" 
                className='text-xl font-semibold block'>
                    {title}
                </span>
                <span data-unique="cart-item-status" 
                className={`${isInStock?"text-green-500":"text-red-500"} block`}>
                    {isInStock?"In Stock":"Out Of Stock"}
                </span>
                <div data-unique="cart-item-incr-decr" className='space-x-2'>
                    <Button className={quantityBtnClasses} onClick={increaseQuantity}>+</Button>
                    <span data-unique="cart-item-quantity">{itemQuantity}</span>
                    <Button className={`${quantityBtnClasses}`} onClick={decreaseQuantity}>-</Button>
                    <Button className='bg-transparent 
                    text-blue-500 font-semibold hover:text-blue-700 duration-200'
                    onClick={()=>setDeleteCartItem()}
                    >Delete
                    </Button>
                </div>
            </div>
        </div>
        <span data-unique="cart-item-price" className=''>Rs. {price}</span>

    </div>
    
    )

    
function increaseQuantity(){
    setItemQuantity(q=>q+1);
}

function decreaseQuantity(){
    setItemQuantity(q=>q-1);
}

}
