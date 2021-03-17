

export const AxisLeft = ({yScale}) =>
  yScale.domain().map((tickValue) => (
    <text 
      key={tickValue}
      dy="0.32em"
      x={-4}
      y={yScale(tickValue) + yScale.bandwidth() / 2}
      style={{ textAnchor: "end"  }}
    >
      {tickValue}
    </text>
  ));