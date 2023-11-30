import {posts} from "../data/store"
import TheCard from "./TheCard"

const publishedPosts = posts.filter((post) => post.published === true);


export default function TheMain(){

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