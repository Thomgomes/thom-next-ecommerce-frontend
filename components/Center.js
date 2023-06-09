import { styled } from "styled-components";

const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    /* background-color: red; */
`;

export default function Center({children}) {
    return (
        <StyledDiv>{children}</StyledDiv>
    )
}