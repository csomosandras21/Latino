const User = require('../models/User.js');

exports.updateOneUserFrontend = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        const { kedvencek } = req.body;
        console.log(kedvencek);
        
        await User.findByIdAndUpdate({ _id: id }, { $set: { kedveltParfum: kedvencek } });
        
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres módosítás! Dejó!'});
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

