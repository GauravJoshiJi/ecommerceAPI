const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  //CREATE  [POST]
  .post("/", productController.createProduct)
  //READ   (Getting all data) [GET]
  .get("/", productController.getAllProduct)
  //READ  (Getting particular data)  [GET]
  .get("/:id", productController.getProduct)
  //UPDATE  (Updating some information) [PUT]
  .put("/:id", productController.replaceProduct)
  //UPDATE  (Updating all information)  [PATCH]
  .patch("/:id", productController.updateProduct)
  //DELETE   (Deleting data) [DELETE]
  .delete("/:id", productController.deleteProduct);

exports.router = router;
