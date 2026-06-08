import { useState } from "react";
import destinations from "../context/destinations";
import DestinationCard from "../components/DestinationCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <nav className="hero-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="hero-content">
          <h1>Explore The World</h1>
          <p>Find your next adventure.</p>
        </div>
      </section>

      <section>
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="cards">
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </section>
       <Footer />
    </>
  );
}

export default Home;