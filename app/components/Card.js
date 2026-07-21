export default function Card({ name, price }) {
  return (
    <div className="bg-blue-600 m-4 p-4 rounded-2xl">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}
