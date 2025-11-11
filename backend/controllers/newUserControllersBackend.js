const User = require('../models/User');

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
        const {  nev, email, jelszo } = req.body;
        console.log({ nev, email, jelszo });

        const newUser = new User({
            nev,
            email,
            jelszo
        });
        console.log(newUser);
        
        // await newUser.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' + error });
    }
};
