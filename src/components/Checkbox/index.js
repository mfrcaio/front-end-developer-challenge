/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CheckboxWrapper, CheckboxInput, CheckboxLabel } from './styles';

function Checkbox({ label, playedFinal, scored }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);

    if (playedFinal) {
      playedFinal(!checked);
    }

    if (scored) {
      scored(!checked);
    }
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

export default Checkbox;
