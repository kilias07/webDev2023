import './index.css';
import FormInput from "../../components/formInput/index.jsx";
import Heading from "../../components/heading/index.jsx";
import {Button} from "../../components/button/index.jsx";
import Text from "../../components/text/index.jsx";
import {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        service: "",
    });

    const [errors, setErrors] = useState({
        firstName: null,
        lastName: null,
        phoneNumber: null,
        service: null,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const validate = () => {
        const errors = {
            firstName: formData.firstName === "" ? "Name is required" : null,
            lastName: formData.lastName === "" ? "Last name is required" : null,
            phoneNumber: formData.phoneNumber === "" ? "Phone number is required" : null,
            service: formData.service === "" ? "Service is required" : null,
        };

        setErrors(errors);

        const hasErrors = Object.values(errors).some((error) => error !== null);
        return !hasErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            setFormData(
                {
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    service: "",
                });
            setErrors(
                {
                    firstName: null,
                    lastName: null,
                    phoneNumber: null,
                    service: null,
                });
            alert("Form submitted successfully!");
        }

    }

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <Heading level={2}>Contact</Heading>
                    <Text className="contact-text">Questions or concerns? Just fill out the form below and our support
                        team will get back to you within 24 hours
                    </Text>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="first-row">
                            <FormInput type={"text"}
                                       name={"firstName"}
                                       placeholder={"First Name"}
                                       value={formData.firstName}
                                       error={errors.firstName}
                                       onChange={handleChange}/>

                            <FormInput type={"text"}
                                       name={"lastName"}
                                       placeholder={"Last Name"}
                                       error={errors.lastName}
                                       value={formData.lastName}
                                       onChange={handleChange}/>

                        </div>

                        <FormInput type={"number"}
                                   name={"phoneNumber"}
                                   placeholder={"Phone Number"}
                                   style={"full"}
                                   value={formData.phoneNumber}
                                   error={errors.phoneNumber}
                                   onChange={handleChange}/>


                        <FormInput name={"service"}
                                   placeholder={"What Service are you interested in?"}
                                   style={"full"}
                                   value={formData.service}
                                   error={errors.service}
                                   onChange={handleChange}/>
                        <Button type="submit" variant="fill" color="primary">SUBMIT NOW</Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;
