import Back from "../../Component/Common/icons/back.jsx";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Component/MainLayout.jsx";
export default function OrderList() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div className={"flex flex-col h-screen"}>
          <div
            className={
              "p-4 w-full flex justify-between items-center overflow-hidden"
            }
          >
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
            <div className={"font-bold text-2xl w-full text-center"}>Order</div>
          </div>
          <div className={"p-4 overflow-y-scroll no-scrollbar"}>
            <div
              onClick={() => navigate("/orderdetails")}
              className={"grid gap-3 p-4 my-4 rounded-2xl cursor-pointer"}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div>
                <div>{`Men's Tie-Dye T-Shirt Nike Sportswear`}</div>
                <div className={"flex justify-between items-center"}>
                  <div className={"text-[#8F959E]"}> 21/12/2023 12:30 PM</div>
                  <div className={"text-[#8F959E]"}> $500</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/orderdetails")}
              className={"grid gap-3 p-4 my-4 rounded-2xl cursor-pointer"}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div>
                <div>{`Men's Tie-Dye T-Shirt Nike Sportswear`}</div>
                <div className={"flex justify-between items-center"}>
                  <div className={"text-[#8F959E]"}> 21/12/2023 12:30 PM</div>
                  <div className={"text-[#8F959E]"}> $500</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/orderdetails")}
              className={"grid gap-3 p-4 my-4 rounded-2xl cursor-pointer"}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div>
                <div>{`Men's Tie-Dye T-Shirt Nike Sportswear`}</div>
                <div className={"flex justify-between items-center"}>
                  <div className={"text-[#8F959E]"}> 21/12/2023 12:30 PM</div>
                  <div className={"text-[#8F959E]"}> $500</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/orderdetails")}
              className={"grid gap-3 p-4 my-4 rounded-2xl cursor-pointer"}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div>
                <div>{`Men's Tie-Dye T-Shirt Nike Sportswear`}</div>
                <div className={"flex justify-between items-center"}>
                  <div className={"text-[#8F959E]"}> 21/12/2023 12:30 PM</div>
                  <div className={"text-[#8F959E]"}> $500</div>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/orderdetails")}
              className={"grid gap-3 p-4 my-4 rounded-2xl cursor-pointer"}
              style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
            >
              <div>
                <div>{`Men's Tie-Dye T-Shirt Nike Sportswear`}</div>
                <div className={"flex justify-between items-center"}>
                  <div className={"text-[#8F959E]"}> 21/12/2023 12:30 PM</div>
                  <div className={"text-[#8F959E]"}> $500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
