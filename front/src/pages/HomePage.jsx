import { useLoaderData, Link } from "react-router-dom"

export default function HomePage () {
    const data = useLoaderData()
    console.log(data)
    return (
        <main className="flex flex-wrap gap-4">
            {
                data && data.map(item => (
                    <Link to={item.name} key={(item.name)}>
                        <img src={item.url}/>
                        <p>{item.name}</p>
                    </Link>
                ))
            }
        </main>
    )
}