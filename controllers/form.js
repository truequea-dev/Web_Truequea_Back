const formModels = require('../models/form');

class FormController {
    async saveForm(req, res) {
        const { name, email, phone, text } = req.body;
        const newForm = new formModels({ name, email, phone, message: text });
        await newForm.save();
        return res.status(200).json({
            message: 'Formulario enviado correctamente'
         });
    }
}

const formController = new FormController();
module.exports = formController;