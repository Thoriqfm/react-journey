import Button from "../components/elements/Button/Button";
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    description:
      "Sepatu baru dengan desain yang modern dan nyaman untuk digunakan sehari-hari.",
    price: "$599.99",
    image: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    name: "Sepatu lama",
    description:
      "Sepatu lama dengan desain yang klasik dan nyaman untuk digunakan sehari-hari.",
    price: "$499.99",
    image: "/images/shoes-1.jpg",
  },
  {
    id: 3,
    name: "Sepatu olahraga",
    description:
      "Sepatu olahraga dengan desain yang modern dan nyaman untuk digunakan sehari-hari.",
    price: "$699.99",
    image: "/images/shoes-1.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-red-500" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
