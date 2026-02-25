import React from "react";
import { products } from "./data";
import { Card, CardFooter, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";

const currencyFormatter = (value, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);

const Products = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 dark:bg-gray-900 dark:text-white min-h-screen" id="product">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 text-center sm:text-left">
        Products
      </h1>

      <div
        className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4"
      >
        {products.map((product) => (
          <Card
            key={product._id}
            className="group hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-[4/3] object-cover 
                           group-hover:scale-110 transition duration-300"
              />

              {!product.isStocked && (
                <div
                  className="absolute inset-0 bg-black/60 
                                flex items-center justify-center 
                                text-white font-bold text-lg"
                >
                  Out of stock
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <CardTitle className="mb-2 text-base sm:text-lg">
                {product.title}
              </CardTitle>

              {/* Rating */}
              <div className="flex items-center mb-2 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-xs text-gray-500">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              <CardDescription className="mb-3 text-sm sm:text-base">
                {product.description}
              </CardDescription>

              {product.category && (
                <span className="inline-block text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full capitalize">
                  {product.category}
                </span>
              )}
            </div>

            {/* Footer */}
            <CardFooter>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
                <span className="text-lg font-semibold">
                  {currencyFormatter(product.price, product.currency)}
                </span>

                {product.isStocked ? (
                  <Button
                    as="a"
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-sm text-center"
                  >
                    Buy on Amazon
                  </Button>
                ) : (
                  <Button
                    className="w-full sm:w-auto text-sm text-center"
                    disabled
                  >
                    N/A
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
