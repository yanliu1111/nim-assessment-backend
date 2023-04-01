const { Router } = require("express");
const menuController = require("../controllers/menuController.js");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.post("/", menuController.create);
menuRouter.get("/search", menuController.search);
menuRouter.get("/:id", menuController.getOne); // :id allows on the bottom ->GET
menuRouter.put("/:id", menuController.update);
menuRouter.delete("/:id", menuController.remove);

module.exports = menuRouter;
