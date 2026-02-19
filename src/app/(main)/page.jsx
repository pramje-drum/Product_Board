export default function Home() {
}


// async function getProduct(id) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return res.json();
// }

// export default async function ProductPage({ params }) {
//   const product = await getProduct(params.id);

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <p>₹ {product.price}</p>
//     </div>
//   );
// }
