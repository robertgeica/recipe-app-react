import React from 'react';
import styles from '../styles/RecipeModal.css';
import Modal from 'react-modal';

const RecipeModal = ({selectedRecipe, handleCloseModal, title, calories, ingredients, time, nutrients}) => (

    <Modal
        isOpen={!!selectedRecipe}

        contentLabel="Selected Recipe"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
    
        <h1 className="modal__title">{title}</h1>

        <p className="ingredients__title">Ingredients:</p>
        <ul className="recipe__ingredients">
            {ingredients.map(item => (
                <li>{item.text}</li>
            ))}
        </ul>


        <p className="nutrients_title">Nutrients:</p>
        
        <ul className="recipe__nutrients">
            {nutrients.map(item => (
                
                item.label == 'Carbs' &&
                    <li>{item.label}: {~~item.total} {item.unit} </li>
            ))}

            <li>Calories: {Math.floor(calories)} calories</li>
        </ul>

                        
        <p className="recipe__time">Time: {time} mins</p>

        <button 
            onClick={handleCloseModal}
            className="modalButton"
        >
            Close modal
        </button>




    </Modal>



);

export default RecipeModal;