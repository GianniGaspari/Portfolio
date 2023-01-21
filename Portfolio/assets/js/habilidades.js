const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>Linguagem de marcação que é utilizada para criar e estruturar conteúdo para a web. Ele é usado para especificar como o conteúdo deve ser exibido pelo navegador, através de tags (marcações) que especificam como elementos devem ser exibidos na página.</p> <br>',
                    '<p>CSS</p> <br> <p>Linguagem de estilo que permite controlar a aparência de elementos HTML, tais como cores, fontes, espaçamento, layout, entre outros.</p> <br>',
                    '<p>JavaScript</p> <br> <p>Linguagem de programação originalmente criado para adicionar interatividade e dinamismo a páginas web, mas hoje é amplamente utilizado em muitas outras áreas, como desenvolvimento web, mobile, desktop, e até mesmo inteligência artificial e Internet das coisas./p> <br>',
                    '<p>Python</p> <br> <p>Linguagem de programação criada por Guido van Rossum em 1991. Ela tem uma sintaxe simples e fácil de aprender, o que a torna uma boa escolha para iniciantes, mas também é poderosa o suficiente para ser usada em projetos avançados. É utilizado para desenvolvimento web, análise de dados, inteligência artificial e ciência de dados.</p> <br>',
                    '<p>Git</p> <br> <p>Git é um sistema de controle de versão de código-fonte desenvolvido por Linus Torvalds em 2005. Ele permite que os desenvolvedores rastreiem as alterações feitas no código-fonte de um projeto, revertam-nas se necessário e colaborem eficientemente em equipe. <br>',
                    '<p>Github</p> <br> <p>Plataforma de desenvolvimento colaborativo baseada na web que utiliza o sistema de controle de versão Git. Oferece armazenamento de código-fonte e permite a colaboração em projetos de terceiros.</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );
