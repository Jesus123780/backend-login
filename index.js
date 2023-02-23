// Add Express
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());
// Create GET request
app.get("/", (req, res) => {
    // console.log(req)
    const username = req.body.username;
    const password = req.body.password;
    if (!password) return res.status(200).json({
        success: false,
        message: 'Error en la contraseña'
    })
    if (password) {
        const secretKey = "mi_clave_secreta";
        const token = jwt.sign({ username: username }, secretKey);
        console.log(token)
        res.send(`Hola  ${token}`);
        return token
    }
    res.send(`Hola papu ${username || ''}`);
});

app.post("/", (req, res) => {
        // console.log(req)
        const username = req.body.username;
        const password = req.body.password;
        if (!password) return res.status(500).json({
            success: false,
            message: 'Error en la contraseña'
        })
        if (password) {
            const secretKey = "mi_clave_secreta";
            const token = jwt.sign({ username: username }, secretKey);
            console.log(token)
            return res.status(200).json({
                success: true,
                message: 'success',
                token
            })
        }
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;