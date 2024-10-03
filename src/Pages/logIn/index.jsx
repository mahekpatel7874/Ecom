import { useState } from "react";
import CustomInput from "../../Component/Common/customInput.jsx";
import CustomButton from "../../Component/Common/customButtom.jsx";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Component/MainLayout.jsx";

export default function LogIn() {
  const navigate = useNavigate();
  const [userEmailPass, setUserEmailPass] = useState({
    email: "",
    password: "",
  });

  const isAdmin = window.location.href.indexOf("/admin") > -1;
  const handleInput = (e) => {
    console.log("change : ", e);
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUserEmailPass({ ...userEmailPass, [name]: value });
  };
  const handleLogin = () => {
    console.log("LogIn");
    navigate(isAdmin ? "/admin/dashboard" : "/dashboard");
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
            "w-full flex justify-center items-center h-[500px] max-[700px]:h-screen "
          }
        >
          <div
            className={"w-full md:w-1/3 h-full flex flex-col justify-between"}
          >
            <div className={"max-[700px]:pt-32 text-center"}>
              <div className={"text-4xl font-bold"}>Welcome</div>
              <div className={"text-[#8F959E]"}>
                Please enter your data to continue
              </div>
            </div>
            <div className={"px-4 flex flex-col gap-4"}>
              <CustomInput
                label="Email"
                name={"email"}
                type={"email"}
                placeholder={"Enter E-mail"}
                onChange={handleInput}
                value={userEmailPass.email}
              />
              <CustomInput
                label="Password"
                name={"password"}
                type={"password"}
                placeholder={"Enter Password"}
                onChange={handleInput}
                value={userEmailPass.password}
              />
              <div
                className={"text-[#EA4335] text-right cursor-pointer"}
                onClick={() =>
                  navigate(
                    isAdmin ? "/admin/forgotpassword" : "/forgotpassword",
                  )
                }
              >
                Forgot password ?
              </div>
            </div>
            <div className={"flex flex-col gap-3 "}>
              {isAdmin ? null : (
                <div
                  className={"flex justify-center items-center text-sm gap-1"}
                >
                  <p className={"text-[#8F959E]"}>Don&#39;t have an account?</p>
                  <span
                    className={"cursor-pointer"}
                    onClick={() => navigate("/register")}
                  >
                    {"SignUp"}
                  </span>
                </div>
              )}
              <CustomButton label={"Login"} onClick={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
