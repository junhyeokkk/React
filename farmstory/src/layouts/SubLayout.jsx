import Aside from "../components/common/Aside";
import Nav from "../components/common/Nav";
import useCates from "../hooks/useCates";

// eslint-disable-next-line react/prop-types
export default function SubLayout({ children }) {
  const [cate1, cate2] = useCates();

  return (
    <div id="sub">
      <div>
        {cate1 === "introduction" && (
          <img src="../images/sub_top_tit1.png" alt="INTRODUCTION" />
        )}
        {cate1 === "market" && (
          <img src="../images/sub_top_tit2.png" alt="MARKET" />
        )}
        {cate1 === "croptalk" && (
          <img src="../images/sub_top_tit3.png" alt="CROPTALK" />
        )}
        {cate1 === "event" && (
          <img src="../images/sub_top_tit4.png" alt="EVENT" />
        )}
        {cate1 === "community" && (
          <img src="../images/sub_top_tit5.png" alt="COMMUNITY" />
        )}
      </div>
      <section className={cate1}>
        <Aside />
        <article className={cate2}>
          <Nav />

          {children}
        </article>
      </section>
    </div>
  );
}
