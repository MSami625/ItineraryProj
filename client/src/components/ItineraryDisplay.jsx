// ItineraryDisplay.jsx
export default function ItineraryDisplay({ itinerary, summary }) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="w-full  space-y-8 mb-10 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Budget Summary</h2>
        <p className="text-gray-800"><strong>Total Cost:</strong> ₹{summary.totalCost}</p>
        <p className="text-gray-800"><strong>Your Budget:</strong> ₹{summary.budget}</p>
        <p className={`mt-2 font-medium ${summary.totalCost > summary.budget ? 'text-red-500' : 'text-green-600'}`}>
          {summary.totalCost > summary.budget ? 'Over Budget' : 'Within Budget'}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md gap-10  md:col-span-2 max-w-full space-y-8 mb-10">

      {itinerary.map((item, i) => (
        <div key={i} className="  bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold text-indigo-600 mb-3">
            {item.day} — {item.place}
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Best Time:</strong> {item.bestTime}</li>
            <li><strong>Crowd:</strong> {item.crowd}</li>
            <li><strong>Entry Fee:</strong> ₹{item.entryFee}</li>
            <li><strong>Cab Cost:</strong> ₹{item.estimatedCabCost}</li>
            <li><strong>Time at location:</strong> {item.timeAtLocation}</li>
          </ul>
        </div>
      ))}
    </div>
      </div>
      
  );
}
