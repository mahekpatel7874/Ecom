import Back from "../../../Component/Common/icons/back.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileInfo from "../../../assets/profileInfo.svg";
import ProfileMail from "../../../assets/profileMail.svg";
import ProfilePSW from "../../../assets/profilePSW.svg";
import EditPen from "../../../assets/editPen.svg";
import ProfileModal from "../../../Component/Common/profileModal.jsx";
import MainLayout from "../../../Component/MainLayout.jsx";
export default function Profile() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleInput = () => {
    console.log("profile change");
  };

  const hadleEditFieldsModal = (type) => {
    console.log("hadleEditFieldsModal : ", type);
    setModalType(type);
    setShowModal(!showModal);
  };
  return (
    <MainLayout>
      <div className={"w-full overflow-hidden bg-white"}>
        <div className={"flex items-center flex-col h-screen"}>
          <div className={"p-4 pb-0 w-full flex justify-between items-center "}>
            <button
              onClick={() => navigate("/dashboard")}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </button>
            <div className={"font-bold text-2xl w-full text-center"}>
              Profile
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center h-screen w-full md:w-2/4 p-4 gap-4 "
            }
          >
            <div className={"w-full md:h-[200px] sm:h-[400px]"}>
              <div className={"w-full"}>
                <label
                  className={
                    "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
                  }
                >
                  <img
                    src={ProfileInfo}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-8 h-8"}
                  />
                  <input
                    type={"text"}
                    className={
                      "!bg-transparent h-[50px] w-full pl-4 p-2 outline-0"
                    }
                    name={"name"}
                    onChange={handleInput}
                    value={"John Doe"}
                    required
                    readOnly
                  />
                  <img
                    src={EditPen}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-6 h-6 cursor-pointer"}
                    onClick={() => hadleEditFieldsModal("name")}
                  />
                </label>
              </div>
              <div className={"w-full"}>
                <label
                  className={
                    "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
                  }
                >
                  <img
                    src={ProfileMail}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-8 h-8"}
                  />
                  <input
                    type={"email"}
                    className={
                      "!bg-transparent pl-4 h-[50px] w-full p-2 outline-0"
                    }
                    name={"email"}
                    onChange={handleInput}
                    value={"johndoe@gmail.com"}
                    required
                    readOnly
                  />
                  <img
                    src={EditPen}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-6 h-6 cursor-pointer"}
                    onClick={() => hadleEditFieldsModal("email")}
                  />
                </label>
              </div>
              <div className={"w-full"}>
                <label
                  className={
                    "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
                  }
                >
                  <img
                    src={ProfilePSW}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-8 h-8"}
                  />
                  <input
                    type={"password"}
                    className={
                      "!bg-transparent pl-4 h-[50px] w-full p-2 outline-0"
                    }
                    name={"password"}
                    onChange={handleInput}
                    value={"****"}
                    required
                    readOnly
                  />
                  <img
                    src={EditPen}
                    alt={"no image"}
                    width={20}
                    height={20}
                    className={"w-6 h-6 cursor-pointer"}
                    onClick={() => hadleEditFieldsModal("password")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <ProfileModal
          show={showModal}
          type={modalType}
          onClose={() => setShowModal(false)}
        />
      </div>
    </MainLayout>
  );
}
