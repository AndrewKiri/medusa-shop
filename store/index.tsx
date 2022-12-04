import React, { createContext, ReactNode, useContext } from "react";
import { enableStaticRendering } from "mobx-react";
import { CartStore } from "./CartStore";

enableStaticRendering(typeof window === "undefined");

let cartStore: CartStore;
const StoreContext = createContext<CartStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useCartStore(): CartStore {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

function initializeStore(initialState = null) {
  const _store = cartStore ?? new CartStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialState) {
    _store.hydrate(initialState);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!cartStore) cartStore = _store;

  return _store;
}

export function Provider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: any;
}) {
  const store = initializeStore(initialState);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
