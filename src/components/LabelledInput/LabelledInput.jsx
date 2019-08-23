import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './LabelledInput.css'

const LabelledInput = ({
  inputClassName,
  type,
  defaultValue,
  renderInput,
  label,
  labelClassName,
  placeholder,
  onChange,
  name,
  disabled,
  id,
  ...other
}) => {
  // const inputClasses = classNames('labelled-input__input', inputClassName, {
  //   'labelled-input__input--invalid': invalid,
  // })
  return (
    <label className={labelClassName}>
      {label}
      {renderInput ? (
        renderInput()
      ) : (
          <input
          onChange={onChange}
				  id={id}
          name={name}
          type={type}
				  className={inputClassName}
				  placeholder={placeholder}
          value={defaultValue}
          disabled={disabled}
          {...other}
        />
      )}
    </label>
  )
}


// LabelledInput.propTypes = {
//   label: PropTypes.node.isRequired,
//   inputClassName: PropTypes.string,
//   type: PropTypes.string,
//   defaultValue: PropTypes.string,
//   renderInput: PropTypes.func,
//   onChange: PropTypes.func,
//   invalid: PropTypes.bool,
// }

// LabelledInput.defaultProps = {
//   type: 'text',
//   inputClassName: '',
//   defaultValue: '',
//   renderInput: null,
//   onChange: () => {},
//   invalid: false,
// }

export default LabelledInput