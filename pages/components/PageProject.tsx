import Image from "next/image";


const PageProject = () => {
  return (
    <div>
      <div className="text-center">
      <h1 className="font-bold text-4xl text-gray-400 relative inline-block mt-10 mb-10 ">
        My Projects
          <span
              className="absolute left-1/2 -bottom-1 w-24 h-1 bg-yellow-500 transform -translate-x-1/2"
          ></span>
        </h1>
      </div>
      
      <div className="relative mb-10">
        <a href="https://your-project-link.com" className="block">
          <Image
            src="/images/baruch.png"
            alt="Baruch Clothing"
            className="w-full h-full object-cover rounded-2xl"
            width={500} 
            height={300}
          />
          <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h2 className="font-bold text-white text-2xl">Baruch Clothing</h2>
            <span className="font-bold text-yellow-400">FRONTEND PROJECT</span>

            <span className="text-white">HTML | CSS | JAVASCRIPT</span>
          </div>
        </a>
      </div>

      <div className="relative mb-10">
        <a href="https://your-project-link.com" className="block">
          <Image
            src="/images/dashboard.png"
            alt="Baruch Clothing"
            className="w-full h-full object-cover rounded-2xl"
            width={500} 
            height={300}
          />
          <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h2 className="font-bold text-white text-2xl">Employee Dashboard</h2>
            <span className="text-white">NextJs | TailwindCSS | MongoDB | Typescript</span>
          </div>
        </a>
      </div>

      <div className="relative mb-10">
        <a href="https://your-project-link.com" className="block">
          <Image
            src="/images/todo.png"
            alt="Baruch Clothing"
            className="w-full h-full object-cover rounded-2xl"
            width={500} 
            height={300}
          />
          <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h2 className="font-bold text-white text-2xl">Todo Application</h2>
            <span className="text-white">NextJs | Prisma | TailwindCSS | Typescript</span>
          </div>
        </a>
      </div>

      <div className="relative mb-10">
        <a href="https://oluseun.hashnode.dev/mini-banking-application-with-nodejs-typescript-and-postgresql" className="block">
          <Image
            src="/images/bank.png"
            alt="Baruch Clothing"
            className="w-full h-full object-cover rounded-2xl"
            width={500} 
            height={300}
          />
          <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h2 className="font-bold text-white text-2xl">Mini Bank Application</h2>
            <span className="font-bold text-green-400">BACKEND  PROJECT</span>
            <span className="text-white">Node.js | PostgreSQL | Express.js | Typescript</span>

          </div>
        </a>
      </div>

    </div>
  )
}

export default PageProject