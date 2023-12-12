import Link from "next/link";

const divStyle = {
    backgroundImage: 'url("/podcast.png")',
     // Substitua pelo caminho real da sua imagem
}

export default function CardPodcasts() {
    return (
        <div className="text-white bg-center flex items-center h-44 rounded-2xl shadow-2xl " style={divStyle}>
            <h1 className="px-4 font-bold text-4xl">POCASTS <br /> SOBRE <br /> ESSE ASSUNTO</h1>
            <div className="border-r-4 border-white h-36"></div>
            <div className="px-4 flex items-center">
                <p className="mr-4">Aqui você ouvirá uma sequência de podcasts selecionados
                sobre o assunto desejado.</p>
            </div>
            <Link href="">
                <button>Ouvir</button>
            </Link>
        </div>
    );
}
