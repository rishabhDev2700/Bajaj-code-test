import "./styles.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { MainScreen } from "./components/MainScreen";
export default function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/?title=${query}`
      )
      .then((response) => {
        setData(response.data.results);
      });
  }, [query]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <MainScreen data={data} />
    </>
  );
}
