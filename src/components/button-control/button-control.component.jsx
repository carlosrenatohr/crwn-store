import {BaseButton, GoogleButton, InvertedButton} from './button-control.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: BaseButton,
    google: GoogleButton,
    inverted: InvertedButton,
};

const getButton = (buttonType= BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]
);

const ButtonControl = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
}

export default ButtonControl;