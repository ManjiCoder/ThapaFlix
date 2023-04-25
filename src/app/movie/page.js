import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

const page = async () => {
  const url = process.env.RAPID_URL;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  // const res = await fetch(url, options);
  const res = await fetch("http://localhost:3000/sample.json");
  const data = await res.json();
  const main_data = data.titles;
  // console.log(main_data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 className={styles.movie_title}>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.jawSummary.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
