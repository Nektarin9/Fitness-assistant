import styled from 'styled-components';
import { Button } from '../button/button';
import { Input } from '../input/input';

interface ClientFormContainerProps {
	className?: string;
	setPhotoUrl: (url: string) => void;
	photoUrl: string;
	setClientName: (name: string) => void;
	clientName: string;
	setClientPhone: (phone: string) => void;
	clientPhone: string;
	setClientAge: (age: string) => void;
	clientAge: string;
	btnOnclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: string;
}

const ClientFormContainer = ({
	className,
	setPhotoUrl,
	photoUrl,
	setClientName,
	clientName,
	setClientPhone,
	clientPhone,
	setClientAge,
	clientAge,
	btnOnclick,
	children,
}: ClientFormContainerProps) => {
	return (
		<div className={className}>
			<div className="containerInput">
				<p>Фото (URL 150x150):</p>
				<Input
					value={photoUrl}
					onChange={({ target }) => setPhotoUrl(target.value)}
					width="300px"
					type="text"
					placeholder="URL"
				/>
			</div>
			<div className="containerInput">
				<p>Имя клиента:</p>
				<Input
					value={clientName}
					onChange={({ target }) => setClientName(target.value)}
					width="300px"
					type="text"
					placeholder="Имя"
				/>
			</div>
			<div className="containerInput">
				<p>Телефон:</p>
				<Input
					value={clientPhone}
					onChange={({ target }) => setClientPhone(target.value)}
					width="300px"
					type="text"
					placeholder="Телефон"
				/>
			</div>
			<div className="containerInput">
				<p>Возраст:</p>
				<Input
					value={clientAge}
					onChange={({ target }) => setClientAge(target.value)}
					width="300px"
					type="number"
					placeholder="Возраст"
				/>
			</div>
			<Button onClick={btnOnclick}>{children}</Button>
		</div>
	);
};

export const ClientForm = styled(ClientFormContainer)`
	display: block;
	text-align: center;
	margin: 20px auto;

	.containerInput {
		margin: 20px;
	}
	p {
		font-size: 18px;
		margin: 5px;
	}
`;
