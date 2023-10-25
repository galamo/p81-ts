import express, { NextFunction, Request, Response } from "express";
import axios from "axios";
import zod from "zod";

const router = express.Router();

router.get(
  "/error",
  function (req: Request, res: Response, next: NextFunction) {
    next(new Error("Go to the error handler"));
  }
);

router.get(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      res.sendJson({ data: result.data, message: "Ok" });
    } catch (error: any) {
      next(error.message);
    }
  }
);

const productSchema = zod.object({
  id: zod.number(),
  title: zod.string().max(30),
  images: zod.array(zod.string()),
  rating: zod.number().max(10),
  category: zod.enum(["dairy", "drinks", "food", "fruits"]),
});

const productsCart = zod.object({
  product: productSchema,
  cartId: zod.number(),
});

type Product = zod.infer<typeof productSchema>;
type ProductCart = zod.infer<typeof productsCart>;

router.post("/", function (req: Request, res: Response, next: NextFunction) {
  const body: Product = req.body;
  try {
    productSchema.parse(body);
    let msg = "";
    if (body.rating > 5) {
      msg = "great rating!!";
    } else {
      msg = "how can i improve this product?";
    }
    res.json({ message: "Product added", msg });
  } catch (error) {
    console.log(error);
    return next(new Error("Input validation"));
  }
});
// products/cart /POST
router.post(
  "/cart",
  function (req: Request, res: Response, next: NextFunction) {
    try {
      const body: ProductCart = req.body;
      productsCart.parse(body);
      let msg = "";
      if (body.product.rating > 5) {
        msg = "great rating!!";
      } else {
        msg = "how can i improve this product?";
      }
      res.json({ message: `Product added to Cart ${body.cartId} `, msg });
    } catch (error) {
      console.log(error);
      return next(new Error("Input validation"));
    }
  }
);
export default router;
