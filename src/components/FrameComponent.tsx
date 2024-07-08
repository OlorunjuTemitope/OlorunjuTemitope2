import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-45xl text-white font-pp-hatton mq800:gap-[19px] ${className}`}
    >
      <div className="w-[1017px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[697px] flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h1 className="m-0 self-stretch h-[299px] relative text-inherit leading-[96px] font-bold font-inherit inline-block shrink-0 mq450:text-19xl mq450:leading-[58px] mq800:text-32xl mq800:leading-[77px]">
            Immerse yourself in crystal-clear sound and comfort
          </h1>
          <button className="cursor-pointer [border:none] py-2 px-6 bg-darkcyan rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen">
            <div className="relative text-13xl leading-[48px] font-montserrat text-white text-left">
              Buy Now
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start pt-0 pb-1.5 pr-[576px] pl-[1254px] box-border gap-[390px] max-w-full text-xl font-montserrat mq450:gap-[49px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[97px] mq800:pl-[313px] mq800:pr-36 mq800:box-border mq1350:flex-wrap mq1350:gap-[195px] mq1350:justify-center mq1350:pl-[627px] mq1350:pr-72 mq1350:box-border">
        <div className="ml-[-1374px] w-[984px] flex flex-row items-start justify-center gap-[21.5px] shrink-0 max-w-full mq800:flex-wrap">
          <div className="w-[262px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-0.5 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <b className="relative leading-[60px] mq450:text-base mq450:leading-[48px]">
            Related Product
          </b>
          <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[330px] max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
        <div className="w-[410px] flex flex-col items-start justify-end pt-0 px-0 pb-7 box-border max-w-full shrink-0">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
      <div className="w-[889px] flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq1125:pl-[39px] mq1125:pr-[39px] mq1125:box-border">
        <div className="flex-1 grid flex-row items-start justify-start gap-[24px] max-w-full grid-cols-[repeat(4,_minmax(130px,_1fr))] mq450:grid-cols-[minmax(130px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(130px,_225px))]">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-40 w-[calc(100%_-_4px)] absolute !m-[0] top-[0px] right-[2px] left-[2px] rounded-3xs bg-gray" />
            <img
              className="h-[164px] w-[164px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[calc(100%_-_4px)] w-40 absolute !m-[0] top-[0px] right-[-5px] bottom-[4px] rounded-3xs bg-gray" />
            <img
              className="h-[164px] w-[164px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-[9px] pl-0">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <div className="h-40 w-[calc(100%_-_4px)] absolute !m-[0] top-[-2px] right-[2px] left-[2px] rounded-3xs bg-gray" />
              <img
                className="h-[164px] w-[164px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
          </div>
          <div className="h-40 relative rounded-3xs bg-gray z-[1]" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
