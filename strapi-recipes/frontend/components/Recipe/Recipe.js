import styles from "./Recipe.module.css";
import Link from "next/link";

const Recipe = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className={styles.card}>
        <div className={styles.name}>{recipe.attributes.Name}</div>
        <img
          src={`http://localhost:1337${recipe.attributes.photo.data.attributes.formats.thumbnail.url}`}
          alt={recipe.name}
          className={styles.image}
        />
        <span className={styles.category}>
          {recipe.attributes.category.data.attributes.category}
        </span>
      </div>
    </Link>
  );
};

export default Recipe;
