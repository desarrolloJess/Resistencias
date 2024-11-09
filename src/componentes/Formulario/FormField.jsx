import PropTypes from 'prop-types';


const FormField = ({ field, value, onChange }) => {
  if (field.type === 'select') {
    return (
      <div>
        <label>{field.label}</label>
        <select name={field.name} value={value} onChange={onChange}>
          <option value="" disabled>Selecciona una opción</option>
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label>{field.label}</label>
      <input
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// Definiendo los proptypes del FormField
FormField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array, // Optional for select fields
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField