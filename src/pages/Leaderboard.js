import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy("coins", "desc"));
        const snapshot = await getDocs(q);
        
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600">🏆 Leaderboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3">Rank</th>
              <th className="p-3">User</th>
              <th className="p-3">Coins</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center p-4">No data available</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{user.displayName || "Anonymous"}</td>
                  <td className="p-3">{user.coins || 0}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
