import { FunctionComponent } from "react";
import NavColumn from "../components/NavColumn";
import FrameComponent from "../components/FrameComponent";
import ProductListHeader from "../components/ProductListHeader";

const Web: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[229px] box-border gap-[62px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq800:gap-[31px]">
      <section className="self-stretch bg-black flex flex-col items-end justify-start pt-3 px-0 pb-[46px] box-border relative gap-[232px] max-w-full mq450:gap-[58px] mq800:gap-[116px] mq800:pb-5 mq800:box-border mq1125:pt-5 mq1125:pb-[30px] mq1125:box-border">
        <div className="w-16 h-16 relative overflow-hidden shrink-0 hidden z-[0]" />
        <NavColumn />
        <FrameComponent />
        <div className="w-[793px] h-[1612.6px] absolute !m-[0] right-[0px] bottom-[-674.3px]">
          <img
            className="absolute top-[661px] left-[61.1px] w-[761.7px] h-[951.6px] object-contain"
            alt=""
            src="/stilllifewirelesscyberpunkheadphones-232151072227-2@2x.png"
          />
          <img
            className="absolute top-[736.3px] left-[0px] w-[164px] h-[164px] object-contain z-[2]"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className="absolute top-[0px] left-[61.1px] w-[761.7px] h-[951.6px] object-contain z-[3]"
            alt=""
            src="/stilllifewirelesscyberpunkheadphones-232151072227-2@2x.png"
          />
        </div>
      </section>
      <section className="w-[1424px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ProductListHeader />
      </section>
    </div>
  );
};

export default Web;
