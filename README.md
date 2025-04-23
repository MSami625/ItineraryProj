# Travel Itinerary Generator

A full-stack application that generates day-by-day travel itineraries based on date range, budget, travel preferences, and group size. The frontend is built with React, Tailwind CSS, and React Hook Form, while the backend uses FastAPI and Python.

---

## 🚀 Tech Stack

- **Frontend**: VITE+React, Tailwind CSS, react-hot-toast, react-hook-form, axios
- **Backend**: FastAPI, Python 3.8+ (uvicorn)
- **Data**: Local JSON/`places.py`

---

## 📁 Project Structure

```
project-root/
├── server/
│   ├── data/
│   │   └── places.py          # Destination definitions
│   ├── server.py               # FastAPI application entry point
│   └── requirements.txt      # Python dependencies

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItineraryForm.jsx
│   │   │   └── ItineraryDisplay.jsx
│   │   └── App.jsx
│   ├── tailwind.config.js
│   └── package.json          # Node.js dependencies & scripts


```

---

## 🛠 Prerequisites

- **Node.js** ≥ 14.x
- **npm** (comes with Node.js)
- **Python** ≥ 3.8
- **pip**

---

## ⚙️ Backend Setup

1. **Navigate** into the backend folder:
   ```bash
   cd backend
   ```

2. **Create** and **activate** a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate      # macOS/Linux
   venv\Scripts\activate       # Windows
   ```

3. **Install** Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run** the FastAPI server with auto-reload:
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

Endpoints will be available at `http://localhost:8000/api/itinerary`.

---

## ⚙️ Frontend Setup

1. **Navigate** into the frontend folder:
   ```bash
   cd client
   ```

2. **Install** Node.js dependencies:
   ```bash
   npm install
   ```

3. **Start** the development server:
   ```bash
   npm run dev
   ```

The React app will launch at `http://localhost:5173` and proxy API requests to the backend.

---

## 🌐 Configuration

- **API Base URL**: If your backend runs on a different host or port, update the endpoint in `ItineraryForm.jsx`:
  ```js
  axios.post('http://YOUR_HOST:YOUR_PORT/api/itinerary', data)
  ```

- **CORS**: The backend is already configured to allow all origins. Adjust `allow_origins` in `main.py` as needed.

---

## 🏃‍♂️ Usage

1. Open your browser to **http://localhost:5173**.
2. Fill in your travel details:
   - Start & End Dates
   - Budget (INR)
   - Trip Focus (Nature, Culture, Local Gems, Family)
   - Pace & Transport
   - Group Size
3. Click **Generate Itinerary** to see a day-by-day plan with cost summary.

---


---



