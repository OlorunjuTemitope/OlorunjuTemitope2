import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`feature-row-parent ${className}`}>
      <div className="feature-row">
        <div className="feature-column">
          <h1 className="immerse-yourself-in">
            Immerse yourself in crystal-clear sound and comfort
          </h1>
          <button className="feature-button-container">
            <div className="buy-now">Buy Now</div>
          </button>
        </div>
      </div>
      <div className="product-showcase">
        <div className="product-highlights">
          <div className="highlight-images">
            <img
              className="highlight-images-child"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <b className="related-product">Related Product</b>
          <div className="highlight-images1">
            <img className="highlight-images-item" alt="" src="/vector-2.svg" />
          </div>
        </div>
        <div className="featured-product">
          <img
            className="featured-image-icon"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
      <div className="gallery-row-wrapper">
        <div className="gallery-row">
          <div className="gallery-images">
            <div className="image-placeholders" />
            <img
              className="image-1-icon"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="gallery-images1">
            <div className="gallery-images-child" />
            <img
              className="image-2-icon"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className="gallery-thumbnail">
            <div className="thumbnail-container">
              <div className="thumbnail-placeholder" />
              <img
                className="image-3-icon"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
          </div>
          <div className="gallery-banner" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
