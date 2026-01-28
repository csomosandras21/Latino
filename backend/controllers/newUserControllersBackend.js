const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getNewUserBackend = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-user.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.postNewUserBackend = async (req, res) => {
    try {
        const { nev, email, jelszo } = req.body;
        console.log({ nev, email, jelszo });

        // Ellenőrzés: van-e már ilyen email az adatbázisban
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.statusCode = 403;
            return res.json({ msg: 'Ez az e-mail cím már regisztrálva van!' });
        }

        // Ha nincs, akkor létrehozás
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(jelszo, salt);

        const newUser = new User({
            nev,
            email,
            jelszo: hashedPassword,
        });

        await newUser.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });

    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt! ' + error.message });
    }
};
