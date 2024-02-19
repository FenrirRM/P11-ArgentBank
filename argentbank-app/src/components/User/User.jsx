import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/actions/user.actions.js";
import { userProfile } from "../../redux/actions/user.actions.js";

function User() {
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.user.userData);

  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();

            const userData = {
              email: data.body.email,
              firstname: data.body.firstName,
              lastname: data.body.lastName,
              username: data.body.userName,
            };

            dispatch(userProfile(userData));
            setUserName(userData.username);
          } else {
            console.log("error while retrieving profile");
          }
        } catch (error) {
          console.error(error);
        }
      };
      userData();
    }
  }, [dispatch, token]);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const username = data.body.userName;

        dispatch(updateUsername(username));
        setDisplay(!display);
      } else {
        console.log("Invalid Fields");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="welcome">
      {display ? (
        <div>
          <h1>
            Welcome back
            <br />
            {userData.firstname} {userData.lastname} !
          </h1>
          <button className="edit-button" onClick={() => setDisplay(!display)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <h2>Edit user info</h2>
          <form>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                defaultValue={userData.username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                defaultValue={userData.firstname}
                disabled={true}
              />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                defaultValue={userData.lastname}
                disabled={true}
              />
            </div>
            <div className="buttons">
              <button className="edit-button" onClick={handleSubmitUsername}>
                Save
              </button>
              <button
                className="edit-button"
                onClick={() => setDisplay(!display)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default User;
