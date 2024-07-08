import { FunctionComponent } from "react";
import ProductCardColumn from "./ProductCardColumn";
import ProductCardContainerThree from "./ProductCardContainerThree";
import "./ProductListHeader.css";

export type ProductListHeaderType = {
  className?: string;
};

const ProductListHeader: FunctionComponent<ProductListHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={`product-list-header ${className}`}>
      <h1 className="products-listing">Products Listing</h1>
      <div className="product-grid">
        <div className="product-row">
          <div className="product-card-container">
            <div className="product-card-column1">
              <div className="card-image-container">
                <img
                  className="image-16-icon2"
                  loading="lazy"
                  alt=""
                  src="/image-16@2x.png"
                />
              </div>
              <div className="card-title-container">
                <b className="plantronics-voyager-520">
                  Plantronics Voyager 520
                </b>
              </div>
              <div className="product-grid-spacer">$29</div>
              <div className="grid-spacer-container">
                <button className="grid-spacer-row">
                  <div className="add-to-cart2">Add to Cart</div>
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
        <div className="product-row-two">
          <div className="product-card-container-two">
            <div className="product-card-column-two">
              <div className="card-image-container-two">
                <div className="card-image-two-container">
                  <img
                    className="image-16-icon3"
                    alt=""
                    src="/image-16-3@2x.png"
                  />
                </div>
                <div className="card-title-container-two">
                  <b className="klipsch-s1m">{`Klipsch S1M `}</b>
                </div>
                <div className="card-title-container-two1">
                  <div className="div">$34</div>
                </div>
                <div className="card-button-two-container">
                  <button className="card-button-two-row">
                    <div className="add-to-cart3">Add to Cart</div>
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
          <div className="product-row-three">
            <div className="product-card-container-four">
              <div className="product-card-column-four">
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
            <div className="product-card-container-five">
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
        <div className="product-tile">
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
