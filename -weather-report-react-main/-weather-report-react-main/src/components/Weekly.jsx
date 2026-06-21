function Weekly({ forecast }) {
  return (
    <>
      <section className="weekly_section">
        <h3>5-DAY FORECAST</h3>
        <div className="weekly_container">
          {forecast.map((item, index) => {
            return (
              <div key={index} className="weekly_box">
                <h4>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </h4>
                <p>{item.weather[0].description}</p>
                <p>{Math.round(item.main.temp)}°C</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Weekly;
