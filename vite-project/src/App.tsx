
import DataTable from "./Comp/Databse";
import { data } from "./data";



const App = () => {
    return (
      <div className="w-full md:px-24 px-5">
        <DataTable data={data} 
        searchBar
        excelExport
        pageSizeControl
        pagination
        removableRow
        
        />
      </div>
    );
  };
  
  export default App;