import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem({ title, image, desc, address }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{desc}</p>
        </div>
        <div className={classes.actions}>
          <button>Favorite it!</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
