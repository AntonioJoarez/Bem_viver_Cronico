import Link from "next/link";


const divStyle = {
    backgroundImage: 'url("/videos.jpg")',
    // Substitua pelo caminho real da sua imagem
}

export default function CardVideos() {
    return (
        <div className="text-white bg-center bg-cover flex items-center h-44 rounded-2xl shadow-2xl " style={divStyle}>
            <h1 className="px-4 font-bold text-4xl">VÍDEOS <br /> SOBRE <br /> ESSE ASSUNTO</h1>
            <div className="border-r-4 border-white h-36"></div>
            <div className="px-4 flex items-center">
                <p className="mr-4">Aqui você ouvirá uma sequência de vídeos selecionados
                    sobre o assunto desejado.</p>
            </div>
            <Link href="https://www.youtube.com/watch?v=u6fm1otnCj0&list=PL64CXaqYSyJBsm2yfb5lWi0hJcX7X5FMG&ab_channel=DrauzioVarella">
                <button>Assistir</button>
            </Link>
        </div>
    );
}
