import Back from "../../Component/Common/icons/back.jsx";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../Component/Common/customInput.jsx";
import CustomButton from "../../Component/Common/customButtom.jsx";
import ForgotPSWCloudLoackSVG from "../../assets/forgotPasswordCloudLock.svg";
import { useState } from "react";
import MainLayout from "../../Component/MainLayout.jsx";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [forgotPSW, setForgotPSW] = useState(true);
  const [verificationCode, setVerificationCode] = useState(false);
  const [resetPSW, setResetPSW] = useState(false);
  const isAdmin = window.location.href.indexOf("/admin") > -1;
  const handleCountinue = () => {
    setForgotPSW(!forgotPSW);
    setVerificationCode(!verificationCode);
  };

  const handleConfirmation = () => {
    setVerificationCode(!verificationCode);
    setResetPSW(!resetPSW);
  };

  const handleReset = () => {
    setResetPSW(!resetPSW);
    setForgotPSW(!forgotPSW);
  };

  const handleBack = () => {
    if (forgotPSW) {
      navigate(isAdmin ? "/admin/" : "/");
    } else if (verificationCode) {
      setForgotPSW(!forgotPSW);
      setVerificationCode(!verificationCode);
    } else if (resetPSW) {
      setResetPSW(!resetPSW);
      setVerificationCode(!verificationCode);
    }
  };

  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white h-screen "}>
        {/*<div className={"flex justify-center items-center h-screen"}>*/}
        <div
          className={
            "w-full h-full flex flex-col sm:justify-center justify-between sm:gap-4"
          }
        >
          <div>
            <div className={"pt-4 pl-4 sm:absolute sm:top-2"}>
              <button
                onClick={handleBack}
                className={
                  "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                }
              >
                <Back />
              </button>
            </div>
            <div
              className={
                "text-center flex flex-col justify-center items-center"
              }
            >
              <div className={"text-4xl font-bold"}>
                {verificationCode
                  ? "Verification Code"
                  : resetPSW
                    ? "New Password"
                    : "Forgot Password"}
              </div>
              {ForgotPassword || verificationCode ? (
                <img
                  src={ForgotPSWCloudLoackSVG}
                  alt={"No Image"}
                  width={500}
                  height={200}
                  className={"sm:h-40"}
                />
              ) : null}
            </div>
            <div className={"w-full flex flex-col justify-center items-center"}>
              {verificationCode ? (
                <div className={"px-4 pt-10 flex gap-2 w-full sm:w-1/3"}>
                  <input
                    type={"number"}
                    className={
                      "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
                    }
                    name={"one"}
                    // onChange={onChange}
                    // value={value}
                  />
                  <input
                    type={"number"}
                    className={
                      "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
                    }
                    name={"two"}
                    // onChange={onChange}
                    // value={value}
                  />
                  <input
                    type={"number"}
                    className={
                      "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
                    }
                    name={"three"}
                    // onChange={onChange}
                    // value={value}
                  />
                  <input
                    type={"number"}
                    className={
                      "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
                    }
                    name={"four"}
                    // onChange={onChange}
                    // value={value}
                  />
                </div>
              ) : resetPSW ? (
                <div className={"px-4 flex flex-col gap-4  w-full sm:w-1/3"}>
                  <CustomInput
                    label="Password"
                    name={"password"}
                    type={"text"}
                    placeholder={"Enter Password"}
                    // onChange={handleInput}
                    // value={userInfo.password}
                  />
                  <CustomInput
                    label="Confirm Password"
                    name={"confirmpassword"}
                    type={"password"}
                    placeholder={"Enter Confirm Password"}
                    // onChange={handleInput}
                    // value={userInfo.password}
                  />
                </div>
              ) : (
                <div
                  className={"px-4 pt-10 flex flex-col gap-4  w-full sm:w-1/3"}
                >
                  <CustomInput
                    label="Email Address"
                    name={"email"}
                    type={"email"}
                    // value={userInfo.email}
                    placeholder={"Enter E-mail"}
                    // onChange={handleInput}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={"flex flex-col gap-5"}>
            {verificationCode ? (
              <div
                className={
                  "flex justify-center items-center gap-2 text-center w-8/12 self-center"
                }
              >
                <span className={"font-bold"}>00:20</span>
                <span className={"text-sm text-[#8F959E]"}>
                  resend confirmation code.
                </span>
              </div>
            ) : resetPSW ? (
              <div
                className={
                  "flex justify-center items-center text-[#8F959E] text-sm"
                }
              >
                Please write your new password
              </div>
            ) : (
              <div
                className={
                  "text-sm text-[#8F959E] text-center w-8/12 sm:w-1/3  self-center"
                }
              >
                Please write your email to receive a confirmation code to set a
                new password
              </div>
            )}

            <div className={"flex justify-center items-center w-full"}>
              <div className={"sm:w-1/4 w-full"}>
                <CustomButton
                  label={
                    verificationCode
                      ? "Confirmation Code"
                      : resetPSW
                        ? "Reset Password"
                        : "Continue"
                  }
                  onClick={
                    verificationCode
                      ? handleConfirmation
                      : resetPSW
                        ? handleReset
                        : handleCountinue
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/*</div>*/}
      </div>
    </MainLayout>
  );
}
