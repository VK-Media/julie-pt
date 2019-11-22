import React from "react";
import { Field, reduxForm } from "redux-form";

import { forms } from "../../../apis/cms";

import "./ContactForm.scss";

const ContactForm = ({ content, handleSubmit, reset }) => {
	const nameLabel = content.settings.name;
	const emailLabel = content.settings.email;
	const subjectLabel = content.settings.subject;
	const messageLabel = content.settings.message;
	const buttonLabel = content.settings.button;

	const InputField = ({ input, type, placeholder, className, meta }) => {
		const finalClass =
			meta.touched && meta.error ? className + " error" : className;

		const renderInput = () => {
			switch (type) {
				case "textarea":
					return (
						<textarea
							{...input}
							placeholder={placeholder}
							type={type}
							className={finalClass}
						/>
					);
				default:
					return (
						<input
							{...input}
							placeholder={placeholder}
							type={type}
							className={finalClass}
						/>
					);
			}
		};

		return (
			<div className="form-element">
				<label htmlFor={input.id}>{placeholder}</label>
				{renderInput()}
				{meta.touched && meta.error && <span>{meta.error}</span>}
			</div>
		);
	};

	const renderName = () => {
		if (nameLabel) {
			return (
				<Field
					id="form-name"
					name="name"
					component={InputField}
					type="text"
					placeholder={nameLabel}
				/>
			);
		}

		return null;
	};

	const renderEmail = () => {
		if (emailLabel) {
			return (
				<Field
					id="form-email"
					name="email"
					component={InputField}
					type="email"
					placeholder={emailLabel}
				/>
			);
		}

		return null;
	};

	const renderSubject = () => {
		if (subjectLabel) {
			return (
				<Field
					id="form-subject"
					name="subject"
					component={InputField}
					type="text"
					placeholder={subjectLabel}
				/>
			);
		}

		return null;
	};

	const renderMessage = () => {
		if (messageLabel) {
			return (
				<Field
					id="form-message"
					name="message"
					component={InputField}
					type="textarea"
					placeholder={messageLabel}
				/>
			);
		}

		return null;
	};

	const renderButton = () => {
		return (
			<div className="form-element">
				<button type="submit">{buttonLabel}</button>
			</div>
		);
	};

	const onSubmit = values => {
		forms
			.post("contactForm", JSON.stringify({ form: values }))
			.then(entry => {
				reset();
			})
			.catch(err => {
				console.log(err);
			});
	};

	if (buttonLabel) {
		return (
			<form className="component" onSubmit={handleSubmit(onSubmit)}>
				{renderName()}
				{renderEmail()}
				{renderSubject()}
				{renderMessage()}
				{renderButton()}
			</form>
		);
	}

	return null;
};

const validate = values => {
	const errors = {};

	if (!values.name) {
		errors.name = "Påkrævet";
	}

	if (!values.email) {
		errors.email = "Påkrævet";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Ugyldig email";
	}

	if (!values.message) {
		errors.message = "Påkrævet";
	}

	return errors;
};

export default reduxForm({
	form: "contactForm",
	validate
})(ContactForm);
