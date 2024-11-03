import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { PieChart } from "react-minimal-pie-chart";
import geoData from "../geoData.json"; // Update this path to your actual geoJSON data file

const GeographyChart = ({ isDashboard }) => {
  const [geoFeatures, setGeoFeatures] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [clickedCountries, setClickedCountries] = useState([]);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState([0, 0]);

  useEffect(() => {
    if (geoData.features) {
      setGeoFeatures(geoData.features);
      console.log("Geo Features:", geoData.features);
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
    let coordinates;
    if (geo.geometry.type === "Polygon") {
      coordinates = geo.geometry.coordinates[0];
    } else if (geo.geometry.type === "MultiPolygon") {
      coordinates = geo.geometry.coordinates[0][0];
    }

    const centroid = coordinates[0];
    const chartData = [
      { title: "Category 1", value: 40, color: "#E38627" },
      { title: "Category 2", value: 30, color: "#C13C37" },
      { title: "Category 3", value: 30, color: "#6A2135" },
    ];

    const randomValue = Math.floor(Math.random() * 100) + 1;

    setClickedCountries((prev) => [
      ...prev,
      { name: countryName, coordinates: centroid, chartData, randomValue },
    ]);
  };

  return (
    <div
      style={{
        position: "relative",
        right: !isDashboard ? "-50px" : "20px",
        top: !isDashboard ? "100px" : "-200px",
        width: "400px",
        height: "300px",
        overflow: "hidden",
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <ComposableMap
        projectionConfig={{ scale: scale * 100 }}
        width={400}
        height={300}
        style={{
          transform: `translate(${translate[0]}px, ${translate[1]}px)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { NAME, name } = geo.properties;
              const countryName = NAME || name;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredCountry(countryName)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => handleCountryClick(geo)}
                  style={{
                    default: { fill: "#D6D6DA" },
                    hover: { fill: "#F53" },
                    pressed: { fill: "#E42" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {clickedCountries.map((country, index) => (
          <Marker key={index} coordinates={country.coordinates}>
            <foreignObject x={-20} y={-20} width={40} height={40}>
              <PieChart
                data={country.chartData}
                style={{ width: "40px", height: "40px" }}
                radius={20}
                lineWidth={100}
              />
            </foreignObject>
            
            {/* Adjusted position for country name to reduce overlap */}
            <text textAnchor="middle" y={15} style={{ fontSize: 10, fill: "black" }}>
              {country.name}
            </text>

            {/* Random number beside the pie chart */}
            <text
              x={25} // Adjust X position as needed
              y={25} // Adjust Y position to avoid overlap
              style={{ fontSize: 10, fill: "blue" }}
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
        <button onClick={handleZoomIn} style={{ marginBottom: "5px" }}>
          +
        </button>
        <button onClick={handleZoomOut}>-</button>
      </div>
    </div>
  );
};

export default GeographyChart;
