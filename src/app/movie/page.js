import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

const page = async () => {
  const { RAPID_KEY, RAPID_URL } = process.env;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const res = await fetch(RAPID_URL, options);
  // const res = await fetch("http://localhost:3000/sample.json");
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

export const metadata = {
  title: "Movie",
  description:
    "ThapaFlix is a webapp here you can get all movie/show detail like NetFlix",
};
export default page;
