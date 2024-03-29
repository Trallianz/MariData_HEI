//example 185 --> "3h 5min"
const TimeCalc = (x: number) => {
    let hours: number;
    let minutes: number;

    hours = Math.floor(x / 60);
    minutes = x % 60;

    if (x < 60) {
      return (minutes + "min")
    }
    else {
      return (hours + "h " + minutes + "min")
    }
}

export default TimeCalc