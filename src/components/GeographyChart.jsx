import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { PieChart } from "react-minimal-pie-chart";
import geoData from "../geoData.json"; // Ensure this path is correct

const GeographyChart = ({ isDashboard }) => {
  const [geoFeatures, setGeoFeatures] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [clickedCountries, setClickedCountries] = useState([]);
  const [scale, setScale] = useState(1.5); // Increased scale for a bigger map
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState([0, 0]); // Centered map position

  useEffect(() => {
    if (geoData.features) {
      setGeoFeatures(geoData.features);

      const initialCountries = [
        {
          name: "Germany",
          coordinates: [10, 51],
          chartData: [
            { title: "Category 1", value: 45, color: "#E38627" },
            { title: "Category 2", value: 25, color: "#C13C37" },
            { title: "Category 3", value: 30, color: "#6A2135" },
          ],
          randomValue: 78,
        },
        {
          name: "France",
          coordinates: [2.2, 46],
          chartData: [
            { title: "Category 1", value: 40, color: "#E38627" },
            { title: "Category 2", value: 35, color: "#C13C37" },
            { title: "Category 3", value: 25, color: "#6A2135" },
          ],
          randomValue: 85,
        },
      ];

      setClickedCountries(initialCountries);
    }
  }, []);

  const handleZoomIn = () => setScale((prevScale) => prevScale + 0.1);
  const handleZoomOut = () => setScale((prevScale) => Math.max(0.1, prevScale - 0.1));

  const handleWheel = (event) => {
    event.preventDefault();
    event.deltaY < 0 ? handleZoomIn() : handleZoomOut();
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPos({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const dx = event.clientX - startPos.x;
      const dy = event.clientY - startPos.y;
      setTranslate((prev) => [prev[0] + dx, prev[1] + dy]);
      setStartPos({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.NAME || geo.properties.name;
    const coordinates = geo.geometry.type === "Polygon"
      ? geo.geometry.coordinates[0][0]
      : geo.geometry.coordinates[0][0][0];

    const chartData = [
      { title: "Category 1", value: 40, color: "#E38627" },
      { title: "Category 2", value: 30, color: "#C13C37" },
      { title: "Category 3", value: 30, color: "#6A2135" },
    ];

    const randomValue = Math.floor(Math.random() * 100) + 1;

    setClickedCountries((prev) => [
      ...prev,
      { name: countryName, coordinates, chartData, randomValue },
    ]);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "auto",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <ComposableMap
        projectionConfig={{ scale: scale * 150 }}
        width={1000} // Increase width for larger map
        height={800} // Increase height for larger map
        style={{
          transform: `translate(${translate[0]}px, ${translate[1]}px)`,
        }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHoveredCountry(geo.properties.NAME || geo.properties.name)}
                onMouseLeave={() => setHoveredCountry(null)}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: { fill: "#D6D6DA" },
                  hover: { fill: "#F53" },
                  pressed: { fill: "#E42" },
                }}
              />
            ))
          }
        </Geographies>

        {clickedCountries.map((country, index) => (
          <Marker key={index} coordinates={country.coordinates}>
            <foreignObject x={-35} y={-35} width={70} height={70}>
              <PieChart
                data={country.chartData}
                style={{ width: "70px", height: "70px" }} // Increased pie chart size
                radius={30}
                lineWidth={100}
              />
            </foreignObject>
            <text
              textAnchor="middle"
              y={45}
              style={{ fontSize: 16, fontWeight: "bold", fill: "black" }} // Larger font for labels
            >
              {country.name}
            </text>
            <text
              x={40}
              y={40}
              style={{ fontSize: 16, fontWeight: "bold", fill: "blue" }} // Larger font for random value
            >
              {country.randomValue}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {hoveredCountry && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "rgba(0, 0, 0, 0.75)",
            color: "#FFF",
            padding: "5px 10px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          {hoveredCountry}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button onClick={handleZoomIn} style={{ marginBottom: "5px" }}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>
    </div>
  );
};

export default GeographyChart;
