  async function insertTimetable(connection, insertTimetableParams) {
    const insertUserInfoQuery = `
      INSERT INTO Timetable(day, startTime, endTime)
      VALUES (?, ?, ?);
      `;
    const insertTimetableRow = await connection.query(
      insertTimetableQuery,
      insertTimetableParams
    );
  
    return insertTimetableRow;
  }

  module.exports = {
    insertTimetable
  };