import Create from "../../components/create";
import axios from "axios";

export default function Form() {
  const addLocker = (data) => axios.post("/api/lockers", data);

  return (
    <>
      <Create onSubmit={addLocker} />
    </>
  );
}
