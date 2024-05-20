import { useTransition } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProducts } from "../services/product";
import { addToCart } from "../services/cart";

const Gears = () => {
  // const glovesProducts = [
  //   {id: 1, name: 'Motowolf Street 325', price: '$20', image: '/images/gloves1.png' },
  //   {id: 2, name: "REV'IT! Fly 2 Gloves", price: '$20', image: '/images/gloves2.png' },
  //   {id: 3, name: '100% Gloves', price: '$10', image: '/images/gloves3.png' },
  //   {id: 4, name: 'BSDDP Gloves', price: '$15', image: '/images/gloves4.jpg' },
  // ];

  // const jacketProducts = [
  //   {id: 5, name: 'Motowolf Jacket 505', price: '$70', image: '/images/jac1.png' },
  //   {id: 6, name: 'Kavach Zipper Hoodie', price: '$35', image: '/images/jac2.png' },
  //   {id: 7, name: 'Kavach Cool Mesh Jacket – 1568', price: '$115', image: '/images/jac3.png' },
  //   {id: 8, name: 'Axor Cruise 2 ', price: '$110', image: '/images/jac4.png' },
  // ];

  // const KneeguardProducts = [
  //   {id: 9, name: 'Fox Knee/Elbow Guard', price: '$9', image: '/images/knee1.png' },
  //   {id: 10, name: 'Motowolf Kneeguard', price: '$35', image: '/images/knee2.png' },
  //   {id: 11, name: 'Komine Kneeguard', price: '$35', image: '/images/knee3.png' },
  // ];
  
  const { data, isLoading } = useFetch(() =>
    getProducts({ category: "gears" })
  );


  const [isAdding, startTransition] = useTransition();

  const add = (id) => {
    startTransition(async () => {
      try {
        await addToCart({ productId: id, quantity: 1 });
        alert("Product added to cart");
      } catch (error) {
        alert(error.message);
      }
    });
  };



  if(isLoading) return <p>LOading...</p>


  return (
    <div className="container py-5">
      <h1 className="mb-4">Riding Gears</h1>

      <section className="mb-5">
        {/* <h2 className="mb-3">Gloves</h2> */}
        <div className="row">
        {data.length === 0 && <p>No Product found</p>}
          {data.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img src={product.image} className="card-img-top helmet-image" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button
                    onClick={() => {
                      add(product.id);
                    }}
                    disabled={isAdding}
                    className="btn btn-primary btn-sm"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gears;
