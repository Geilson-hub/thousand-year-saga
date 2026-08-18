export type Episode = {
  n: number;
  title: string;
  date: string;
  synopsis: string;
};

export type Cour = {
  id: string;
  label: string;
  name: string;
  year: string;
  color: string;
  episodes: Episode[];
};

export const cours: Cour[] = [
  {
    id: "cour-1",
    label: "Cour 1",
    name: "The Blood Warfare",
    year: "Out — Dez 2022",
    color: "blood",
    episodes: [
      { n: 1, title: "The Blood Warfare", date: "10/10/2022", synopsis: "Hollows começam a desaparecer e o Wandenreich anuncia a guerra contra a Soul Society." },
      { n: 2, title: "Foundation Stones", date: "17/10/2022", synopsis: "O exército Quincy invade a Seireitei e os capitães enfrentam os Sternritter." },
      { n: 3, title: "March of the StarCross", date: "24/10/2022", synopsis: "Yhwach revela o poder do Medallion, roubando as Bankai dos capitães." },
      { n: 4, title: "The Fire", date: "31/10/2022", synopsis: "Yamamoto entra em campo e libera Zanka no Tachi contra o imperador Quincy." },
      { n: 5, title: "Wrath as a Lightning", date: "07/11/2022", synopsis: "A verdade sobre o duelo do Capitão-Comandante muda o rumo da batalha." },
      { n: 6, title: "The Fire II", date: "14/11/2022", synopsis: "A Soul Society conta suas perdas enquanto Ichigo tenta chegar a tempo." },
      { n: 7, title: "Born in the Dark", date: "21/11/2022", synopsis: "Ichigo cai no Palácio do Rei e descobre segredos sobre sua origem." },
      { n: 8, title: "The Shooting Star Project", date: "28/11/2022", synopsis: "Ishida encara o passado Quincy e uma escolha impossível." },
      { n: 9, title: "The Drop", date: "05/12/2022", synopsis: "A Zero Division aparece e reconstrói os capitães feridos." },
      { n: 10, title: "Everything But the Rain", date: "12/12/2022", synopsis: "A história de Masaki Kurosaki e o encontro com Isshin é revelada." },
      { n: 11, title: "Everything But the Rain 'Op.2'", date: "19/12/2022", synopsis: "O plano de Aizen e o sacrifício que criou Ichigo." },
      { n: 12, title: "Everything But the Rain 'Op.3'", date: "26/12/2022", synopsis: "A noite da chuva e a origem definitiva dos poderes de Ichigo." },
      { n: 13, title: "Marching Out the ZOMBIES", date: "26/12/2022", synopsis: "Ichigo reforja Zangetsu e retorna para o campo de batalha." },
    ],
  },
  {
    id: "cour-2",
    label: "Cour 2",
    name: "The Separation",
    year: "Jul — Set 2023",
    color: "ember",
    episodes: [
      { n: 14, title: "The Fire", date: "08/07/2023", synopsis: "A segunda invasão começa e a Seireitei se prepara para o pior." },
      { n: 15, title: "The Wolfsbane", date: "15/07/2023", synopsis: "Renji e Rukia mostram o resultado do treino da Zero Division." },
      { n: 16, title: "The Battle", date: "22/07/2023", synopsis: "Rukia libera Hakka no Togame contra As Nodt." },
      { n: 17, title: "Sting the Enemy", date: "29/07/2023", synopsis: "Mayuri Kurotsuchi arma sua vingança contra os zumbis de Giselle." },
      { n: 18, title: "Guillotine", date: "05/08/2023", synopsis: "Rangiku e Hitsugaya enfrentam Bambietta e Cang Du." },
      { n: 19, title: "The Headless Star", date: "12/08/2023", synopsis: "Kenpachi encara Gremmy, o Sternritter mais poderoso." },
      { n: 20, title: "The Headless Star 2", date: "19/08/2023", synopsis: "A imaginação de Gremmy leva a batalha ao limite absoluto." },
      { n: 21, title: "Too Early to Trust", date: "26/08/2023", synopsis: "Uryū Ishida reaparece ao lado de Yhwach." },
      { n: 22, title: "The Silence", date: "02/09/2023", synopsis: "Yamamoto é lembrado e a Soul Society busca respostas." },
      { n: 23, title: "The Shooting Star", date: "09/09/2023", synopsis: "Ichigo confronta as escolhas do amigo." },
      { n: 24, title: "The Master", date: "16/09/2023", synopsis: "Kyōraku assume o comando com uma estratégia arriscada." },
      { n: 25, title: "The Dark Arm", date: "23/09/2023", synopsis: "Aizen volta a cena de forma inesperada." },
      { n: 26, title: "Deicide", date: "30/09/2023", synopsis: "O ataque final do cour e a queda que abala tudo." },
    ],
  },
  {
    id: "cour-3",
    label: "Cour 3",
    name: "The Conflict",
    year: "Jul — Set 2024",
    color: "spirit",
    episodes: [
      { n: 27, title: "Marching Out the ZOMBIES", date: "06/07/2024", synopsis: "A guerra recomeça com os capitães em pleno Bankai restaurado." },
      { n: 28, title: "Baby, Hold Your Hand", date: "13/07/2024", synopsis: "Hitsugaya enfrenta o próprio corpo transformado." },
      { n: 29, title: "The Fundamental Virulence", date: "20/07/2024", synopsis: "Mayuri revela o antídoto e o preço da ciência." },
      { n: 30, title: "The Blade Is Me", date: "27/07/2024", synopsis: "Zaraki encontra o verdadeiro nome de sua Zanpakutō." },
      { n: 31, title: "Wrath as a Lightning", date: "03/08/2024", synopsis: "Byakuya retorna com Senbonzakura em plena força." },
      { n: 32, title: "The Blaze", date: "10/08/2024", synopsis: "Shunsui coloca em prática seu Bankai proibido." },
      { n: 33, title: "The Perfect Crimson", date: "17/08/2024", synopsis: "Renji e Ichigo abrem caminho até o palácio de Yhwach." },
      { n: 34, title: "A Tooth of Fate", date: "24/08/2024", synopsis: "Uryū escolhe seu lado definitivo." },
      { n: 35, title: "The Last 9 Days", date: "31/08/2024", synopsis: "O Reio Palace é invadido e o tempo se esgota." },
      { n: 36, title: "Two Getsuga", date: "07/09/2024", synopsis: "Ichigo desperta uma nova forma de Getsuga Tenshō." },
      { n: 37, title: "The Sun Also Rises", date: "14/09/2024", synopsis: "A batalha decisiva contra o imperador começa." },
      { n: 38, title: "The Ash", date: "21/09/2024", synopsis: "Sacrifícios definem o destino das três dimensões." },
      { n: 39, title: "Farewell, Swords", date: "28/09/2024", synopsis: "O encerramento sangrento e emocionante do arco." },
    ],
  },
];

