import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import ItineraryDisplay from './ItineraryDisplay';

export default function ItineraryForm() {
  const [itinerary, setItinerary] = useState([]);
  const [summary, setSummary] = useState({ totalCost: 0, budget: 0 });
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:8000/api/itinerary', data);
      const items = res.data.itinerary;
      setItinerary(items);

      const totalEntry = items.reduce((sum, it) => sum + it.entryFee, 0);
      const totalCab   = items.reduce((sum, it) => sum + it.estimatedCabCost, 0);
      setSummary({ totalCost: totalEntry + totalCab, budget: parseInt(data.budget, 10) });

      toast.success('Itinerary generated successfully!');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate itinerary.');
    }
  };

  return (
    <div className="min-h-screen w-screen  flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <Toaster position="top-right" />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">Plan Your Trip</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input type="date" {...register('startDate', { required: true })}
                   className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
            {errors.startDate && <p className="text-red-500 text-sm">Required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input type="date" {...register('endDate', { required: true })}
                   className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
            {errors.endDate && <p className="text-red-500 text-sm">Required</p>}
          </div>

      
          <div>
            <label className="block text-sm font-medium">Budget (INR)</label>
            <input type="number" {...register('budget', { required: true })}
                   className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
            {errors.budget && <p className="text-red-500 text-sm">Required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Trip Focus</label>
            <select {...register('focus', { required: true })}
                    className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400">
              <option value="nature">Nature & Outdoors</option>
              <option value="culture">Cultural & Heritage</option>
              <option value="local">Local Gems</option>
              <option value="family">Family-Friendly</option>
            </select>
          </div>

   
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Pace</label>
              <select {...register('pace')} className="mt-1 w-full border rounded-md px-3 py-2">
                <option value="leisure">Leisurely</option>
                <option value="moderate">Moderate</option>
                <option value="packed">Packed</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Transport</label>
              <select {...register('transport')} className="mt-1 w-full border rounded-md px-3 py-2">
                <option value="cab">Private Cab</option>
                <option value="public">Public Transport</option>
              </select>
            </div>
          </div>

 
          <div>
            <label className="block text-sm font-medium">Group Size</label>
            <input type="number" defaultValue={1} {...register('groupSize')}
                   className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400" />
          </div>

          <button type="submit"
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
            Generate Itinerary
          </button>
        </form>
      </div>

      <ItineraryDisplay itinerary={itinerary} summary={summary} />
    </div>
  );
}