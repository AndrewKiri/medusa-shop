import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import { observer } from "mobx-react";
import { Dropdown } from "../Dropdown";
import { useShowable } from "../../hooks/useShowable";
import { useCartStore } from "../../store";

const Cart = observer(() => {
  const { shouldShow, show, hide } = useShowable();
  const { cart } = useCartStore();

  useEffect(() => {
    if (cart.items.size === 0) {
      hide();
    }
  }, [hide, cart.items.size]);

  return (
    <Dropdown
      className="min-w-[340px] right-0 z-10 bg-white py-2 px-4"
      shouldShow={shouldShow}
      onClickAway={hide}
      cta={
        <button
          className="relative"
          onClick={() => {
            if (cart.items.size > 0) {
              show();
            }
          }}
        >
          <Image src="/cart.svg" alt="Medusa Cart" width={32} height={32} />
          <span className="inline-flex justify-center items-center absolute -top-2 -right-2 h-6 w-6 rounded-full text-xs bg-red-600 text-white z-10">
            {cart.totalQuantity}
          </span>
        </button>
      }
    >
      <div className="flex flex-col">
        {Array.from(cart.items.entries()).map((entry) => {
          const [key, cartItem] = entry;

          return (
            <Fragment key={key}>
              <div className="flex flex-row items-center justify-between my-2">
                <div className="flex flex-row items-center">
                  <span>{cartItem.quantity}</span>
                  <span className="text-xs font-medium mx-4">x</span>
                  <span>
                    {`${
                      cartItem.productTitle
                    } -  ${cartItem.title.toUpperCase()}`}
                  </span>
                </div>
                <button
                  className="p-2 hover:bg-slate-200 hover:rounded"
                  onClick={() => cart.remove(cartItem.id)}
                >
                  <Image
                    src="/bin.svg"
                    alt="delete cart item"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Dropdown>
  );
});

export default Cart;
