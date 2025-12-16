import HeroCard from "../shared/HeroCard";

function Home() {
    console.log("Home page");
  return (
    <div>
      <HeroCard
        title="Welcome to Tevar Games"
        subtitle="This page replaces the old /home EJS view."
        ctas={[
          {label: "Play games", href: "/games", kind: "primary"},
          {label: "Wallet", href: "/wallet", kind: "ghost"}
        ]}
      />
      <div className="panel">
        <h2>Next steps</h2>
        <ul>
          <li>Port home banners and sections from the EJS template.</li>
          <li>Fetch data from Express APIs (add calls here).</li>
          <li>Reuse assets by moving them into client/public.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

