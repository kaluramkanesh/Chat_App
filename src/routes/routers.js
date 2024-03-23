const express = require("express")
const router = express.Router()


router.get("*", (req, res) => {
        console.log("API is testing ")
        return res.status(200).send({ status: true, message: "chat API is testing" })

})
module.exports = router