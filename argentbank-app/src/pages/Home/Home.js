import Feature from "../../components/Feature/Feature";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userProfile } from "../../redux/actions/user.actions.js";

function Home() {
  const token = useSelector((state) => state.auth.token);

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

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          imageSrc="/assets/icon-chat.webp"
          imageAlt="Chat Icon"
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          imageSrc="/assets/icon-security.webp"
          imageAlt="Security Icon"
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          imageSrc="/assets/icon-money.webp"
          imageAlt="Money Icon"
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default Home;
