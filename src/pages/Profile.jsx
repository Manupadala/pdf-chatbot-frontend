import { useEffect, useState } from "react";
import axios from "../api/api";
import Sidebar from "../components/Sidebar";

function Profile() {

  const [user, setUser] =
    useState({});

  useEffect(() => {

    const email =
      localStorage.getItem(
        "email"
      );

    axios.get(
      `/profile/${email}`
    )
    .then((res) =>
      setUser(res.data)
    );

  }, []);

  return (

    <div className="flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Profile
        </h1>

        <div className="bg-white p-6 rounded-xl shadow w-96">

          <p className="mb-4">
            <strong>
              Username:
            </strong>{" "}
            {user.username}
          </p>

          <p>
            <strong>
              Email:
            </strong>{" "}
            {user.email}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;