import axios from 'axios';

export const obterConselho = async () => {
  try {
    const resposta = await axios.get(`https://api.adviceslip.com/advice`);

    return {
      conselho: resposta.data.slip.advice,
      id: resposta.data.slip.id,
    };
  } catch (erro) {
    console.error('Erro ao obter conselho:', erro);
    return null; // ou algum valor padrão, dependendo do seu caso
  }

};
