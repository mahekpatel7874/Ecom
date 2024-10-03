import { useNavigate } from "react-router-dom";
import Back from "../../../Component/Common/icons/back.jsx";
import CustomButton from "../../../Component/Common/customButtom.jsx";
import ArrowUp from "../../../assets/ArrowUp.svg";
import ArrowDown from "../../../assets/ArrowDown.svg";
import DeleteSVG from "../../../assets/Delete.svg";
import product from "../../../assets/NANAKbakery.svg";
import MainLayout from "../../../Component/MainLayout.jsx";
// import {useState} from "react";

export default function Cart() {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    console.log("handlePlaceOrder");
    navigate("/orderconfirm");
  };

  return (
    <>
      <MainLayout>
        <div className={"w-full h-screen overflow-hidden bg-white"}>
          <div className={"p-4 w-full flex justify-between items-center "}>
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
            <div className={"font-bold text-2xl w-full text-center"}>Cart</div>
          </div>
          {/*Mobile View*/}
          <div className={"w-full flex flex-col sm:hidden sm:min-w-[768px]"}>
            <div
              className={
                "flex justify-between items-center flex-col h-screen overflow-hidden"
              }
            >
              <div
                className={
                  "p-4 overflow-y-scroll flex flex-col gap-3 h-screen no-scrollbar"
                }
              >
                <div
                  className={"grid gap-3 p-4 rounded-2xl "}
                  style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
                >
                  <div className={"flex justify-between items-center "}>
                    <div>
                      <img
                        src={product}
                        width={130}
                        height={50}
                        alt={"No Image"}
                        className={"bg-[#f4f5f8] rounded-2xl"}
                      ></img>
                    </div>
                    <div className={"flex flex-col justify-between p-4 gap-2"}>
                      <div className={"text-base font-medium"}>
                        {"Men's Tie-Dye T-Shirt Nike Sportswear"}
                      </div>
                      <div className={"text-[#8F959E] text-sm"}>
                        $99 (+$4.00 Tax)
                      </div>
                      <div className={"flex justify-between items-center"}>
                        <div className={"flex"}>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowDown}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                          <div className={"px-4 text-base font-medium"}>1</div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowUp}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={DeleteSVG}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </div>
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
                        src={product}
                        width={130}
                        height={50}
                        alt={"No Image"}
                        className={"bg-[#f4f5f8] rounded-2xl"}
                      />
                    </div>
                    <div className={"flex flex-col justify-between p-4 gap-2"}>
                      <div className={"text-base font-medium"}>
                        {"Men's Tie-Dye T-Shirt Nike Sportswear"}
                      </div>
                      <div className={"text-[#8F959E] text-sm"}>
                        $99 (+$4.00 Tax)
                      </div>
                      <div className={"flex justify-between items-center"}>
                        <div className={"flex"}>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowDown}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                          <div className={"px-4 text-base font-medium"}>1</div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowUp}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={DeleteSVG}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={"w-full"}>
                <div className={"p-4"}>
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
                <CustomButton
                  label={"Place Order"}
                  onClick={handlePlaceOrder}
                />
              </div>
            </div>
          </div>

          {/*Desktop View*/}
          <div className={"w-full hidden sm:flex  justify-center p-8"}>
            <div className={"w-full flex justify-center items-center gap-11 "}>
              <div
                className={
                  "w-full h-[80vh] p-4 overflow-y-scroll flex flex-col gap-3"
                }
              >
                <div
                  className={"grid gap-3 p-4 rounded-2xl "}
                  style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
                >
                  <div className={"flex justify-between items-center "}>
                    <div>
                      <img
                        src={product}
                        width={130}
                        height={50}
                        alt={"No Image"}
                        className={"bg-[#f4f5f8] rounded-2xl"}
                      ></img>
                    </div>
                    <div className={"flex flex-col justify-between p-4 gap-2"}>
                      <div className={"text-base font-medium"}>
                        {"Men's Tie-Dye T-Shirt Nike Sportswear"}
                      </div>
                      <div className={"text-[#8F959E] text-sm"}>
                        $99 (+$4.00 Tax)
                      </div>
                      <div className={"flex justify-between items-center"}>
                        <div className={"flex"}>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowDown}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                          <div className={"px-4 text-base font-medium"}>1</div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowUp}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={DeleteSVG}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </div>
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
                        src={product}
                        width={130}
                        height={50}
                        alt={"No Image"}
                        className={"bg-[#f4f5f8] rounded-2xl"}
                      />
                    </div>
                    <div className={"flex flex-col justify-between p-4 gap-2"}>
                      <div className={"text-base font-medium"}>
                        {"Men's Tie-Dye T-Shirt Nike Sportswear"}
                      </div>
                      <div className={"text-[#8F959E] text-sm"}>
                        $99 (+$4.00 Tax)
                      </div>
                      <div className={"flex justify-between items-center"}>
                        <div className={"flex"}>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowDown}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                          <div className={"px-4 text-base font-medium"}>1</div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={ArrowUp}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            className={
                              "p-0.5 rounded-full border border-[#8F959E] bg-white"
                            }
                          >
                            <img
                              src={DeleteSVG}
                              alt={""}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"flex flex-col w-full justify-center self-start"}>
                <div className={"p-4"}>
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
                <CustomButton
                  label={"Place Order"}
                  onClick={handlePlaceOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
