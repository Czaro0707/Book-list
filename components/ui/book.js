import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./book.module.css";

const Book = ({ book, isFavoriteBooks, input }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const textFormat = "txt";
  const imageSize = "medium";
  let link;
  let image;

  const { title, agents } = book;
  const authors = agents.map((author) => author.person);
  const authorName = authors.map((author) => author.split(","));

  const textResources = book.resources.filter(
    (resource) => resource.type === "text/plain; charset=utf-8"
  );

  const imageResources = book.resources.filter(
    (resource) => resource.type === "image/jpeg"
  );

  textResources.forEach((resource) => {
    if (resource.uri.includes(textFormat)) {
      link = resource.uri;
    }
  });

  imageResources.forEach((resource) => {
    if (resource.uri.includes(imageSize)) {
      image = resource.uri;
    }
  });

  if (!book.title.includes(input) && input) {
    return <p></p>;
  }

  if (isFavoriteBooks && !isFavorite) {
    return <p></p>;
  }

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={book.title}
          height={180}
          width={140}
          layout="responsive"
        ></Image>
      </div>

      <h1>{title}</h1>
      <h2>{authorName}</h2>
      <div className={styles.functionality}>
        <Link href={link}>
          <a> Read a book</a>
        </Link>
        {isFavorite ? (
          <div onClick={() => setIsFavorite(false)} className={styles.favorite}>
            <Image
              alt="favorite"
              src={"/images/star.png"}
              height={24}
              width={24}
            ></Image>
          </div>
        ) : (
          <div onClick={() => setIsFavorite(true)} className={styles.favorite}>
            <Image
              alt="favorite"
              src={"/images/empty-star.png"}
              height={24}
              width={24}
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
