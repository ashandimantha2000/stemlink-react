import React from "react";
import { useUserStore } from "../../context/Zustand/UseUserStore";



function UserProfile() {
    const { user, login, logout } = useUserStore();
  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user?.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
