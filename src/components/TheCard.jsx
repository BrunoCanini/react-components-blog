export default function TheCard(props){

    return (

        <div className=" w-[600px]  mx-auto rounded-xl mt-5 bg-white shadow-lg">
            <div className=" h-[400px] rounded-t-xl bg-gray-300 flex items-center justify-center">  
                <img src={props.image} className="object-cover w-[600px] h-[400px] rounded-t-xl" alt="" />
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-lg font-bold">{props.title}</h2>
                <p className="">{props.content}</p>
                <h4 className="text-l font-bold">Tags:</h4>
                <ul>
                    {props.tags.map((tag,i)=>{
                        return <li key={i} className="" >{tag}</li>
                    })}
                </ul>
                <button className="uppercase p-3 bg-yellow-500 w-fit text-white">Leggi di più</button>
            </div>
        </div>
        

    )

}