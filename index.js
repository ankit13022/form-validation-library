//this form validator is made by ankit
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
    }

    required(field, message = "This field is required") {
        const value = this.form[field];
        if (!value || value.trim() === "") {
            this.errors[field] = message;
        }
        return this;
    }

    minLength(field, length, message) {
        const value = this.form[field];
        if (value.length < length) {
            this.errors[field] = message || `This field must be at least ${length} characters long`;
        }
        return this;
    }

    maxLength(field, length, message) {
        const value = this.form[field];
        if (value.length > length) {
            this.errors[field] = message || `This field must be no more than ${length} characters long`;
        }
        return this;
    }

    email(field, message = "Invalid email address") {
        const value = this.form[field];
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            this.errors[field] = message;
        }
        return this;
    }

    pattern(field, regex, message) {
        const value = this.form[field];
        if (!regex.test(value)) {
            this.errors[field] = message;
        }
        return this;
    }

    validate() {
        return Object.keys(this.errors).length === 0;
    }

    getErrors() {
        return this.errors;
    }
}

module.exports = FormValidator;