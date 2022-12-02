import React, { Fragment } from "react";
import { Dropdown } from "../Dropdown";
import { useShowable } from "../../hooks/useShowable";
import { Option, useSelection } from "../../hooks/useSelection";
import { ProductVariant } from "@medusajs/medusa";

export interface SelectProps {
  variants: ProductVariant[];
  onChange?: (option: Option<ProductVariant>) => void;
  className?: string;
}

const Select = (props: SelectProps) => {
  const { variants, onChange, className } = props;
  const { shouldShow, show, hide } = useShowable();
  const { selection, toggleSelection } = useSelection<ProductVariant>({
    onSelect: onChange,
  });
  const [selectedVariant] = selection;

  return variants ? (
    <Dropdown
      containerClassName={className}
      cta={
        <button
          onClick={show}
          className="border-solid border-2 border-slate-200 text-slate-400 py-2 px-4 inline-block"
        >
          {selectedVariant?.data?.title ?? "Select size"}
        </button>
      }
      onClickAway={hide}
      shouldShow={shouldShow}
    >
      <div className="flex flex-col bg-white">
        {variants.map((variant) => (
          <Fragment key={variant.id}>
            <div
              className="w-full cursor-pointer hover:bg-gray-100 py-1 text-center"
              onClick={() => {
                toggleSelection({ key: variant.id, data: variant });
                hide();
              }}
            >
              {variant.title}
            </div>
          </Fragment>
        ))}
      </div>
    </Dropdown>
  ) : null;
};

export default Select;
