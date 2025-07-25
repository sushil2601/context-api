import { LogInContext } from "../App";

import { useContext } from "react";

const UserProfile = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(LogInContext);

  return (
    <div>
      <h3>User Profile</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome , User!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={onLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
