import Link from 'next/link';

export default async function Products() {
    const res = await fetch('http://localhost:3000/api/items')
    const {data} = await res.json()
    // console.log(data)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {
                data.map((singleData, index) => (
                    <div key={singleData._id || index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{singleData.name}</h3>
                        <p className="text-gray-600 mb-4">{singleData.description}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-blue-600">${singleData.price}</p>
                            <Link href={`/products/${singleData._id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                                Details
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}