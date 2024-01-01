import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">About Saylani Welfare Admin Panel</h2>
      <p className="text-gray-700 mb-4">
        Welcome to the Saylani Welfare Admin Panel, where you can manage various aspects of Saylani Welfare's operations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Saylani Welfare International aims to alleviate the sufferings of the people by providing healthcare, education, and humanitarian assistance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Vision Statement</h3>
          <p className="text-gray-700">
            Our vision is to build a better society by empowering individuals through education, healthcare, and social welfare programs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <p className="text-gray-700">
            If you have any inquiries or need assistance, feel free to contact us at support@saylaniwelfare.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
