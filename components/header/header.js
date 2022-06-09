import styles from "./header.module.css";

const Header = ({ inputHandler, isFavoriteBooks, setIsFavoriteBooks }) => {
  const checkHandler = () => {
    setIsFavoriteBooks(!isFavoriteBooks);
  };

  return (
    <div className={styles.header}>
      <div>
        <label htmlFor="title"> Search your book:</label>
        <input id="title" name="title" type="text" onChange={inputHandler} />
      </div>
      <input
        onChange={() => checkHandler()}
        type="checkbox"
        id="favorite"
        checked={isFavoriteBooks}
      />
      <label htmlFor="favorite">Favorite</label>
    </div>
  );
};

export default Header;
