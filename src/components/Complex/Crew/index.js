import cs from './src/Crew.module.scss';
import { cx } from 'utils';
import Section from 'components/Basic/Section';
import chef from 'assets/chef.jpg';
import bar_service from 'assets/bar_service.jpg';
import waitress from 'assets/waitress.jpg';

const CREW = [
	{
		img: bar_service,
		alt: 'Nasza barmanka Klaudia',
		name: 'Klaudia',
		description:
			'Klaudia zajmuje się barem. Swoją wiedzę zdobyła w Ogólnopolskiej Szkole Barmanów. Jej specjalnością są koktajle na bazie alkoholi białych: wódka, gin, tequila, rum.',
	},
	{
		img: chef,
		alt: 'Nasz kucharz Andrzej',
		name: 'Andrzej',
		description:
			'Andrzej jest naszym szefem kuchni. Jego wieloletnie doświadczenie, zaangażowanie oraz pasja do gotowania czynią go wybitnym ekspertem. Ponadto cały czas rozwija swoje umiejętności biorąc udział w licznych szkoleniach.',
	},
	{
		img: waitress,
		alt: 'Nasza kelnerka Martyna',
		name: 'Martyna',
		description:
			'Martyna jest naszą kelnerką. To bardzo pozytywna i radosna osoba. Wszystkich zaraża swoim uśmiechem. Do tego jest niezwykle zwinna i kocha pracować z ludźmi.',
	},
];

const Crew = () => (
	<Section title='Nasza załoga'>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit magni
			repellendus perspiciatis quis, eaque quae sunt veniam, voluptatem voluptas
			sint saepe rem inventore beatae, optio iure aperiam placeat illum! Maiores
			similique vero, provident est odit, quaerat consequatur ad eveniet
			necessitatibus officiis molestiae sit quod dolorum cum, veniam magnam
			aliquam dolore quisquam nulla consequuntur. Culpa eos dolor aperiam
			repudiandae beatae? Iusto odit blanditiis id distinctio iure ab, culpa
			officia, expedita, eos excepturi beatae in totam sapiente! Expedita, ex
			esse odio nostrum fugiat debitis illum magnam, culpa accusamus quae
			adipisci sunt.
		</p>
		<div className={cx(cs.container)}>
			{CREW.map(({ alt, description, img, name }, idx) => (
				<div className={cx(cs.tile)} key={idx}>
					<img src={img} alt={alt} className={cx(cs.image)} />
					<h3 className={cx(cs.title)}>{name}</h3>
					<p className={cx(cs.description)}>{description}</p>
				</div>
			))}
		</div>
	</Section>
);
export default Crew;
