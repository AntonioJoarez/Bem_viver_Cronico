import Link from "next/link";


export default function CardIntro() {
    return (
        <div className="bg-green-400 text-white flex bg-no-repeat bg-cover items-center h-44 rounded-2xl shadow-2xl ">
            <h1 className=" px-4 font-bold text-4xl">CÂNCER</h1>
            <div className="border-r-4 border-white h-24"></div>
            <div className="px-4 flex items-center">
                <p className=" mr-4">Câncer (ou tumor maligno) é o nome dado a um conjunto de mais de 100
                 doenças que têm em comum o crescimento desordenado de células.</p>
            </div>
            <Link href="https://www.scielo.br/j/rn/a/mtBrFJpBmgbDLMbMz8Bwrhw/">
                <button>Ver mais...</button>
            </Link>
        </div>
    );
}
