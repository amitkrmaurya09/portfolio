import ProfileImage from '../assets/photo.png'


export default function Main(){
return(
    <div className="h-screen px-28 py-12">
        <img className='h-96 w-96 rounded-full float-end' src={ProfileImage} />
        <h1 className="text-center">Amit kumar</h1>
    </div>
)
}