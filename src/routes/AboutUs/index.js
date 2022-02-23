import React from 'react';
import { Carousel } from 'components';
import images from './Data';
import cs from './AboutUs.module.scss';

const Home = () => {
	return (
		<div>
			<Carousel className={cs.carousel} variant='fade'>
				<Carousel.Slides>
					{images.map((props, idx) => (
						<Carousel.Slide key={idx}>
							<figure style={{ position: 'relative' }}>
								<img {...props} style={{ maxWidth: '100%' }} />
								<figcaption
									style={{
										position: 'absolute',
										top: '70%',
										left: '50%',
										transform: 'translateX(-50%)',
										color: '#fff',
									}}
								>
									{props.alt}
								</figcaption>
							</figure>
						</Carousel.Slide>
					))}
				</Carousel.Slides>
				<Carousel.Gallery visibleSlides={2}>
					{images.map((props, idx) => (
						<Carousel.Slide key={idx}>
							<img {...props} />
						</Carousel.Slide>
					))}
				</Carousel.Gallery>
			</Carousel>
		</div>
	);
};

export default Home;
