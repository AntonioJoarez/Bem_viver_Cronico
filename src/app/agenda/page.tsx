"use client";
// @refresh
import { ChangeEvent, SetStateAction, useState } from "react";
import NavBar from "../components/NavBar";

export default function Cancer() {
  const handleHorarioUltimoRemedioChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHorarioUltimoRemedio(event.target.value);
  };

  const handleIntervaloMedicacaoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIntervaloMedicacao(event.target.value);
  };
  const [horarioUltimoRemedio, setHorarioUltimoRemedio] = useState('00:00');
  const [intervaloMedicacao, setIntervaloMedicacao] = useState('2-2');
  // Função para gerar as opções de horários
  const generateTimeOptions = () => {
    const options = [];
    for (let i = 0; i < 24; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      options.push(`${formattedHour}:00`);
    }
    return options;
  };

  const handleAgendarClick = () => {
    const [intervalHours, intervalMinutes] = intervaloMedicacao.split('-').map(Number);

    const agora = new Date();
    const ultimoRemedioDate = new Date(agora);
    const [ultimoRemedioHours, ultimoRemedioMinutes] = horarioUltimoRemedio.split(':').map(Number);
    ultimoRemedioDate.setHours(ultimoRemedioHours, ultimoRemedioMinutes);

    const proximaTomaDate = new Date(ultimoRemedioDate);
    proximaTomaDate.setHours(proximaTomaDate.getHours() + intervalHours);
    proximaTomaDate.setMinutes(proximaTomaDate.getMinutes() + intervalMinutes);

    if (agora.getTime() >= proximaTomaDate.getTime()) {
      // Está na hora de tomar o remédio
      alert('Tome seu remédio!');
    } else {
      // Não está na hora ainda
      const tempoRestanteHoras = Math.ceil((proximaTomaDate.getTime() - agora.getTime()) / (1000 * 60 * 60));
      alert(`Ainda não está na hora de tomar o remédio. Faltam aproximadamente ${tempoRestanteHoras} horas.`);
    }
  };
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="w-full h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover "
          src="/horas-remedio.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-32 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold text-sky-500 mb-1">AGENDE SEUS REMÉDIOS</h1>
        <p className="text-sky-500 text-2xl">Agende e ajuste seus horários de remédios e te daremos um alerta</p>
        <br />
        <br />
        {/* Inputs para capturar as informações */}
        <div className=" mt-4 text-black">
          <label htmlFor="horarioUltimoRemedio" className="block text-black">
            Horário do último remédio:
          </label>
          <select
            id="horarioUltimoRemedio"
            className="w-44 p-2 border border-gray-500 rounded-xl"
            onChange={handleHorarioUltimoRemedioChange}
          >
            {generateTimeOptions().map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="mt-4 text-black">
          <label htmlFor="intervaloMedicacao" className="block text-black">
            De quantas em quantas horas é sua medicação:
          </label>
          <select
            id="intervaloMedicacao"
            className="w-44  p-2 border border-gray-500 rounded-xl"
            onChange={handleIntervaloMedicacaoChange}
          >
            <option value="2-2">2 em 2 horas</option>
            <option value="4-4">4 em 4 horas</option>
            <option value="8-8">8 em 8 horas</option>
            <option value="16-16">16 em 16 horas</option>
            <option value="1">1 vez por dia</option>
          </select>
          <button
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-xl"
            onClick={handleAgendarClick}
          >
            Agendar
          </button>
        </div>
        </div>

       

      </div>
      {/* Botão de Agendar */}

    </main>
  );
}
