import { FC } from 'react';
import styles from '../Image/image.module.scss';

interface ImageProps {
	src: string;
	alt: string;
}

const BackgroundImage: FC<ImageProps> = ({ src, alt }) => {
	return (
		<div className={styles['background-image']}>
			<img src={src} alt={alt} />
		</div>
	);
};

export default BackgroundImage;
