import './button-control.styles.scss';
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const ButtonControl = ({ children, buttonType, ...otherProps }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    );
}

export default ButtonControl;