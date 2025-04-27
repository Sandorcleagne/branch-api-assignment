# Branch Directory API

This project is a RESTful API built using Node.js and Express.js that allows users to retrieve branch information with support for:

- Pagination
- Searching (by any field)
- Sorting (by any field)

## Technologies Used

- Node.js
- Express.js
- SQLite (or JSON file for simple database)
- Swagger (API Documentation)

## Getting Started

1. Clone the project
   git clone <repo-url> // git clone https://github.com/Sandorcleagne/branch-api-assignment.git
   cd branch-api

2. Install dependencies
   npm install

3. Start the server
   npm run dev

Server will start at:
http://localhost:3000

Swagger API Docs available at:
http://localhost:3000/api-docs

API Endpoint
GET /api/branches

## Example Usage:

Get all branches:

GET http://localhost:3000/api/branches

Search branches by city:

GET http://localhost:3000/api/branches?searchBy=branchCity&searchValue=New

Sort branches by name:

GET http://localhost:3000/api/branches?sortBy=branchName&sortOrder=asc

Paginate branches:

GET http://localhost:3000/api/branches?page=2&limit=2

## Database:

data/branches.db
