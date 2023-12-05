import "./Component/style.css";
import SimplePopup from "./Component/PopUp";
import Bar from "./Component/Barchart";
import ChartFilter from "./Component/ChartFilter";
import VirtualizedUserList from "./Component/VirtualizedData";
import PaginatedCarList from "./Component/PaginatedCarList";

function App({ Datas, cardata, carAge }) {
  return (
    <div className="App">
      <VirtualizedUserList />
      <SimplePopup />
      <br />
      <PaginatedCarList />
      <div className="barChart">
        <Bar data={Datas} />
      </div>
      {/* <PieChart data={cardata} /> */}
      {/* <PieCarAge data={carAge}/> */}
      {/* <div className='chartFilter'> */}
      <ChartFilter />
      {/* </div> */}
    </div>
  );
}

export default App;
