import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

//create a async arrow fuction to fetch the posts
export const loader = async () => {

    const posts = [
        {
            id: 1,
            title: 'Post 1',
            content: 'This is the content of post 1'
        },
        {
            id: 2,
            title: 'Post 2',
            content: 'This is the content of post 2'
        }
    ];


    return json({ posts })
}


export default function PostsRoute() {

    //get the posts from the loader
    const { posts } = useLoaderData();

    //return the list of posts
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );

};