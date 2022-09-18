import React, { useState } from 'react';

function Description({ description }) {
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
