import './index.css';

/**
 A form input component that can be used for various types of inputs such as text, email, and password.
 * @param {string} type - The type of input element. Can be "text", "email", or "password".
 * @param {string} name - The name attribute of the input element.
 * @param {string} value - The value attribute of the input element.
 * @param {function} onChange - The function to be called when the value of the input element changes.
 * @param {string} placeholder - The placeholder text of the input element.
 * @param {boolean} required - If true, the input element will be marked as required.
 * @param {"full" | undefined} style - The style of the input element. Can be "full" or "half".
 * @param {boolean} disabled - If true, the input element will be disabled.
 * @param {string | null} error - The error message to display if the input is invalid.
 * @returns {JSX.Element} - The rendered FormInput component.
 */

const FormInput = ({type, name, value, onChange, placeholder, required, disabled, style, error}) => {

    const formStyle = style === 'full' ? 'formInput-full' : 'formInput-half';

    return (
        <div className="formInput">
            <input
                className={formStyle}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default FormInput;
