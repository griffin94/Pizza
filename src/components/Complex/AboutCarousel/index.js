import React from 'react';
import { Carousel } from 'components';
import cs from './src/AboutCarousel.module.scss';
import { cx } from 'utils';
import hearth from 'assets/hearth.webp';
import pizza from 'assets/pizza.jpg';
import table from 'assets/table.jpg';

const images = [
	{
		id: 0,
		src: hearth,
		alt: 'Piec, w którym przygotowujemy naszą pizzę',
	},
	{
		id: 2,
		src: pizza,
		alt: 'Nasze pizze są wyśmienite',
	},
	{
		id: 3,
		src: table,
		alt: 'Nasz lokal',
	},
];

const AboutCarousel = () => (
	<Carousel className={cs.carousel} variant='scroll'>
		<Carousel.Slides>
			{images.map((props) => (
				<Carousel.Slide key={props.id}>
					<figure className={cx(cs.figure)}>
						<img
							{...props}
							className={cx(cs.image)}
						/>
            <figcaption className={cx(cs.figcaption)}>
              {props.alt}
            </figcaption>
					</figure>
				</Carousel.Slide>
			))}
		</Carousel.Slides>
		<Carousel.Gallery>
			{images.map((props) => (
				<Carousel.Slide key={props.id}>
					<img {...props} />
				</Carousel.Slide>
			))}
		</Carousel.Gallery>
	</Carousel>
);

export default AboutCarousel;
