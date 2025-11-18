const User = require('../models/User.js');

exports.getAllUsersBackend = async (req, res) => {
    try {
        const users = await User.find();
        res.statusCode = 200;
        return res.render('users.ejs', { users });
    } catch (error) {
        return res.render('404.ejs');
    }
};

exports.getOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id });
        res.statusCode = 200;
        return res.render('user.ejs', { user });
    } catch (error) {
        return res.render('404.ejs');
    }
};

exports.postUserBackend = async (req, res) => {
    try {
        const { nev, statusz } = req.body;
        const newUserBackend = new User({ nev, statusz });
        await newUserBackend.save();
        res.statusCode = 201;
        return res.json({ msg: 'Létre jött az új felhasználó!' });
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Nem jött létre az új felhasználó!' });
    }
};

exports.updateOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const { nev, email, admin } = req.body;
        console.log(id, nev, email, admin);
        
        await User.findByIdAndUpdate({ _id: id }, { nev, email, admin });
        
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres módosítás! Dejó!'});
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.deleteOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete({ _id: id });
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};