import Card from "./components/Card";
import Title from "./components/Title";

export default function Home() {
  return (
    <main>
      <Title text="Bosh sahifa" />
      <Card name="Telefon" price="1200$" />
      <Card name="Airpods" price="100$" />
    </main>
  );
}
