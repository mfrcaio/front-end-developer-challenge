import PropTypes from 'prop-types';
import { useState } from 'react';
import arrowDownIcon from '../../assets/icones/seta-baixo.svg';
import {
  SelectContainer, StyledSelect, SelectIcon, OptionsContainer, Option,
} from './styles';

function Select({ data, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <StyledSelect onClick={handleSelectClick}>
        {data.map(({ value, label }) => (
          value === selected && <span key={value}>{label}</span>
        ))}
        <SelectIcon src={arrowDownIcon} alt="Select icon" width="20px" />
      </StyledSelect>
      {isOpen && (
        <OptionsContainer>
          {data.map(({ value, label }) => (
            value !== selected && (
              <Option key={value} onClick={() => handleOptionClick(value)}>
                {label}
              </Option>
            )
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
}

Select.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
  ]).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
