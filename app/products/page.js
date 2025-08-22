export default async function products() {
    const result = await fetch('http://localhost:3000/api/items')
    const {data} = await result.json()

    return (
        <div>
            {
                data.map((singleData, index) => (
                    <div key={index}>
                        <p>{singleData.name}</p>
                        <p>{singleData.description}</p>
                        <p>{singleData.price}</p>
                    </div>
                ))
            }
        </div>
    )
}