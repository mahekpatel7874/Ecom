import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Component/Common/customButtom.jsx";
import CustomInput from "../../../Component/Common/customInput.jsx";
import { useState } from "react";
import MainLayout from "../../../Component/MainLayout.jsx";

export default function SignUp() {
  const navigate = useNavigate();
  const defaultUser = {
    name: "",
    password: "",
    email: "",
    mobile: "",
  };
  const [userInfo, setUserInfo] = useState(defaultUser);
  const [errorMsgShow, setErrorMsgShow] = useState(false);
  const CustomErrorMsg = () => {
    console.log("Error Message");
  };
  const handleInput = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignUp = () => {
    console.log("sign up button click");
  };

  return (
    <MainLayout>
      <div
        className={
          "w-full overflow-hidden bg-white h-screen flex flex-col justify-center"
        }
      >
        <div
          className={
            "flex justify-center items-center h-[500px] max-[700px]:h-screen"
          }
        >
          <div
            className={"w-full md:w-1/3 h-full flex flex-col justify-between"}
          >
            <div>
              <div className={"max-[700px]:pt-20 text-center"}>
                <div className={"text-4xl font-bold"}>Sign Up</div>
                <CustomErrorMsg show={errorMsgShow} />
              </div>
            </div>
            <div className={"px-4 flex flex-col gap-4"}>
              <CustomInput
                label="Fullname"
                name={"name"}
                type={"text"}
                placeholder={"Enter fullname"}
                onChange={handleInput}
                value={userInfo.name}
              />
              <CustomInput
                label="Password"
                name={"password"}
                type={"password"}
                placeholder={"Enter Password"}
                onChange={handleInput}
                value={userInfo.password}
              />
              <CustomInput
                label="Email Address"
                name={"email"}
                type={"email"}
                value={userInfo.email}
                placeholder={"Enter E-mail"}
                onChange={handleInput}
              />
              <CustomInput
                label="Mobile"
                name={"mobile"}
                type={"number"}
                value={userInfo.mobile}
                placeholder={"Enter mobile"}
                onChange={handleInput}
              />
            </div>
            <div className={"flex flex-col gap-3"}>
              <div className={"flex justify-center items-center text-sm gap-1"}>
                <p className={"text-[#8F959E]"}>Already have an account?</p>
                <span
                  className={"cursor-pointer"}
                  onClick={() => navigate("/login")}
                >
                  {"SignIn"}
                </span>
              </div>
              <CustomButton label={"Sign Up"} onClick={handleSignUp} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
