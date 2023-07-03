const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-name">
        <h3>{recipe.attributes.name}</h3>
      </div>
      <img
        src={`http://localhost:1337${recipe.attributes.photo.data.attributes.formats.thumbnail.url}`}
        alt={recipe.name}
        className="recipe-image"
      />

      <span className="category">
        {recipe.attributes.category.data.attributes.category}
      </span>
    </div>
  );
};

export default Recipe;
