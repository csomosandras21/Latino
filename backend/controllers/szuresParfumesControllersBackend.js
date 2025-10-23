const Parfume = require('../models/Parfume');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getSzuresAllParfumes = async (req, res) => {
    try {
        const parfumes = await Parfume.find({});
        res.statusCode = 200;
        return res.render('parfumes.ejs', { parfumes });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.getSzuresParfumes = async (req, res) => {
    try {
        const { id } = req.params;
        const parfumesLekert = await Parfume.find({});
        const adat = JSON.parse(id);
        const zsanerKedvezmeny = adat.szuresek;
        let parfumes = [];

        parfumesLekert.forEach((elem) => {
            let vanE = false;
            zsanerKedvezmeny[0].forEach((item) => {
                if (elem.marka === item) {
                    zsanerKedvezmeny[1].forEach((element) => {
                        if (elem.kedvezmeny === element) vanE = true;
                    });
                }
            });

            if (vanE) parfumes.push(elem);
        });

        res.statusCode = 200;
        return res.render('parfumes.ejs', {
            parfumes,
            markak,
            kedvezmenyek,
        });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};
