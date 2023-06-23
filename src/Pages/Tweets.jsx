import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import goit from "../assets/GoIt.svg";
import goitavif from "../assets/picture2 1.avif";
import ellipse from "../assets/Ellipse.png";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("Show All");
  const navigate = useNavigate();
  const tweetsPerPage = 3;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://6492ff12428c3d2035d1151f.mockapi.io/users"
      );
      const usersWithFollow = response.data.map((user) => {
        const isFollow = localStorage.getItem(user.id) === "true";
        return { ...user, isFollow };
      });
      setUsers(usersWithFollow);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFollow = async (user) => {
    try {
      await axios.put(
        `https://6492ff12428c3d2035d1151f.mockapi.io/users/${user.id}`,
        {
          followers: user.followers + 1,
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser.id === user.id ? { ...prevUser, isFollow: true } : prevUser
        )
      );
      localStorage.setItem(user.id, JSON.stringify(true));
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowing = async (user) => {
    try {
      await axios.put(
        `https://6492ff12428c3d2035d1151f.mockapi.io/users/${user.id}`,
        {
          followers: user.followers - 1,
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser.id === user.id ? { ...prevUser, isFollow: false } : prevUser
        )
      );
      localStorage.setItem(user.id, JSON.stringify(false));
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = filterUsers(users, filter);

  function filterUsers(users, filter) {
    if (filter === "Show All") {
      return users;
    } else if (filter === "Follow") {
      return users.filter((user) => !user.isFollow);
    } else if (filter === "Followings") {
      return users.filter((user) => user.isFollow);
    }
    return users;
  }

  return (
    <section>
      <div>
        <div className="flex items-center justify-around max-w-[1280px] my-[0px] mx-[auto]">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-[26px] py-[14px] px-[28px] w-[210px] rounded-[10px] bg-[#EBD8FF] hover:bg-[#5CD3A8] transition-all  text-[#373737] text-[18px]  font-semibold uppercase shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0,0,0,0.25)]"
          >
            Back
          </button>

          <select
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
            className="mb-[26px]  w-[210px] h-[55px] rounded-[10px] text-center bg-[#EBD8FF] hover:bg-[#5CD3A8] border-none transition-all text-[#373737] text-[18px]  font-semibold uppercase shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0,0,0,0.25)]"
          >
            <option value="Show All">Show All</option>
            <option value="Follow">Follow</option>
            <option value="Followings">Followings</option>
          </select>
        </div>
        <div className="flex items-center flex-col max-w-[1280px] my-[0px] mx-[auto]">
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-12 justify-center">
            {filteredUsers.slice(0, page * tweetsPerPage).map((user) => (
              <li
                key={user.id}
                className="w-[380px] h-[460px] mb-[26px] rounded-2xl bg-gradient-to-br from-[#471CA9] via-[#5736A3] to-[#4B2A99] shadow-[-2.57769656px_6.87385702px_20.62157249px_0_rgba(0,0,0,0.23)]"
              >
                <img
                  src={goit}
                  alt="GoIt"
                  className="mt-[20px] ml-[20px] absolute"
                />
                <img
                  src={goitavif}
                  alt="Logo"
                  className="mt-[28px] ml-[36px] mb-[18px]"
                />
                <div className="w-[380px] h-[8px] bg-[#EBD8FF] shadow-custom"></div>
                <div className="relative">
                  <img
                    src={ellipse}
                    alt="Ellipse"
                    className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute "
                  />
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-[62px] h-[62px] -mt-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <h3 className="text-[#EBD8FF] mt-[62px] mb-[16px] font-medium">
                  {user.tweets} TWEETS
                </h3>
                <p className="mb-[26px] text-[#EBD8FF] font-medium">
                  {user.followers.toLocaleString("en-US")} FOLLOWERS
                </p>
                <div>
                  {!user.isFollow ? (
                    <button
                      type="button"
                      onClick={() => handleFollow(user)}
                      className="py-[14px] px-[28px] w-[196px] rounded-[10px] bg-[#EBD8FF] transition-all text-[#373737] text-[18px]  font-semibold uppercase shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0,0,0,0.25)]"
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleFollowing(user)}
                      className="py-[14px] px-[28px] w-[196px] rounded-[10px] bg-[#5CD3A8] transition-all text-[#373737] text-[18px] font-semibold uppercase shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0,0,0,0.25)]"
                    >
                      Following
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {filteredUsers.length > page * tweetsPerPage && (
            <div>
              <button
                type="button"
                onClick={handleLoadMore}
                className="py-[14px] px-[28px] w-[210px] rounded-[10px] mt-[26px] bg-[#EBD8FF] hover:bg-[#5CD3A8] transition-all text-[#373737] text-[18px]  font-semibold uppercase shadow-[0_3.4369285106658936px_3.4369285106658936px_0_rgba(0,0,0,0.25)]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tweets;
