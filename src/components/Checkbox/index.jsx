import PropTypes from 'prop-types';
import { useState } from 'react';
import { CheckboxWrapper, CheckboxInput, CheckboxLabel } from './styles';

function Checkbox({ label, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CheckboxLabel>{ label }</CheckboxLabel>
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
