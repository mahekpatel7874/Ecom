import Back from "../../Component/Common/icons/back.jsx";
import { useNavigate } from "react-router-dom";
import ProductSVG from "../../assets/NANAKbakery.svg";
import MainLayout from "../../Component/MainLayout.jsx";
export default function OrderDetails() {
  const navigate = useNavigate();
  const isAdmin = window.location.href.indexOf("/admin") > -1;
  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div
          className={
            "flex justify-between items-center h-screen flex-col overflow-hidden"
          }
        >
          <div className={"p-4 w-full"}>
            <button
              onClick={() =>
                navigate(isAdmin ? "/admin/orderlist" : "/orderlist")
              }
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
          </div>

          <div
            className={
              "p-4 overflow-y-scroll flex flex-col gap-3 h-screen no-scrollbar w-full"
            }
          >
            <div
              className={"grid gap-3 p-4 rounded-2xl "}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div className={"flex justify-between items-center "}>
                <div>
                  <img
                    src={ProductSVG}
                    width={130}
                    height={50}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl"}
                  ></img>
                </div>
                <div className={"flex flex-col justify-between p-4 gap-2"}>
                  <div className={"text-base font-medium"}>
                    {`Men's Tie-Dye T-Shirt Nike Sportswear`}
                  </div>
                  <div className={"text-[#8F959E] text-sm"}>
                    $99 (+$4.00 Tax)
                  </div>
                  <div className={"text-base pt-4 font-medium"}>Qty: 1</div>
                </div>
              </div>
            </div>
            <div
              className={"grid gap-3 p-4 rounded-2xl "}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div className={"flex justify-between items-center "}>
                <div>
                  <img
                    src={ProductSVG}
                    width={130}
                    height={50}
                    alt={"No Image"}
                    className={"bg-[#f4f5f8] rounded-2xl"}
                  ></img>
                </div>
                <div className={"flex flex-col justify-between p-4 gap-2"}>
                  <div className={"text-base font-medium"}>
                    {`Men's Tie-Dye T-Shirt Nike Sportswear`}
                  </div>
                  <div className={"text-[#8F959E] text-sm"}>
                    $99 (+$4.00 Tax)
                  </div>
                  <div className={"text-base pt-4 font-medium"}>Qty: 1</div>
                </div>
              </div>
            </div>
          </div>

          <div className={"p-4 w-full "}>
            <div className={"flex justify-between items-center py-0.5"}>
              <div className={"font-medium text-lg pb-1"}>Date</div>
              <div className={"text-[#8F959E]"}>21/12/2023 12:30 PM</div>
            </div>
            <div className={"font-medium text-lg pb-1"}>Order Info</div>
            <div className={"flex justify-between items-center py-0.5"}>
              <div className={"text-[#8F959E]"}>Subtotal</div>
              <div className={"font-bold"}>$110</div>
            </div>
            <div className={"flex justify-between items-center py-0.5"}>
              <div className={"text-[#8F959E]"}>Discount</div>
              <div className={"font-bold"}>-$10</div>
            </div>
            <div className={"flex justify-between items-center py-0.5"}>
              <div className={"text-[#8F959E]"}>Total</div>
              <div className={"font-bold"}>$100</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
