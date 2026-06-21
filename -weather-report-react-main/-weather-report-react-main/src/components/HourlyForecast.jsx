function HourlyForecast() {
  const data = [
    { time: "Now", icon: "☁️", temp: "18°" },
    { time: "15:00", icon: "☁️", temp: "19°" },
    { time: "16:00", icon: "🌤️", temp: "20°" },
    { time: "17:00", icon: "🌧️", temp: "16°" },
    { time: "18:00", icon: "🌥️", temp: "17°" },
  ];
  return (
    <>
      <section className="hourly_section">
        <div className="hourly_heading">
          <div className="hourly_title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="time-icon size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3>Hourly Forecast</h3>
          </div>
          <p>See full day</p>
        </div>
        <div className="hourly_box-container">
          {data.map((item, index) => {
            return (
              <div key={index} className="hourly_box">
                <p>{item.time}</p>
                <p>{item.icon}</p>
                <p>{item.temp}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default HourlyForecast;
