import Image from "next/image";
import { Inter } from "next/font/google";
import PageSocial from "./components/PageSocial";
import PageNav from "./components/PageNav";
import Counters from "./components/Counter";
import PageResume from "./components/PageResume";
import PageSkills from "./components/PageSkills";
import PageProject from "./components/PageProject";
import PageTestimonial from "./components/PageTestimonial";
import PageFooter from "./components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="w-full max-w-6xl bg-white p-4">
        <PageNav />

        <div className="text-black flex flex-col items-center ">
        
          <img
            src="/images/f6354df5-0280-413f-a6f3-8299e4d549d8.JPG"
            alt="profile-image"
            className="rounded-3xl md:w-11/12 md:h-96  mb-4"
          />
          <div className="flex flex-col justify-center items-center rounded-3xl -mt-80">
            <h4 className="text-white font-bold text-xl mb-2">Welcome,</h4>
            <h2 className="text-white font-bold text-xl md:text-4xl mb-4">I am a Full-stack Developer</h2>
            <h6 className="text-white font-bold text-lg">based in Ogun, Nigeria</h6>
            <button  onClick={() => window.open('/Salau_Mary_TechCV(3).pdf', '_blank')} className="px-6 py-3 mt-5 text-2xl text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Hire Me</button>
          </div>

          <div className="bg-slate-100 mt-28 w-full" id="about">
            <h1
              className="relative text-5xl text-gray-400 font-serif font-bold text-center mt-16"
              style={{ textUnderlineOffset: '8px', textDecorationColor: 'green' }}
            >
              ABOUT ME
              <span
                className="absolute left-1/2 -bottom-2 w-24 h-1 bg-yellow-500 transform -translate-x-1/2"
                style={{ marginTop: '8px' }}
              ></span>
            </h1>

            <div className="md:flex md:justify-center md:items-start text-center p-6 rounded-lg mb-5 shadow-xl md:space-x-8">
            <p className="py-5 px-5 rounded-lg md:w-1/2 text-left text-justify">
              I am <span className="text-xl font-bold text-yellow-600">Mary Salau, </span>
              a software developer with a strong foundation in backend and full-stack development, specializing in technologies like Node.js, NestJS, Next.js, HTML, TailwindCSS, Express.js, and TypeScript. I have experience building scalable web applications, implementing secure user authentication systems, and managing databases with PostgreSQL, Prisma, and MongoDB. I am passionate about creating efficient, user-friendly solutions and continuously improving my skills in modern web development.
            </p>

              
              <div className="md:w-1/2 text-left mt-10 py-5 px-5">
                <h2 className="mb-2"><strong>Name:</strong> Mary Oluwaseun Salau</h2>
                <h2 className="mb-2"><strong>Email:</strong> marrizzsalau7@gmail.com</h2>
                <h2 className="mb-2"><strong>Location:</strong> Ogun state, Nigeria</h2>
                <button onClick={() => window.open('/Salau_Mary_TechCV(3).pdf', '_blank')} className="px-3 py-2 mt-5 text-xl bg-yellow-500 text-white font-semibold rounded-full border border-yellow-900 hover:text-white hover:bg-yellow-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="flex mb-10">
            <section id="counters">
              <Counters />
            </section>
          </div>

          <PageResume />
          <PageSkills />
          <PageProject />
          <PageTestimonial />
          <PageFooter />
        </div>
      </main>
    </div>
  );
}
