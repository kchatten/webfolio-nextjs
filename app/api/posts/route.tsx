import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "./mongodb";

export async function GET(req: NextRequest) {

    try {
        const client = await connectToDatabase();

        const db = client.db("blog");
        const posts = db.collection("posts");
        const postsData = await posts.find().toArray();

        if (!posts) {
            return NextResponse.json({
                status: 404,
                body: {
                    message: 'Posts not found'
                }
            })
        }
        return NextResponse.json({
            status: 200,
            body: {
                post: postsData
            }
        })
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error)
        return NextResponse.json({
            status: 500,
            body: {
                message: 'Internal server error'
            }
        })
    }
}