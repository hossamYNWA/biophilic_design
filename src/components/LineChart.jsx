import React, { useState, useEffect, useRef } from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import { VictoryZoomContainer } from 'victory-zoom-container';

const MultiColorChart = ({attributes}) => {
  const dataToDisplay = attributes.map(attr => {
    let name = null
    if(attr.name.length === 2){
      name = attr.name[0] + '0' + attr.name[1]
    }
    else if(attr.name.length === 3 && !attr.name.startsWith('b')){
      name = attr.name[0] + attr.name[1] + '0' +  attr.name[2]
    }
    else{
      name = attr.name
    }
    return {name:'Attributes', x: name.toUpperCase(), y: attr.score}
  })
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    const observer = getResizeObserver(containerRef.current, handleResize);
    handleResize(); // Call it once to set initial width

    return () => {
      observer(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div style={{ height: '275px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Line chart example"
          containerComponent={<VictoryZoomContainer zoomDimension="x" />}
          legendData={[]}
          legendPosition="bottom-left"
          height={275}
          maxDomain={{ y: 5 }}
          minDomain={{ y: 0 }}
          name="chart3"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.multiUnordered}
          width={width*1.5}
        >
          <ChartAxis tickValues={[1.5, 2.5, 3.5]} />
          <ChartAxis dependentAxis showGrid tickValues={[1, 2,3,4,5]} />
          <ChartGroup>
            <ChartLine
              data={dataToDisplay}
            />
          </ChartGroup>
        </Chart>
      </div>
    </div>
  );
};

export default MultiColorChart;