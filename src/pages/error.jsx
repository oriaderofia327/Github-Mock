export default function error() {
    const handleClick = () => {
        throw new Error('Sorry, an error has happened. Try again later')
    }

    return (
        <div>
            <h1>Error page</h1>
            <button onClick={handleClick}>Test Button</button>
        </div>
    )
}