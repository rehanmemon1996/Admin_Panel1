import React from 'react'

  const Termncondition = () => {
    return (
      <div className="container mx-auto mt-8 p-4 sm:p-8">
        <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
        <div className="text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
            ante vel odio facilisis consectetur vel nec ex. Vivamus sit amet mauris
            eget dolor venenatis rhoncus.
          </p>
          <p>
            Quisque aliquam quam vel purus ultricies auctor. Suspendisse potenti.
            Nullam eleifend dui id elit bibendum, eu accumsan arcu iaculis. Donec
            commodo metus in velit tincidunt fermentum.
          </p>
          {/* Add more terms and conditions paragraphs as needed */}
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={() => {
              // Handle button click (e.g., close modal)
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Termncondition;
  

