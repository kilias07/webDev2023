 import './index.css';
 import {forwardRef} from "react";

/**
 * @typedef {{
 *   variant?: "fill" | "text",
 *   color?: "primary" | "secondary",
 *   className?: string,
 *   [key: string]: any
 * }} ButtonProps
 *
 * @typedef {HTMLButtonElement} ButtonRef
 *
 * @typedef {{
 *   variant?: "fill" | "text",
 *   color?: "primary" | "accent",
 *   className?: string,
 *   [key: string]: any
 * }} LinkProps
 *
 * @typedef {HTMLAnchorElement} LinkRef
 */


/**
 * Type forwardRef to get the correct type checking
 * @type {ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>>}
 */
const Button = forwardRef((props, ref) => {
    const {
        children,
        variant = "fill",
        color = "primary",
        className,
        ...rest
    } = props;

    const buttonClasses = ["button", variant, `${variant}-${color}`, className].join(" ");

    return (
        <button {...rest} ref={ref} className={buttonClasses}>
            {children}
        </button>
    );
});

/**
 * Type forwardRef to get the correct type checking
 * @type {ForwardRefExoticComponent<LinkProps & RefAttributes<LinkRef>>}
 */
const Link = forwardRef((props, ref) => {
    const {
        children,
        variant = "fill",
        color = "secondary",
        className,
        ...rest
    } = props;

    const linkClasses = ["link", variant, `${variant}-${color}`, className].join(" ");

    return (
        <a {...rest} ref={ref} className={linkClasses} >
            {children}
        </a>
    );
});

export { Button, Link };
