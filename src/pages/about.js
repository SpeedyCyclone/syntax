import style from "../styles/About.module.css";

export default function About() {
  return (
    <div class={style.body}>
      <h1 className={style.heading}>About</h1>

      <div className={style.content}>
        <div>
          Losing precious footwear, especially slippers, during a visit to the
          revered Delhi Bangla Sahib Gurudwara has been an unfortunate recurring
          issue for Sikh Delhites and visitors alike. The hassle of keeping a
          constant watch on your footwear and the subsequent loss can diminish
          the spiritual experience and leave visitors feeling distressed.
          Traditional locker systems lack efficient digital control, leading to
          inconvenience and inefficiency in managing the storage and retrieval
          process. To address this long-standing concern, we at Footwear
          Guardian recognized the need for a modern and user-friendly solution
          that ensures the safekeeping and easy retrieval of visitors' cherished
          footwear.
        </div>

        <div style={{ marginTop: "2rem" }}>
          Footwear Guardian is a pioneering web app and interface, developed in
          collaboration with DPSI Syntax, specifically designed to offer a
          seamless and secure experience for storing and retrieving visitors'
          footwear during their visit to Delhi Bangla Sahib Gurudwara. Our
          innovative solution aims to revolutionize the way visitors interact
          with the Gurudwara's locker facilities, making it an integral part of
          their spiritual journey.
        </div>
      </div>
    </div>
  );
}
