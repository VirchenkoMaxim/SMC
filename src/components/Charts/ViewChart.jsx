import React from 'react'
import "./Charts.style.css"
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LineMarkSeries } from 'react-vis';

function ViewChart(props) {
    const dataArr = props.data.map((d) => {
        return {
            x: d.date,
            y: parseFloat(d.page_views)
        }
    });

    return (
        <XYPlot
            xType="ordinal"
            width={1300}
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

export default ViewChart
