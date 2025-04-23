import { useState } from 'react';
import ItineraryForm from './components/ItineraryForm';
import ItineraryDisplay from './components/ItineraryDisplay';

function App() {
  const [itinerary, setItinerary] = useState([]);

  return (
    <div className="w-screen mx-auto">
      <h1 className="text-2xl text-center font-bold p-4">Mini Travel Itinerary Generator</h1>
      <ItineraryForm onItinerary={setItinerary} />
      {itinerary.length > 0 && <ItineraryDisplay itinerary={itinerary} />}
    </div>
  );
}

export default App;
