/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartConstext";

const Bg = styled.div`
    background: #222;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`

const Column = styled.div`
    display: flex;
    align-items: center;
`
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart() {
        addProduct(product._id)
    }

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={`/products/${product._id}`} outline={1} white={1}  >Read more</ButtonLink>
                                <Button primary onClick={addFeaturedToCart}>
                                    <CartIcon/>
                                    Add to Cart

                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://thom-next-ecommerce.s3.amazonaws.com/1686148454824.jpg" alt="" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}