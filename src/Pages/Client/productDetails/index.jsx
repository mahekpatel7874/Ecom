import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Component/Common/customButtom.jsx";
import Back from "../../../Component/Common/icons/back.jsx";
import CartSVG from "../../../assets/Cart.svg";
import ProductSVG from "../../../assets/NANAKbakery.svg";
import MainLayout from "../../../Component/MainLayout.jsx";

export default function ProductDetails() {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    console.log("add to cart");
    navigate("/cart");
  };

  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        {/*Mobile View*/}
        <div
          className={
            "sm:hidden flex flex-col justify-between items-center overflow-hidden h-screen"
          }
        >
          <div className={"w-full flex flex-col gap-3"}>
            <div
              className={
                "relative bg-[#F5F6FA] flex justify-center pt-4 h-[500px]"
              }
            >
              <img src={ProductSVG} width={350} height={500} alt={"No Image"} />
              <div
                className={
                  "absolute top-4 px-4 w-full flex justify-between items-center"
                }
              >
                <button
                  onClick={() => navigate("/dashboard")}
                  className={
                    "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                  }
                >
                  <Back />
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className={
                    "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                  }
                >
                  <img src={CartSVG} width={25} height={25} alt={"No Image"} />
                </button>
              </div>
            </div>
            <div className={"px-6 flex justify-between items-center"}>
              <div>
                <div className={"text-base text-[#8F959E]"}>
                  {/*{product?.category}*/}
                  {"Nike"}
                </div>
                {/*<div className={"text-lg font-medium"}>{product?.name}</div>*/}
                <div className={"text-lg font-medium"}>
                  {"Nike Sportswear Club Fleece"}
                </div>
              </div>
              <div>
                <div className={"text-base text-[#8F959E]"}>Price</div>
                <div className={"text-lg font-medium"}>
                  {/*&#x20b9;&nbsp;{product?.price}*/}
                  &#x20b9;&nbsp;{"$99"}
                </div>
              </div>
            </div>
            <div className={"px-6 text-[#8F959E]"}>
              {/*{product?.qty}&nbsp;*/}
              {/*{product?.qtytype}*/}
              {"1"}&nbsp;
              {"nike"}
              <span className={"font-bold text-[#000]"}>&nbsp;Read More..</span>
            </div>
          </div>
          <CustomButton label={"Add to Cart"} onClick={handleAddToCart} />
        </div>

        {/*Desktop View*/}
        <div className={"w-full h-screen hidden sm:flex flex-col"}>
          <div className={"px-4 w-full flex justify-between items-center"}>
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
          </div>
          <div className={"flex gap-8 p-8 h-[500px]"}>
            <div className={"flex flex-col justify-between items-center"}>
              <img src={ProductSVG} width={350} height={500} alt={"No Image"} />
              <div className={"flex gap-4 w-full"}>
                <CustomButton label={"Add to Cart"} onClick={handleAddToCart} />
                <button
                  className={
                    "bg-primary w-full h-[65px] text-[#fff] font-normal text-lg"
                  }
                  onClick={() => navigate("/cart")}
                >
                  Go To Cart
                </button>
              </div>
            </div>
            <div>
              <div>
                <div className={"text-base text-[#8F959E]"}>
                  {/*{product?.category}*/}
                  {"Nike"}
                </div>
                {/*<div className={"text-lg font-medium"}>{product?.name}</div>*/}
                <div className={"text-lg font-medium"}>
                  {"Nike Sportswear Club Fleece"}
                </div>
              </div>
              <div>
                <div className={"text-base text-[#8F959E]"}>Price</div>
                <div className={"text-lg font-medium"}>
                  {/*&#x20b9;&nbsp;{product?.price}*/}
                  &#x20b9;&nbsp;{"$99"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
