import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ data }) => {
	const { name, category } = useParams();

	const dishDetails = ((data = []) => {
		const result = data.filter((dish) => dish.name === name);
		return result.length ? result : null;
	})(data?.[category]);

	return (
		<>
			{dishDetails && (
				<>
					<h1>Pizza name - {name}</h1>
					<pre style={{ fontSize: '2rem' }}>
						{JSON.stringify(dishDetails, null, 2)}
					</pre>
				</>
			)}
		</>
	);
};

export default Details;
