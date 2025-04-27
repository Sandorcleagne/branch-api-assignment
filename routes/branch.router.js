const { getBranches } = require("../controllers/branch.controller");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/branches:
 *   get:
 *     summary: Get a list of branches with search, sort, and pagination
 *     parameters:
 *       - in: query
 *         name: searchBy
 *         schema:
 *           type: string
 *         description: Field to search by
 *       - in: query
 *         name: searchValue
 *         schema:
 *           type: string
 *         description: Text to search
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Column to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of results per page
 *     responses:
 *       200:
 *         description: A list of branches
 */
router.get("/", getBranches);
module.exports = router;
