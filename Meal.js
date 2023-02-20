import React, {useState, useEffect} from "react";
export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch (
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=37f166e8dbc54b6f83550713f73a4aeb&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(()=> {
                console.log("error");
            });
    },[meal.id]);

    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}> Go to recipe</a>
        </article>
    );
}
