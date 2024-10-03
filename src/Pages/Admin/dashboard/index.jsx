import User from "../../../Component/Common/icons/user.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomFooter from "../../../Component/Common/customFooter.jsx";
import logo from "../../../assets/NANAKbakery.svg";
import whishlistHeart from "../../../assets/Heart.svg";
import whishlistHeartRed from "../../../assets/HeartRed.svg";
import forwardArow from "../../../assets/ArrowRight.svg";
import MainLayout from "../../../Component/MainLayout.jsx";
// const categories = ["nike", "puma", "addidas", "redtap"];
export default function Dashboard() {
  const navigate = useNavigate();
  const [addWishlist, setAddWishlist] = useState(false);
  const handleSearch = () => {
    console.log("Searching...");
  };

  const handleSelectedCategoryProduct = async () => {
    navigate("/admin/productlist");
  };

  const addToWishlist = () => {
    console.log("wishlist");
    setAddWishlist(!addWishlist);
  };

  const handleSelectedProduct = () => {
    console.log("product Info ");
    navigate("/admin/productdetails");
  };

  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div className={"flex flex-col items-center overflow-hidden h-screen"}>
          <div className={"px-4 pt-4 w-full flex justify-between items-center"}>
            <img src={logo} width={80} height={20} alt={"No Image"} />
            <button
              onClick={() => {
                navigate("/admin/profile");
              }}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <User />
            </button>
          </div>
          <div className={"text-[#8F959E] self-start px-4"}>
            Welcome to {"John Doe"}
          </div>

          <div className={"p-4 w-full overflow-y-scroll no-scrollbar"}>
            <div className={"flex justify-between items-center"}>
              <div className={"text-lg font-bold "}>New Orders</div>
              <div
                className={"text-sm text-[#8F959E] cursor-pointer"}
                onClick={() => {
                  navigate("/admin/productlist");
                }}
              >
                View All
              </div>
            </div>
            <div
              className={
                "w-full bg-[#f4f5f8] rounded-2xl h-32 p-4 flex flex-col justify-between items-center"
              }
            >
              {/*<div className={"p-4 flex flex-col justify-between items-center"}>*/}
              <div className={"w-full flex justify-between items-center"}>
                <div className={"text-lg font-semibold"}>John Doe</div>
                <div className={"text-lg font-semibold"}>&#8377;&nbsp;200</div>
              </div>
              <div className={"w-full flex justify-between items-center"}>
                <div className={"flex flex-col justify-start items-start"}>
                  <div className={"text-[#8F959E]"}>
                    Balaji Masala Wafer x 10
                  </div>
                  <div className={"text-[#8F959E]"}>Cocke 250ml x 10</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate("/admin/profile");
                    }}
                    className={
                      "bg-white rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                    }
                  >
                    <img
                      src={forwardArow}
                      width={35}
                      height={35}
                      alt={"No Image"}
                    ></img>
                  </button>
                </div>
              </div>
              {/*</div>*/}
            </div>
            <div className={"py-4 flex justify-between items-center"}>
              <div className={"text-lg font-bold "}>Trending Products</div>
              <div
                className={"text-sm text-[#8F959E] cursor-pointer"}
                onClick={() => {
                  navigate("/admin/productlist");
                }}
              >
                View All
              </div>
            </div>
            <div className={"grid md:grid-cols-5 grid-cols-2 gap-3"}>
              {/*{products.map((product, index) => {*/}
              {/*return (*/}
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={"flex justify-center items-center w-full relative"}
                >
                  <img
                    src={logo}
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
                  <div className={"font-bold px-4"}>&#x20b9;&nbsp;{"$99"}</div>
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
