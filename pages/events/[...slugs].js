import {useRouter} from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/ui/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import {getFilteredEvents} from "../../dummy-data";

function FilteredEventPage() {

    const router = useRouter();
    const params = router.query.slugs;

    if (!params) {
        return <>
            <p className={"center"}>Loading...</p>
        </>;
    }

    const year = +params[0];
    const month = +params[1];

    if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021
        || month < 1 || month > 12) {
        return (
            <ErrorAlert>
                <p>Incorrect Filter! Please correct and try Again</p>
            </ErrorAlert>
        );
    }

    const dataFiltered = getFilteredEvents({year: year, month: month });

    if (!dataFiltered || dataFiltered.length === 0) {
        return (
            <ErrorAlert>
                <p>No events available on given date</p>
            </ErrorAlert>
        );
    }
    const date = new Date(year, month-1);

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={dataFiltered}/>
        </>
    );
}

export default FilteredEventPage;
