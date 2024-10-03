import User from "../../../Component/Common/icons/user.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomFooter from "../../../Component/Common/customFooter.jsx";
import logo from "../../../assets/NANAKbakery.svg";
import whishlistHeart from "../../../assets/Heart.svg";
import whishlistHeartRed from "../../../assets/HeartRed.svg";
import MainLayout from "../../../Component/MainLayout.jsx";
const categories = ["nike", "puma", "addidas", "redtap"];
export default function Dashboard() {
  const navigate = useNavigate();
  const [addWishlist, setAddWishlist] = useState(false);
  const handleSearch = () => {
    console.log("Searching...");
  };

  const handleSelectedCategoryProduct = async () => {
    navigate("/productlist");
  };

  const addToWishlist = () => {
    console.log("wishlist");
    setAddWishlist(!addWishlist);
  };

  const handleSelectedProduct = () => {
    console.log("product Info ");
    navigate("/productdetails");
  };

  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div
          className={
            "flex justify-between flex-col items-center overflow-hidden h-screen"
          }
        >
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
          <div className={"w-full text-[#8F959E] self-start px-4"}>
            Welcome to {"John Doe"}
          </div>

          <div className={"p-4 w-full overflow-y-scroll no-scrollbar"}>
            <div className={"pb-4"}>
              <input
                type={"text"}
                placeholder={"Search"}
                className={
                  "!bg-transparent border-2 !border-[#E7E8EA] h-[55px] w-full p-2.5 outline-0 !autofill:bg-primary rounded-xl"
                }
                name={"search"}
                // value={""}
                onChange={handleSearch}
              />
            </div>
            <div className={"flex justify-between items-center"}>
              <div className={"text-lg font-bold "}>Category</div>
              <div
                className={"text-sm text-[#8F959E] cursor-pointer"}
                onClick={() => {
                  navigate("/productlist");
                }}
              >
                View All
              </div>
            </div>
            <div className={"flex flex-nowrap overflow-x-scroll no-scrollbar"}>
              {categories.map((category, index) => {
                // console.log("cateeee : ", category);
                return (
                  <button
                    key={index}
                    className={"bg-[#F5F6FA] my-4 mr-4 rounded-xl py-4 px-8"}
                    onClick={() =>
                      handleSelectedCategoryProduct(category.catId)
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <div className={"py-4 flex justify-between items-center"}>
              <div className={"text-lg font-bold "}>New Arrival</div>
              <div
                className={"text-sm text-[#8F959E] cursor-pointer"}
                onClick={() => {
                  navigate("/productlist");
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
