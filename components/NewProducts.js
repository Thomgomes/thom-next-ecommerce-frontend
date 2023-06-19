import { styled } from "styled-components"
import Center from "./Center"
import ProductBox from "./ProductBox"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 28px;
    padding-top: 30px;

`

const Title = styled.h2`
    color: #242424;
    font-size: 2.4rem;
    margin: 35px 0 0;
`

export default function NewProducts({ products }) {
    return (
        <Center>
            <Title>Novos Productos</Title>
            <ProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox key={product} {...product} />
                ))}
            </ProductsGrid>
        </Center>
    )
}