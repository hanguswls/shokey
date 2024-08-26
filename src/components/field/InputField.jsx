import './InputField.css';

function InputField({ type, id, name, value, onChange, placeholder, required = false }) {
  return (
    <input
      type={ type }
      id={ id }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
      required={ required }
      className="input-field"
    />
  );
}

export default InputField;