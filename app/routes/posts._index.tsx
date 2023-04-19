import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";

type LoaderData = {
    posts: Awaited<ReturnType<typeof getPostListings>>;
};

//create a async arrow fuction to fetch the posts
export const loader: LoaderFunction = async () => {
    const posts = await getPostListings();
    return json({ posts })
}

export default function PostsRoute() {

    // get the posts from the loader
    const { posts } = useLoaderData() as LoaderData;
    //const posts = useLoaderData().posts as Awaited<ReturnType<typeof getPostsListings>>;

    //return the list of posts
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};