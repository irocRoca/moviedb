import classes from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { listContext } from "../context/list";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  let { setList } = useContext(listContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") return;
    setList(query);
    history.push(`/search/${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.icon_contain}>
        <SearchIcon />
      </div>
      <div className={classes.input_contain}>
        <form onSubmit={handleSubmit} type="submit">
          <input
            className={classes.input}
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