export const characters = [
  { name: "Ichigo Kurosaki", role: "Shinigami Substituto", power: "Zangetsu • Bankai / Vollständig", img: "char-1" },
  { name: "Byakuya Kuchiki", role: "Capitão da 6ª Divisão", power: "Senbonzakura Kageyoshi", img: "char-2" },
  { name: "Rukia Kuchiki", role: "Capitã da 13ª Divisão", power: "Hakka no Togame", img: "char-3" },
  { name: "Yhwach", role: "Imperador Quincy", power: "The Almighty", img: "char-4" },
  { name: "Uryū Ishida", role: "Sternritter 'A'", power: "Antithesis", img: "char-5" },
  { name: "Orihime Inoue", role: "Humana Espiritual", power: "Shun Shun Rikka", img: "char-6" },
];

export const info = [
  { label: "Título", value: "Bleach: Sennen Kessen-hen" },
  { label: "Estúdio", value: "Studio Pierrot" },
  { label: "Autor", value: "Tite Kubo" },
  { label: "Direção", value: "Tomohisa Taguchi" },
  { label: "Estreia", value: "10 de outubro de 2022" },
  { label: "Episódios", value: "52 (4 cours)" },
  { label: "Gêneros", value: "Ação, Sobrenatural, Shōnen" },
  { label: "Trilha", value: "Shiro Sagisu" },
];
