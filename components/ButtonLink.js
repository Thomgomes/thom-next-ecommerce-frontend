import Link from "next/link";
import { styled } from "styled-components";
import { BtnStyle } from "./Button";

const StyleLink = styled(Link)`
    ${BtnStyle}
`

export default function ButtonLink(props) {
    return(
        <StyleLink {...props}/>
    )
}