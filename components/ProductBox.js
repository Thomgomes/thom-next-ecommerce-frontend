/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components"
import Button from "./Button"
import CartIcon from "./icons/Cart"

const ProductWrapper = styled.div`
    color: #000;
`

const WhiteBox = styled.div`
    background: #fff;
    height: 120px;
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 90px;
    }
`

const Title = styled.h2`
    font-weight: normal;
    font-size: .9rem;
    margin: 0;
    height: 48px;
    max-height: 48px;
    overflow: hidden;

`

const ProductInfoBox = styled.div`
    margin-top: 5px;
`

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
    padding: 0 3px;
`

const Price = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export default function ProductBox({ _id, title, description, price, images }) {
    return (
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title>{title}</Title>
                <PriceRow>
                    <Price>
                        R${Math.round(price)}
                    </Price>
                    <div>
                        <Button primary outline> <CartIcon /> </Button>
                    </div>
                </PriceRow>

            </ProductInfoBox>
        </ProductWrapper>
    )
}