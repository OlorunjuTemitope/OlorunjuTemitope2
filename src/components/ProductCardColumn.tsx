import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductCardColumnType = {
  className?: string;
  image16?: string;
  klipschPro2?: string;
  productSeparator?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ProductCardColumn: FunctionComponent<ProductCardColumnType> = ({
  className = "",
  image16,
  klipschPro2,
  productSeparator,
  propPadding,
  propGap,
  propMinWidth,
}) => {
  const productCardColumnStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propPadding, propGap, propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-3xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-start pt-[37px] px-0 pb-2.5 gap-[24px] min-w-[282px] max-w-full text-center text-5xl text-black font-montserrat border-[1px] border-solid border-whitesmoke ${className}`}
      style={productCardColumnStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[166px] w-[162px] relative object-cover"
          alt=""
          src={image16}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <b className="self-stretch relative leading-[21px] mq450:text-lgi mq450:leading-[17px]">
          {klipschPro2}
        </b>
        <div className="self-stretch relative text-xl leading-[21px] whitespace-nowrap mq450:text-base mq450:leading-[17px]">
          {productSeparator}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] p-2 bg-darkcyan rounded-8xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen">
            <div className="relative text-xl leading-[21px] font-montserrat text-white text-left inline-block min-w-[115px]">
              Add to Cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardColumn;
