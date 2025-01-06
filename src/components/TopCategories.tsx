
import Image from "next/image";

const TopCategories = () => {
  const items = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 20.png",
      button: true,
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 1168.png",
      button: false,
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 1171.png",
      button: false,
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 20.png",
      button: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-8">
        Top Categories
      </h2>

      {/* Category Items */}
      <div className="flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center"
          >
            {/* Image with rounded design */}
            <div
              className={`relative flex items-center justify-center p-4 rounded-full hover:scale-110  transition-transform duration-300 cursor-pointer ${
                item.button ? "ring-4 ring-purple-500" : "bg-gray-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={160}
                className="object-contain"
              />
              {/* Button for the first item */}
              {item.button && (
                <button className="absolute bottom-4 bg-green-500 text-white px-4 py-2  text-sm">
                  View Shop
                </button>
              )}
            </div>

            {/* Item Name and Price */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {item.name}
            </h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
