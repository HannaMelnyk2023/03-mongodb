import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";



export const getAllContacts = async (req, res, next) => {
    try {
        const result = await contactsService.listContacts();
        res.json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};


export const getOneContact = async (req, res, next) => {

    try {
        const { id } = req.params;
        const result = await contactsService.getContactById(id);
        if (!result) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};

export const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contactsService.removeContact(id);
        if (!result) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};

export const createContact = async (req, res, next) => {
    try {
        const result = await contactsService.addContact(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};

export const updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (Object.keys(body).length === 0) {
            return next(HttpError(400, "Body must have at least one field"));
        }
        const result = await contactsService.updateContact(id, body);
        if (!result) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};

export const updateStatusContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (Object.keys(body).length === 0) {
            return next(HttpError(400, "Body must have at least one field"));
        }
        const result = await contactsService.updateStatusContact(id, body);
        if (!result) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json(result);
    } catch (error) {
        next(HttpError(500, error.message));
    }
};