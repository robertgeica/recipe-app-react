import React, {useEffect, useState} from 'react';
import styles from '../styles/Recipe.module.css';
import RecipeModal from './RecipeModal';

const Recipe = ({title, calories, image, ingredients, time, nutrients}) => {

	const [selectedRecipe, setShouldOpen] = useState(false);

	const handleOpenModal = (e) => {
		setShouldOpen(e.target);
	}

	const handleCloseModal = () => {
		setShouldOpen(undefined);
	}

    return (
        <div className={styles.recipe}>

            <RecipeModal 
				selectedRecipe={selectedRecipe}
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}

                title={title} 
                calories={calories}
                image={image}
                ingredients={ingredients}
                time={time}
                nutrients={nutrients}
            />


            <h1 className={styles.recipe__title}>{title}</h1>

            <button onClick={handleOpenModal} className="button">Check instructions</button>

            <img className={styles.image} src={image} alt=""/>

        </div>


    );
};

export default Recipe;