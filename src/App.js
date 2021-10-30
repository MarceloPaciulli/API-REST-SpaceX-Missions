import { useEffect, useState } from "react";
import { fetchHistory } from "./apix";
import DateInput from "./components/DateInput";
import MissionCard from "./components/MissionCard";
import "./styles.css";

export default function App() {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);
  const getHistory = async () => {
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };

  useEffect(() => {
    return getHistory();
  });

  return (
    <div>
      <h1 className="title">SpaceX Missions<img src ='http://assets.stickpng.com/thumbs/58e9117beb97430e819064d6.png' alt="algo" height="40px" width="50px" /> </h1>
      <div class="filters">
      <DateInput 
      label="Start Date"
      onChange={(e) => setStartDate(e.target.value)} />
       <DateInput 
      label="End Date"
      onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className="mission-list"> 
        {data.map((item) => {
          return <MissionCard mission={item} />;
        })}
      </div>
    </div>
  );
}
