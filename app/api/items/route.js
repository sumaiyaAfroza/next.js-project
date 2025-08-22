import dbConnect from "@/lib/dbConnect";


export async  function  GET(){
    const data = await dbConnect('allProduct').find().toArray()
    return Response.json({data})
}

export async  function  POST(req){
    const postData = await req.json()
    const data = await dbConnect('allProduct').insertOne(postData)
    return Response.json({data})
}
