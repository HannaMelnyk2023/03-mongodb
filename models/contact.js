import Joi from "joi";

const { Schema, model } = require("mongoose");
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});
contactSchema.post("save", (error, data, next) => {
    if (error) {
        next(HttpError(400, error.message));
    } else {
        next();
    }
});
const Contact = model("Contact", contactSchema);



export const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
})

export const updateContactSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string()
})

module.exports = {
    Contact,
    Schemas: {
        createContactSchema,
        updateContactSchema,
    },
};
