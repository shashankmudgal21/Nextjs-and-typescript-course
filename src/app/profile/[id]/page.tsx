export default function UserProfile({params}:any){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-4xl">Profile page</h1>
            <span className="bg-orange-400 text-black text-4xl">{params.id}</span>
        </div>
    )
}