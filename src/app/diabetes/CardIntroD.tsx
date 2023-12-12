import Link from "next/link";


export default function CardIntro() {
    return (
        <div className=" text-white bg-blue-300 flex items-center h-44 rounded-2xl shadow-2xl ">
            <h1 className=" px-4 font-bold text-4xl">DIABETES</h1>
            <div className="border-r-4 border-white h-24"></div>
            <div className="px-4 flex items-center">
                <p className=" mr-4">Diabetes Mellitus (DM) é uma síndrome metabólica de origem múltipla,
                    decorrente da falta de insulina e/ou da incapacidade e/ou falta de insulina
                    exercer adequadamente seus efeitos, caracterizando altas taxas de açúcar no sangue
                    (hiperglicemia) de forma permanente.</p>
            </div>
            <Link href="https://www.scielo.br/j/abem/a/yjg8YbM6k8KhCB6BWFQCBGy/?format=html/">
                <button className="">Ver mais...</button>
            </Link>
        </div>
    );
}
