import moment from "moment";
import "./main.css";

document.querySelector("button").onclick = () => {
  let eventTime = moment("19-11-2020 08:30:00", "DD-MM-YYYY HH:mm:ss").unix(),
    currentTime = moment().unix(),
    diffTime = eventTime - currentTime,
    duration = moment.duration(diffTime * 1000, "milliseconds"),
    interval = 1000;

  setInterval(function() {
    duration = moment.duration(
      duration.asMilliseconds() - interval,
      "milliseconds"
    );
    let d = moment.duration(duration).days(),
      h = moment.duration(duration).hours(),
      m = moment.duration(duration).minutes(),
      s = moment.duration(duration).seconds();

    // show how many hours, minutes and seconds are left
    document.querySelector(".days").innerHTML = d;
    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".minutes").innerHTML = m;
    document.querySelector(".seconds").innerHTML = s;
  }, interval);
};
