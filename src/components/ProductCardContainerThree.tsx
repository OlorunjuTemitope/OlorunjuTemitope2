import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductCardContainerThreeType = {
  className?: string;
  plantonicsBlackBeatPro?: string;
  image16?: string;
  productSeparatorTwo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ProductCardContainerThree: FunctionComponent<
  ProductCardContainerThreeType
> = ({
  className = "",
  plantonicsBlackBeatPro,
  image16,
  productSeparatorTwo,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const productCardContainerThreeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={`w-[376px] rounded-3xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-end pt-[227px] px-0 pb-2.5 gap-[8px] max-w-full text-center text-5xl text-black font-montserrat border-[1px] border-solid border-whitesmoke ${className}`}
      style={productCardContainerThreeStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <b className="flex-1 relative leading-[21px] inline-block max-w-full mq450:text-lgi mq450:leading-[17px]">
          {plantonicsBlackBeatPro}
        </b>
        <img
          className="h-52 w-[162px] absolute !m-[0] top-[-206px] left-[calc(50%_-_81px)] object-cover z-[1]"
          alt=""
          src={image16}
        />
      </div>
      <div className="self-stretch relative text-xl leading-[21px] whitespace-nowrap mq450:text-base mq450:leading-[17px]">
        {productSeparatorTwo}
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <button className="cursor-pointer [border:none] p-2 bg-darkcyan rounded-8xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen">
          <div className="relative text-xl leading-[21px] font-montserrat text-white text-left inline-block min-w-[115px]">
            Add to Cart
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCardContainerThree;
