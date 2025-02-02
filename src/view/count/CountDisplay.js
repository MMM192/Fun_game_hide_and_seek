import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CountDisplay() {
  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the current count
    const fetchCount = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/count`);
        setCount(response.data.count || 0);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch current count: ${err.message}`);
        setLoading(false);
      }
    };

    // Fetch the count history
    const fetchCountHistory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/count-history`);
        const { countRecords } = response.data;
        setCountHistory(countRecords);
        setHistoryLoading(false);
      } catch (err) {
        setError(`Failed to fetch count history: ${err.message}`);
        setHistoryLoading(false);
      }
    };

    fetchCount();
    fetchCountHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Display the Current Count */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Current Visit Count</h1>
        {loading ? (
          <p className="text-xl text-gray-500 text-center">Loading count...</p>
        ) : error ? (
          <p className="text-xl text-red-500 text-center">{error}</p>
        ) : (
          <div className="text-center">
            <p className="text-4xl font-semibold text-green-500">Total Visits:</p>
            <p className="text-5xl font-bold text-blue-700 mt-2">{count}</p>
          </div>
        )}
      </div>

      {/* Display Count History */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Visit History</h2>
        {historyLoading ? (
          <p className="text-xl text-gray-500 text-center">Loading visit history...</p>
        ) : error ? (
          <p className="text-xl text-red-500 text-center">{error}</p>
        ) : (
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Count</th>
                <th className="border px-4 py-2">IP Address</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {countHistory.map((record, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{record.count}</td>
                  <td className="border px-4 py-2">{record.ipAddress || 'N/A'}</td>
                  <td className="border px-4 py-2">{record.location || 'N/A'}</td>
                  <td className="border px-4 py-2">{new Date(record.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CountDisplay;
