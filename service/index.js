const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const app = express();

app.use(express.static('public'));