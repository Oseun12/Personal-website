import React from 'react';

const PageTestimonial = () => {
  return (
    <div className="px-4 py-8">
      <div className="font-bold text-4xl text-gray-400 text-center mb-10">
        <h1 className="relative inline-block">
          References
          <span
            className="absolute left-1/2 -bottom-1 w-24 h-1 bg-yellow-500 transform -translate-x-1/2"
          ></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg h-64">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/images/IMG_9827.jpg"
                alt="Referee Name"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Referee Name</h3>
                <p className="text-gray-600">
                  This is a sample testimonial text. It speaks to the character and professional abilities of the individual.
                </p>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg h-64"> {/* Add h-64 here */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/path-to-image.jpg"
                alt="Referee Name"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Referee Name</h3>
                <p className="text-gray-600">
                  This is a sample testimonial text. It speaks to the character and professional abilities of the individual.
                </p>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg h-64">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/path-to-image.jpg"
                alt="Referee Name"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Referee Name</h3>
                <p className="text-gray-600">
                  This is a sample testimonial text. It speaks to the character and professional abilities of the individual.
                </p>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTestimonial;
