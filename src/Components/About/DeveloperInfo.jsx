

export default function DeveloperInfo({name, description}){
    return(
        <div className=" h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 p-3 rounded-lg">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-gray-700">{description}</p>
        </div>
    )
}