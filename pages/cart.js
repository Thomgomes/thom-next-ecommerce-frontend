import Button from "@/components/Button";
import { CartContext } from "@/components/CartConstext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 40px;
    margin-top: 40px;
    color: #242424;
`

const Box = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 30px;
`

export default function CartPage() {
    const { cartProducts } = useContext(CartContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
                .then(response => {
                    setProducts(response.data)
                })
        }
    }, [cartProducts])
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div>Seu carrinho está vazio</div>
                        )}
                        {products?.length > 0 && (
                            <>
                            <h2>Carrinho</h2>
                            {products.map(product => (
                                <div key={product}>{product.title}: {cartProducts.filter(id => id === product._id).length}</div>
                            ))}
                            </>
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