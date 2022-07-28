import { useEffect, useReducer } from "react";
import Cardlist from "./components/Cardlist";
import Navbar from "./components/Navbar";
import Selected from "./components/Selected";
import "./App.css";
const initialstate = { data: [], selected: "" };
function reducer(state = initialstate, action) {
  switch (action.type) {
    case "DATALOADED":
      return { ...state, data: action.payload, loading: false };
    case "SELECTEDONE":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
    )
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "DATALOADED", payload: data.results });
        dispatch({ type: "SELECTEDONE", payload: data.results[0] });
      });
  }, []);
  console.log(state);
  return (
  <div className="container">
    <div className="col-sm-12 col-lg-12 col-xl-12 ">
      <Navbar />
      {state.selected ? <Selected data={state.selected} /> : <></>}
      <div className="row">
        {state.loading ? (
          <h4> Please wait while loading </h4>
        ) : (
          <Cardlist
            data={state.data}
            selected={state.selected}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
    </div>
  )
}


