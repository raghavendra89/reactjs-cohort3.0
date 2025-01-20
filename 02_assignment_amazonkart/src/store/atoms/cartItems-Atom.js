import { atom, atomFamily, selector, selectorFamily } from "recoil";

// Atom to store all todos as a dictionary
export const cartItemsAtom = atom({
    key: "cartItemsAtom",
    default: selector({
        key: "cartItemsSelector",
        get: async () => {
            const response = await getItemsFromBackend();
            // Transforming the array into an object by id
            return response.reduce((acc, todo) => {
                acc[todo.id] = todo;
                return acc;
            }, {});
        }   
    }),
    effects: [
        ({onSet}) => {
            onSet(() => {
                console.log('Cart Items Updated...')
            })
        },
    ],
});

export const cartItemAtomFamily = atomFamily({
    key: "cartItemAtomFamily",
    default: selectorFamily({
        key: 'cartItemAtomDefault',
        get: id => ({get}) => {
            const items = get(cartItemsAtom);
            return items[id] || { id: '', title: '', price: '', quantity: 0, isInStock: false, img: '' };
        },
    })
})

// SelectorFamily to retrieve the in-stock status of an item
export const isInStockSelectorFamily = selectorFamily({
    key: "isInStockSelectorFamily",
    get: (id) => ({ get }) => {
        const item = get(cartItemAtomFamily(id));
        return item.isInStock || false;
    }
});

// SelectorFamily to manage the quantity of each item
export const itemQuantitySelectorFamily = selectorFamily({
    key: "itemQuantitySelectorFamily",
    get: (id) => ({ get }) => {
        const item = get(cartItemAtomFamily(id));
        return item?.quantity || 0;
    },
    set: (id) => ({ get, set }, newQuantity) => {
        const isInStock=get(isInStockSelectorFamily(id));
        if(!isInStock){
            alert('Item is Out Of Stock');
            return;
        }

        if(newQuantity>=0){
            const item = get(cartItemAtomFamily(id));
            // Ensure immutability by creating a new object
            const updatedItem = { ...item, quantity: newQuantity };
            set(cartItemAtomFamily(id), updatedItem);
        }
    }
});

export const deleteCartItemSelectorFamily = selectorFamily({
    key: "deleteCartItemSelectorFamily",
    set: (id) => ({ get, set }) => {
        const items = get(cartItemsAtom);
        if (items[id]) {
            //preserved immutability
            const newItems = { ...items };
            delete newItems[id];
            set(cartItemsAtom, newItems);
        }
    }
});

async function getItemsFromBackend() {
    return [
        {
            id: 1,
            title: "FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Hand",
            price: 369,
            quantity: 2,
            isInStock: true,
            img: ""
        },
        {
            id: 2,
            title: "Testing",
            price: 2069,
            quantity: 2,
            isInStock: false,
            img: ""
        }
    ]
}