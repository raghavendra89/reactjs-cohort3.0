import { atom, selector, selectorFamily } from "recoil";

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
    })
});

// SelectorFamily to retrieve a specific item by id
export const cartItemsSelectorFamily = selectorFamily({
    key: "cartItemsSelectorFamily",
    get: (id) => ({ get }) => {
        const items = get(cartItemsAtom);
        return items[id] || { id: '', title: '', price: '', quantity: 0, isInStock: false, img: '' };
    },
    set: (id) => ({ set, get }, newValue) => {
        const items = get(cartItemsAtom);
        set(cartItemsAtom, { ...items, [id]: newValue });
    }
});

// SelectorFamily to retrieve the in-stock status of an item
export const isInStockSelectorFamily = selectorFamily({
    key: "isInStockSelectorFamily",
    get: (id) => ({ get }) => {
        const item = get(cartItemsSelectorFamily(id));
        return item.isInStock || false;
    }
});

// SelectorFamily to manage the quantity of each item
export const itemQuantitySelectorFamily = selectorFamily({
    key: "itemQuantitySelectorFamily",
    get: (id) => ({ get }) => {
        const item = get(cartItemsSelectorFamily(id));
        return item.quantity || 0;
    },
    set: (id) => ({ get, set }, newQuantity) => {
        const item = get(cartItemsSelectorFamily(id));
        // Ensure immutability by creating a new object
        const updatedItem = { ...item, quantity: newQuantity };
        set(cartItemsSelectorFamily(id), updatedItem);
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
            isInStock: true,
            img: ""
        }
    ]
}