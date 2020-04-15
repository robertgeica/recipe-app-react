import React from 'react';
import styles from '../styles/FormSubmit.css';

const FormSubmit = ({search, getSearch, updateSearch}) => (

    <form onSubmit={getSearch} className="search-form">
		<input className="search-bar" type="test" value={search} onChange={updateSearch} />
        <br />

		<button className="button" >
			Search for a recipe
		</button>

	</form>
	
)

export default FormSubmit;