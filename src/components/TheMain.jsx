import {posts} from "../data/store"

export default function TheMain(){

    const publishedPosts = posts.filter((post) => post.published === true);

    return(

        <div>

            { publishedPosts.map((item, i)=>{
                return <div key={i} className=" w-[600px]  mx-auto rounded-xl mt-5 bg-white shadow-lg">
                <div className=" h-[400px] rounded-t-xl bg-gray-300 flex items-center justify-center">  
                    <img src={item.image} className="object-cover w-[600px] h-[400px] rounded-t-xl" alt="" />
                </div>
                <div className="p-4 flex flex-col gap-4">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="">{item.content}</p>
                    <h4 className="text-l font-bold">Tags:</h4>
                    <ul>
                        {item.tags.map((tag,i)=>{
                            return <li key={i}>{tag}</li>
                        })}
                    </ul>
                    <button className="uppercase p-3 bg-yellow-500 w-fit text-white">Leggi di più</button>
                </div>
            </div>
            })}

        </div>

    )
}