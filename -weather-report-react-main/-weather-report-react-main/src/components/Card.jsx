function Card({ weather }) {
  const card = [
    {
      head: "💧 HUMIDITY",
      value: weather?.main?.humidity ? `${weather.main.humidity}%` : "N/A",
      desc: "The dew point is 12° right now.",
    },
    {
      head: "💨 WIND SPEED",
      value: weather?.wind?.speed ? `${weather.wind.speed} Km/h` : "N/A",
      desc: "North-easterly winds.",
    },
    {
      head: "☀️ UV INDEXY",
      value: "4 Moderate",
      desc: "Low risk of sun damage.",
    },
    {
      head: "👁️ VISIBILITY",
      value: weather?.visibility ? `${weather.visibility / 1000} Km` : "N/A",
      desc: "Clear view of horizon.",
    },
  ];
  return (
    <>
      <section className="card_section">
        {card.map((item, index) => {
          return (
            <div key={index} className="card_box">
              <h1>{item.head}</h1>
              <span>{item.value}</span>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
export default Card;
