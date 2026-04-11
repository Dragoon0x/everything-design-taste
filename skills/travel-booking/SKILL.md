---
name: travel-booking
description: Travel booking UX, search forms, itinerary building, date range selection, and booking confirmation flows.
triggers: ["travel booking", "flight search", "hotel booking", "itinerary"]
---

# Travel Booking Design

## Search
- From/To with autocomplete (cities, airports, landmarks)
- Date range picker with calendar view
- Passenger/room count with +/- controls
- One-way / Round-trip / Multi-city toggle
- "Flexible dates" option showing price calendar

## Results
- Sort: price, duration, departure time, airline/hotel rating
- Filters: stops, airlines, departure time, price range, amenities
- Price displayed prominently with total (not per-person unless clearly labeled)
- Compare: allow selecting 2-3 options for side-by-side comparison
- Map view for hotels

## Booking Flow
1. Select option → 2. Traveler details → 3. Add-ons/upgrades → 4. Payment → 5. Confirmation
- Show total price updating at each step
- Allow editing previous steps without losing data
- Timer for price hold (if applicable)
- Clear cancellation policy at each step

## Itinerary
- Timeline view with all bookings
- Daily breakdown
- Map showing all locations
- Shareable with co-travelers
- Offline access
- Add to calendar integration
