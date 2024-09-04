import React from 'react';
import Image from 'next/image';

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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/man.jpg"
                alt="Referee Name"
                width={100} height={100}
              />
              <div>
                <h3 className="text-2xl font-bold mb-5">Shina Olushola</h3>
                <h3 className="text-lg font-semibold mb-5">Backend Developer</h3>
                <p className="text-gray-600 mb-10">
                Mary has proven to be an excellent communicator, and skilled developer. She has consistently delivered and has been an invaluable asset to our team.                </p>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg"> {/* Add h-64 here */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/unclebigbay.jpeg"
                alt="Referee Name"
                width={100} 
                height={100}
                className='rounded-full'
              />
              <div>
                <h3 className="text-2xl font-bold mb-5">Ayodele Samuel</h3>
                <h3 className="text-lg font-semibold mb-5">Senior Frontend Engineer</h3>
                <p className="text-gray-600 mb-10"> I can testify that Mary Salau is an outstanding person, constantly delivering high-quality work and showing exceptional dedication. 
                </p>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/1680453080726.jpeg"
                alt="Referee Name"
                width={100} height={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Deven Chopra</h3>
                <h3 className="text-lg font-semibold">Software Engineering Manager(Prodigy Info Tech)</h3>
                <p className="text-gray-600">
                    I am writing this letter to highly recommend Mary Salau  for
                    her exceptional performance and dedication during her tenure as a Full-Stack Web
                    Development intern at Prodigy InfoTech. She has truly impressed me with her strong
                    work ethic, passion, and ability to excel in her assigned tasks.
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
