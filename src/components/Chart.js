function Chart() {
  const data = [
    { label: "Users", value: 80, color: "primary" },
    { label: "Products", value: 60, color: "success" },
    { label: "Orders", value: 90, color: "warning" },
  ];

  return (
    <div className="card p-3 mt-4">
      <h5 className="mb-3">Statistics Overview</h5>

      {data.map((item, index) => (
        <div key={index} className="mb-3">

          <div className="d-flex justify-content-between">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>

          <div className="progress">
            <div
              className={`progress-bar bg-${item.color}`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Chart;


















