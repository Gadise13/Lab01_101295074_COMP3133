
const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "input_countries.csv";
const canadaFile = "canada.txt";
const usaFile = "usa.txt";

// Delete old files if they exist
if (fs.existsSync(canadaFile)) fs.unlinkSync(canadaFile);
if (fs.existsSync(usaFile)) fs.unlinkSync(usaFile);

// Write headers
fs.appendFileSync(canadaFile, "country,year,population\n");
fs.appendFileSync(usaFile, "country,year,population\n");

// Read CSV file and filter
fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    if (row.country === "Canada") {
      fs.appendFileSync(canadaFile, `${row.country},${row.year},${row.population}\n`);
    }

    if (row.country === "United States") {
      fs.appendFileSync(usaFile, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on("end", () => {
    console.log("✅ Files created successfully!");
  });
