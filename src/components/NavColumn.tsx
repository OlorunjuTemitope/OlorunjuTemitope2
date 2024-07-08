import { FunctionComponent } from "react";

export type NavColumnType = {
  className?: string;
};

const NavColumn: FunctionComponent<NavColumnType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border top-[0] z-[99] sticky max-w-full text-left text-21xl text-white font-montserrat ${className}`}
    >
      <div className="w-[1120.5px] flex flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="flex flex-row items-center justify-center py-2 pr-2 pl-0">
          <a className="[text-decoration:none] relative leading-[60px] font-bold text-[inherit] whitespace-nowrap">
            TechTrove
          </a>
        </div>
        <div className="flex flex-row items-center justify-start gap-[64px] max-w-full text-xl mq450:gap-[16px] mq800:gap-[32px]">
          <div className="flex flex-row items-center justify-start gap-[16px] mq800:hidden">
            <div className="flex flex-row items-center justify-center p-2">
              <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[63px]">
                Home
              </a>
            </div>
            <div className="flex flex-row items-center justify-center pt-2 px-2 pb-1.5 text-darkcyan border-b-[1px] border-solid border-darkcyan">
              <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[52px]">
                Shop
              </a>
            </div>
            <div className="flex flex-row items-center justify-center p-2">
              <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[111px] whitespace-nowrap">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-start py-0 pr-2.5 pl-0">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="rounded-3xl flex flex-col items-start justify-start py-2 pr-0 pl-4">
              <div className="flex flex-row items-center justify-center py-2 px-3">
                <a className="[text-decoration:none] relative leading-[21px] font-bold text-[inherit] inline-block min-w-[75px] whitespace-nowrap">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavColumn;
