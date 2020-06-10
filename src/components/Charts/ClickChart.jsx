import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LineMarkSeries } from 'react-vis';
import "./Charts.style.css"

const ClickChart = (props) => {
    const dataArr = props.data.map((d) => {
        return {
            x: d.year + '/' + d.quarter,
            y: parseFloat(d.count)
        }
    });
    return (
        <XYPlot
            xType="ordinal"
            width={1200}
            height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineMarkSeries
                data={dataArr}
                className="linemark-series-example-2"
                style={{
                    stroke: '#3A80BA',
                    strokeWidth: 4, strokeLinecap: "round"
                }}
                curve={'curveMonotoneX'}
            />
        </XYPlot>
    );

}

export default ClickChart;