// import React, { useState, useEffect, useRef } from "react";
// import {
//   Chart,
//   ChartAxis,
//   ChartGroup,
//   ChartLine,
//   ChartThemeColor,
// } from "@patternfly/react-charts/victory";
// import { getResizeObserver } from "@patternfly/react-core";
// import { VictoryZoomContainer } from "victory-zoom-container";

// const MultiColorChart = ({ attributes }) => {
//   const dataToDisplay = attributes.map((attr) => {
//     let name = null;
//     if (attr.name.length === 2) {
//       name = attr.name[0] + "0" + attr.name[1];
//     } else if (attr.name.length === 3 && !attr.name.startsWith("b")) {
//       name = attr.name[0] + attr.name[1] + "0" + attr.name[2];
//     } else {
//       name = attr.name;
//     }
//     return { name: "Attributes", x: name.toUpperCase(), y: (attr.score/3)*100};
//   });
//   const containerRef = useRef(null);
//   const [width, setWidth] = useState(0);

//   const handleResize = () => {
//     if (containerRef.current && containerRef.current.clientWidth) {
//       setWidth(containerRef.current.clientWidth);
//     }
//   };

//   useEffect(() => {
//     const observer = getResizeObserver(containerRef.current, handleResize);
//     handleResize(); // Call it once to set initial width

//     return () => {
//       observer(); // Cleanup observer on unmount
//     };
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <div style={{ height: "475px" }}>
//         <Chart
//           ariaDesc="Average number of pets"
//           ariaTitle="Line chart example"
//           containerComponent={<VictoryZoomContainer zoomDimension="x" />}
//           legendData={[]}
//           legendPosition="bottom-left"
//           height={450}
//           maxDomain={{ y: 100 }}
//           minDomain={{ y: 0 }}
//           name="chart3"
//           padding={{
//             bottom: 75, // Adjusted to accommodate legend
//             left: 50,
//             right: 50,
//             top: 50,
//           }}
//           themeColor={ChartThemeColor.multiUnordered}
//           width={width * 1.5}
//         >
//           <ChartAxis tickValues={[10,30,50,70,90]} />
//           <ChartAxis
//             dependentAxis
//             showGrid
//             tickValues={[20, 40, 60, 80, 100]}
//           />
//           <ChartGroup>
//             <ChartLine data={dataToDisplay} />
//           </ChartGroup>
//         </Chart>
//       </div>
//     </div>
//   );
// };

// export default MultiColorChart;


import React, { useState, useEffect, useRef } from "react";
import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
} from "@patternfly/react-charts/victory";
import { getResizeObserver } from "@patternfly/react-core";
import { VictoryZoomContainer } from "victory-zoom-container";

const MultiColorChart = ({ attributes,title }) => {
  const dataToDisplay = attributes.map((attr, index, array) => {
    let name = null;
    if (attr.name.length === 2) {
      name = attr.name[0] + "0" + attr.name[1];
    } else if (attr.name.length === 3 && !attr.name.startsWith("b")) {
      name = attr.name[0] + attr.name[1] + "0" + attr.name[2];
    } else {
      name = attr.name;
    }
    const shareConstant = 4.862 - array.length*0.0911
    const maxScore = attr.share * shareConstant 
    const avScore = (attr.score / maxScore)*100
    console.log('attrScore' + attr.score+ ' array length: ' + array.length + ' CONSTAT: ' + shareConstant + '\n max: ' + maxScore + "avScore: ", avScore)
    return { x: name.toUpperCase(), y: avScore};
  });

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    const observer = getResizeObserver(containerRef.current, handleResize);
    handleResize();

    return () => {
      observer(); // Cleanup observer on unmount
    };
  }, []);

  // Log the data for debugging
  console.log("Data to Display:", dataToDisplay);

  // Check if there is data to display
  if (dataToDisplay.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div ref={containerRef} style={{marginTop:'100px'}}>
      <h2 style={{ color: "rgb(48, 74, 13)", fontSize: "2rem", margin: "10px", fontWeight: "bold", textAlign:'center'}}>{title}</h2>
      <div style={{ height: "475px" }}>
        <Chart
          ariaDesc="Line chart example"
          ariaTitle="Line chart example"
          containerComponent={<VictoryZoomContainer zoomDimension="x" />}
          height={450}
          maxDomain={{ y: 100 }}
          minDomain={{ y: 0 }}
          name="chart3"
          padding={{
            bottom: 75,
            left: 50,
            right: 50,
            top: 50,
          }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width > 0 ? width * 1.5 : 600} // Fallback width
        >
          <ChartAxis tickValues={[10, 30, 50, 70, 90]} />
          <ChartAxis dependentAxis showGrid tickValues={[20, 40, 60, 80, 100]} />
          <ChartGroup>
            <ChartLine data={dataToDisplay} />
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};

export default MultiColorChart;