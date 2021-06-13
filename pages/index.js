import { getAllEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const events = getAllEvents();

  return (
    <section>
      <EventList items={events} />
    </section>
  );
}

export default HomePage;
