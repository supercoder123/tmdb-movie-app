import React, { FunctionComponent, SVGProps } from 'react';
import Action from '@/assets/images/action.svg?component';
import Adventure from '@/assets/images/adventure.svg?component';
import Animation from '@/assets/images/cartoon.svg?component';
import Comedy from '@/assets/images/comedy.svg?component';
import Crime from '@/assets/images/crime.svg?component';
import Documentary from '@/assets/images/documentary.svg?component';
import Drama from '@/assets/images/drama.svg?component';
import Family from '@/assets/images/family.svg?component';
import Fantasy from '@/assets/images/fantasy.svg?component';
import History from '@/assets/images/history.svg?component';
import Music from '@/assets/images/music.svg?component';
import Mystery from '@/assets/images/mystery.svg?component';
import Romance from '@/assets/images/romance.svg?component';
import ScienceFiction from '@/assets/images/sciencefiction.svg?component';
import TVMovie from '@/assets/images/tv.svg?component';
import Thriller from '@/assets/images/thriller.svg?component';
import Horror from '@/assets/images/horror.svg?component';
import War from '@/assets/images/war.svg?component';
import Western from '@/assets/images/western.svg?component';
import { Text } from '../Text';
import { Flex } from '../Flex';

const iconMap: {[key: string]: FunctionComponent<SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>} = {
	28: Action,
	12: Adventure,
	16: Animation,
	35: Comedy,
	80: Crime,
	99: Documentary,
	18: Drama,
	10751: Family,
	14: Fantasy,
	36: History,
	27: Horror,
	10402: Music,
	9648: Mystery,
	10749: Romance,
	878: ScienceFiction,
	10770: TVMovie,
	53: Thriller,
	10752: War,
	37: Western
};

const genreStringMap: { [key in number]: string} = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'ScienceFiction',
	10770: 'TVMovie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western'
};

type GenreIconProps = {
	genreId: number;
}

export const GenreIcon = ({genreId, ...props}: GenreIconProps) => {
	const Icon = iconMap[genreId];
	const genre = genreStringMap[genreId];

	return (
		<>
			<Flex my={10} marginRight={20} flexDirection="column" alignItems="center">
				<Icon height={30} width={30} {...props} fill="white" />
				<Text>{genre}</Text>
			</Flex>
		</>
	);
};
