const express = require('express');
const { generateToken, verifyToken } = require('../../utils/jwt.js');
const { hashPassword, comparePassword } = require('../../utils/hash.js');
const generateOTP = require('../../controllers/createOTP.controllers.js');
const pool = require('../../connections/DB.connect.js');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // const login_token = req.cookies.login_token;
        const login_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImRocnV2IiwiaWF0IjoxNzUzOTU1MTQwfQ.4oeArPwVU_cs5EAOsiYHDh7wq7YDnKwNB5H6Pvhh7T0";

        const data = verifyToken(login_token);
        
        if (!data) {
            return res.status(404).send('You are not logged in');
        }

        const DBres = await pool.query('SELECT * FROM "users" WHERE id = $1', [data.id]);

        if (email !== DBres.rows[0].email) {
            return res.status(400).send('Wrong email');
        }

        const isPasswordCorrect = await comparePassword(password, DBres.rows[0].password_hash);
        if (!isPasswordCorrect) {
            return res.status(400).send('Wrong password');
        }

        await pool.query('DELETE FROM "users" WHERE id = $1', [data.id]);

        res
            .status(200)
            .clearCookie('login_token', { path: '/' }) // add path if needed
            .send('Delete account successful');

    } catch (error) {
        console.error('Error in /delete-account:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;