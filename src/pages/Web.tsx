import { FunctionComponent } from "react";
import NavColumn from "../components/NavColumn";
import FrameComponent from "../components/FrameComponent";
import ProductListHeader from "../components/ProductListHeader";
import "./Web.css";

const Web: FunctionComponent = () => {
  return (
    <div className="web">
      <section className="carbondelivery-parent">
        <div className="carbondelivery" />
        <NavColumn />
        <FrameComponent />
        <div className="background-image-container">
          <img
            className="still-life-wireless-cyberpunk-icon"
            alt=""
            src="/stilllifewirelesscyberpunkheadphones-232151072227-2@2x.png"
          />
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
          <img
            className="still-life-wireless-cyberpunk-icon1"
            alt=""
            src="/stilllifewirelesscyberpunkheadphones-232151072227-2@2x.png"
          />
        </div>
      </section>
      <section className="product-list-header-wrapper">
        <ProductListHeader />
      </section>
    </div>
  );
};

export default Web;
