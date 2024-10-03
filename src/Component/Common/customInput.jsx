const CustomInput = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
  readonly = false,
}) => {
  return (
    <div className={"w-full"}>
      <label className={"text-[#8F959E] text-xs"}>{label}</label>
      <div className={"flex gap-2"}>
        {label === "Price" ? (
          <div className={"text-2xl font-bold py-2"}>&#8377;</div>
        ) : (
          ""
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={
            "w-full !bg-transparent border-b-2 !border-b-[#E7E8EA]  outline-0 !autofill:bg-primary h-[45px] px-1"
          }
          name={name}
          onChange={onChange}
          value={value}
          required
          readOnly={readonly}
        />
      </div>
    </div>
  );
};

export default CustomInput;
