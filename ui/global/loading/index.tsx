import "./loading.css"
const CircleLoader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="lds-ring "><div></div><div></div><div></div><div></div></div>
        </div>)
}

export default CircleLoader