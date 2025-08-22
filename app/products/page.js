
export default  async  function products() {
    const result = await fetch('http://localhost:3000/api/items')
    const data = await result.json()
    return (
        <div>
            <p> {JSON.stringify(data)}</p>
        </div>
    )
}
