import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./redux/apiSlice";
import { useEffect } from "react";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
function App() {
  const data = useSelector((state) => state.callAPi.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        dispatch(setData(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "start",
        padding: "20px",
        gap: "60px",
      }}
    >
      <PostForm />
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
            <p className={styles.userId}>User ID: {item.userId}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
