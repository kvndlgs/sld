export default function Head({title, description}){
    return (
        <head>
            <title> `Shield signalisation | ${title}`</title>
            <meta name="description" content={description} /> 
        </head>
    )
}