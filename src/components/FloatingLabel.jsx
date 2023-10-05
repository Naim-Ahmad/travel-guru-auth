
import PropTypes from 'prop-types'
import './Floating.css'
function FloatingLabel({ type, className, placeholder, name, required }) {
  return (
      <div>
          <input type={type} className={`floating-label ${className}`} placeholder={placeholder} name={name} required={required} />
      </div>
  )
}

FloatingLabel.defaultProps = {
    type: 'text',
    required: false
}
FloatingLabel.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool
}


export default FloatingLabel
