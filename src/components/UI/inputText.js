function InputText({ className, value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁա-ֆԱ-Ֆև\s]/g, "");
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Имя"
      className={className}
    />
  );
}

export default InputText;
