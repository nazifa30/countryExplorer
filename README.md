Countries Explorer
Simple Vite + React app that loads countries from the REST Countries API, supports search, region filter, loading/error handling, and shows country cards.

How to run it

Clone the repo:
git clone <your-repo-url>
Install dependencies:
npm install
Run development server:
npm run dev
Open the printed URL (e.g. http://localhost:5173)
API endpoints used

All countries (limited fields):
https://restcountries.com/v3.1/all?fields=name,region,flags,population,cca3,ccn3
Search by name (limited fields):
https://restcountries.com/v3.1/name/{name}?fields=name,region,flags,population,cca3,ccn3
Filter by region (limited fields):
https://restcountries.com/v3.1/region/{region}?fields=name,region,flags,population,cca3,ccn3

