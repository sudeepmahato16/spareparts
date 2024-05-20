import {  useTransition } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProducts } from "../services/product";
import { addToCart } from "../services/cart";

const Tyres = () => {
  // const tyres = [
  //   {
  //     id: 1,
  //     name: "Dunlop GPR 300 150/60-17",
  //     price: "$95",
  //     image: "/images/tyre1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Dunlop GPR 300 110/70-17",
  //     price: "$65",
  //     image: "/images/tyre2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Pirelli Diablo Rosso III 110/70-17",
  //     price: "$65",
  //     image: "/images/tyre3.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Pirelli Diablo Rosso III 150/60-17",
  //     price: "$80",
  //     image: "/images/tyre4.png",
  //   },
  //   {
  //     id: 5,
  //     name: "IRC IZ-S 110/70-17",
  //     price: "$45",
  //     image: "/images/tyre5.png",
  //   },
  //   {
  //     id: 6,
  //     name: "IRC IZ-S 150/60-17",
  //     price: "$70",
  //     image: "/images/tyre6.png",
  //   },
  //   {
  //     id: 7,
  //     name: "Metzeler M5 150/60-17",
  //     price: "$90",
  //     image: "/images/tyre7.png",
  //   },
  // ];
  
  const {data, isLoading} = useFetch(() => getProducts({category: "tyres"}))

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

  if(isLoading) return <p>Loading ...</p>

  return (
    <div className="container py-5">
      <h1 className="mb-4">Tyres</h1>

      <section className="mb-5">
        <div className="row">
          {data.length === 0 && <p>No product found</p>}
          {data.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0">
                <img
                  src={product.image}
                  className="card-img-top helmet-image"
                  alt={product.name}
                />
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
};

export default Tyres;
