import styled from 'styled-components';

interface MessageContainerProps {
	className?: string;
	children?: string;
	backgroundColor?: string;
}

const MessageContainer = ({ className, children }: MessageContainerProps) => {
	return <div className={className}>{children}</div>;
};

export const Message = styled(MessageContainer)`
	background-color: ${({ backgroundColor = '#26ae5cbd' }) => backgroundColor};
	color: #ffffff;
	position: fixed;
	max-width: 200px;
	padding: 10px;
	font-size: 18px;
	border-radius: 10px;
	font-weight: 500;
	top: 15px;
	right: 15px;
	z-index: 100;
	word-wrap: break-word;
	word-break: break-all;
`;
