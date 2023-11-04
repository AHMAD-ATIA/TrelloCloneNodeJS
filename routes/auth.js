
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const bcrypt = require("bcryptjs");
const verifyToken = require("../middleware/auth.middleware")

