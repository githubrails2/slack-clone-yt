import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
		background-color: #340e36;
	}
	> h3 {
		font-weight: 500;
		> span {
			padding: 15px;
		}
	}
	
	> hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #49274b;
	}
`;
export const SidebarOptionChannel = styled.div``;
