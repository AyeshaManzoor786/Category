const Logout = async (req, res) => {
  try {
    console.log(req.user);
    // req.user.tokens = req.user.tokens.filter((currentElement) => {
    //   return currentElement.token != req.token;
    // });
    res.clearCookie("jwt");
    console.log("logout successfully!");
    await req.user.save();
    res.render("login");
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error!!",
    });
  }
};
module.exports = { Logout };
