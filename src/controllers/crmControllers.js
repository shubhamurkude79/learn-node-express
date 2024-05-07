import mongoose from "mongoose";
import { contactSchema } from "../models/crmModel"; 

const Contact = mongoose.model('Contact', contactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}