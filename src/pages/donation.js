import React, { useState } from 'react';

const Donation = () => {
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform donation submission logic here
    console.log('Donation Submitted:', { donorName, email, contactNumber, amount, paymentMethod });
    // You can add logic to send data to your backend or perform other actions.

    // Reset form fields after submission
    setDonorName('');
    setEmail('');
    setContactNumber('');
    setAmount('');
    setPaymentMethod('creditCard');
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Donation Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Donor Name:</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
            placeholder="Enter donor name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
            placeholder="Enter contact number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
            placeholder="Enter donation amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default Donation;
