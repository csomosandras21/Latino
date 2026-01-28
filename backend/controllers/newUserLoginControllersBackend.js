// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.postNewUserLoginBackend = async (req, res) => {
    try {
        const { email, password } = req.body; // frontend a "password"-ot küldi

        if (!email || !password) {
            return res.status(400).json({ success: false, msg: 'Kérlek, add meg az emailt és jelszót!' });
        }

        console.log({ email, password });

        // Ellenőrzés: van-e ilyen email az adatbázisban
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ success: false, msg: 'Nincs ilyen email!' });
        }

        // Jelszó ellenőrzése
        const isMatch = await bcrypt.compare(password, existingUser.jelszo);
        if (!isMatch) {
            return res.status(403).json({ success: false, msg: 'Helytelen jelszó!' });
        }

        // Minden ok → sikeres belépés
        return res.status(200).json({ success: true, msg: 'Sikeres belépés!',  existingUser});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: 'Valami hiba történt! ' + error.message });
    }
};
