import React, { useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import {
    RecipeContainer,
    RecipeName,
    SeeNewTab,
    SeeMoreText,
    CoverImage,
    IngredientsText,
} from './StyledComponent';

const RecipeComponent = (props) => {
    const [show, setShow] = useState("");
    const { label, image, ingredients, url } = props.recipe;
    return (
        <>
            <RecipeContainer>
                <Dialog
                    onClose={() => console.log("adsadad")}
                    aria-labelledby="simple-dialog-title"
                    open={!!show}
                >
                    <DialogTitle>Ingredients</DialogTitle>
                    <DialogContent>
                        <RecipeName>{label}</RecipeName>
                        <table>
                            <thead>
                                <th>Ingredient</th>
                                <th>Weight</th>
                            </thead>
                            <tbody>
                                {ingredients.map((ingredient, index) => (
                                    <tr key={index} className="ingredient-list">
                                        <td>{ingredient.text}</td>
                                        <td>{ingredient.weight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </DialogContent>
                    <DialogActions>
                        <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
                        <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
                    </DialogActions>
                </Dialog>
                <CoverImage src={image} alt={label} />
                <RecipeName>{label}</RecipeName>
                <IngredientsText onClick={() => setShow(!show)}>
                    Ingredients
                </IngredientsText>
                <SeeMoreText onClick={() => window.open(url)}>
                    See Complete Recipe
                </SeeMoreText>
            </RecipeContainer>
        </>
    );
};

export default RecipeComponent;