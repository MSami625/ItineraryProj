from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, conint
from typing import List, Literal
import random
from data.places import places

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class ItineraryRequest(BaseModel):
    startDate: str
    endDate: str
    budget: conint(ge=0)
    focus: Literal['nature','culture','local','family']
    pace: Literal['leisure','moderate','packed'] = 'moderate'
    transport: Literal['cab','public'] = 'cab'
    groupSize: conint(ge=1) = 1

@app.post("/api/itinerary")
def generate_itinerary(req: ItineraryRequest):

    from datetime import datetime
    sd = datetime.fromisoformat(req.startDate)
    ed = datetime.fromisoformat(req.endDate)
    total_days = max((ed - sd).days + 1, 1)

   
    pool = [p for p in places if (
        (req.focus == 'local' and p['localGem']) or
        (req.focus == 'culture' and not p['localGem']) or
        req.focus in ['nature','family']
    )]
    random.shuffle(pool)

    itinerary = []
    for i in range(min(total_days, len(pool))):
        p = pool[i]
        itinerary.append({
            'day': f"Day {i+1}",
            'place': p['name'],
            'bestTime': p['bestTime'],
            'crowd': p['crowd'],
            'entryFee': p['entryFee'],
            'estimatedCabCost': 300 + i*150,
            'timeAtLocation': '4 hrs'
        })

    return { 'itinerary': itinerary }