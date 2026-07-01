import Chart from "../components/Chart";
import StatisticsCards from "../components/StatisticsCards";
function Dashboard(){
    return(
        <div>
            <h2 className="mb-4">
                Dashboard
            </h2>
            <StatisticsCards/>
            <Chart/>
        </div>
    );
}
export default Dashboard;