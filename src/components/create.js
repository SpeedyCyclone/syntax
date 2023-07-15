import styles from "../styles/Create.module.css";

export default function Form({ addLocker }) {
  return (
    <>
      <h1 className={styles.add}>Add Locker</h1>
      <form action="/api/lockers" method="post" className={styles.form}>
        <div className={styles.inputgroup}>
          <label>Current Status</label>
          <select
            name="current_status"
            id="select"
            placeholder="select"
            className={styles.select}
            required
          >
            <option value="Reserved">Reserved</option>
            <option value="Vacant">Vacant</option>
          </select>
        </div>
        <div className={styles.inputgroup}>
          <label>Reserved Till</label>
          <input name="reserved_till" type="text" placeholder="Reserved Till" />
        </div>
        <div className={styles.inputgroup}>
          <label>Proxmity</label>
          <input
            name="proximity"
            type="string"
            placeholder="Proximity"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>Size</label>
          <input name="size" type="string" placeholder="Size" required />
        </div>

        <div className={styles.inputgroup}>
          <label>Location</label>
          <input
            name="location"
            type="string"
            placeholder="Location"
            required
          />
        </div>
        <div className={styles.inputgroup}>
          <button type="submit" onSubmit={addLocker} className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
