const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "data/branches.db");
const db = new sqlite3.Database(dbPath);

const branches = [
  [1, "BR001", "Downtown Branch", "New York", "NY", 40.7128, -74.006],
  [2, "BR002", "Central Branch", "Los Angeles", "CA", 34.0522, -118.2437],
  [3, "BR003", "Beachside Branch", "Miami", "FL", 25.7617, -80.1918],
  [4, "BR004", "Uptown Branch", "Chicago", "IL", 41.8781, -87.6298],
  [5, "BR005", "Suburban Branch", "Dallas", "TX", 32.7767, -96.797],
  [6, "BR006", "Mountain View Branch", "Denver", "CO", 39.7392, -104.9903],
  [7, "BR007", "Bay Area Branch", "San Francisco", "CA", 37.7749, -122.4194],
  [8, "BR008", "Desert Branch", "Phoenix", "AZ", 33.4484, -112.074],
  [9, "BR009", "Riverwalk Branch", "San Antonio", "TX", 29.4241, -98.4936],
  [10, "BR010", "Broadway Branch", "Nashville", "TN", 36.1627, -86.7816],
  [11, "BR011", "Lakeside Branch", "Minneapolis", "MN", 44.9778, -93.265],
  [12, "BR012", "Capitol Branch", "Washington", "DC", 38.9072, -77.0369],
  [13, "BR013", "Historic Branch", "Boston", "MA", 42.3601, -71.0589],
  [14, "BR014", "Harbor Branch", "Seattle", "WA", 47.6062, -122.3321],
  [15, "BR015", "Music City Branch", "Memphis", "TN", 35.1495, -90.049],
  [16, "BR016", "Sunshine Branch", "Orlando", "FL", 28.5383, -81.3792],
  [17, "BR017", "Steel City Branch", "Pittsburgh", "PA", 40.4406, -79.9959],
  [18, "BR018", "Alamo Branch", "El Paso", "TX", 31.7619, -106.485],
  [19, "BR019", "Gateway Branch", "St. Louis", "MO", 38.627, -90.1994],
  [20, "BR020", "Twin Cities Branch", "St. Paul", "MN", 44.9537, -93.09],
];

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS branches (
    id INTEGER PRIMARY KEY,
    branchCode TEXT,
    branchName TEXT,
    branchCity TEXT,
    branchState TEXT,
    latitude REAL,
    longitude REAL
  )`);

  db.run(`DELETE FROM branches`);

  const stmt = db.prepare(
    `INSERT INTO branches (id, branchCode, branchName, branchCity, branchState, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)`
  );

  branches.forEach((branch) => {
    stmt.run(branch);
  });

  stmt.finalize();
});

db.close();
