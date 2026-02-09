# Lab 03 — MongoDB & Mongoose (Restaurant API)

## Requirements implemented
- NodeJS + Express + MongoDB Atlas + Mongoose
- REST APIs:
  - `GET /restaurants` (supports `?sortBy=ASC|DESC` on `restaurant_id`)
  - `GET /restaurants/cuisine/:type`
  - `GET /restaurants/:cuisine` (cuisine match + borough != Brooklyn, sorted by name ASC)

## Setup
1. Install dependencies:

```bash
npm install
```

2. Create `.env` file based on `.env.example`:

```env
PORT=3000
MONGO_URI=YOUR_ATLAS_CONNECTION_STRING
```

3. Run the server:

```bash
npm run dev
```

## Test endpoints (Postman)
- `http://localhost:3000/restaurants`
- `http://localhost:3000/restaurants?sortBy=ASC`
- `http://localhost:3000/restaurants?sortBy=DESC`
- `http://localhost:3000/restaurants/cuisine/Japanese`
- `http://localhost:3000/restaurants/cuisine/Bakery`
- `http://localhost:3000/restaurants/cuisine/Italian`
- `http://localhost:3000/restaurants/Delicatessen`

 This project expects the Atlas collection name to be `restaurants`.
