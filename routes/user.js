const express = require("express");
const router = express.Router({mergeParams : true}); 
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const { signup, renderSignupForm,renderLoginForm, login, logout} = require("../controllers/users");

router
 .route("/signup")
 .get(renderSignupForm)
 .post(wrapAsync(signup));

router
 .route("/login")
 .get(renderLoginForm)
 .post(
    saveRedirectUrl,
    passport.authenticate("local",{ 
    failureRedirect : "/login",
    failureFlash : true,
    }),
    wrapAsync(login) 
);

router.get("/logout",logout)

module.exports = router;