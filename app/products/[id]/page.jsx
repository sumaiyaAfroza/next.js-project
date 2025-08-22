import React from 'react'
import dbConnect from "@/lib/dbConnect";
import {ObjectId} from "mongodb";

export default async function DetailsPage({params}) {
    const {id} = await params

    const singleProduct = await dbConnect('allProduct').findOne({
        _id : new ObjectId(id)
    })
    // console.log(singleProduct)

    return (
        <>
            <div>{singleProduct.name}</div>
            <div>{singleProduct.description}</div>
            <div>{singleProduct.price}</div>
        </>
    )
}
