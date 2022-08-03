import Link from "next/link";
import Search from "./Search";

const index = () => {
  return (
    <div className=" sticky top-0 z-40 w-full backdrop-blur flex-none border-b border-slate-50/[0.06]">
      <div className="container mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center justify-between">
            <Link href={"/"}>
              <a className="mr-3 flex justify-center items-center w-[2.0625rem] overflow-hidden md:w-auto">
                <span className="sr-only">Film DB home page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-8 w-8 fill-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span className="text-white ml-2 text-3xl">Film DB</span>
              </a>
            </Link>
            <Search />
            <div className="flex">
              <Link href={"/"}>
                <a className="text-white px-4 py-2 rounded-md">Login</a>
              </Link>
              <Link href={"/"}>
                <a className="text-white bg-sky-600 px-4 py-2 rounded-md">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
