import CustomInput from "./customInput.jsx";
import CustomSelection from "./customSelection.jsx";

export default function ProfileModal({ show, type, onClose }) {
  return (
    <div
      className={`flex fixed inset-0 bg-[#000] bg-opacity-25 backdrop-blur-[2px] justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className={"bg-[#fff] rounded-3xl flex flex-col gap-4 w-[380px]"}>
        <div className={"w-11/12 flex justify-end items-center"}>
          <div
            className={"cursor-pointer pt-2 text-gray font-bold"}
            onClick={() => onClose()}
          >
            x
          </div>
        </div>
        {type === "name" ? (
          <div className={"w-full px-4"}>
            <CustomInput
              label="Name"
              name={"name"}
              type={"text"}
              placeholder={"John Doe"}
              // onChange={handleInput}
              // value={userEmailPass.email}
            />
          </div>
        ) : type === "email" ? (
          <div className={"w-full px-4"}>
            <CustomInput
              label="Email"
              name={"email"}
              type={"email"}
              placeholder={"johndoe@gmail.com"}
              // onChange={handleInput}
              // value={userEmailPass.email}
            />
          </div>
        ) : type === "discount" ? (
          <div className={"w-full px-4"}>
            <div className={"flex justify-between items-center gap-4"}>
              <CustomInput
                label="Discount"
                name={"discount"}
                type={"number"}
                placeholder={"20"}
                // onChange={handleInput}
                // value={userEmailPass.email}
              />
              <CustomSelection
                label="Discount Type"
                name={"discountType"}
                type={"text"}
                option={["Rs", "%"]}
                // placeholder={""}
                // onChange={handleInput}
                // value={userEmailPass.email}
                value={"Rs"}
              />
            </div>
            <CustomInput
              label="Minimum Order Price"
              name={"MinOrderPrice"}
              type={"number"}
              placeholder={"500"}
              // onChange={handleInput}
              // value={userEmailPass.email}
            />
          </div>
        ) : (
          <div className={"w-full px-4"}>
            <CustomInput
              label="Password"
              name={"password"}
              type={"password"}
              placeholder={"1234"}
              // onChange={handleInput}
              // value={userEmailPass.email}
            />
            <CustomInput
              label="Confirm Password"
              name={"confirmPassword"}
              type={"password"}
              placeholder={"1234"}
              // onChange={handleInput}
              // value={userEmailPass.email}
            />
          </div>
        )}
        <div className={"w-full"}>
          <button
            className={
              "bg-primary rounded-b-3xl w-full h-[60px] text-[#fff] font-normal text-lg"
            }
            // onClick={onClick}
          >
            {"Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
