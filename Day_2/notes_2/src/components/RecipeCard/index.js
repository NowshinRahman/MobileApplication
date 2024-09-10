import Card from './Card.js'
import RecipeImg from './Recipeimg.js'
import RecipeInfo from './RecipeInfo.js'
import IngredientList from './IngredientsList.js'
//import RECIPE_IMG from '../../assets/pancake.png'
import {RECIPE} from './recipe-data.js'
import './styles.css'

export default function RecipeCard () {
    return (
        <Card>
        
            {/* RecipeImg*/}
            <div>
                {/* <img src= {RECIPE.imgSrc} alt="pancake" /> */}
                <RecipeImg imgSrc= {RECIPE.imgSrc} altText = {RECIPE.title}/>
            </div>

            <div>
            {/* RecipeInfo*/}
                {/* <RecipeInfo> */}
                <div>
                    <h2>{RECIPE.title}</h2>
                    <p>
                        {RECIPE.description}
                    </p>
                </div>
            </div>



            <div>
                {/* IngredientList*/}
                <div>
                    <IngredientList/>
                    <h3>Ingredients</h3>
                    <ul>
                        {RECIPE.ingredients.map((ingredient, index) => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                {/* InstructionsList*/}
                <div>
                    <h3>Instructions</h3>
                    <ol>
                        {RECIPE.instructions.map((instructions, index) => {
                            return <li key= {index}>{instructions}</li>
                        })}
                    </ol>
                </div>

            </div>
        
    </Card>
    )
}