import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Recipe from "../components/recipe";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ recipes }) {
  return (
    <div>
      <Head>
        <title>Strapi Recipe Book</title>
      </Head>
      <div id="recipe-container">
        {recipes.data.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recipeRes = await fetch("http://127.0.0.1:1337/api/recipes?populate=*");
  const categoryRes = await fetch("http://127.0.0.1:1337/api/categories");

  const recipes = await recipeRes.json();
  const categories = await categoryRes.json();

  return {
    props: {
      recipes,
      categories,
    },
  };
}
