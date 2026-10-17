import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getHello() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/");

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Could not connect to backend!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUsers() {
    setLoading(true);
    setMessage([]);

    try {
      const response = await fetch("http://localhost:3000/api/users/name-age");

      const data = await response.json();

      setMessage2(data);
    } catch (error) {
      setMessage("Could not connect to backend!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>React + Express</h1>
      <button onClick={getHello} disabled={loading}>
        {loading ? "Loading..." : "Get Hello World"}
      </button>
      <p>{message}</p>
      <button onClick={getUsers} disabled={loading}>
        {loading ? "Loading..." : "Get Hello World"}
      </button>

      {message2.map((user, index) => (
        <p>
          {user.name} - {user.age}
        </p>
      ))}
    </div>
  );
}

export default App;
