function MeetupItem({title, image, desc, address}) {
  return <li>
    <div>
        <img src={image} alt={title} />
    </div>
    <div>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{desc}</p>
    </div>
    <div>
        <button>Favorite it!</button>
    </div>
  </li>
}

export default MeetupItem;