import {posts} from "../data/store"
import TheCard from "./TheCard"

export default function TheMain(){

    const publishedPosts = posts.filter((post) => post.published === true);


    return(
        publishedPosts.map((post)=>(
            <TheCard 
            key={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            tags={post.tags}
            published={post.published}
            />
        ))
    )

}