/* eslint-disable react/prop-types */
import React from 'react';
import { SelectContainer, StyledSelect, SelectIcon } from './styles';
import arrowDownIcon from '../../assets/icones/seta-baixo.svg';

function Select({
  data, age, setAge, position, setPosition,
}) {
  const handleSelectChange = (event) => {
    if (setAge) {
      setAge(event.target.value);
    } else {
      setPosition(event.target.value);
    }
  };

  return (
    <SelectContainer>
      <StyledSelect value={setAge ? age : position} onChange={handleSelectChange}>
        {data.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
      <SelectIcon src={arrowDownIcon} alt="Select icon" width="20px" />
    </SelectContainer>
  );
}

export default Select;
