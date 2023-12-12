import Link from "next/link";


export default function CardIntro() {
    return (
        <div className="bg-orange-400 text-white flex items-center h-44 rounded-2xl shadow-2xl " >
            <h1 className=" px-4 font-bold text-4xl">OBESIDADE</h1>
            <div className="border-r-4 border-white h-24"></div>
            <div className="px-4 flex items-center">
                <p className=" mr-4">A obesidade é o acúmulo de gordura no corpo causado quase sempre por um consumo de
                    energia na alimentação, superior
                    àquela usada pelo organismo para sua manutenção e realização das atividades do dia-a-dia. </p>

            </div>
            <Link href="https://www.scielo.br/j/csp/a/wwpLxnVtjhrszGk9GxVh3yx/">
                <button className="">Ver mais...</button>
            </Link>
        </div>
    );
}
