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
    <div className="container mx-auto px-16 py-32">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[270px] h-[340px]  hover:shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={340}
              className="w-[270px] h-[340px] object-cover rounded-t-lg"
            />
             <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <span className="text-yellow-500 ml-2">{product.rating}</span>
              </div>
              <p className="text-gray-600 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
