function FlatHeader({ title, location, tags }) {
  return (
    <div className="boxDetails">
      <h1>{title}</h1>
      <p>{location}</p>
      <ul className="tagsList">
        {tags.map((tag, index) => (
          <li key={index} className="tags">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlatHeader;
