import { useRef } from 'react';
import { Button } from '../../../components';
import { Input } from '../../../components';
import styled from 'styled-components';

interface ClientFormContainerProps {
	className?: string;
	setPhotoFile: (file: File | null) => void;
	photoFile: File | null;
	setClientName: (name: string) => void;
	clientName: string;
	setClientPhone: (phone: string) => void;
	clientPhone: string;
	setClientAge: (age: string) => void;
	clientAge: string;
	btnOnclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: string;
	setPhotoUrl: (photoUrl: string) => void;
	photoUrl: string;
	setDefaultImg: (photoUrl: string) => void;
}

const ClientFormContainer = ({
	className,
	setPhotoFile,
	setClientName,
	clientName,
	setClientPhone,
	clientPhone,
	setClientAge,
	clientAge,
	btnOnclick,
	children,
	setPhotoUrl,
	photoUrl,
	setDefaultImg,
}: ClientFormContainerProps) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	return (
		<div className={className}>
			<div className="containerInput">
				<p>Фото (URL 150x150):</p>
				<input
					type="file"
					multiple
					ref={fileInputRef}
					onChange={({ target }) => {
						if (target.files !== null) {
							const selectedFile = target.files[0];
							const formData = new FormData();
							formData.append('image', selectedFile);
							setPhotoFile(selectedFile);
							setDefaultImg('ADD');
							const reader = new FileReader();

							reader.onload = () => {
								if (typeof reader.result === 'string') {
									setPhotoUrl(reader.result);
								}
							};
							if (selectedFile) {
								reader.readAsDataURL(selectedFile);
							}
						}
					}}
				/>
				<img className="img-uploaded" src={photoUrl} alt="Uploaded" />
				<span
					onClick={() => {
						setPhotoUrl('http://90.156.169.143:4000/uploads/default.jpg');
						setPhotoFile(null)
						setDefaultImg('RESET');
						if (fileInputRef.current) {
							fileInputRef.current.value = '';
						  }
					}}
					className="img-close "
				>
					<i className="fa fa-times" aria-hidden="true"></i>
				</span>
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
		position: relative;
		margin: 20px;
	}
	p {
		font-size: 18px;
		margin: 5px;
	}
	.img-uploaded {
		display: block;
		margin: 15px auto;
		border: 1px solid #393939;
		border-radius: 10px;
		width: 150px;
		height: 150px;
	}
	.img-close {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 9999;
		top: 62px;
		right: 70px;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background-color: rgb(99, 36, 36);
		font-size: 18px;
		color: #ffffff;
	}
`;
