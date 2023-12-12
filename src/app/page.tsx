import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Doencas from "./components/Doencas";
import DoencasIcons from "./components/DoencasIcons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="bg-black relative w-full h-[500px] overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/fundoMedico.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Conteúdo aqui */}
          <Content />

        </div>
      </div>
      <div className="absolute top-2/3 left-10 right-11 w-full h-[500px] overflow-hidden flex items-center">
        <div className="relative bg-sky-500 w-[300px] p-5 shadow-xl">
          <img
            className="w-full h-full object-cover opacity-10 absolute top-0 left-0"
            src="/doencasComuns.jpg"
            alt=""
          />
          <div className="relative z-10 text-center">
            <h1 className="text-white text-2xl font-semibold my-1">As DCNT'S</h1>
            <h1 className="text-slate-800 text-2xl font-bold my-2">Mais Comuns no Brasil</h1>
            <p>Segundo o Ministério da Saúde, 57,4 milhões dos brasileiros possui ao menos uma das doenças
              crônicas não transmissíveis (DCNT). Dentre as mais prevalentes neste cenário estão a hipertensão,
              os problemas de coluna, o diabetes, a artrite, o reumatismo, a depressão e a asma. </p>
            <br />
            <button className="bg-slate-800 text-white px-10 py-2 m-2">
              <a href="https://www.clinicaceu.com.br/blog/doencas-cronicas-nao-transmissiveis/#:~:text=Segundo%20o%20Minist%C3%A9rio%20da%20Sa%C3%BAde,a%20depress%C3%A3o%20e%20a%20asma."></a>
              Ver mais</button>
          </div>

        </div>
        <div className="m-4 relative bg-slate-200 w-full right-12 left-12 h-[396px]">
          {/* <img
                    className="w-full h-full object-cover opacity-5 absolute top-0 left-0"
                    src="/doencasComuns.jpg"
                    alt=""
                /> */}
          <div className="justify-center items-center p-10 flex">
            <Link href="/diabetes" legacyBehavior>
              <a>
                <DoencasIcons name="Diabetes" doencaIcon={<img src="teste-de-diabetes.png" style={{ opacity: 1 }} />} />
              </a>
            </Link>
            <DoencasIcons name="Cardiovasculares" doencaIcon={<img src="/coracao.png" />} />
            <Link href="/cancer" legacyBehavior>
              <a>
                <DoencasIcons name="Câncer" doencaIcon={<img src="/dna.png" />} />
              </a>
            </Link>
            <DoencasIcons name="Respiratórias" doencaIcon={<img src="/pulmoes.png" />} />
          </div>
          <div className="justify-center items-center flex mt-[-1rem]">
            <Link href="/obesidade" legacyBehavior>
              <a>
                <DoencasIcons name="Obesidade" doencaIcon={<img src="obesidade.png" />} />
              </a>
            </Link>

            <DoencasIcons name="Osteoporose" doencaIcon={<img src="/artrite.png" />} />
            <DoencasIcons name="Hipertensão" doencaIcon={<img src="/hipertensao.png" />} />
          </div>
        </div>
      </div>
    </main>
  );
}
