import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { forms } from '../../../apis/cms'

import './ContactForm.scss'

const ContactForm = ({ content, form }) => {
    const nameLabel = content.settings.name
    const emailLabel = content.settings.email
    const subjectLabel = content.settings.subject
    const messageLabel = content.settings.message
    const buttonLabel = content.settings.button

    const renderName = () => {
        if(nameLabel){
            return (
                <div className="form-element">
                    <label htmlFor="form-name">{nameLabel}</label>
                    <Field
                        id="form-name"
                        name="name"
                        component="input"
                        type="text"
                        placeholder={nameLabel}
                    />
                </div>
            )
        }

        return null
    }

    const renderEmail = () => {
        if (emailLabel) {
            return (
                <div className="form-element">
                    <label htmlFor="form-email">{emailLabel}</label>
                    <Field
                        id="form-email"
                        name="email"
                        component="input"
                        type="email"
                        placeholder={emailLabel}
                    />
                </div>
            )
        }

        return null
    }

    const renderSubject = () => {
        if (subjectLabel) {
            return (
                <div className="form-element">
                    <label htmlFor="form-subject">{subjectLabel}</label>
                    <Field
                        id="form-subject"
                        name="subject"
                        component="input"
                        type="text"
                        placeholder={subjectLabel}
                    />
                </div>
            )
        }

        return null
    }

    const renderMessage = () => {
        if (messageLabel) {
            return (
                <div className="form-element">
                    <label htmlFor="form-message">{messageLabel}</label>
                    <Field
                        id="form-message"
                        name="message"
                        component="textarea"
                        placeholder={messageLabel}
                    />
                </div>
            )
        }

        return null
    }

    const renderButton = () => {
        return (
            <div className="form-element">
                <button type="submit">{buttonLabel}</button>
            </div>
        )
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    if(buttonLabel){
        return (
            <form onSubmit={handleSubmit}>
                {renderName()}
                {renderEmail()}
                {renderSubject()}
                {renderMessage()}
                {renderButton()}
            </form>
        )
    }

    return null
}

export default reduxForm({
    form: 'contactForm'
})(ContactForm)