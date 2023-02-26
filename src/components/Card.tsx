interface ICard {
    id: number
    paragrafh: string
    details: string
}

export const Card = ({id, paragrafh, details}: ICard)=>{
    return (
        <div>
            <h1> Card {id}</h1>
            <p>{paragrafh}</p>
            <span>{details}</span>
        </div>
    )
}