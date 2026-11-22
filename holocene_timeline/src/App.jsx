import { events } from "./data/events";
import { sortEventsByHoloceneYear } from "./utils/holocene";
import { Timeline } from "./components/Timeline";

export function App() {
  const sortedEvents = sortEventsByHoloceneYear(events);

  return (
    <main>
      <header>
        <h1>Holocene Wereldgeschiedenis</h1>
        <p>Een interactieve tijdlijn op basis van de Holocene Era (HE).</p>
      </header>

      <Timeline events={sortedEvents} />
    </main>
  );
}

export default App;