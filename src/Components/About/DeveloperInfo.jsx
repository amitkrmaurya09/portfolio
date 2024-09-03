

export default function DeveloperInfo({name, description}){
    return(
        <div className=" h-fit bg-gradient-to-r  from-indigo-500 to mb-4 p-3 rounded-lg">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-gray-700 font-bold">{description}</p>
        </div>
    )
}