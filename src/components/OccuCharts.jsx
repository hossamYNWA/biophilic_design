import BarChart from "./BarChart";
import { useSelector } from "react-redux";
const OccuCharts = () => {
    const allData = useSelector((store) => store.occupational)
    // console.log(allData)
    const dataToUse = [{
        category: 'Users',
        data: allData.slice(0,3)
    },
    {
        category: 'Necessary Activities',
        data: allData.slice(3,6)
    },
    {
        category: 'Optional Activities',
        data: allData.slice(6,12)
    },
    {
        category: 'Social Activities',
        data: allData.slice(12,)
    }]
    const content = dataToUse.map((item) => {
        const refactoredData = item.data.map((unit) => {
            return {name:item.category, x: unit.name, y: unit.score}
        })
        const maxScore = 3*item.data.length
        const achievedScore = refactoredData.reduce((acc, score) => acc + score.y, 0)
        const percentage = (achievedScore/maxScore)*100
        return (<div style={{width: "100%"}} key={item.category}>
            <BarChart key={item.category} category={item.category} data={refactoredData} />
            <p style={{width: "100%", textAlign: "center"}}>{item.category} Score: <span style={{fontWeight: "bold"}}>{percentage.toFixed(2)}%</span></p>
        </div>)
    })
    return(<div style={{width: "100%", display: "grid", gridTemplateColumns: "repeat(2,1fr)",rowGap: "30px", gridTemplateRows: "repeat(2,1fr)"}}>
        {content}
    </div>)
};

export default OccuCharts