```javascript
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => {
	const style = { height: 500 };
	return <div className="item" style={style} data-value={index} />;
});

const Carousel = () => <AliceCarousel mouseTracking items={items} />;
```
