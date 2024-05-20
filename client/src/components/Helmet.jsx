// Helmet.jsx
import {  useTransition } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProducts } from "../services/product";
import { addToCart } from "../services/cart";
const Helmet = () => {

  
  // const halfHelmetProducts = [
  //   {
  //     id: 1,
  //     name: "Vega Lark Victor",
  //     price: "$20",
  //     image: "/images/halfhelmet3.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Studds Jet D5",
  //     price: "$25",
  //     image: "/images/halfhelmet2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Studds Urban Super D1",
  //     price: "$40",
  //     image: "/images/halfhelmet1.png",
  //   },
  //   {
  //     id: 4,
  //     name: "LS2 Spitfire Solid",
  //     price: "$60",
  //     image: "/images/halfhelmet4.png",
  //   },
  //   {
  //     id: 5,
  //     name: "VAB Jet Ace",
  //     price: "$15",
  //     image: "/images/halfhelmet5.png",
  //   },
  // ];

  // const fullHelmetProducts = [
  //   {
  //     id: 6,
  //     name: "MT Hummer AXN",
  //     price: "$100",
  //     image: "/images/fullhelmet3.png",
  //   },
  //   {
  //     id: 7,
  //     name: "Bilmola Rapid RS Duck Off",
  //     price: "$90",
  //     image: "/images/fullhelmet1.png",
  //   },
  //   {
  //     id: 8,
  //     name: "LS2 Flash Vibes",
  //     price: "$70",
  //     image: "/images/fullhelmet2.png",
  //   },
  //   {
  //     id: 9,
  //     name: "Axxis Segment Solid",
  //     price: "$50",
  //     image: "/images/fullhelmet4.png",
  //   },
  //   {
  //     id: 10,
  //     name: "Royal M141 ",
  //     price: "$80",
  //     image: "/images/fullhelmet5.png",
  //   },
  // ];

  const { data, isLoading } = useFetch(() =>
    getProducts({ category: "helmet" })
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Helmets</h1>

     
      <section className="mb-5">
        
        <div className="row">

          {data.length === 0 && <p>No Product found</p>}
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

export default Helmet;
