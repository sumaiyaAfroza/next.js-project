'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Swal from 'sweetalert2';

const ProductForm = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!name || !description || !price) {
            setError('All fields are required.');
            return;
        }
        if (isNaN(Number(price)) || Number(price) <= 0) {
            setError('Price must be a valid positive number.');
            return;
        }

        const newProduct = {
            name,
            description,
            price: Number(price),
        };

        try {
            const response = await fetch('https://next-js-project-zeta-ten.vercel.app/api/items', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            console.log(result);

            // Success Alert
            Swal.fire({
                title: "Success!",
                text: "Product has been added successfully.",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });

            setProducts([...products, newProduct]);
            setName('');
            setDescription('');
            setPrice('');
            setError('');

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while adding the product.",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "Try Again"
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Add Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter product name"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <Input
                                id="price"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                                className="mt-1"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" className="w-full">
                            Add Product
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductForm;
