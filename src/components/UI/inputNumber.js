function InputNumber({ className, value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Телефон"
      className={className}
    />
  );
}

export default InputNumber;