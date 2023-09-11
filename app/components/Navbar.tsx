import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#030b6b] h-28 flex justify-center items-center w-[100%] m{t|b}-0 m{r|l}-auto p{t|b}-0 p{r|l}-20">
      <nav className="w-[100%] max-w-1000 text-white flex justify-between items-center">
        <div className="text-white flex justify-center items-center text-5xl cursor-pointer">
          <Link href="/">
            <AiFillHome size={35} />
          </Link>
        </div>
        <ul className="flex justify-center items-center">
          <li className="flex justify-center items-center">
            <FaUserCircle size={20} />
            <p className="text-white">Hi, Srujan</p>
          </li>
          <li>
            <button className="text-2xl font-normal px-6 py-8 my-0 mr-[5px] ml-0 border border-transparent border-solid rounded-3px cursor-pointer flex justify-center items-center transition-all-0.3s text-white bg-[#007bff]">
              <Link href="../login"> Login</Link>
            </button>
          </li>
          <li>
            <Link href="/profile"> Profile</Link>
          </li>
          <li>
            <button className="text-2xl font-normal px-6 py-8 my-0 mr-[5px] ml-0  rounded-3px cursor-pointer flex justify-center items-center transition-all-0.3s text-white bg-transparent border border-white border-solid">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
