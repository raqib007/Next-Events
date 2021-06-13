import Event from "./Event";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <Event
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
