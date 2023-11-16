    document.addEventListener("DOMContentLoaded", function () {
        // Função para obter os dados da leitura
        async function obterDadosLeitura(componente) {
            const response = await fetch(`/api/leitura/${componente}`, {
                method: 'POST',  // ou 'GET', dependendo da sua implementação do servidor
                headers: {
                    'Content-Type': 'application/json',
                },
                // Adicione aqui o corpo da requisição, se necessário
            });

            const data = await response.json();
            return data;
        }

        // Função para obter os dados da tabela Processos
        async function obterDadosProcessos() {
            const response = await fetch('/api/processos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            return data;
        }

        // Atualiza os dados dinâmicos
        async function atualizarDadosDinamicos() {
            // Obter dados da leitura para CPU
            const dadosCPUPromise = obterDadosLeitura('CPU');
            // Obter dados da leitura para RAM
            const dadosRAMPromise = obterDadosLeitura('RAM');
            // Obter dados da leitura para Disco
            const dadosDiscoPromise = obterDadosLeitura('Disco');
            // Obter dados da tabela Processos
            const dadosProcessosPromise = obterDadosProcessos();

            // Aguardar todas as promessas serem resolvidas
            const [dadosCPU, dadosRAM, dadosDisco, dadosProcessos] = await Promise.all([
                dadosCPUPromise,
                dadosRAMPromise,
                dadosDiscoPromise,
                dadosProcessosPromise
            ]);

            // Atualizar os elementos HTML com os dados obtidos
            document.getElementById('cpuPorcentagem').innerText = `${dadosCPU.porcentagem}%`;
            document.getElementById('ramPorcentagem').innerText = `${dadosRAM.porcentagem}%`;
            document.getElementById('discoPorcentagem').innerText = `${dadosDisco.porcentagem}%`;

            // Atualizar o gráfico com os dados da tabela Processos
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dadosProcessos.labels,
                    datasets: [{
                        label: 'Quantidade de Processos',
                        data: dadosProcessos.quantidades,
                        backgroundColor: ['rgb(2, 30, 70)'],
                        borderWidth: 3,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        // Chamar a função para atualizar os dados ao carregar a página
        atualizarDadosDinamicos();
    });
