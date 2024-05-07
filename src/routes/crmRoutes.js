import { addNewContact, getContactWithID, getContacts, updateContact } from "../controllers/crmControllers";

const routes = (app) => {
    app.route('/contact')

    // get all contacts
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    // add new contact
    .post(addNewContact);

    app.route('/contact/:contactId')

    // get specific contact
    .get(getContactWithID)

    // update a contact
    .put(updateContact)

    .delete((req, res) => {
        res.send('DELETE request successful!')
    })
}

export default routes;