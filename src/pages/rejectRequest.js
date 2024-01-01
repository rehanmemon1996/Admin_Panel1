import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const RejectRequest = () => {
  const [rejectReason, setRejectReason] = useState('');

  const handleRejectReasonChange = (event) => {
    setRejectReason(event.target.value);
  };

  const handleReject = async (event) => {
    event.preventDefault();

    // Your actual API endpoint for rejecting the request
    const apiUrl = 'https://your-api-endpoint.com/reject-request';

    // Create a JSON object to send rejection reason
    const requestBody = {
      reason: rejectReason,
    };

    try {
      // Send a POST request to the API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Request rejected successfully!');
        // Optionally, you can reset the form or update the UI as needed.
      } else {
        console.error('Failed to reject request.');
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Reject Request</h2>
      <form onSubmit={handleReject} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">
            Rejection Reason:
            <textarea
              value={rejectReason}
              onChange={handleRejectReasonChange}
              className="w-full border p-2 mt-1 focus:outline-none focus:border-red-500 rounded"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 w-full"
        >
          Reject Request
        </button>
      </form>
    </div>
  );
};

export default RejectRequest;

