import { Card, Tag } from '@/components';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import styles from './ProfilePage.module.scss';
import { ProfilePageProps } from './ProfilePage.props';
import GithubIcon from './github.svg';
import MessageIcon from './message.svg';
import PhoneIcon from './phone.svg';
import TelegramIcon from './telegram.svg';

const ProfilePage: FC<ProfilePageProps> = ({
	profile,
	className,
	...props
}) => {
	const [toast, setToast] = useState<boolean>(false);
	const copy = (text: string) => {
		setToast(true);
		navigator.clipboard.writeText(text);
	};
	useEffect(() => {
		const timerId = setTimeout(() => setToast(false), 2000);
		return () => clearTimeout(timerId);
	}, [toast]);

	if (profile == null) {
		return <>Загрузка...</>;
	}
	return (
		<Card color='blue' className={cn(styles.wrapper, className)}>
			<Image
				className={styles.image}
				src={profile.image as string}
				alt='image'
				width='200'
				height='220'
				style={{ objectFit: 'contain', borderRadius: '15px' }}
				priority={true}
			/>
			<div className={styles.fullName}>
				{profile.surname} {profile.name}
			</div>
			<div className={styles.jobTitle}>{profile.jobTitle}</div>
			<div className={styles.address}>
				{profile.address.country} {profile.address.city}
			</div>
			<div className={cn(styles.email, styles.hov)}>
				<MessageIcon />
				<span className={styles.marginLeft} onClick={() => copy(profile.email)}>
					{profile.email}
				</span>
			</div>
			<div className={cn(styles.phone, styles.hov)}>
				<PhoneIcon />
				<span className={styles.marginLeft} onClick={() => copy(profile.phone)}>
					{profile.phone}
				</span>
			</div>
			<Link
				href={profile.github}
				target='_blank'
				className={cn(styles.github, styles.hov)}
			>
				<GithubIcon />
				<span className={styles.marginLeft}>{profile.github}</span>
			</Link>
			<Link
				href={profile.telegram}
				target='_blank'
				className={cn(styles.telegram, styles.hov)}
			>
				<TelegramIcon />
				<span className={styles.marginLeft}>{profile.telegram}</span>
			</Link>
			<Tag color='red' size='m' href={profile.hh}>
				Ссылка на hh.ru
			</Tag>
			<div className={styles.skills}>
				<div>Ключевые навыки:</div>
				{profile.skills.map(s => (
					<Tag key={s} color='black' size='m'>
						{s}
					</Tag>
				))}
			</div>
			{toast && (
				<ToastContainer className={styles.toastContainer} position='top-center'>
					<Toast className={styles.toast}>
						<Toast.Body>Скопировано</Toast.Body>
					</Toast>
				</ToastContainer>
			)}
		</Card>
	);
};

export default ProfilePage;
