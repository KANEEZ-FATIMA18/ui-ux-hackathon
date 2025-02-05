import Image from "next/image";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Mens Fashion Wear",
      price: "$43.00",
      rating: "★★★★☆",
      image: "/Rectangle 128.png",
    },
    {
      id: 2,
      title: "Women's Fashion",
      price: "$67.00",
      rating: "★★★★★",
      image: "/Group 233.png",
    },
    {
      id: 3,
      title: "Wolx Dummy Fashion",
      price: "$67.00",
      rating: "★★★★☆",
      image: "/Rectangle 130.png",
    },
    {
      id: 4,
      title: "Top Wall Digital Clock",
      price: "$51.00",
      rating: "★★★☆☆",
      image: "/Rectangle 131.png",
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-14 lg:text-left text-center">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer border rounded-lg shadow-md"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={340}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            {/* Product Details */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <span className="text-yellow-500 text-xs md:text-sm ml-2">
                  {product.rating}
                </span>
              </div>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
