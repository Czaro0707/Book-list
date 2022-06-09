import Head from "next/head";
import Book from "../components/ui/book";
import Header from "../components/header/header";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";

const URI = "https://gnikdroy.pythonanywhere.com/api/book/?format=json";

export default function Home() {
  const [books, setBooks] = useState();
  const [input, setInput] = useState("");
  const [isFavoriteBooks, setIsFavoriteBooks] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetch(URI)
      .then((data) => data.json())
      .then((response) => {
        setBooks(response.results);
      });
  }, []);

  if (books === undefined) {
    return <h1>Loading data....</h1>;
  }

  return (
    <>
      <Head>
        <title>Book list</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header
        isFavoriteBooks={isFavoriteBooks}
        setIsFavoriteBooks={setIsFavoriteBooks}
        inputHandler={inputHandler}
      />
      <div className={styles.home}>
        {books.map((book, index) => (
          <Book
            book={book}
            key={index}
            isFavoriteBooks={isFavoriteBooks}
            input={input}
          />
        ))}
      </div>
    </>
  );
}
