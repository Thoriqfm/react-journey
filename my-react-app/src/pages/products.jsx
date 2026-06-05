import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu baru">
          Sepatu baru dengan desain yang modern dan nyaman untuk digunakan
          sehari-hari.
        </CardProduct.Body>
        <CardProduct.Footer price="$599.99" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu baru">
          Sepatu baru dengan desain yang modern dan nyaman untuk digunakan
          sehari-hari.
        </CardProduct.Body>
        <CardProduct.Footer price="$599.99" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
