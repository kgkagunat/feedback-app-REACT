import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button

//==============================================

// Props explained:

// children -- because we are wrapping this component around the text for the button

// version -- we will have 2 versions that pertains to a certain class from the index.css (refers to `primary` or `secondary` class name in index.css for buttons)

// type -- if it is submit or regular button

// isDisabled -- a boolean, if true = disabled, if false = button is active