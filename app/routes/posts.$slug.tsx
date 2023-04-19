import { LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "~/models/post.server";


export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;
    const post = await getPostBySlug(slug);
    return json({ post }); //ensure to destructure the post object
}

export default function PostsRoute() {
    const { post } = useLoaderData();

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};



