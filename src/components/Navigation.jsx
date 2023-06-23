import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center justify-center lg:gap-x-12 mb-[30px]">
        <li
          className={`p-4  text-[#373737] text-[20px] font-semibold ${
            location.pathname === "/"
              ? "border-[#5736A3] border-b-4 border-solid transition-all "
              : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`p-4  text-[#373737] text-[20px] font-semibold ${
            location.pathname === "/tweets"
              ? "border-[#5736A3] border-b-4 border-solid transition-all"
              : ""
          }`}
        >
          <Link to="/tweets">Tweets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
