import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ProductCardColumn.css";

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
      className={`product-card-column ${className}`}
      style={productCardColumnStyle}
    >
      <div className="image-16-wrapper">
        <img className="image-16-icon" alt="" src={image16} />
      </div>
      <div className="klipsch-pro-2-parent">
        <b className="klipsch-pro-2">{klipschPro2}</b>
        <div className="product-separator">{productSeparator}</div>
        <div className="card-button-container">
          <button className="card-button-row">
            <div className="add-to-cart">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardColumn;
