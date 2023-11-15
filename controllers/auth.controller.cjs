const { findUser, createUser }  = require("../services/user.service.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerHandler = async (req, res) => {
    try {

        // Check if the response has already been sent.
        if (res.headersSent) {
            // The response has already been sent.
            return;
        }
        const { first_name, last_name, email, password } = req.body;
        // Checken ob Alle Eingaben vorhanden sind
        if(!(email && password && first_name && last_name))
        {
             res.status(400).send({
                message: "Bitte füllen Sie alle Felder aus!!!"
            });
        }

        // Checken ob Benutzer vorhanden ist
        const checkEmail = await findUser(email);
       

        if(checkEmail)
        {
             res
            .status(400)
            .send("Benutzer mit diesr Email-Adresse ist schon vorhanden!!!");

        }else
        {

       

        const verschlüsseltePasswort = await bcrypt.hash(password, 10);


        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: verschlüsseltePasswort
        }

        const createdUser = await createUser(newUser);

        const token = jwt.sign(
            {createdUser_id: createdUser._id, email},
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            }
        );

        createdUser.token = token;
        console.log(createdUser.token)


         

         res.status(201).json(createdUser);
        }

        
    }
    catch(err)
    {
        console.log(err);
         res.status(500).send({
            message: err.message
        });
    }

}

const loginHandler = async (req, res) => {

    try {

         
        const { email, password } = req.body;

        if(!(email && password)){
             res.status(400).send({
                message: "Bitte füllen Sie alle Felder aus !!!"
            })
        }

        const user = await findUser(email);
        const checkPassword = bcrypt.compare(password, user.password);

        if(user && checkPassword)
        {
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
           );
           
           const responseObject = {
            user: { ...user._doc }, // Copy user properties to avoid mutation
            token
        };

         // Log the new object (for debugging purposes)
            console.log('Response Object:', responseObject);
           res.setHeader('Content-Type', 'json/plain');
           res.status(200).json(responseObject);


        }
        // Check if the response has already been sent.
        if (res.headersSent) {
            // The response has already been sent.
            return;
        }

         res.status(400).send("keine Benutzer mit diesen Eingaben vorhanden!!! ");
        

    }
    catch(err)
        {
            console.log(err);
              res.status(500).send({
                message: err.message
            });
        }

}

module.exports = {
    registerHandler,
    loginHandler
  };

