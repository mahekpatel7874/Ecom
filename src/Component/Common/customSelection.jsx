import dropdownDownIcon from "../../assets/DropdownDownIcon.svg";
import React, { useState } from "react";

const CustomSelection = ({
  label,
  // placeholder,
  // name,
  // onChange,
  value,
  option,
  // readonly = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const handleSelection = (data) => {
    setSelectedValue(data);
    setIsOpen(!isOpen);
  };
  console.log("option : ", option, selectedValue);

  return (
    <div className={"w-full"}>
      <label className={"text-[#8F959E] text-xs"}>{label}</label>
      <button
        className={
          "w-full h-[45px] flex justify-between items-center text-black bg-white rounded-2xl border-2 border-[#E7E8EA]"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue === null ? label : selectedValue}
        <img src={dropdownDownIcon} width={10} height={10} alt={"No Image"} />
      </button>
      {isOpen ? (
        <div
          className={
            "flex flex-col py-4 px-2 items-start border border-[#E7E8EA] rounded-2xl gap-2 max-h-[160px] overflow-y-scroll no-scrollbar"
          }
        >
          {option.map((opt) => (
            <button
              className={
                "w-full px-2 py-1 text-start rounded-xl hover:bg-[#E7E8EA]"
              }
              onClick={() => handleSelection(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default CustomSelection;
