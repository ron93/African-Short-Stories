
export const AxisBottom = ({xScale,innerHeight, tickFormat}) => 
  xScale.ticks().map((tickValue) => (
    <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} stroke="black" />
      <text
        dy="0.71em"
        style={{ textAnchor: "middle" }}
        y={innerHeight + 4}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
