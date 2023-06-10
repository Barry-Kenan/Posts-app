import Image from 'next/image';
import { FC } from 'react';
import Card from '../Card/Card';
import styles from './ProfileInfo.module.scss';
import { ProfileInfoProps } from './ProfileInfo.props';

const ProfileInfo: FC<ProfileInfoProps> = ({ profile }) => {
	if (!profile) {
		return <></>;
	}
	return (
		<>
			<Card className={styles.profileInfo}>
				<Image
					className={styles.image}
					src={profile.image}
					alt='profile image'
					width={30}
					height={50}
				/>
				<div
					className={styles.name}
				>{`${profile.name} ${profile.surname}`}</div>
				<div className={styles.email}>{profile.email}</div>
			</Card>
		</>
	);
};

export default ProfileInfo;
