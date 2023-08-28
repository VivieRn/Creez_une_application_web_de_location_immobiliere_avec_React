import Rating from "./Rating";

function HostAndRating({ host, rating }) {
  return (
    <div className="boxDetails2">
      <div className="host">
        <h2>{host.name}</h2>
        <img src={host.picture} alt={host.name} />
      </div>
      <Rating value={rating} />
    </div>
  );
}
export default HostAndRating;
