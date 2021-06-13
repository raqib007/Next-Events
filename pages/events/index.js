import {useRouter} from "next/router";
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(){

    const router = useRouter();
    const events = getAllEvents();

    function handleSearchAllEvent(year,month){
        router.push(`/events/${year}/${month}`);
    }

    return(
       <>
           <EventsSearch onSearchAllEvent={handleSearchAllEvent}/>
           <EventList items={events}/>
       </>
    );
}

export default AllEventsPage;
