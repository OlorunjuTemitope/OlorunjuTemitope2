import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ProductCardContainerThree.css";

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
      className={`product-card-container-three ${className}`}
      style={productCardContainerThreeStyle}
    >
      <div className="product-card-column-three">
        <b className="plantonics-blackbeat-pro">{plantonicsBlackBeatPro}</b>
        <img className="image-16-icon1" alt="" src={image16} />
      </div>
      <div className="product-separator-two">{productSeparatorTwo}</div>
      <div className="card-button-three-container">
        <button className="card-button-three-row">
          <div className="add-to-cart1">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default ProductCardContainerThree;
