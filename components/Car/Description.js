import React, { useState } from 'react';

function Description({ description }) {
	console.log(description);
	return (
		<>
			{description && (
				<div className="descriptionWrapper">
					<div dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			)}
		</>
	);
}

export default Description;
