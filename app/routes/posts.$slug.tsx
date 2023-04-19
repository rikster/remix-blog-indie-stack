import { LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "~/models/post.server";
import { marked } from "marked";

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;
    const post = await getPostBySlug(slug);
    const html = marked(post.markdown);
    return json({ title: post.title, html }); //reduce payload size 
}

export default function PostsRoute() {
    const { title, html } = useLoaderData();

    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
};



