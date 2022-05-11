import React from 'react'
import PropTypes from 'prop-types'
import './InputField.scss'

function InputField(props) {
  InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }

  InputField.defaultProps = {
    label: "",
    placeholder: "",
    type: "",
  }
  // console.log("props",props)

  const { field, form, label, placeholder, type } = props;
  const { name } = field;
  const { touched, errors } = form;
  const showError = touched[name] && errors[name];
  // const { name, value, onChange, onBlur } = field;
  return (
    <div className='form-group'>
      <input 
        {...field}
        className={`input-field__input ${ showError ? "error" : "" } ${touched[name] && !errors[name] ? "success" : ""}`} 
        id={name} 
        type={type}
        placeholder={placeholder} 
      />
      { label && <label htmlFor={field.name}> {label} </label> }
      {showError 
      && (<div className='mt-1' style={{color: "#ff3333", fontSize: ".8rem", textAlign: "left"}} > {errors[name]} * </div>) 
      // : (<div className='mt-1' style={{color: "transparent"}}> * </div> )
    }
    </div>
  )
}

export default InputField
