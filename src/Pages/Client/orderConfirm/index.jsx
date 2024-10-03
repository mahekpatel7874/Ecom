import Back from "../../../Component/Common/icons/back.jsx";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Component/Common/customButtom.jsx";
import OrderConfirmMobileSVG from "../../../assets/orderConfirmMobile.svg";
import ConfirmDoneSVG from "../../../assets/confirmDone.svg";
import MainLayout from "../../../Component/MainLayout.jsx";
export default function OrderConfirm() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div
        className={
          "w-full overflow-hidden bg-white h-screen flex justify-between items-center flex-col"
        }
      >
        <div className={"p-4 w-full flex justify-between items-center "}>
          <button
            onClick={() => navigate("/dashboard")}
            className={
              "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
            }
          >
            <Back />
          </button>
        </div>
        <div>
          <div
            style={{ backgroundImage: "../../assets/orderConfirmBack.svg" }}
            className={`bg-top bg-cover bg-no-repeat bg-[url('/orderConfirmBack.svg')]`}
          >
            <div className={"relative p-12"}>
              <img
                src={OrderConfirmMobileSVG}
                alt={"No Image"}
                width={500}
                height={20}
              />
              <img
                src={ConfirmDoneSVG}
                alt={"No Image"}
                width={75}
                height={75}
                className={"absolute"}
                style={{
                  top: "calc(50% - 37.5px)",
                  left: "calc(50% - 37.5px)",
                }}
              />
            </div>
          </div>

          <div className={"p-4"}>
            <h1 className={"font-semibold text-2xl text-center"}>
              Order Confirmed!
            </h1>
            <h6 className={"text-[#8F959E] text-center"}>
              Your order has been confirmed, we will send you confirmation email
              shortly
            </h6>
          </div>
        </div>

        <div
          className={"flex flex-col justify-between items-center gap-4 w-full"}
        >
          <button
            className={
              "w-4/5 bg-[#F5F5F5] text-[#8F959E] rounded-xl text-center h-[50px] p-4 flex items-center justify-center"
            }
            onClick={() => navigate("/orderlist")}
          >
            {"Go to Order"}
          </button>
          <CustomButton
            label={"Continue Shopping"}
            onClick={() => navigate("/dashboard")}
          />
        </div>
      </div>
    </MainLayout>
  );
}
