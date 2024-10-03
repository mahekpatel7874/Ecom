import User from "../../../Component/Common/icons/user.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomFooter from "../../../Component/Common/customFooter.jsx";
import Add from "../../../assets/+.svg";
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
            <div className={"text-3xl font-bold"}>Categories</div>
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

          <div className={"p-4 w-full overflow-y-scroll no-scrollbar"}>
            <div className={"grid md:grid-cols-5 grid-cols-2 gap-3"}>
              {/*{products.map((product, index) => {*/}
              {/*return (*/}
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <img src={Add} width={25} height={25} alt={"No Image"}></img>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Cold Drinks</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Chocolate</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Cake</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Candy</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Wafers</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Instant Mix</div>
                </div>
              </div>
              <div
                // onClick={() => handleSelectedProduct(product.prId)}

                // key={index}
                className={"cursor-pointer"}
              >
                <div
                  className={
                    "w-full h-40 flex justify-center items-center bg-gray rounded-2xl text-white text-3xl font-bold"
                  }
                >
                  <div>Masala</div>
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
