import React from 'react'
import {useParams} from 'react-router-dom'

export const ProductScreen = () => {
    const dataATenerEnCuenta = useParams();

    console.log(dataATenerEnCuenta)

    return (
        <div>
            <h1>Product screen</h1>
        </div>
    )
}
