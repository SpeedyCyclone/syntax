export default function TimeSlot({ idx, select, selected, time }) {
  if (!selected)
    return (
      <div
        style={{
          padding: "1.2rem",
          backgroundColor: "white",
          color: "black",
          fontSize: ".75rem",
          fontFamily: "'Press Start 2P'",
          width: "fit-content",
          transition: "all 230ms ease-in",
        }}
        onClick={() => select(idx)}
      >
        {time}
      </div>
    );
  else
    return (
      <div
        style={{
          padding: "1.2rem",
          backgroundColor: "#C2FFAD",
          borderRadius: "1rem",
          color: "black",
          fontSize: ".75rem",
          fontFamily: "'Press Start 2P'",
          width: "fit-content",
          transition: "all 230ms ease-in",
        }}
        onClick={() => select(idx)}
      >
        {time}
      </div>
    );
}
