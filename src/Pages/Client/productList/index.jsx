import { useNavigate } from "react-router-dom";
import Back from "../../../Component/Common/icons/back.jsx";
import User from "../../../Component/Common/icons/user.jsx";
import product from "../../../assets/NANAKbakery.svg";
import whishlistHeart from "../../../assets/Heart.svg";
import whishlistHeartRed from "../../../assets/HeartRed.svg";
import { useState } from "react";
import MainLayout from "../../../Component/MainLayout.jsx";
import CustomFooter from "../../../Component/Common/customFooter.jsx";

export default function ProductList() {
  const navigate = useNavigate();
  const [addWishlist, setAddWishlist] = useState(false);
  const handleSelectedProduct = () => {
    console.log("selected product");
    navigate("/productdetails");
  };

  const addToWishlist = () => {
    console.log("wishlist");
    setAddWishlist(!addWishlist);
  };
  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div className={"flex justify-between flex-col h-screen"}>
          <div className={"px-4 py-4 w-full flex justify-between items-center"}>
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
            <div className={"font-bold text-2xl"}>{"categoryName"}</div>
            <button
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
              onClick={() => navigate("/profile")}
            >
              <User />
            </button>
          </div>
          <div className={"p-4 overflow-y-scroll no-scrollbar"}>
            <div>
              <div className={"text-lg font-bold "}>365 Items</div>
              <div className={"text-sm text-[#8F959E]"}>Available in stock</div>
            </div>
            <div className={"grid md:grid-cols-5 grid-cols-2 gap-3"}>
              {/*{products.map((product, index) => {*/}
              {/*return (*/}
              <div className={"cursor-pointer"}>
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={product}
                    width={275}
                    height={80}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl h-80"}
                    onClick={() => handleSelectedProduct()}
                  ></img>
                  <div className={"absolute top-1 right-1 p-4"}>
                    <img
                      src={addWishlist ? whishlistHeartRed : whishlistHeart}
                      alt={"No Image"}
                      width={20}
                      height={20}
                      onClick={addToWishlist}
                      className={"cursor-pointer"}
                    ></img>
                  </div>
                </div>
                <div onClick={() => handleSelectedProduct()}>
                  <div className={"text-sm font-medium px-4"}>
                    {"Nike Sportswear Club Fleece"}
                  </div>
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"99"}</div>
                </div>
              </div>
              <div className={"cursor-pointer"}>
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={product}
                    width={275}
                    height={80}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl h-80"}
                    onClick={() => handleSelectedProduct()}
                  ></img>
                  <div className={"absolute top-1 right-1 p-4"}>
                    <img
                      src={addWishlist ? whishlistHeartRed : whishlistHeart}
                      alt={"No Image"}
                      width={20}
                      height={20}
                      onClick={addToWishlist}
                      className={"cursor-pointer"}
                    ></img>
                  </div>
                </div>
                <div onClick={() => handleSelectedProduct()}>
                  <div className={"text-sm font-medium px-4"}>
                    {"Nike Sportswear Club Fleece"}
                  </div>
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"99"}</div>
                </div>
              </div>
              <div className={"cursor-pointer"}>
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={product}
                    width={275}
                    height={80}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl h-80"}
                    onClick={() => handleSelectedProduct()}
                  ></img>
                  <div className={"absolute top-1 right-1 p-4"}>
                    <img
                      src={addWishlist ? whishlistHeartRed : whishlistHeart}
                      alt={"No Image"}
                      width={20}
                      height={20}
                      onClick={addToWishlist}
                      className={"cursor-pointer"}
                    ></img>
                  </div>
                </div>
                <div onClick={() => handleSelectedProduct()}>
                  <div className={"text-sm font-medium px-4"}>
                    {"Nike Sportswear Club Fleece"}
                  </div>
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"99"}</div>
                </div>
              </div>
              <div className={"cursor-pointer"}>
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={product}
                    width={275}
                    height={80}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl h-80"}
                    onClick={() => handleSelectedProduct()}
                  ></img>
                  <div className={"absolute top-1 right-1 p-4"}>
                    <img
                      src={addWishlist ? whishlistHeartRed : whishlistHeart}
                      alt={"No Image"}
                      width={20}
                      height={20}
                      onClick={addToWishlist}
                      className={"cursor-pointer"}
                    ></img>
                  </div>
                </div>
                <div onClick={() => handleSelectedProduct()}>
                  <div className={"text-sm font-medium px-4"}>
                    {"Nike Sportswear Club Fleece"}
                  </div>
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"99"}</div>
                </div>
              </div>
              <div className={"cursor-pointer"}>
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={product}
                    width={275}
                    height={80}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl h-80"}
                    onClick={() => handleSelectedProduct()}
                  ></img>
                  <div className={"absolute top-1 right-1 p-4"}>
                    <img
                      src={addWishlist ? whishlistHeartRed : whishlistHeart}
                      alt={"No Image"}
                      width={20}
                      height={20}
                      onClick={addToWishlist}
                      className={"cursor-pointer"}
                    ></img>
                  </div>
                </div>
                <div onClick={() => handleSelectedProduct()}>
                  <div className={"text-sm font-medium px-4"}>
                    {"Nike Sportswear Club Fleece"}
                  </div>
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"99"}</div>
                </div>
              </div>

              {/*  );*/}
              {/*})}*/}
            </div>
          </div>
          <CustomFooter />
        </div>
      </div>
    </MainLayout>
  );
}
