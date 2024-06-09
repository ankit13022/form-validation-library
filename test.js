const FormValidator = require('./index');

const form = {
    name: "John",
    email: "john.doe@example.com",
    password: "123456"
};

const validator = new FormValidator(form);

validator.required('name')
    .email('email')
    .minLength('password', 6, 'Password must be at least 6 characters long')
    .maxLength('name', 50);

if (validator.validate()) {
    console.log("Form is valid!");
} else {
    console.log("Form is invalid:", validator.getErrors());
}