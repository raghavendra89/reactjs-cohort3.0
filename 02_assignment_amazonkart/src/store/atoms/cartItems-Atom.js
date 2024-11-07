import { atom, selector, selectorFamily } from "recoil";

/*Atoms*/

//Atom to store all todos
export const cartItemsAtom = atom({
    key: "cartItemsAtom",
    default: selector({
        key: "cartItemsSelector",
        get: async () => {
            const response = await getItemsFromBackend();
            //transforming the array into a dictionary-like-objet
            response.reduce((acc, todo) => acc[todo.id] = todo, {});
            return response;
        }
    })
})

//Selector to retrieve a particular todo
export const cartItemsSelectorFamily = selectorFamily({
    key: "cartItemsSelectorFamily",
    get:  (id) => ({ get }) => {
        const todo = get(cartItemsAtom);
        return todo[id] || { id: '', title: '', price: '', quantity: '', isInStock: '', img: '' };
    }
});

/*Selectors*/

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