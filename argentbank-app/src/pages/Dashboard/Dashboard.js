


import User from "../../components/User/User.jsx";
import Account from "../../components/Account/Account.jsx";
import AccountData from "../../data/AccountData.json";

function Dash() {



  return (
    <main className="main bg-dark">
      <User />

      {AccountData.map((data) => (
        <Account
          key={data.id}
          title={data.title}
          amount={data.amount}
          description={data.description}
        />
      ))}
    </main>
  );
}

export default Dash;
