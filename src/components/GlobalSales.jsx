import React from 'react';

const GlobalSalesByTopLocations = () => {
  const data = [
    { country: 'USA', sales: 2920, percentage: 53.23 },
    { country: 'Germany', sales: 1300, percentage: 20.43 },
    { country: 'Australia', sales: 760, percentage: 10.35 },
    { country: 'United Kingdom', sales: 690, percentage: 7.87 },
    { country: 'Romania', sales: 600, percentage: 5.94 },
    { country: 'Brasil', sales: 550, percentage: 4.34 },
  ];

  return (
    <div>
      <h2 style={styles.global}>Global Sales by Top Locations</h2>
      <div style={styles.header}>
        <p style={styles.product}>All products that were shipped</p>
        <hr style={styles.line} />
      </div>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={styles.row}>
              <td colSpan={3} style={styles.cellContainer}>
                <div style={styles.countryCell}>
                  <img src={`/flags/${item.country.toLowerCase()}.png`} width="24" height="16" style={styles.image} />
                  {item.country}
                </div>
                <div style={styles.salesCell}>{item.sales}</div>
                <div style={styles.percentageCell}>{item.percentage}%</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  global: {
    fontSize: "22px",
    color: "#333333",
    marginTop: "10px",
    marginLeft: "10px"
  },
  product: {
    fontSize: "14px",
    color: "#9a9a9a",
    marginTop: "-15px",
    marginLeft: "10px",
  },
  line: {
    margin: "10px 0",
    border: "none",
    borderTop: "1px solid #ccc",
    width : "570px",
    marginLeft : "15px"
  },
  image: {
    marginRight: "10px",
  },
  cellContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: "1px solid #ccc",
    width : "570px",
    marginLeft : "15px", // Single line under the row
    padding: "10px 0",
  },
  countryCell: {
    fontSize: "14px",
    color: "#212529",
    display: 'flex',
    alignItems: 'center',
    marginRight: "auto",// Use auto margin to push sales to the right
    paddingLeft : "70px"
  },
  salesCell: {
    fontSize: "14px",
    color: "#212529",
    paddingLeft: "200px",
    marginRight: "30px", // Add some space between sales and percentage
  },
  percentageCell: {
    fontSize: "14px",
    color: "#212529",
    paddingLeft: "100px",
  },
};

export default GlobalSalesByTopLocations;
