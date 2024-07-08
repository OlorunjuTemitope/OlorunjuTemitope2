import { FunctionComponent } from "react";
import ProductCardColumn from "./ProductCardColumn";
import ProductCardContainerThree from "./ProductCardContainerThree";

export type ProductListHeaderType = {
  className?: string;
};

const ProductListHeader: FunctionComponent<ProductListHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1168px] flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-21xl text-black font-montserrat mq800:gap-[23px] ${className}`}
    >
      <h1 className="m-0 relative text-inherit leading-[21px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[13px] mq800:text-13xl mq800:leading-[17px]">
        Products Listing
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-5xl">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
            <div className="flex-1 rounded-3xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-start pt-[9px] px-0 pb-2.5 gap-[8.7px] min-w-[282px] max-w-full border-[1px] border-solid border-whitesmoke">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <img
                  className="h-52 w-[162px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-16@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[35px]">
                <b className="relative leading-[21px] mq450:text-lgi mq450:leading-[17px]">
                  Plantronics Voyager 520
                </b>
              </div>
              <div className="self-stretch relative text-xl leading-[21px] text-center whitespace-nowrap mq450:text-base mq450:leading-[17px]">
                $29
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] p-2 bg-darkcyan rounded-8xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen">
                  <div className="relative text-xl leading-[21px] font-montserrat text-white text-left inline-block min-w-[115px]">
                    Add to Cart
                  </div>
                </button>
              </div>
            </div>
            <ProductCardColumn
              image16="/image-16-1@2x.png"
              klipschPro2="Klipsch Pro 2"
              productSeparator="$37"
            />
            <ProductCardColumn
              image16="/image-16-2@2x.png"
              klipschPro2="Plantronics M50"
              productSeparator="$50"
              propPadding="25px 0px 10px"
              propGap="24px"
              propMinWidth="282px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full text-center mq1125:flex-wrap">
          <div className="w-96 flex flex-col items-start justify-start gap-[18px] min-w-[384px] max-w-full mq450:min-w-full mq1125:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
              <div className="flex-1 rounded-3xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-start pt-[15px] px-0 pb-2.5 gap-[4px] max-w-full border-[1px] border-solid border-whitesmoke mq1125:flex-1">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <img
                    className="h-52 w-[162px] relative object-cover"
                    alt=""
                    src="/image-16-3@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                  <b className="flex-1 relative leading-[21px] inline-block max-w-full mq450:text-lgi mq450:leading-[17px]">{`Klipsch S1M `}</b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-xl">
                  <div className="flex-1 relative leading-[21px] inline-block whitespace-nowrap max-w-full mq450:text-base mq450:leading-[17px]">
                    $34
                  </div>
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
            <ProductCardContainerThree
              plantonicsBlackBeatPro="Plantonics BlackBeat pro"
              image16="/image-16-4@2x.png"
              productSeparatorTwo="$150"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[504px] max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap mq1125:flex-1">
                <ProductCardColumn
                  image16="/image-16-5@2x.png"
                  klipschPro2="JBL Club 500"
                  productSeparator="$57"
                  propPadding="43px 0px 10px"
                  propGap="16.5px"
                  propMinWidth="unset"
                />
                <ProductCardColumn
                  image16="/image-16-6@2x.png"
                  klipschPro2="Klipsch Heritage 3"
                  productSeparator="$68"
                  propPadding="25px 0px 10px"
                  propGap="24px"
                  propMinWidth="unset"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
              <ProductCardColumn
                image16="/image-16-7@2x.png"
                klipschPro2="Plantonics M70"
                productSeparator="$77"
                propPadding="37px 0px 10px"
                propGap="24px"
                propMinWidth="unset"
              />
              <ProductCardColumn
                image16="/image-16-8@2x.png"
                klipschPro2="JBL Tour 400"
                productSeparator="$45"
                propPadding="37px 0px 10px"
                propGap="24px"
                propMinWidth="unset"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
          <ProductCardContainerThree
            plantonicsBlackBeatPro="SteelSeries Arctis 9X"
            image16="/image-16-9@2x.png"
            productSeparatorTwo="$65"
            propWidth="unset"
            propFlex="1"
            propMinWidth="282px"
          />
          <ProductCardColumn
            image16="/image-16-10@2x.png"
            klipschPro2="Skullcandy SLYR"
            productSeparator="$23"
            propPadding="37px 0px 10px"
            propGap="24px"
            propMinWidth="282px"
          />
          <ProductCardColumn
            image16="/image-16-11@2x.png"
            klipschPro2="Denon AH-D9200"
            productSeparator="$29"
            propPadding="37px 0px 10px"
            propGap="24px"
            propMinWidth="282px"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListHeader;
