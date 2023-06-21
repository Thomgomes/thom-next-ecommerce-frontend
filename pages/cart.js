/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import { CartContext } from "@/components/CartConstext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.4fr .6fr;
    gap: 40px;
    margin-top: 40px;
    color: #242424;
`

const Box = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 30px;
`

const ProductInfoCell = styled.td`
    padding: 10px 0;
    max-width: 180px;
`

const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    /* border: 1px solid rgba(0, 0, 0, .1); */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 80px;
        max-height: 80px;
    }
`

const QuantityLabel = styled.span`
    padding: 0 3px;
`
const SpanName = styled.span`
    /* position: absolute; */
`

export default function CartPage() {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext)
    const [products, setProducts] = useState([])
    // const [price, setPrice] = useState(0)

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(response => {
                    setProducts(response.data)
                })
        }
    }, [cartProducts])

    function moreOfThisProduct(id) {
        addProduct(id)
    }
    function lessOfThisProduct(id) {
        removeProduct(id)
    }
    let total = 0
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0
        total += price
    }
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        <h2>Carrinho</h2>
                        {!cartProducts?.length && (
                            <div>Seu carrinho está vazio</div>
                        )}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <td>Produto</td>
                                        <td>Quantidade</td>
                                        <td>Preço</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product}>
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                    <img src={product.images[0]} alt="" />
                                                </ProductImageBox>
                                                <SpanName>

                                                    {product.title}
                                                </SpanName>
                                            </ProductInfoCell>
                                            <td>
                                                <Button onClick={() => lessOfThisProduct(product._id)}>-</Button>
                                                <QuantityLabel>
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </QuantityLabel>
                                                <Button onClick={() => moreOfThisProduct(product._id)}>+</Button>
                                            </td>
                                            <td>
                                                R${cartProducts.filter(id => id === product._id).length * Math.round(product.price)}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>R${total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>Informações do pedido</h2>
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Address 2" />
                            <Button size={'l'} block primary>Continuar pagamento</Button>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    )
}