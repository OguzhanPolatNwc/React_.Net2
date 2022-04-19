import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
    
    // Now, we're not going to add a method to add an item because we're going to get our basket back from
    // the API whenever we do such a thing.
    // And we can simply just use that basket and use this set basket method when we're adding an item.
    basket: Basket | null;

    // But when we remove an item, we know that we do not get anything back.
    // Apart from a 200 status, OK response back from our API.
    // So we do need to handle the logic for removing an item inside our clients
    setBasket: (basket: Basket) => void;

    removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

//We'll say export function and react hooks always start with the word use, and we'll specify store context.
export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw Error('Oops - we do not seem to be inside the provider');
    }

    return context;
}

export function StoreProvider({children}: PropsWithChildren<any>) {
    const [basket, setBasket] = useState<Basket | null>(null);

    function removeItem(productId: number, quantity: number) {
        if (!basket) return;
        const items = [...basket.items];
        const itemIndex = items.findIndex(i => i.productId === productId);
        if (itemIndex >= 0) {
            items[itemIndex].quantity -= quantity;
            // And this is how we can remove an item from an array and that will specify the item index and one.
            // And if you're worried about mutating states because items don't splice, does indeed mutate state.
            if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            setBasket(prevState => {
                return {...prevState!, items}
            })
        }
    }

    return (
        <StoreContext.Provider value={{basket, setBasket, removeItem}}>
            {children}
        </StoreContext.Provider>
    )
}