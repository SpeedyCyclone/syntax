import TimeSlot from "@/components/TimeSlot";
import style from "../styles/Reserve.module.css";

const Times = [
  {
    time: "5 to 6pm",
    selected: false,
  },
  {
    time: "6 to 7pm",
    selected: false,
  },
  {
    time: "7 to 8pm",
    selected: true,
  },
  {
    time: "8 to 9pm",
    selected: false,
  },
];

export default function Reserve() {
  return (
    <div className={style.body}>
      <div className={style.hero}>
        <h1 className={style.heading}>Reserve a locker</h1>
        <div className={style.selections}>
          <select name="Size" id="size" className={style.select}>
            <option>Size</option>
            <option value="small">Small (2 pairs)</option>
            <option value="medium">Medium (4 pairs)</option>
            <option value="large">Large (6 pairs)</option>
          </select>
          <select name="Location" id="location" className={style.select}>
            <option>Location</option>
            <option value="a">A-Block</option>
            <option value="b">B-Block</option>
            <option value="c">C-Block</option>
          </select>
          <select name="Proximity" id="promixity" className={style.select}>
            <option>Proximity</option>
            <option value="less">1-50 metres</option>
            <option value="normal">51-100 metres</option>
            <option value="more">100+ metres</option>
          </select>
        </div>
      </div>

      <div className={style.details}>
        <div className={style.dateandtime}>
          <div className={style.date}>
            <h2 className={style.subhead}>Date</h2>
            <input type="date" />
          </div>
          <div className={style.time}>
            <h2 className={style.subhead}>Time slot</h2>
            <div className={style.slots}>
              {Times.map((x, i) => (
                <TimeSlot key={i} selected={x.selected} time={x.time} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
