import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Component/Common/customButtom.jsx";
import Back from "../../../Component/Common/icons/back.jsx";
import newProduct from "../../../assets/newProduct.svg";
import MainLayout from "../../../Component/MainLayout.jsx";
import CustomInput from "../../../Component/Common/customInput.jsx";
import CustomTextArea from "../../../Component/Common/customTextArea.jsx";
import CustomSelection from "../../../Component/Common/customSelection.jsx";

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
          <div className={"w-full flex flex-col justify-between h-screen"}>
            <div
              className={
                "relative bg-[#F2F2F2] flex justify-center pt-4 h-[450px]"
              }
            >
              <img src={newProduct} width={450} height={450} alt={"No Image"} />
              <div
                className={
                  "absolute top-4 px-4 w-full flex justify-between items-center"
                }
              >
                <button
                  onClick={() => navigate("/admin/productlist")}
                  className={
                    "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                  }
                >
                  <Back />
                </button>
              </div>
            </div>
            <div className={"overflow-y-scroll pb-4"}>
              <div className={"px-6 flex justify-between items-center"}>
                <CustomInput
                  label="Product Name"
                  name={"name"}
                  type={"text"}
                  placeholder={"Enter Product Name"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6 w-1/3 "}>
                <CustomInput
                  label="Price"
                  name={"price"}
                  type={"number"}
                  placeholder={"00"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6"}>
                <CustomTextArea
                  label="Description"
                  name={"description"}
                  type={"text"}
                  // placeholder={"00"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6"}>
                <CustomSelection
                  label="Category"
                  name={"category"}
                  type={"text"}
                  option={[
                    "abc",
                    "def",
                    "ghi",
                    "jkl",
                    "mno",
                    "pqrs",
                    "tuv",
                    "wxyz",
                  ]}
                  placeholder={"Select Category"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                  value={"Select Category"}
                />
              </div>
            </div>
            <CustomButton label={"Save Product"} onClick={handleAddToCart} />
          </div>
        </div>

        {/*Desktop View*/}
        <div className={"w-full h-screen hidden sm:flex flex-col"}>
          <div
            className={
              "px-4 sm:p-4 p-0 w-full flex justify-between items-center"
            }
          >
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#fff] sm:bg-[#E7E8EA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
          </div>
          <div className={"flex gap-8 p-8 h-[700px]"}>
            <div className={"flex flex-col justify-between items-center"}>
              <img src={newProduct} width={500} height={500} alt={"No Image"} />
              <div className={"flex gap-4 w-full"}>
                <CustomButton
                  label={"Save Product"}
                  onClick={handleAddToCart}
                />
              </div>
            </div>
            <div className={"w-1/2"}>
              <div className={"px-6 flex justify-between items-center"}>
                <CustomInput
                  label="Product Name"
                  name={"name"}
                  type={"text"}
                  placeholder={"Enter Product Name"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6 w-1/3 "}>
                <CustomInput
                  label="Price"
                  name={"price"}
                  type={"number"}
                  placeholder={"00"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6"}>
                <CustomTextArea
                  label="Description"
                  name={"description"}
                  type={"text"}
                  // placeholder={"00"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
              <div className={"px-6"}>
                <CustomSelection
                  label="Category"
                  name={"category"}
                  type={"text"}
                  option={[
                    "abc",
                    "def",
                    "ghi",
                    "jkl",
                    "mno",
                    "pqrs",
                    "tuv",
                    "wxyz",
                  ]}
                  placeholder={"Select Category"}
                  // onChange={handleInput}
                  // value={userEmailPass.email}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
