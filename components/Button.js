import { css, styled } from "styled-components"

export const BtnStyle = css`
    border: 0;
    padding: 7px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    svg{
        height: 16px;
        margin-right: 5px;
    }
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #aaa;
    `}
    ${props => props.primary && !props.outline && css`
        background-color: #5542f6;
        color: #fff;
        border: 1px solid #5542f6;
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: #5542f6;
        border: 1px solid #5542f6;
    `}
    ${props => props.size === 'l' && css`
        font-size:1.2rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}
`

const StyledBtn = styled.button`
    ${BtnStyle}
`

export default function Button({children, ...rest}) {
    return(
        <StyledBtn {...rest}>{children}</StyledBtn>
    )
}