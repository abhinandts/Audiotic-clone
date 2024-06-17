const isLogin = async (req, res, next) => {
    try {
        console.log("isLogin")
        if (req.session.adminId) {
            next();
        } else {
            res.redirect('/admin/login')
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    isLogin
}