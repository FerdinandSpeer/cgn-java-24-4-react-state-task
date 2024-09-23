import {useState} from "react";
import {response} from "../assets/dataRickAndMorty.ts";


export type CharacterRickAndMorty = {
    id: number,
    name: string
    status: string
}


export default function CharacterRickAndMorty(){

    const [char, setChar] = useState<CharacterRickAndMorty[]>(response.results);



    return(
        <>
            {char.map(currywurst => <p>{currywurst.name}</p>)}
        </>
    )
}