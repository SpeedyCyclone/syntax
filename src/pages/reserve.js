import TimeSlot from "@/components/TimeSlot";
import style from "../styles/Reserve.module.css";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

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
    selected: false,
  },
  {
    time: "8 to 9pm",
    selected: false,
  },
];

const NoLocker = ({ msg }) => {
  return <div className={style.vacant}>{msg ?? "No Locker found"}</div>;
};

const LockerAvailable = ({ locker }) => {
  const [booked, setBooked] = useState(false);

  return (
    <div className={style.vacant}>
      <div
        style={{
          color: "#C2FFAD",
          fontSize: "1.5rem",
          margin: "2rem",
        }}
      >
        Vacant Locker Found!
      </div>
      <div
        style={{
          margin: "1.5rem",
        }}
      >
        Locker #{locker.id}
      </div>
      <div>
        Size: {locker.size} <br />
        Location: {locker.location} <br />
        Proximity from entrance: {locker.proximity}
      </div>
      {booked ? (
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QRCodeSVG
            value={`https://syntax-taupe.vercel.app/validate/${locker.id}?key=`}
          />
          <p style={{ marginTop: "1rem" }}>Scan the QR Code at the locker.</p>
        </div>
      ) : (
        <div className={style.book} onClick={() => setBooked(true)}>
          Book Now
        </div>
      )}
    </div>
  );
};

export default function Reserve({ data }) {
  const [selected, changeSelected] = useState("");
  const [filter, setFilter] = useState({
    size: undefined,
    location: undefined,
    proximity: undefined,
    date: undefined,
    time: undefined,
  });

  const res = data;
  console.log(res);

  const [filtered, setFiltered] = useState(
    res.filter((x) => {
      return (
        x.current_status != "Reserved" &&
        parseInt(x.reserved_till) != filter.date + filter.time &&
        (filter.size != undefined && filter.size != "Size"
          ? x.size === filter.size
          : true) &&
        (filter.location != undefined && filter.location != "Location"
          ? x.location === filter.location
          : true) &&
        (filter.proximity != undefined && filter.proximity != "Proximity"
          ? x.proximity === filter.proximity
          : true)
      );
    })
  );

  const selectTime = (i) => {
    changeSelected(Times[i].time);
    let dummy = filter;
    dummy["time"] =
      (parseInt(Times[i].time.split(" ")[0]) + 13) * 60 * 60 * 1000;
    setFilter(dummy);
    setFiltered(
      res.filter((x) => {
        return (
          x.current_status != "Reserved" &&
          parseInt(x.reserved_till) != filter.date + filter.time &&
          (filter.size != undefined && filter.size != "Size"
            ? x.size === filter.size
            : true) &&
          (filter.location != undefined && filter.location != "Location"
            ? x.location === filter.location
            : true) &&
          (filter.proximity != undefined && filter.proximity != "Proximity"
            ? x.proximity === filter.proximity
            : true)
        );
      })
    );
  };

  const handleSelect = (event, type) => {
    let dummy = filter;
    console.log(type, event.target.value, filter);
    dummy[type] =
      type === "date"
        ? Math.floor(new Date(event.target.value).getTime())
        : event.target.value;
    setFilter(dummy);
    setFiltered(
      res.filter((x) => {
        return (
          x.current_status != "Reserved" &&
          parseInt(x.reserved_till) != filter.date + filter.time &&
          (filter.size != undefined && filter.size != "Size"
            ? x.size === filter.size
            : true) &&
          (filter.location != undefined && filter.location != "Location"
            ? x.location === filter.location
            : true) &&
          (filter.proximity != undefined && filter.proximity != "Proximity"
            ? x.proximity === filter.proximity
            : true)
        );
      })
    );
  };

  return (
    <div className={style.body}>
      <div className={style.hero}>
        <h1 className={style.heading}>Reserve a locker</h1>
        <div className={style.selections}>
          <select
            name="Size"
            id="size"
            className={style.select}
            onChange={(e) => handleSelect(e, "size")}
          >
            <option>Size</option>
            <option value="small">Small (2 pairs)</option>
            <option value="medium">Medium (4 pairs)</option>
            <option value="large">Large (6 pairs)</option>
          </select>
          <select
            name="Location"
            id="location"
            className={style.select}
            onChange={(e) => handleSelect(e, "location")}
          >
            <option>Location</option>
            <option value="A-Block">A-Block</option>
            <option value="B-Block">B-Block</option>
            <option value="C-Block">C-Block</option>
          </select>
          <select
            name="Proximity"
            id="promixity"
            className={style.select}
            onChange={(e) => handleSelect(e, "proximity")}
          >
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
            <input type="date" onChange={(e) => handleSelect(e, "date")} />
          </div>
          <div className={style.time}>
            <h2 className={style.subhead}>Time slot</h2>
            <div className={style.slots}>
              {Times.map((x, i) => (
                <TimeSlot
                  key={i}
                  idx={i}
                  select={selectTime}
                  selected={selected === x.time}
                  time={x.time}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            color: "white",
          }}
        >
          {filter.date && filter.time ? (
            Object.keys(filtered).length <= 0 ? (
              <NoLocker />
            ) : (
              <LockerAvailable locker={filtered[0]} />
            )
          ) : (
            <NoLocker msg={"Please select date and time."} />
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  let data = await fetch("https://syntax-taupe.vercel.app/api/lockers", {
    method: "GET",
  }).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
};
