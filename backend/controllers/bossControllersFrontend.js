const Boss = require('../models/Boss');

exports.getAllBossesFrontend = async (req, res) => {
    try {
        const bosses = await Boss.find({});
        console.log(bosses);
        
        return res.json({bosses});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}