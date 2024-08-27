export default function Fruits() {
    const fruits = ["Apples", "Bananas", "Mangos", "Pineapples"]
    return (
        <div>
            {fruits.map((fruit)=> (
                <h1>{fruit}</h1>    
            ))}
        </div>
    );

}

