
const PageHero = () => {
  return (
    <div>
        <img
            src="/images/f6354df5-0280-413f-a6f3-8299e4d549d8.JPG"
            alt="profile-image"
            className="rounded-3xl md:w-11/12 md:h-96  mb-4"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center rounded-3xl">
            <h4 className="text-white text-xl mb-2">Welcome,</h4>
            <h2 className="text-white text-4xl font-bold mb-2">I am a Full-stack Developer</h2>
            <h6 className="text-white text-lg">based in Ogun, Nigeria</h6>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-5 mt-5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-white group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to blue
              </span>
            </button>          
          </div>
    </div>
  )
}

export default PageHero