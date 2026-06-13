function DestinationCard({destination}){
    return(
        <div className="card">
           <img
  src={destination.image}
  alt={destination.name}
  loading="lazy"
  decoding="async"
/>
             <h3>{destination.name}</h3>
                <p>{destination.country}</p>
        </div>
    )
}export default DestinationCard;
