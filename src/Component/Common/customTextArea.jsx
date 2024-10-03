const CustomTextArea = ({
  label,
  placeholder,
  name,
  onChange,
  value,
  readonly = false,
}) => {
  return (
    <div className={"w-full"}>
      <label className={"text-[#8F959E] text-xs"}>{label}</label>
      <textarea
        placeholder={placeholder}
        className={
          "!bg-transparent rounded-2xl border-2 !border-[#E7E8EA] w-full p-2.5 outline-0 !autofill:bg-primary"
        }
        name={name}
        onChange={onChange}
        rows={4}
        value={value}
        required
        readOnly={readonly}
      />
    </div>
  );
};

export default CustomTextArea;
