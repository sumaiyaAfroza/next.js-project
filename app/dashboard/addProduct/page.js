'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProductForm = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
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

        // Add new product
        const newProduct = {
            id: products.length + 1,
            name,
            description,
            price: Number(price),
        };

        setProducts([...products, newProduct]);
        setName('');
        setDescription('');
        setPrice('');
        setError('');
    };

    const handleDetailsClick = (product) => {
        alert(`Details for ${product.name}:\nDescription: ${product.description}\nPrice: $${product.price}`);
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

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                {products.length === 0 ? (
                    <p className="text-gray-500">No products added yet.</p>
                ) : (
                    <div className="grid gap-4">
                        {products.map((product) => (
                            <Card key={product.id}>
                                <CardContent className="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-gray-600">{product.description}</p>
                                        <p className="text-gray-800 font-medium">${product.price}</p>
                                    </div>
                                    <Button variant="outline" onClick={() => handleDetailsClick(product)}>
                                        Details
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductForm;