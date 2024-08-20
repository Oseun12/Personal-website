import PageSocial from "./PageSocial";

const PageNav = () => {
    return (
      <div className="drawer mb-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:drawer-open">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full rounded-lg">
            <div className="flex-none">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1  mx-2 font-bold lg:text-xl">Mary SALAU,</div>
            <PageSocial />

          </div>
          {/* Page content here */}
          
        </div>
  
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <img src="/images/IMG_9827.jpg" alt="Profile" className="w-56 h-56 bg-white rounded-full mx-auto mb-4" />
            </li>
            <li><a>About</a></li>
            <li><a>Article</a></li>
            <li><a>Projects</a></li>
            <li><a>Resume</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default PageNav;
  