module.exports = (req, res, next) => {
    if(req.method === "POST" && req.path === "/login"){
        if(req.body.username === "shijie" && req.body.password === "123"){
            return res.status(200).json({
                user:{
                    token: "19941124"
                }
            })
        } else {
            return res.status(400).json({
                message: "用户名密码错误"
            })
        }
    }
    next()
}