const path = require("path");
const paginate = require("../utils/paginator.js");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.join(__dirname, "../data/branches.db");
const db = new sqlite3.Database(dbPath);
const {
  successResponse,
  errorResponse,
} = require("../utils/ResponseTemplate.js");
const allowedFields = [
  "id",
  "branchCode",
  "branchName",
  "branchCity",
  "branchState",
  "latitude",
  "longitude",
];
const getBranches = async (req, res) => {
  try {
    let {
      searchBy = "branchCode",
      searchValue,
      sortBy,
      sortOrder = "asc",
      page = 1,
      limit = 10,
    } = req?.query;
    let baseQuery = "SELECT * FROM branches";
    let queryParams = [];
    if (searchBy && !allowedFields.includes(searchBy)) {
      return res
        .status(400)
        .json(
          errorResponse(
            `Invalid searchBy field. Allowed fields are: ${allowedFields.join(
              ", "
            )}`,
            400
          )
        );
    }
    if (sortBy && !allowedFields.includes(sortBy)) {
      return res
        .status(400)
        .json(
          errorResponse(
            `Invalid sortBy field. Allowed fields are: ${allowedFields.join(
              ", "
            )}`,
            400
          )
        );
    }
    if (searchBy && searchValue) {
      baseQuery += ` WHERE ${searchBy} LIKE ?`;
      queryParams.push(`%${searchValue}%`);
    }
    if (sortBy) {
      baseQuery += ` ORDER BY ${sortBy} ${
        sortOrder.toLowerCase() === "desc" ? "DESC" : "ASC"
      }`;
    }
    db.all(baseQuery, queryParams, (err, rows) => {
      if (err) {
        return res.status(500).json(errorResponse(err.message, 500));
      }

      page = parseInt(page);
      limit = parseInt(limit);
      const paginatedData = paginate(rows, page, limit);
      res.status(200).json(
        successResponse(
          "Branches fetched successfully",
          {
            page: page,
            limit: limit,
            data: paginatedData,
            totalRecords: rows?.length,
          },
          200
        )
      );
    });
  } catch (error) {
    errorResponse(error.message, error.statusCode);
  }
};

module.exports = {
  getBranches,
};
