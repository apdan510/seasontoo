import React, { useState } from 'react';
import TheEye from '../the-eye';
import './styles.scss';

export default function TheCode({ html = '', hidden = true }) {
	const [isHidden, toggle] = useState(hidden);
	const switchVisibility = () => toggle(!isHidden);

	return (
		<section className="s-code">
			<h3 className="title"></h3>
		</section>
	);
}
