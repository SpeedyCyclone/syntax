export default function TimeSlot({ selected, time }) {
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
        }}
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
        }}
      >
        {time}
      </div>
    );
}
