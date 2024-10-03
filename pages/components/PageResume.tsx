const PageResume = () => {
    return (
        <div className="relative text-center mt-10" id="resume">
            <h1 className="font-bold text-4xl text-gray-400 relative inline-block">
            My Experience
                <span
                    className="absolute left-1/2 -bottom-1 w-24 h-1 bg-yellow-500 transform -translate-x-1/2"
                ></span>
            </h1>

            <div className="mt-10">
                <div className=" mx-auto max-w-4xl">

                    <div className="p-6 bg-slate-100 rounded-3xl mb-10">
                        <p className="flex flex-col mt-5 md:px-64">
                            <span className="text-2xl font-bold mb-5">Software Developer</span>
                            <span className="font-bold text-slate-500 italic">Walk-In-Tech</span>
                        </p>
                        <button className="px-3 py-2 mt-5 text-lg bg-yellow-500 text-white font-semibold rounded-full border border-yellow-900 hover:text-white hover:bg-yellow-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                            September 2024 - Present
                        </button>
                    </div>

                    <div className="p-6 bg-slate-100 rounded-3xl mb-10">
                        <p className="flex flex-col mt-5 md:px-64">
                            <span className="text-2xl font-bold mb-5">Web Developer Intern</span>
                            <span className="font-bold text-slate-500 italic">The Incubator Hub</span>
                            <span className="font-bold text-slate-500 italic">(Ladies in Tech Africa)</span>
                        </p>
                        <button className="px-3 py-2 mt-5 text-lg bg-yellow-500 text-white font-semibold rounded-full border border-yellow-900 hover:text-white hover:bg-yellow-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                            Aug 2024 - September 2024
                        </button>
                    </div>

                    <div className="p-6 bg-slate-100 rounded-3xl mb-10">
                        <p className="flex flex-col mt-5 md:px-64">
                            <span className="text-2xl font-bold mb-5">Full-stack Developer Intern</span>
                            <span className="font-bold text-slate-500 italic">Prodigy Info Tech</span>
                        </p>
                        <button className="px-3 py-2 mt-5 bg-yellow-500 text-white font-semibold rounded-full border border-yellow-900 hover:text-white hover:bg-yellow-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                            July 2024 - Aug 2024
                        </button>
                    </div>

                    
                    <div className="p-6 bg-slate-100 rounded-3xl mb-10">
                        <p className="flex flex-col mt-5 md:px-64">
                            <span className="text-2xl font-bold mb-5">Technical Support</span>
                            <span className="font-bold text-slate-500 italic">Zartex Technologies</span>
                        </p>
                        <button className="px-3 py-2 mt-5 text-lg bg-yellow-500 text-white font-semibold rounded-full border border-yellow-900 hover:text-white hover:bg-yellow-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                            May 2021 - Jan 2023
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}
  
  export default PageResume;
  