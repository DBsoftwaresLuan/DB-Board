// ==================== DADOS MOCK - ROBÔS E EXECUÇÕES ====================

// Lista de robôs cadastrados (expandida)
const robos = [
  // Indústria Machado S.A
  { id: 1,  nome: "Validador NF-e",           cliente: "Indústria Machado S.A",  tipo: "Validação",    plataforma: "UiPath",        slaSegundos: 45,  horarioCritico: "14-15", statusRobo: "ativo",   descricao: "Valida notas fiscais eletrônicas antes de registrar no ERP",            icone: "fa-file-invoice", versao: "3.2.1" },
  { id: 2,  nome: "Integrador ERP",           cliente: "Indústria Machado S.A",  tipo: "Integração",   plataforma: "Automation Anywhere", slaSegundos: 30, statusRobo: "ativo", descricao: "Sincroniza dados entre sistemas SAP e Oracle",                            icone: "fa-arrows-rotate",versao: "2.0.4" },
  { id: 3,  nome: "Emissor de Certificados",  cliente: "Indústria Machado S.A",  tipo: "Geração",      plataforma: "Power Automate",slaSegundos: 15,  statusRobo: "ativo",   descricao: "Emite certificados de qualidade após aprovação de lote",                  icone: "fa-certificate",  versao: "1.1.0" },
  { id: 4,  nome: "Auditor Fiscal",           cliente: "Indústria Machado S.A",  tipo: "Auditoria",    plataforma: "UiPath",        slaSegundos: 120, statusRobo: "pausado", descricao: "Revisa automaticamente obrigações fiscais e gera relatório de auditoria", icone: "fa-magnifying-glass-chart", versao: "1.3.2" },

  // Logística Rápida Ltda
  { id: 5,  nome: "Gestor de Estoque",        cliente: "Logística Rápida Ltda",  tipo: "Processamento",plataforma: "UiPath",        slaSegundos: 60,  statusRobo: "ativo",   descricao: "Atualiza níveis de estoque em tempo real com base nas entradas/saídas",  icone: "fa-boxes-stacked",versao: "4.0.1" },
  { id: 6,  nome: "Importador XML",           cliente: "Logística Rápida Ltda",  tipo: "Importação",   plataforma: "Blue Prism",    slaSegundos: 40,  statusRobo: "ativo",   descricao: "Importa arquivos XML de fornecedores e popula banco de dados",            icone: "fa-file-code",    versao: "2.2.0" },
  { id: 7,  nome: "Rastreador de Entregas",   cliente: "Logística Rápida Ltda",  tipo: "Monitoramento",plataforma: "UiPath",        slaSegundos: 20,  statusRobo: "ativo",   descricao: "Monitora status de entregas em múltiplas transportadoras",                icone: "fa-truck-fast",   versao: "3.1.0" },
  { id: 8,  nome: "Classificador de Cargas",  cliente: "Logística Rápida Ltda",  tipo: "Classificação",plataforma: "Power Automate",slaSegundos: 35,  statusRobo: "erro",    descricao: "Classifica cargas por rota, peso e prioridade automaticamente",           icone: "fa-layer-group",  versao: "1.0.3" },

  // Financeira Norte S.A
  { id: 9,  nome: "Processador de Boletos",   cliente: "Financeira Norte S.A",   tipo: "Financeiro",   plataforma: "Automation Anywhere", slaSegundos: 90,  horarioCritico: "16-18", statusRobo: "ativo", descricao: "Processa e registra boletos bancários no sistema de cobrança", icone: "fa-barcode", versao: "5.3.0" },
  { id: 10, nome: "Conciliador Bancário",     cliente: "Financeira Norte S.A",   tipo: "Conciliação",  plataforma: "Blue Prism",    slaSegundos: 120, statusRobo: "ativo",   descricao: "Concilia extratos bancários com movimentações do ERP financeiro",         icone: "fa-scale-balanced", versao: "2.4.1" },
  { id: 11, nome: "Analisador de Crédito",    cliente: "Financeira Norte S.A",   tipo: "Análise",      plataforma: "UiPath",        slaSegundos: 200, statusRobo: "ativo",   descricao: "Analisa proposta de crédito e consulta bureaus externos (Serasa/SPC)",    icone: "fa-chart-pie",    versao: "3.0.0" },
  { id: 12, nome: "Gerador de DARFs",         cliente: "Financeira Norte S.A",   tipo: "Geração",      plataforma: "Power Automate",slaSegundos: 60,  statusRobo: "pausado", descricao: "Calcula e emite DARFs de tributos federais automaticamente",              icone: "fa-receipt",      versao: "1.2.1" },

  // Varejo Sul Comércio
  { id: 13, nome: "Extrator de Notas",        cliente: "Varejo Sul Comércio",    tipo: "Coleta",       plataforma: "UiPath",        slaSegundos: 25,  statusRobo: "ativo",   descricao: "Extrai notas fiscais de portais estaduais e consolida em banco de dados", icone: "fa-file-export",  versao: "2.1.4" },
  { id: 14, nome: "Monitor de Preços",        cliente: "Varejo Sul Comércio",    tipo: "Web Scraping", plataforma: "UiPath",        slaSegundos: 180, statusRobo: "ativo",   descricao: "Monitora preços de concorrentes em e-commerces e marketplaces",           icone: "fa-tag",          versao: "4.2.0" },
  { id: 15, nome: "Sincronizador E-commerce", cliente: "Varejo Sul Comércio",    tipo: "Integração",   plataforma: "Automation Anywhere", slaSegundos: 45, statusRobo: "ativo", descricao: "Sincroniza catálogo, preços e estoque entre WooCommerce e ERP",      icone: "fa-shop",         versao: "3.3.1" },
  { id: 16, nome: "Processador de Devoluções",cliente: "Varejo Sul Comércio",    tipo: "Processamento",plataforma: "Blue Prism",    slaSegundos: 80,  statusRobo: "erro",    descricao: "Processa solicitações de devolução e aciona fluxo de reembolso",          icone: "fa-rotate-left",  versao: "2.0.2" },

  // DB Interno
  { id: 17, nome: "Gerador de Relatórios",    cliente: "DB Softwares (Interno)", tipo: "Reporting",    plataforma: "Power Automate",slaSegundos: 300, statusRobo: "ativo",   descricao: "Consolida métricas de todos os clientes e gera relatório executivo diário",icone: "fa-chart-column", versao: "1.5.0" },
  { id: 18, nome: "Monitor de Infraestrutura",cliente: "DB Softwares (Interno)", tipo: "Monitoramento",plataforma: "UiPath",        slaSegundos: 10,  statusRobo: "ativo",   descricao: "Monitora disponibilidade dos servidores e envia alertas via e-mail",      icone: "fa-server",       versao: "2.1.0" },
];

// Função para gerar data aleatória nos últimos N dias
function gerarDataAleatoria(diasAtras = 7) {
  const data = new Date();
  data.setDate(data.getDate() - Math.floor(Math.random() * diasAtras));
  data.setHours(Math.floor(Math.random() * 23), Math.floor(Math.random() * 59), 0);
  return data;
}

// Função para determinar status baseado em regras de negócio (simula falhas realistas)
function determinarStatus(robo, hora) {
  // Regras de falha para simular padrões que a IA vai detectar
  
  // 1. Validador NF-e: timeout entre 14h-15h (70% de chance de falha)
  if (robo.id === 1 && hora >= 14 && hora < 15) {
    return Math.random() < 0.7 ? "timeout" : "sucesso";
  }
  
  // 2. Integrador ERP: degradação piora ao longo da semana (sexta pior)
  const diaSemana = new Date().getDay();
  if (robo.id === 2 && diaSemana === 5) { // sexta
    return Math.random() < 0.4 ? "falha" : "sucesso";
  }
  
  // 3. Processador de Boletos: segundas-feiras têm mais falhas
  if (robo.id === 4 && diaSemana === 1) { // segunda
    return Math.random() < 0.35 ? "falha" : "sucesso";
  }
  
  // 4. Extrator de Notas: 20% de chance de "dado inválido"
  if (robo.id === 5) {
    if (Math.random() < 0.2) return "falha_dado_invalido";
    return "sucesso";
  }
  
  // 5. Monitor de Preços: madrugada costuma falhar por manutenção
  if (robo.id === 8 && hora >= 1 && hora < 4) {
    return Math.random() < 0.5 ? "falha" : "sucesso";
  }
  
  // Demais: 85% sucesso, 15% falha genérica
  return Math.random() < 0.85 ? "sucesso" : "falha";
}

// Gerar mensagem de erro baseada no tipo de falha
function getMensagemErro(robo, status) {
  const erros = {
    timeout: `Timeout na integração - tempo limite excedido (${robo.slaSegundos}s)`,
    falha_dado_invalido: "Dado de entrada fora do padrão esperado (campo 'numero_nf' inválido)",
    falha: `Erro interno no robô ${robo.nome} - falha na execução`,
    sucesso: null
  };
  
  if (status === "falha" && robo.id === 2) return "API do ERP indisponível por 5 minutos";
  if (status === "falha" && robo.id === 4) return "Arquivo de boletos corrompido ou formato inválido";
  if (status === "falha" && robo.id === 8) return "Site do fornecedor retornou 503 - Service Unavailable";
  
  return erros[status] || erros.falha;
}

// Gerar 200 execuções realistas
const gerarExecucoes = () => {
  const execucoes = [];
  const diasHistorico = 15;
  
  for (let i = 0; i < 200; i++) {
    const robo = robos[Math.floor(Math.random() * robos.length)];
    const data = gerarDataAleatoria(diasHistorico);
    const hora = data.getHours();
    const status = determinarStatus(robo, hora);
    const duracaoBase = robo.slaSegundos * (0.3 + Math.random() * 1.2);
    let duracaoFinal = duracaoBase;
    
    // Se falha, costuma demorar mais (timeout)
    if (status.includes("timeout")) duracaoFinal = robo.slaSegundos * 1.5;
    if (status === "falha") duracaoFinal = duracaoBase * 0.8;
    
    execucoes.push({
      id: i + 1,
      roboId: robo.id,
      roboNome: robo.nome,
      cliente: robo.cliente,
      datetime: data.toISOString(),
      status: status === "sucesso" ? "sucesso" : "falha",
      statusDetalhado: status,
      duracaoSegundos: Math.floor(duracaoFinal),
      slaSegundos: robo.slaSegundos,
      erro: getMensagemErro(robo, status),
      timestamp: data.getTime()
    });
  }
  
  // Ordenar por data (mais recente primeiro)
  return execucoes.sort((a,b) => new Date(b.datetime) - new Date(a.datetime));
};

let executionsData = gerarExecucoes();

// ==================== AGREGAÇÕES IA ====================

// Detectar exceções recorrentes (simula análise da IA)
function detectarExcecoesRecorrentes() {
  const ultimos7Dias = executionsData.filter(e => {
    const diff = (new Date() - new Date(e.datetime)) / (1000 * 3600 * 24);
    return diff <= 7;
  });
  
  const falhasPorTipo = {};
  ultimos7Dias.forEach(exec => {
    if (exec.status === "falha") {
      const tipo = exec.erro?.split("-")[0] || "Erro genérico";
      falhasPorTipo[tipo] = (falhasPorTipo[tipo] || 0) + 1;
    }
  });
  
  return Object.entries(falhasPorTipo)
    .map(([tipo, count]) => ({
      tipo: tipo.substring(0, 40),
      count,
      variacao: Math.floor(Math.random() * 60) - 20, // -20% a +40%
      acaoSugerida: gerarAcaoIASugerida(tipo)
    }))
    .sort((a,b) => b.count - a.count)
    .slice(0, 4);
}

function gerarAcaoIASugerida(tipoErro) {
  if (tipoErro.includes("Timeout")) return "Aumentar timeout para 70s ou reprocessar fora do horário crítico";
  if (tipoErro.includes("dado")) return "Implementar sanitização automática de dados de entrada";
  if (tipoErro.includes("indisponível")) return "Adicionar retry com backoff exponencial (máx 3 tentativas)";
  if (tipoErro.includes("corrompido")) return "Validar integridade do arquivo antes do processamento";
  if (tipoErro.includes("503")) return "Implementar circuito breaker com fallback para cache";
  return "Revisar logs e ajustar regras de negócio do robô";
}

// Calcular tendências de desempenho
function calcularTendencias() {
  const thisWeek = executionsData.filter(e => {
    const diff = (new Date() - new Date(e.datetime)) / (1000 * 3600 * 24);
    return diff <= 7 && diff > 0;
  });
  
  const lastWeek = executionsData.filter(e => {
    const diff = (new Date() - new Date(e.datetime)) / (1000 * 3600 * 24);
    return diff <= 14 && diff > 7;
  });
  
  const taxaSucessoThis = (thisWeek.filter(e => e.status === "sucesso").length / thisWeek.length) * 100;
  const taxaSucessoLast = (lastWeek.filter(e => e.status === "sucesso").length / lastWeek.length) * 100;
  const tempoMedioThis = thisWeek.reduce((acc,e) => acc + e.duracaoSegundos, 0) / thisWeek.length;
  const tempoMedioLast = lastWeek.reduce((acc,e) => acc + e.duracaoSegundos, 0) / lastWeek.length;
  
  return {
    taxaSucessoVariacao: (taxaSucessoThis - taxaSucessoLast).toFixed(1),
    tempoMedioVariacao: ((tempoMedioThis - tempoMedioLast) / tempoMedioLast * 100).toFixed(1),
    piorHorario: "14:00-15:00",
    robosCriticos: ["Validador NF-e", "Integrador ERP"]
  };
}

// Sugestões de melhoria (IA)
function gerarSugestoesIA() {
  const tendencias = calcularTendencias();
  const excecoes = detectarExcecoesRecorrentes();
  
  const sugestoes = [];
  
  if (tendencias.taxaSucessoVariacao < 0) {
    sugestoes.push({
      tipo: "alerta",
      titulo: "⚠️ Taxa de sucesso em queda",
      descricao: `A taxa de sucesso caiu ${Math.abs(tendencias.taxaSucessoVariacao)}% em relação à semana passada.`,
      acao: "Revisar mudanças recentes nos sistemas integrados."
    });
  }
  
  if (Math.abs(tendencias.tempoMedioVariacao) > 10) {
    sugestoes.push({
      tipo: "otimizacao",
      titulo: "⏱️ Degradação de performance detectada",
      descricao: `Tempo médio de execução aumentou ${tendencias.tempoMedioVariacao}% na última semana.`,
      acao: "Verificar concorrência de recursos e latência de rede."
    });
  }
  
  if (excecoes[0] && excecoes[0].count > 10) {
    sugestoes.push({
      tipo: "correcao",
      titulo: `🔁 Exceção recorrente: ${excecoes[0].tipo}`,
      descricao: `${excecoes[0].count} ocorrências nos últimos 7 dias (variação ${excecoes[0].variacao > 0 ? '+' : ''}${excecoes[0].variacao}%).`,
      acao: excecoes[0].acaoSugerida
    });
  }
  
  sugestoes.push({
    tipo: "preditivo",
    titulo: "📈 Previsão para próximos dias",
    descricao: "Com base no padrão histórico, espera-se aumento de 15% nas execuções entre 14h-15h.",
    acao: "Providenciar escalabilidade ou ajuste de janela de execução."
  });
  
  return sugestoes;
}

// Tickets para NOC
function gerarTicketsNOC() {
  const tendencias = calcularTendencias();
  const excecoes = detectarExcecoesRecorrentes();
  
  const tickets = [
    {
      id: `T${Math.floor(Math.random() * 1000)}`,
      cliente: "Indústria Machado",
      problema: "Timeout recorrente no Validador NF-e",
      detalhe: "70% das execuções falham entre 14h-15h. Impacto direto no SLA.",
      sugestaoIA: "Aumentar timeout para 70s ou mover janela de execução para após as 15h.",
      status: "em_analise",
      prioridade: "alta"
    },
    {
      id: `T${Math.floor(Math.random() * 1000)}`,
      cliente: "Logística Rápida",
      problema: "Degradação no Integrador ERP",
      detalhe: `Tempo médio +${tendencias.tempoMedioVariacao}% na última semana.`,
      sugestaoIA: "Revisar concorrência com outras automações e otimizar queries.",
      status: "em_andamento",
      prioridade: "media"
    }
  ];
  
  if (excecoes[0] && excecoes[0].count > 5) {
    tickets.push({
      id: `T${Math.floor(Math.random() * 1000)}`,
      cliente: "Varejo Sul",
      problema: `Alta frequência: ${excecoes[0].tipo}`,
      detalhe: `${excecoes[0].count} ocorrências em 7 dias.`,
      sugestaoIA: excecoes[0].acaoSugerida,
      status: "pendente",
      prioridade: "media"
    });
  }
  
  return tickets;
}

// ==================== ESTADO GLOBAL ====================
let currentMode = "cliente";
let currentView = "executions";
let period = "week";
let processFilter = "all";
let clienteFilter = "all";

// Gráficos
let execChart, slaChart, robotsChart, clientsChart;

// ==================== UTILITÁRIOS ====================
function filterExecutions() {
  let filtered = [...executionsData];
  
  // Filtro por período
  const now = new Date();
  filtered = filtered.filter(e => {
    const diff = (now - new Date(e.datetime)) / (1000 * 3600 * 24);
    if (period === "today") return diff < 1;
    if (period === "week") return diff <= 7;
    if (period === "month") return diff <= 30;
    return true;
  });
  
  // Filtro por processo (robô)
  if (processFilter !== "all") {
    filtered = filtered.filter(e => e.roboNome === processFilter);
  }
  
  // Filtro por cliente (modo NOC)
  if (currentMode === "noc" && clienteFilter !== "all") {
    filtered = filtered.filter(e => e.cliente === clienteFilter);
  }
  
  return filtered;
}

function getUniqueRobos() {
  return [...new Map(executionsData.map(e => [e.roboNome, { nome: e.roboNome, cliente: e.cliente }])).values()];
}

function getUniqueClientes() {
  return [...new Set(executionsData.map(e => e.cliente))];
}

// ==================== RENDERIZAÇÃO ====================
function renderStats() {
  const filtered = filterExecutions();
  const total = filtered.length;
  const success = filtered.filter(e => e.status === "sucesso").length;
  const successRate = total ? ((success/total)*100).toFixed(1) : 0;
  const avgDuration = total ? (filtered.reduce((acc,e) => acc + e.duracaoSegundos, 0) / total).toFixed(0) : 0;
  const slaViolations = filtered.filter(e => e.duracaoSegundos > e.slaSegundos).length;
  
  document.getElementById('statsGrid').innerHTML = `
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-play-circle"></i> Total execuções</div>
      <div class="stat-number">${total}</div>
      <div class="stat-trend">${period === "today" ? "hoje" : period === "week" ? "últimos 7 dias" : "últimos 30 dias"}</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-check-circle"></i> Taxa de sucesso</div>
      <div class="stat-number">${successRate}%</div>
      <div class="stat-trend ${successRate > 85 ? 'trend-up' : 'trend-down'}">${successRate > 85 ? '▲ Saudável' : '▼ Abaixo da meta'}</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-hourglass-half"></i> Duração média</div>
      <div class="stat-number">${avgDuration}s</div>
      <div class="stat-trend">SLA médio: 65s</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-exclamation-triangle"></i> Violações de SLA</div>
      <div class="stat-number">${slaViolations}</div>
      <div class="stat-trend trend-down">${((slaViolations/total)*100).toFixed(1)}% das execuções</div>
    </div>
  `;
}

function renderExecutionsTable() {
  const filtered = filterExecutions();
  const tbody = document.getElementById('executionsTableBody');
  tbody.innerHTML = '';
  
  filtered.slice(0, 10).forEach(exec => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = new Date(exec.datetime).toLocaleString();
    row.insertCell(1).innerHTML = `<strong>${exec.roboNome}</strong><br><small>${exec.cliente}</small>`;
    
    let statusClass = exec.status === 'sucesso' ? 'status-success' : 'status-fail';
    let statusText = exec.status === 'sucesso' ? 'Sucesso' : (exec.statusDetalhado === 'timeout' ? 'Timeout' : 'Falha');
    row.insertCell(2).innerHTML = `<span class="status-badge ${statusClass}">${statusText}</span>`;
    
    row.insertCell(3).innerText = `${Math.floor(exec.duracaoSegundos/60)}:${(exec.duracaoSegundos%60).toString().padStart(2,'0')} / ${Math.floor(exec.slaSegundos/60)}:${(exec.slaSegundos%60).toString().padStart(2,'0')}s`;
    
    const btnCell = row.insertCell(4);
    const btn = document.createElement('button');
    btn.innerText = 'Detalhes';
    btn.className = 'btn-secondary';
    btn.style.padding = '4px 12px';
    btn.style.fontSize = '0.7rem';
    btn.onclick = () => showModal(exec);
    btnCell.appendChild(btn);
  });
}

function renderExceptions() {
  const excecoes = detectarExcecoesRecorrentes();
  const tbody = document.getElementById('exceptionsTableBody');
  tbody.innerHTML = '';
  
  excecoes.forEach(ex => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = ex.tipo;
    row.insertCell(1).innerText = ex.count;
    row.insertCell(2).innerHTML = `<span class="${ex.variacao > 0 ? 'trend-up' : 'trend-down'}">${ex.variacao > 0 ? '+' : ''}${ex.variacao}%</span>`;
    row.insertCell(3).innerHTML = `<small>${ex.acaoSugerida}</small>`;
  });
}

function renderIASuggestions() {
  const sugestoes = gerarSugestoesIA();
  const container = document.getElementById('iaSuggestions');
  container.innerHTML = sugestoes.map(s => `
    <div class="insight-ia">
      <i class="fas ${s.tipo === 'alerta' ? 'fa-bell' : (s.tipo === 'otimizacao' ? 'fa-gauge-high' : 'fa-brain')}"></i>
      <strong>${s.titulo}</strong><br>
      ${s.descricao}<br>
      <small style="color: var(--db-secondary);">🎯 Ação sugerida: ${s.acao}</small>
    </div>
  `).join('');
}

function renderCharts() {
  const filtered = filterExecutions();
  
  // Gráfico de execuções por hora
  const horas = Array(24).fill(0);
  const sucessosPorHora = Array(24).fill(0);
  const falhasPorHora = Array(24).fill(0);
  
  filtered.forEach(exec => {
    const hora = new Date(exec.datetime).getHours();
    horas[hora]++;
    if (exec.status === "sucesso") sucessosPorHora[hora]++;
    else falhasPorHora[hora]++;
  });
  
  const labels = Array.from({length: 24}, (_, i) => `${i}h`);
  
  const ctxExec = document.getElementById('execChart').getContext('2d');
  if (execChart) execChart.destroy();
  execChart = new Chart(ctxExec, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        { label: 'Sucessos', data: sucessosPorHora, borderColor: '#3E569E', backgroundColor: 'rgba(62,86,158,0.10)', fill: true, tension: 0.4, borderWidth: 2, pointBackgroundColor: '#3E569E', pointRadius: 3 },
        { label: 'Falhas', data: falhasPorHora, borderColor: '#C0392B', backgroundColor: 'rgba(192,57,43,0.06)', fill: true, borderDash: [5,5], tension: 0.4, borderWidth: 2, pointRadius: 3 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } } }
  });
  
  // Gráfico SLA
  const robosPrincipais = getUniqueRobos().slice(0,5);
  const slaPerformance = robosPrincipais.map(robo => {
    const execsRobo = filtered.filter(e => e.roboNome === robo.nome);
    const dentroSLA = execsRobo.filter(e => e.duracaoSegundos <= e.slaSegundos).length;
    return execsRobo.length ? (dentroSLA / execsRobo.length * 100) : 0;
  });
  
  if (slaChart) slaChart.destroy();
  slaChart = new Chart(document.getElementById('slaChart'), {
    type: 'bar',
    data: {
      labels: robosPrincipais.map(r => r.nome.substring(0,15)),
      datasets: [{
        label: 'SLA cumprido (%)',
        data: slaPerformance,
        backgroundColor: slaPerformance.map(v => v >= 85 ? 'rgba(62,86,158,0.75)' : 'rgba(189,160,126,0.85)'),
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
    }
  });
}

function showModal(exec) {
  document.getElementById('modalTitle').innerText = `Detalhe: ${exec.roboNome}`;
  document.getElementById('modalBody').innerHTML = `
    <p><strong>Cliente:</strong> ${exec.cliente}</p>
    <p><strong>Data/Hora:</strong> ${new Date(exec.datetime).toLocaleString()}</p>
    <p><strong>Status:</strong> ${exec.status === "sucesso" ? "✅ Sucesso" : "❌ Falha"} ${exec.statusDetalhado !== "sucesso" ? `(${exec.statusDetalhado})` : ''}</p>
    <p><strong>Duração:</strong> ${Math.floor(exec.duracaoSegundos/60)}min ${exec.duracaoSegundos%60}s (SLA: ${Math.floor(exec.slaSegundos/60)}min ${exec.slaSegundos%60}s)</p>
    ${exec.erro ? `<p><strong>🔴 Erro:</strong> ${exec.erro}</p>` : ''}
    <hr>
    <div class="insight-ia" style="margin-top:8px">
      <i class="fas fa-robot"></i> <strong>Análise IA:</strong><br>
      ${exec.status === "falha" ? "Este erro tem padrão recorrente. IA sugere revisão de configuração do robô." : "Execução dentro dos parâmetros esperados."}
    </div>
  `;
  document.getElementById('detailModal').style.display = 'block';
}

function renderNocViews() {
  if (currentMode !== 'noc') return;
  
  const tickets = gerarTicketsNOC();
  const ticketsBody = document.getElementById('ticketsTableBody');
  ticketsBody.innerHTML = '';
  tickets.forEach(t => {
    const row = ticketsBody.insertRow();
    row.insertCell(0).innerHTML = `<strong>${t.id}</strong>`;
    row.insertCell(1).innerText = t.cliente;
    row.insertCell(2).innerHTML = `<strong>${t.problema}</strong><br><small>${t.detalhe}</small>`;
    row.insertCell(3).innerHTML = `<small>${t.sugestaoIA}</small>`;
    row.insertCell(4).innerHTML = `<span class="status-badge ${t.prioridade === 'alta' ? 'status-fail' : 'status-warning'}">${t.status}</span>`;
  });
  
  // Popula filtro de clientes no modo NOC
  const clientes = getUniqueClientes();
  const filterSelect = document.getElementById('clienteFilterSelect');
  if (filterSelect) {
    filterSelect.innerHTML = '<option value="all">Todos os clientes</option>' + clientes.map(c => `<option value="${c}">${c}</option>`).join('');
  }
}

// ==================== EVENTOS E INICIALIZAÇÃO ====================
function toggleMode() {
  const isNoc = document.getElementById('modeToggle').checked;
  currentMode = isNoc ? 'noc' : 'cliente';
  document.getElementById('modeText').innerText = currentMode === 'noc' ? 'Modo NOC' : 'Modo Cliente';
  document.getElementById('roleBadge').innerHTML = currentMode === 'noc' ? '🛡️ NOC Operador' : '👁️ Cliente';
  
  const nocElements = document.querySelectorAll('.noc-only');
  const nocDiv = document.getElementById('nocDivider');
  nocElements.forEach(el => el.style.display = currentMode === 'noc' ? 'flex' : 'none');
  if (nocDiv) nocDiv.style.display = currentMode === 'noc' ? 'block' : 'none';
  
  // Adiciona filtro de cliente no modo NOC
  let filterBar = document.querySelector('.filters-bar');
  let existingFilter = document.getElementById('clienteFilterGroup');
  if (currentMode === 'noc' && !existingFilter) {
    const div = document.createElement('div');
    div.className = 'filter-group';
    div.id = 'clienteFilterGroup';
    div.innerHTML = `<label><i class="fas fa-building"></i> Cliente</label>
                     <select id="clienteFilterSelect"><option value="all">Todos</option></select>`;
    filterBar.insertBefore(div, filterBar.children[2]);
    document.getElementById('clienteFilterSelect').addEventListener('change', (e) => {
      clienteFilter = e.target.value;
      renderStats();
      renderExecutionsTable();
      renderExceptions();
      renderCharts();
    });
  } else if (currentMode !== 'noc' && existingFilter) {
    existingFilter.remove();
  }
  
  if (currentMode === 'noc') renderNocViews();
  renderStats();
  renderExecutionsTable();
}

function changeView(viewId) {
  currentView = viewId;
  const views = ['executions','automations','sla','insights','agenda','relatorios','notificacoes','configuracoes','monitor','admin','clients'];
  views.forEach(v => {
    const key = v.charAt(0).toUpperCase() + v.slice(1);
    const el = document.getElementById(`view${key}`);
    if (el) el.className = (v === viewId) ? 'view-active' : 'view-hidden';
  });

  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  const activeNav = document.querySelector(`[data-view="${viewId}"]`);
  if (activeNav) activeNav.classList.add('active');

  const titles = {
    executions:     { icon: 'fa-chart-line',        label: 'Painel de Execucoes' },
    automations:    { icon: 'fa-robot',              label: 'Automacoes' },
    sla:            { icon: 'fa-chart-simple',       label: 'SLA & Performance' },
    insights:       { icon: 'fa-brain',              label: 'Insights IA' },
    agenda:         { icon: 'fa-calendar-days',      label: 'Agenda & Agendamentos' },
    relatorios:     { icon: 'fa-file-chart-column',  label: 'Relatorios' },
    notificacoes:   { icon: 'fa-bell',               label: 'Notificacoes' },
    configuracoes:  { icon: 'fa-sliders',            label: 'Configuracoes' },
    monitor:        { icon: 'fa-display',            label: 'Monitor em Tempo Real' },
    admin:          { icon: 'fa-tower-broadcast',    label: 'Admin & Tickets' },
    clients:        { icon: 'fa-users',              label: 'Clientes (Visao Geral)' },
  };
  if (titles[viewId]) {
    document.getElementById('pageTitle').innerHTML = `<h2><i class="fas ${titles[viewId].icon}"></i> ${titles[viewId].label}</h2>`;
  }

  if (viewId === 'executions') {
    renderStats();
    renderExecutionsTable();
    renderExceptions();
    renderIASuggestions();
    renderCharts();
  }
  if (viewId === 'automations') {
    renderAutomacoes();
    setTimeout(initAutomacaoFilters, 50);
  }
  if (viewId === 'sla') {
    renderStats();
    renderCharts();
  }
  if (viewId === 'insights') {
    renderInsightsView();
  }
  if (viewId === 'agenda') {
    renderAgendaView();
  }
  if (viewId === 'relatorios') {
    renderRelatoriosView();
  }
  if (viewId === 'notificacoes') {
    renderNotificacoes();
    renderNotifPrefs();
    renderNotifStats();
  }
  if (viewId === 'configuracoes') {
    renderConfiguracoesView();
  }
  if (viewId === 'monitor' && currentMode === 'noc') {
    renderMonitorView();
  }
  if (viewId === 'admin' && currentMode === 'noc') renderNocViews();
}

function initEventListeners() {
  document.getElementById('modeToggle').addEventListener('change', toggleMode);
  document.getElementById('applyFiltersBtn').addEventListener('click', () => {
    period = document.getElementById('periodFilter').value;
    processFilter = document.getElementById('processFilter').value;
    renderStats();
    renderExecutionsTable();
    renderExceptions();
    renderCharts();
  });
  
  document.querySelectorAll('.nav-item[data-view]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-view');
      if (view === 'admin' && currentMode !== 'noc') return;
      changeView(view);
    });
  });
  
  document.querySelector('.close-modal').onclick = () => document.getElementById('detailModal').style.display = 'none';
  window.onclick = (e) => { if(e.target === document.getElementById('detailModal')) document.getElementById('detailModal').style.display = 'none'; };
  
  // Popula filtro de processos
  const processSelect = document.getElementById('processFilter');
  const robosUnicos = getUniqueRobos();
  processSelect.innerHTML = '<option value="all">Todos os robôs</option>' + robosUnicos.map(r => `<option value="${r.nome}">${r.nome}</option>`).join('');
}

// ==================== DADOS: AGENDAMENTOS ====================
const agendamentos = [
  { id:1,  roboId:1,  frequencia:'A cada 2 horas',    cron:'0 */2 * * *',   proximaExec: new Date(Date.now()+3600000),    ultimaExec: new Date(Date.now()-3600000),   status:'ativo'   },
  { id:2,  roboId:2,  frequencia:'Diario 06:00',       cron:'0 6 * * *',     proximaExec: new Date(Date.now()+14400000),  ultimaExec: new Date(Date.now()-36000000),  status:'ativo'   },
  { id:3,  roboId:5,  frequencia:'A cada hora',        cron:'0 * * * *',     proximaExec: new Date(Date.now()+1800000),   ultimaExec: new Date(Date.now()-1800000),   status:'ativo'   },
  { id:4,  roboId:9,  frequencia:'Seg-Sex 16:00',      cron:'0 16 * * 1-5',  proximaExec: new Date(Date.now()+7200000),   ultimaExec: new Date(Date.now()-82800000),  status:'ativo'   },
  { id:5,  roboId:13, frequencia:'Diario 08:00',       cron:'0 8 * * *',     proximaExec: new Date(Date.now()+18000000),  ultimaExec: new Date(Date.now()-50400000),  status:'ativo'   },
  { id:6,  roboId:14, frequencia:'A cada 30 minutos',  cron:'*/30 * * * *',  proximaExec: new Date(Date.now()+900000),    ultimaExec: new Date(Date.now()-900000),    status:'ativo'   },
  { id:7,  roboId:17, frequencia:'Diario 23:00',       cron:'0 23 * * *',    proximaExec: new Date(Date.now()+28800000),  ultimaExec: new Date(Date.now()-7200000),   status:'ativo'   },
  { id:8,  roboId:4,  frequencia:'Semanal Segunda',    cron:'0 9 * * 1',     proximaExec: new Date(Date.now()+172800000), ultimaExec: new Date(Date.now()-432000000),  status:'pausado' },
  { id:9,  roboId:10, frequencia:'Diario 07:30',       cron:'30 7 * * *',    proximaExec: new Date(Date.now()+19800000),  ultimaExec: new Date(Date.now()-50400000),  status:'ativo'   },
  { id:10, roboId:18, frequencia:'A cada 5 minutos',   cron:'*/5 * * * *',   proximaExec: new Date(Date.now()+300000),    ultimaExec: new Date(Date.now()-300000),    status:'ativo'   },
];

// ==================== DADOS: NOTIFICAÇÕES ====================
let notificacoes = [
  { id:1,  tipo:'critica', titulo:'Falha critica — Classificador de Cargas', descricao:'Robo apresentou 5 erros consecutivos. Intervencao necessaria.', tempo: new Date(Date.now()-600000),   lida:false, roboId:8  },
  { id:2,  tipo:'critica', titulo:'SLA violado — Processador de Devoluções',  descricao:'Taxa de falha atingiu 43%. SLA contratual comprometido.',       tempo: new Date(Date.now()-1800000),  lida:false, roboId:16 },
  { id:3,  tipo:'aviso',   titulo:'Tempo medio elevado — Conciliador Bancario',descricao:'Tempo medio subiu 32% em relacao a semana anterior.',           tempo: new Date(Date.now()-3600000),  lida:false, roboId:10 },
  { id:4,  tipo:'info',    titulo:'Agendamento concluido — Gerador de Relatórios', descricao:'Relatorio executivo diario gerado com sucesso.',            tempo: new Date(Date.now()-7200000),  lida:true,  roboId:17 },
  { id:5,  tipo:'info',    titulo:'Novo robo ativado — Rastreador de Entregas', descricao:'Robo entrou em operacao as 08:00.',                            tempo: new Date(Date.now()-14400000), lida:true,  roboId:7  },
  { id:6,  tipo:'aviso',   titulo:'Capacidade de UAs em 85%',                  descricao:'Unidades de automacao proximas do limite. Avaliar expansao.',   tempo: new Date(Date.now()-21600000), lida:true,  roboId:null},
  { id:7,  tipo:'info',    titulo:'Backup de configuracoes realizado',          descricao:'Backup automatico das configuracoes de todos os robos OK.',      tempo: new Date(Date.now()-86400000), lida:true,  roboId:null},
];

const notifPrefs = [
  { id:'falha',      label:'Falhas criticas',          desc:'Notificar quando robo falhar 3x seguidas', ativo:true  },
  { id:'sla',        label:'Violacao de SLA',           desc:'Alertar quando SLA for comprometido',       ativo:true  },
  { id:'tempo',      label:'Tempo de execucao elevado', desc:'Avisar se tempo subir mais de 30%',         ativo:true  },
  { id:'agenda',     label:'Conclusao de agendamentos', desc:'Confirmar execucoes agendadas',             ativo:false },
  { id:'capacidade', label:'Capacidade de UAs',         desc:'Alertar ao atingir 80% da capacidade',     ativo:true  },
  { id:'backup',     label:'Backups automaticos',       desc:'Confirmar backups de configuracao',         ativo:false },
];

// ==================== DADOS: RELATÓRIOS ====================
const relatorios = [
  { id:1, nome:'Relatorio Executivo — Maio 2025',   tipo:'executivo',   periodo:'01/05 – 31/05/2025', geradoEm: new Date(Date.now()-86400000),  tamanho:'2.4 MB',  status:'pronto'      },
  { id:2, nome:'SLA Detalhado — Semana 20',          tipo:'sla',         periodo:'12/05 – 18/05/2025', geradoEm: new Date(Date.now()-604800000), tamanho:'890 KB',  status:'pronto'      },
  { id:3, nome:'Excecoes e Falhas — Abril 2025',     tipo:'excecoes',    periodo:'01/04 – 30/04/2025', geradoEm: new Date(Date.now()-1209600000),tamanho:'1.1 MB',  status:'pronto'      },
  { id:4, nome:'Performance por Robo — Q1 2025',     tipo:'performance', periodo:'Jan – Mar 2025',      geradoEm: new Date(Date.now()-2592000000),tamanho:'4.8 MB',  status:'pronto'      },
  { id:5, nome:'Relatorio Executivo — Junho 2025',   tipo:'executivo',   periodo:'01/06 – hoje',        geradoEm: new Date(Date.now()-3600000),   tamanho:'—',       status:'processando' },
  { id:6, nome:'Auditoria Completa — Machado',       tipo:'auditoria',   periodo:'Jan – Jun 2025',      geradoEm: new Date(Date.now()-7200000),   tamanho:'—',       status:'processando' },
];

// ==================== VIEW: AGENDA ====================
let agendaCargaChart = null;

function renderAgendaView() {
  // Stats
  const ativos = agendamentos.filter(a => a.status === 'ativo').length;
  const pausados = agendamentos.filter(a => a.status === 'pausado').length;
  const prox1h = agendamentos.filter(a => (a.proximaExec - Date.now()) < 3600000 && a.status === 'ativo').length;
  document.getElementById('agendaStatsGrid').innerHTML = `
    <div class="stat-card"><div class="stat-title"><i class="fas fa-calendar-check"></i> Agendamentos ativos</div><div class="stat-number">${ativos}</div><div class="stat-trend">${pausados} pausado(s)</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-clock"></i> Proximos (1h)</div><div class="stat-number">${prox1h}</div><div class="stat-trend trend-up">Em fila de execucao</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-robot"></i> Robos agendados</div><div class="stat-number">${agendamentos.length}</div><div class="stat-trend">de ${robos.length} robos totais</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-server"></i> Carga estimada (24h)</div><div class="stat-number">${agendamentos.filter(a=>a.status==='ativo').length * 8}</div><div class="stat-trend">execucoes previstas</div></div>
  `;

  // Tabela
  const tbody = document.getElementById('agendaTableBody');
  tbody.innerHTML = '';
  agendamentos.forEach(ag => {
    const robo = robos.find(r => r.id === ag.roboId);
    if (!robo) return;
    const mins = Math.round((ag.proximaExec - Date.now()) / 60000);
    const proxStr = mins < 60 ? `Em ${mins}min` : `Em ${Math.round(mins/60)}h`;
    const ultimaStr = ag.ultimaExec.toLocaleString('pt-BR', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
    const sCls = ag.status === 'ativo' ? 'status-success' : 'status-warning';
    const sLbl = ag.status === 'ativo' ? 'Ativo' : 'Pausado';
    const tr = tbody.insertRow();
    tr.innerHTML = `
      <td><strong>${robo.nome}</strong></td>
      <td>${robo.cliente.split(' ').slice(0,2).join(' ')}</td>
      <td><span style="font-family:monospace;font-size:0.75rem;background:var(--db-bg);padding:2px 8px;border-radius:4px">${ag.frequencia}</span></td>
      <td><span class="${mins < 60 ? 'trend-up' : ''}" style="font-weight:600">${proxStr}</span></td>
      <td style="color:var(--db-text-muted);font-size:0.78rem">${ultimaStr}</td>
      <td><span class="status-badge ${sCls}">${sLbl}</span></td>
      <td>
        <button class="btn-secondary" style="padding:4px 10px;font-size:0.7rem;background:${ag.status==='ativo'?'var(--db-warning)':'var(--db-success)'}" onclick="toggleAgendamento(${ag.id})">
          <i class="fas ${ag.status==='ativo'?'fa-pause':'fa-play'}"></i>
        </button>
      </td>
    `;
  });

  // Gráfico de carga por hora
  const horasLabel = Array.from({length:24}, (_,i) => `${String(i).padStart(2,'0')}:00`);
  const cargaPorHora = Array(24).fill(0);
  agendamentos.filter(a => a.status === 'ativo').forEach(ag => {
    for(let h = 0; h < 24; h++) {
      if (ag.cron.includes('*/')) cargaPorHora[h] += 2;
      else {
        const h2 = parseInt(ag.cron.split(' ')[1]);
        if (!isNaN(h2) && h === h2) cargaPorHora[h] += 1;
      }
    }
  });

  if (agendaCargaChart) agendaCargaChart.destroy();
  const ctx = document.getElementById('agendaCargaChart');
  if (ctx) {
    agendaCargaChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: horasLabel,
        datasets: [{ label: 'Execucoes previstas', data: cargaPorHora, backgroundColor: cargaPorHora.map(v => v > 3 ? 'rgba(192,57,43,0.7)' : v > 1 ? 'rgba(196,125,10,0.7)' : 'rgba(62,86,158,0.65)'), borderRadius: 6, borderSkipped: false }]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
  }

  // Grade semanal
  const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
  const gridEl = document.getElementById('agendaWeeklyGrid');
  if (!gridEl) return;
  gridEl.innerHTML = `
    <div class="weekly-grid-header">${dias.map(d => `<div class="wg-day-lbl">${d}</div>`).join('')}</div>
    <div class="weekly-grid-body">
      ${dias.map((_,di) => {
        const agsDia = agendamentos.filter(ag => {
          if (ag.cron.includes('*/')) return true;
          const parts = ag.cron.split(' ');
          if (parts[4] === '*') return true;
          const daysArr = parts[4].split('-');
          if (daysArr.length === 2) return di >= parseInt(daysArr[0]) && di <= parseInt(daysArr[1]);
          return parts[4].split(',').map(Number).includes(di);
        }).filter(a => a.status === 'ativo');
        return `<div class="wg-day-col">
          ${agsDia.slice(0,4).map(ag => {
            const r = robos.find(x => x.id === ag.roboId);
            return `<div class="wg-chip" title="${r ? r.nome : ''}">${r ? r.nome.substring(0,10) : ''}</div>`;
          }).join('')}
          ${agsDia.length > 4 ? `<div class="wg-chip wg-chip-more">+${agsDia.length - 4}</div>` : ''}
        </div>`;
      }).join('')}
    </div>
  `;
}

function toggleAgendamento(id) {
  const ag = agendamentos.find(a => a.id === id);
  if (ag) { ag.status = ag.status === 'ativo' ? 'pausado' : 'ativo'; renderAgendaView(); }
}

function openNovoAgendamentoModal() {
  document.getElementById('modalTitle').innerHTML = '<i class="fas fa-calendar-plus" style="color:var(--db-blue)"></i> Novo Agendamento';
  document.getElementById('modalBody').innerHTML = `
    <div class="config-fields">
      <div class="config-field"><label>Robo</label>
        <select class="config-input">${robos.map(r => `<option value="${r.id}">${r.nome}</option>`).join('')}</select>
      </div>
      <div class="config-field"><label>Frequencia</label>
        <select class="config-input">
          <option>A cada 30 minutos</option><option>A cada hora</option><option>A cada 2 horas</option>
          <option>Diario 06:00</option><option>Diario 08:00</option><option>Diario 23:00</option>
          <option>Seg-Sex 08:00</option><option>Semanal Segunda</option>
        </select>
      </div>
      <div class="config-field"><label>Data de inicio</label><input type="date" class="config-input"></div>
    </div>
    <button class="btn-secondary" style="width:100%;justify-content:center;margin-top:16px" onclick="document.getElementById('detailModal').style.display='none'">
      <i class="fas fa-check"></i> Confirmar agendamento
    </button>
  `;
  document.getElementById('detailModal').style.display = 'block';
}

// ==================== VIEW: RELATÓRIOS ====================
let relatoriosTipoChart = null;

function renderRelatoriosView() {
  document.getElementById('relatoriosStatsGrid').innerHTML = `
    <div class="stat-card"><div class="stat-title"><i class="fas fa-file-check"></i> Prontos</div><div class="stat-number">${relatorios.filter(r=>r.status==='pronto').length}</div><div class="stat-trend">Disponiveis para download</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-spinner"></i> Processando</div><div class="stat-number">${relatorios.filter(r=>r.status==='processando').length}</div><div class="stat-trend">Aguardar conclusao</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-database"></i> Armazenamento</div><div class="stat-number">9.2MB</div><div class="stat-trend">de 50 MB disponiveis</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-clock-rotate-left"></i> Ultimo gerado</div><div class="stat-number" style="font-size:1rem">Hoje</div><div class="stat-trend">Relatorio executivo Junho</div></div>
  `;

  const tbody = document.getElementById('relatoriosTableBody');
  tbody.innerHTML = '';
  const tipoIcon = { executivo:'fa-star', sla:'fa-gauge-high', excecoes:'fa-bug', performance:'fa-chart-line', auditoria:'fa-magnifying-glass' };
  relatorios.forEach(r => {
    const sCls = r.status === 'pronto' ? 'status-success' : 'status-warning';
    const sLbl = r.status === 'pronto' ? 'Pronto' : 'Processando';
    const tr = tbody.insertRow();
    tr.innerHTML = `
      <td><strong><i class="fas ${tipoIcon[r.tipo]||'fa-file'}" style="color:var(--db-blue);margin-right:6px"></i>${r.nome}</strong></td>
      <td><span class="robot-tag tag-tipo" style="display:inline-block">${r.tipo}</span></td>
      <td style="font-size:0.78rem;color:var(--db-text-muted)">${r.periodo}</td>
      <td style="font-size:0.78rem;color:var(--db-text-muted)">${r.geradoEm.toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</td>
      <td style="font-size:0.78rem">${r.tamanho}</td>
      <td><span class="status-badge ${sCls}">${sLbl}</span></td>
      <td>
        ${r.status === 'pronto'
          ? `<button class="btn-secondary" style="padding:4px 10px;font-size:0.7rem"><i class="fas fa-download"></i> Baixar</button>`
          : `<span style="font-size:0.75rem;color:var(--db-text-muted)"><i class="fas fa-spinner fa-spin"></i> Aguardando</span>`}
      </td>
    `;
  });

  // Gráfico pizza
  const tipos = [...new Set(relatorios.map(r => r.tipo))];
  const counts = tipos.map(t => relatorios.filter(r => r.tipo === t).length);
  if (relatoriosTipoChart) relatoriosTipoChart.destroy();
  const ctx = document.getElementById('relatoriosTipoChart');
  if (ctx) {
    relatoriosTipoChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: { labels: tipos, datasets: [{ data: counts, backgroundColor: ['rgba(62,86,158,0.8)','rgba(189,160,126,0.8)','rgba(192,57,43,0.75)','rgba(31,122,77,0.75)','rgba(196,125,10,0.75)'], borderWidth: 2, borderColor: '#fff' }] },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  // Templates
  const templates = [
    { icon:'fa-star',         titulo:'Relatorio Executivo',    desc:'Resumo completo de performance, SLA e falhas para diretoria.' },
    { icon:'fa-gauge-high',   titulo:'Relatorio de SLA',       desc:'Detalhamento do cumprimento de SLA por robo e cliente.' },
    { icon:'fa-bug',          titulo:'Log de Excecoes',        desc:'Todas as falhas, erros e excecoes no periodo.' },
    { icon:'fa-chart-line',   titulo:'Performance por Robo',   desc:'Metricas de tempo, taxa de sucesso e gargalos.' },
    { icon:'fa-magnifying-glass', titulo:'Auditoria Completa', desc:'Relatorio de auditoria para compliance e governanca.' },
  ];
  document.getElementById('relatoriosTemplatesGrid').innerHTML = `
    <div class="relatorios-templates-label"><i class="fas fa-layer-group"></i> Templates de relatorio</div>
    <div class="relatorios-templates">
      ${templates.map(t => `
        <div class="rel-template-card" onclick="gerarRelatorio('${t.titulo}')">
          <i class="fas ${t.icon}"></i>
          <div class="rel-template-titulo">${t.titulo}</div>
          <div class="rel-template-desc">${t.desc}</div>
          <div class="rel-template-btn"><i class="fas fa-plus"></i> Gerar</div>
        </div>
      `).join('')}
    </div>
  `;
}

function gerarRelatorio(nome) {
  document.getElementById('modalTitle').innerHTML = '<i class="fas fa-file-export" style="color:var(--db-blue)"></i> Gerar Relatorio';
  document.getElementById('modalBody').innerHTML = `
    <div class="config-fields">
      <div class="config-field"><label>Tipo</label><input class="config-input" value="${nome}" readonly></div>
      <div class="config-field"><label>Periodo de inicio</label><input type="date" class="config-input"></div>
      <div class="config-field"><label>Periodo de fim</label><input type="date" class="config-input"></div>
      <div class="config-field"><label>Formato</label>
        <select class="config-input"><option>PDF</option><option>Excel (.xlsx)</option><option>CSV</option></select>
      </div>
    </div>
    <button class="btn-secondary" style="width:100%;justify-content:center;margin-top:16px" onclick="document.getElementById('detailModal').style.display='none'">
      <i class="fas fa-file-export"></i> Solicitar geracao
    </button>
  `;
  document.getElementById('detailModal').style.display = 'block';
}

// ==================== VIEW: NOTIFICAÇÕES ====================
function renderNotifStats() {
  const naoLidas = notificacoes.filter(n => !n.lida).length;
  const criticas = notificacoes.filter(n => n.tipo === 'critica').length;
  const avisos   = notificacoes.filter(n => n.tipo === 'aviso').length;
  document.getElementById('notifStatsGrid').innerHTML = `
    <div class="stat-card"><div class="stat-title"><i class="fas fa-envelope"></i> Nao lidas</div><div class="stat-number" style="color:var(--db-blue)">${naoLidas}</div><div class="stat-trend">de ${notificacoes.length} total</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-triangle-exclamation" style="color:var(--db-danger)"></i> Criticas</div><div class="stat-number" style="color:var(--db-danger)">${criticas}</div><div class="stat-trend trend-down">Requerem atencao</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-circle-exclamation" style="color:var(--db-warning)"></i> Avisos</div><div class="stat-number" style="color:var(--db-warning)">${avisos}</div><div class="stat-trend">Monitorar</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-check-circle" style="color:var(--db-success)"></i> Lidas</div><div class="stat-number" style="color:var(--db-success)">${notificacoes.filter(n=>n.lida).length}</div><div class="stat-trend trend-up">Em dia</div></div>
  `;
  const badge = document.getElementById('navNotifBadge');
  if (badge) badge.textContent = naoLidas > 0 ? naoLidas : '';
}

function renderNotificacoes() {
  const filtro = document.getElementById('notifFilter')?.value || 'all';
  const lista = document.getElementById('notifList');
  if (!lista) return;

  let filtered = [...notificacoes];
  if (filtro === 'nao-lida') filtered = filtered.filter(n => !n.lida);
  else if (filtro !== 'all') filtered = filtered.filter(n => n.tipo === filtro);

  const iconMap = { critica:'fa-triangle-exclamation', aviso:'fa-circle-exclamation', info:'fa-circle-info' };
  const colorMap = { critica:'var(--db-danger)', aviso:'var(--db-warning)', info:'var(--db-blue)' };
  const bgMap = { critica:'var(--db-danger-bg)', aviso:'var(--db-warning-bg)', info:'rgba(62,86,158,0.08)' };

  lista.innerHTML = filtered.length === 0
    ? '<div class="notif-empty"><i class="fas fa-bell-slash"></i><p>Nenhuma notificacao encontrada.</p></div>'
    : filtered.map(n => {
        const mins = Math.round((Date.now() - n.tempo) / 60000);
        const tempoStr = mins < 60 ? `${mins}min atras` : mins < 1440 ? `${Math.round(mins/60)}h atras` : `${Math.round(mins/1440)}d atras`;
        return `
          <div class="notif-item ${n.lida ? 'notif-lida' : ''}" onclick="lerNotif(${n.id})">
            <div class="notif-icon" style="background:${bgMap[n.tipo]};color:${colorMap[n.tipo]}">
              <i class="fas ${iconMap[n.tipo]}"></i>
            </div>
            <div class="notif-body">
              <div class="notif-titulo">${n.titulo}</div>
              <div class="notif-desc">${n.descricao}</div>
              <div class="notif-tempo">${tempoStr}</div>
            </div>
            ${!n.lida ? '<div class="notif-dot"></div>' : ''}
          </div>
        `;
      }).join('');
}

function lerNotif(id) {
  const n = notificacoes.find(x => x.id === id);
  if (n) { n.lida = true; renderNotificacoes(); renderNotifStats(); }
}

function marcarTodasLidas() {
  notificacoes.forEach(n => n.lida = true);
  renderNotificacoes();
  renderNotifStats();
}

function renderNotifPrefs() {
  const el = document.getElementById('notifPrefsList');
  if (!el) return;
  el.innerHTML = notifPrefs.map(p => `
    <div class="config-toggle-row">
      <div class="ctr-info">
        <span class="ctr-label">${p.label}</span>
        <span class="ctr-desc">${p.desc}</span>
      </div>
      <label class="switch">
        <input type="checkbox" ${p.ativo ? 'checked' : ''} onchange="toggleNotifPref('${p.id}', this.checked)">
        <span class="slider round"></span>
      </label>
    </div>
  `).join('');
}

function toggleNotifPref(id, val) {
  const p = notifPrefs.find(x => x.id === id);
  if (p) p.ativo = val;
}

// ==================== VIEW: CONFIGURAÇÕES ====================
function renderConfiguracoesView() {
  const togEl = document.getElementById('configToggles');
  if (togEl) {
    togEl.innerHTML = notifPrefs.map(p => `
      <div class="config-toggle-row">
        <div class="ctr-info">
          <span class="ctr-label">${p.label}</span>
          <span class="ctr-desc">${p.desc}</span>
        </div>
        <label class="switch">
          <input type="checkbox" ${p.ativo ? 'checked' : ''}>
          <span class="slider round"></span>
        </label>
      </div>
    `).join('');
  }

  const integEl = document.getElementById('integracoesList');
  if (integEl) {
    const integracoes = [
      { nome:'SAP ERP', icone:'fa-building', status:'conectado', detalhe:'Ultima sincronizacao: 5min atras' },
      { nome:'Oracle DB', icone:'fa-database', status:'conectado', detalhe:'Ultima sincronizacao: 12min atras' },
      { nome:'Microsoft Teams', icone:'fa-comment-dots', status:'conectado', detalhe:'Alertas ativos via webhook' },
      { nome:'E-mail SMTP', icone:'fa-envelope', status:'conectado', detalhe:'noc@dbsoftwares.com.br' },
      { nome:'Serasa API', icone:'fa-id-card', status:'desconectado', detalhe:'Aguardando configuracao de token' },
    ];
    integEl.innerHTML = integracoes.map(i => `
      <div class="integ-row">
        <div class="integ-icon" style="background:${i.status==='conectado'?'var(--db-success-bg)':'var(--db-danger-bg)'};color:${i.status==='conectado'?'var(--db-success)':'var(--db-danger)'}">
          <i class="fas ${i.icone}"></i>
        </div>
        <div class="integ-body">
          <div class="integ-nome">${i.nome}</div>
          <div class="integ-detalhe">${i.detalhe}</div>
        </div>
        <span class="status-badge ${i.status==='conectado'?'status-success':'status-fail'}">${i.status==='conectado'?'Ativo':'Inativo'}</span>
      </div>
    `).join('');
  }
}

// ==================== VIEW: MONITOR TEMPO REAL (NOC) ====================
let monitorRealtimeChart = null;
let monitorInterval = null;

function renderMonitorView() {
  const agora = new Date();
  document.getElementById('monitorTimestamp').textContent = `Atualizado: ${agora.toLocaleTimeString('pt-BR')}`;

  const robosAtivos = robos.filter(r => r.statusRobo === 'ativo');
  const robosErro   = robos.filter(r => r.statusRobo === 'erro');

  document.getElementById('monitorStatsGrid').innerHTML = `
    <div class="stat-card"><div class="stat-title"><i class="fas fa-play" style="color:var(--db-success)"></i> Robos em execucao</div><div class="stat-number" style="color:var(--db-success)">${robosAtivos.length}</div><div class="stat-trend trend-up">Operacao normal</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-triangle-exclamation" style="color:var(--db-danger)"></i> Com falha ativa</div><div class="stat-number" style="color:var(--db-danger)">${robosErro.length}</div><div class="stat-trend trend-down">Requer NOC</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-server"></i> UAs utilizadas</div><div class="stat-number">${Math.round(robosAtivos.length * 1.2)}</div><div class="stat-trend">de 20 disponíveis</div></div>
    <div class="stat-card"><div class="stat-title"><i class="fas fa-bolt"></i> Execucoes/min</div><div class="stat-number">${(Math.random()*3+1).toFixed(1)}</div><div class="stat-trend trend-up">Media do dia: 2.4</div></div>
  `;

  // Grid de robos em execucao
  const grid = document.getElementById('monitorRobotsGrid');
  if (grid) {
    grid.innerHTML = robos.slice(0,8).map(r => {
      const progresso = Math.floor(Math.random() * 100);
      const sCls = r.statusRobo === 'ativo' ? '#1F7A4D' : r.statusRobo === 'erro' ? '#C0392B' : '#C47D0A';
      return `
        <div class="monitor-robot-tile">
          <div class="mrt-header">
            <i class="fas ${r.icone}" style="color:${sCls}"></i>
            <span class="mrt-nome">${r.nome}</span>
            <span class="monitor-live-dot" style="${r.statusRobo!=='ativo'?'background:var(--db-danger)':''}"></span>
          </div>
          <div class="mrt-client">${r.cliente.split(' ').slice(0,2).join(' ')}</div>
          <div class="robot-progress-bar" style="margin:8px 0 4px">
            <div class="robot-progress-fill" style="width:${r.statusRobo==='ativo'?progresso:100}%;background:${sCls}"></div>
          </div>
          <div class="mrt-meta">${r.statusRobo==='ativo'?`Executando... ${progresso}%`:r.statusRobo==='erro'?'FALHA DETECTADA':'Pausado'}</div>
        </div>
      `;
    }).join('');
  }

  // Alertas ativos
  const alertasEl = document.getElementById('monitorAlertasList');
  if (alertasEl) {
    alertasEl.innerHTML = notificacoes.filter(n => !n.lida && n.tipo === 'critica').map(n => `
      <div class="insight-excecao-row" style="border-left:3px solid var(--db-danger)">
        <div class="ier-icon" style="background:var(--db-danger-bg);color:var(--db-danger)"><i class="fas fa-triangle-exclamation"></i></div>
        <div class="ier-body"><div class="ier-tipo">${n.titulo}</div><div class="ier-acao">${n.descricao}</div></div>
        <button class="btn-secondary" style="background:var(--db-danger);padding:4px 10px;font-size:0.7rem" onclick="lerNotif(${n.id});renderMonitorView()"><i class="fas fa-check"></i></button>
      </div>
    `).join('') || '<div style="padding:12px;font-size:0.8rem;color:var(--db-text-muted);text-align:center"><i class="fas fa-check-circle" style="color:var(--db-success)"></i> Nenhum alerta critico ativo</div>';
  }

  // Grafico tempo real
  const labels = Array.from({length:20}, (_,i) => `${20-i}s`).reverse();
  const data = Array.from({length:20}, () => Math.floor(Math.random()*5));
  if (monitorRealtimeChart) monitorRealtimeChart.destroy();
  const ctx = document.getElementById('monitorRealtimeChart');
  if (ctx) {
    monitorRealtimeChart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels,
        datasets: [{ label: 'Execucoes/min', data, borderColor: '#3E569E', backgroundColor: 'rgba(62,86,158,0.08)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 }]
      },
      options: { animation: false, responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  }

  clearInterval(monitorInterval);
  monitorInterval = setInterval(() => { if (currentView === 'monitor') renderMonitorView(); else clearInterval(monitorInterval); }, 5000);
}

// ==================== VIEW: INSIGHTS ====================
function renderInsightsView() {
  const sugestoes = gerarSugestoesIA();
  const excecoes = detectarExcecoesRecorrentes();
  const tendencias = calcularTendencias();
  const filtered = filterExecutions();
  const totalExecs = filtered.length;
  const totalFalhas = filtered.filter(e => e.status === 'falha').length;

  const iconMap = { alerta: 'fa-triangle-exclamation', otimizacao: 'fa-gauge-high', correcao: 'fa-wrench', preditivo: 'fa-chart-line' };
  const colorMap = { alerta: 'var(--db-danger)', otimizacao: 'var(--db-warning)', correcao: 'var(--db-blue)', preditivo: 'var(--db-success)' };

  const container = document.getElementById('insightsFullList');
  if (!container) return;

  container.innerHTML = `
    <div class="insights-summary-grid">
      <div class="insight-kpi">
        <i class="fas fa-play-circle"></i>
        <span class="ikpi-num">${totalExecs}</span>
        <span class="ikpi-lbl">Execuções analisadas</span>
      </div>
      <div class="insight-kpi">
        <i class="fas fa-triangle-exclamation" style="color:var(--db-danger)"></i>
        <span class="ikpi-num" style="color:var(--db-danger)">${totalFalhas}</span>
        <span class="ikpi-lbl">Falhas detectadas</span>
      </div>
      <div class="insight-kpi">
        <i class="fas fa-clock" style="color:var(--db-warning)"></i>
        <span class="ikpi-num">${tendencias.piorHorario}</span>
        <span class="ikpi-lbl">Pior horário</span>
      </div>
      <div class="insight-kpi">
        <i class="fas fa-robot" style="color:var(--db-blue)"></i>
        <span class="ikpi-num">${tendencias.robosCriticos.length}</span>
        <span class="ikpi-lbl">Robôs críticos</span>
      </div>
    </div>

    <div class="insights-section-label">Alertas e Recomendacoes IA</div>
    <div class="insights-cards-list">
      ${sugestoes.map(s => `
        <div class="insight-full-card">
          <div class="insight-full-icon" style="background:${colorMap[s.tipo]}20;color:${colorMap[s.tipo]}">
            <i class="fas ${iconMap[s.tipo] || 'fa-brain'}"></i>
          </div>
          <div class="insight-full-body">
            <div class="insight-full-title">${s.titulo.replace(/[^\w\s\u00C0-\u017F\-\:\.%\+]/g, '')}</div>
            <div class="insight-full-desc">${s.descricao}</div>
            <div class="insight-full-acao"><i class="fas fa-arrow-right"></i> ${s.acao}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="insights-section-label" style="margin-top:24px">Excecoes Recorrentes Detectadas</div>
    <div class="insights-excecoes-list">
      ${excecoes.map(ex => `
        <div class="insight-excecao-row">
          <div class="ier-icon"><i class="fas fa-bug"></i></div>
          <div class="ier-body">
            <div class="ier-tipo">${ex.tipo}</div>
            <div class="ier-acao">${ex.acaoSugerida}</div>
          </div>
          <div class="ier-count">
            <span class="ier-num">${ex.count}</span>
            <span class="ier-var ${ex.variacao > 0 ? 'trend-down' : 'trend-up'}">${ex.variacao > 0 ? '+' : ''}${ex.variacao}%</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="insights-section-label" style="margin-top:24px">Robos em Situacao Critica</div>
    <div class="insights-excecoes-list">
      ${tendencias.robosCriticos.map(nome => `
        <div class="insight-excecao-row">
          <div class="ier-icon" style="background:var(--db-danger-bg);color:var(--db-danger)"><i class="fas fa-robot"></i></div>
          <div class="ier-body">
            <div class="ier-tipo">${nome}</div>
            <div class="ier-acao">Robô identificado com padrão de falha crítico pela análise preditiva da IA.</div>
          </div>
          <span class="status-badge status-fail">Critico</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ==================== VIEW: AUTOMAÇÕES ====================

let robotsBarChart = null;
let robotsSuccessChart = null;

function getRoboStats(robo) {
  const execsRobo = executionsData.filter(e => {
    const diff = (new Date() - new Date(e.datetime)) / (1000 * 3600 * 24);
    return e.roboNome === robo.nome && diff <= 7;
  });
  const total = execsRobo.length;
  const sucesso = execsRobo.filter(e => e.status === 'sucesso').length;
  const falhas = total - sucesso;
  const taxaSucesso = total ? ((sucesso / total) * 100).toFixed(1) : '0.0';
  const ultimaExec = execsRobo.length ? new Date(execsRobo[0].datetime) : null;
  const tempoMedio = total ? (execsRobo.reduce((a, e) => a + e.duracaoSegundos, 0) / total).toFixed(0) : 0;
  return { total, sucesso, falhas, taxaSucesso, ultimaExec, tempoMedio };
}

function renderAutomacaoStats() {
  const totalRobos = robos.length;
  const ativos = robos.filter(r => r.statusRobo === 'ativo').length;
  const pausados = robos.filter(r => r.statusRobo === 'pausado').length;
  const comErro = robos.filter(r => r.statusRobo === 'erro').length;
  const clientes = [...new Set(robos.map(r => r.cliente))].length;

  document.getElementById('automacaoStatsGrid').innerHTML = `
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-robot"></i> Total de Robôs</div>
      <div class="stat-number">${totalRobos}</div>
      <div class="stat-trend">${clientes} clientes atendidos</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-circle-check" style="color:var(--db-success)"></i> Ativos</div>
      <div class="stat-number" style="color:var(--db-success)">${ativos}</div>
      <div class="stat-trend trend-up">${((ativos/totalRobos)*100).toFixed(0)}% da frota operacional</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-circle-pause" style="color:var(--db-warning)"></i> Pausados</div>
      <div class="stat-number" style="color:var(--db-warning)">${pausados}</div>
      <div class="stat-trend">Aguardando reativação</div>
    </div>
    <div class="stat-card">
      <div class="stat-title"><i class="fas fa-circle-xmark" style="color:var(--db-danger)"></i> Com Erro</div>
      <div class="stat-number" style="color:var(--db-danger)">${comErro}</div>
      <div class="stat-trend trend-down">Requer intervenção NOC</div>
    </div>
  `;
}

function getFilteredRobos() {
  const cliente = document.getElementById('automacaoClienteFilter')?.value || 'all';
  const tipo = document.getElementById('automacaoTipoFilter')?.value || 'all';
  const status = document.getElementById('automacaoStatusFilter')?.value || 'all';
  const search = (document.getElementById('automacaoSearch')?.value || '').toLowerCase();

  return robos.filter(r => {
    if (cliente !== 'all' && r.cliente !== cliente) return false;
    if (tipo !== 'all' && r.tipo !== tipo) return false;
    if (status !== 'all' && r.statusRobo !== status) return false;
    if (search && !r.nome.toLowerCase().includes(search) && !r.descricao.toLowerCase().includes(search)) return false;
    return true;
  });
}

function renderRoboCards() {
  const filtered = getFilteredRobos();
  const grid = document.getElementById('robotsGrid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="robots-empty"><i class="fas fa-robot"></i><p>Nenhum robô encontrado com os filtros aplicados.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const stats = getRoboStats(r);
    const statusConfig = {
      ativo:   { cls: 'robot-status-ativo',   label: 'Ativo',   icon: 'fa-circle-check' },
      pausado: { cls: 'robot-status-pausado',  label: 'Pausado', icon: 'fa-circle-pause' },
      erro:    { cls: 'robot-status-erro',     label: 'Erro',    icon: 'fa-circle-xmark' }
    };
    const s = statusConfig[r.statusRobo] || statusConfig.ativo;
    const taxaNum = parseFloat(stats.taxaSucesso);
    const barColor = taxaNum >= 90 ? 'var(--db-success)' : taxaNum >= 75 ? 'var(--db-warning)' : 'var(--db-danger)';
    const ultimaStr = stats.ultimaExec ? stats.ultimaExec.toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }) : 'Sem dados';

    return `
      <div class="robot-card" data-id="${r.id}">
        <div class="robot-card-header">
          <div class="robot-icon-wrap">
            <i class="fas ${r.icone}"></i>
          </div>
          <div class="robot-header-info">
            <div class="robot-name">${r.nome}</div>
            <div class="robot-meta">${r.plataforma} &bull; v${r.versao}</div>
          </div>
          <span class="robot-status-badge ${s.cls}"><i class="fas ${s.icon}"></i> ${s.label}</span>
        </div>
        <div class="robot-desc">${r.descricao}</div>
        <div class="robot-tags">
          <span class="robot-tag tag-tipo">${r.tipo}</span>
          <span class="robot-tag tag-cliente">${r.cliente.split(' ').slice(0,2).join(' ')}</span>
          <span class="robot-tag tag-sla">SLA ${r.slaSegundos}s</span>
        </div>
        <div class="robot-stats-row">
          <div class="robot-stat">
            <span class="robot-stat-num">${stats.total}</span>
            <span class="robot-stat-lbl">Execuções</span>
          </div>
          <div class="robot-stat">
            <span class="robot-stat-num" style="color:${barColor}">${stats.taxaSucesso}%</span>
            <span class="robot-stat-lbl">Sucesso</span>
          </div>
          <div class="robot-stat">
            <span class="robot-stat-num">${stats.falhas}</span>
            <span class="robot-stat-lbl">Falhas</span>
          </div>
          <div class="robot-stat">
            <span class="robot-stat-num">${stats.tempoMedio}s</span>
            <span class="robot-stat-lbl">Tempo médio</span>
          </div>
        </div>
        <div class="robot-progress-bar">
          <div class="robot-progress-fill" style="width:${stats.taxaSucesso}%; background:${barColor}"></div>
        </div>
        <div class="robot-footer">
          <span class="robot-last-exec"><i class="fas fa-clock"></i> ${ultimaStr}</span>
          <button class="btn-robo-detalhe" onclick="showRoboModal(${r.id})"><i class="fas fa-eye"></i> Detalhes</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderRoboCharts() {
  const filtered = getFilteredRobos().slice(0, 10);
  const labels = filtered.map(r => r.nome.length > 16 ? r.nome.substring(0, 14) + '…' : r.nome);

  // Execuções por robô
  const execsPorRobo = filtered.map(r => getRoboStats(r).total);
  const ctx1 = document.getElementById('robotsChart');
  if (ctx1) {
    if (robotsBarChart) robotsBarChart.destroy();
    robotsBarChart = new Chart(ctx1.getContext('2d'), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Execuções (7d)',
          data: execsPorRobo,
          backgroundColor: 'rgba(62,86,158,0.75)',
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 2 } } }
      }
    });
  }

  // Taxa de sucesso por robô
  const taxas = filtered.map(r => parseFloat(getRoboStats(r).taxaSucesso));
  const ctx2 = document.getElementById('robotsSuccessChart');
  if (ctx2) {
    if (robotsSuccessChart) robotsSuccessChart.destroy();
    robotsSuccessChart = new Chart(ctx2.getContext('2d'), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Taxa de sucesso (%)',
          data: taxas,
          backgroundColor: taxas.map(v => v >= 90 ? 'rgba(31,122,77,0.75)' : v >= 75 ? 'rgba(196,125,10,0.75)' : 'rgba(192,57,43,0.75)'),
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
      }
    });
  }
}

function renderRoboDetailTable() {
  const filtered = getFilteredRobos();
  const tbody = document.getElementById('robotsDetailBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  filtered.forEach(r => {
    const stats = getRoboStats(r);
    const statusConfig = {
      ativo:   { cls: 'status-success', label: 'Ativo'   },
      pausado: { cls: 'status-warning', label: 'Pausado' },
      erro:    { cls: 'status-fail',    label: 'Erro'    }
    };
    const s = statusConfig[r.statusRobo] || statusConfig.ativo;
    const taxa = parseFloat(stats.taxaSucesso);
    const taxaCls = taxa >= 90 ? 'trend-up' : taxa >= 75 ? '' : 'trend-down';
    const row = tbody.insertRow();
    row.innerHTML = `
      <td><strong>${r.nome}</strong><br><small style="color:var(--db-text-muted)">v${r.versao}</small></td>
      <td>${r.cliente}</td>
      <td><span class="robot-tag tag-tipo" style="display:inline-block">${r.tipo}</span></td>
      <td><span class="robot-tag" style="display:inline-block;background:var(--db-bg);color:var(--db-text-muted);border:1px solid var(--db-border)">${r.plataforma}</span></td>
      <td>${r.slaSegundos}s</td>
      <td>${stats.total}</td>
      <td><span class="${taxaCls}" style="font-weight:700">${stats.taxaSucesso}%</span></td>
      <td style="font-size:0.78rem;color:var(--db-text-muted)">${stats.ultimaExec ? stats.ultimaExec.toLocaleString('pt-BR', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}) : '—'}</td>
      <td><span class="status-badge ${s.cls}">${s.label}</span></td>
      <td><button class="btn-secondary" style="padding:4px 10px;font-size:0.7rem" onclick="showRoboModal(${r.id})"><i class="fas fa-eye"></i></button></td>
    `;
  });
}

function populateAutomacaoFilters() {
  const clientes = [...new Set(robos.map(r => r.cliente))];
  const tipos = [...new Set(robos.map(r => r.tipo))].sort();

  const cSel = document.getElementById('automacaoClienteFilter');
  if (cSel) cSel.innerHTML = '<option value="all">Todos os clientes</option>' + clientes.map(c => `<option value="${c}">${c}</option>`).join('');

  const tSel = document.getElementById('automacaoTipoFilter');
  if (tSel) tSel.innerHTML = '<option value="all">Todos os tipos</option>' + tipos.map(t => `<option value="${t}">${t}</option>`).join('');
}

function showRoboModal(id) {
  const r = robos.find(x => x.id === id);
  if (!r) return;
  const stats = getRoboStats(r);
  const taxa = parseFloat(stats.taxaSucesso);
  const statusLabel = { ativo: 'Ativo', pausado: 'Pausado', erro: 'Com Erro' };
  const statusBadge = { ativo: 'status-success', pausado: 'status-warning', erro: 'status-fail' };

  document.getElementById('modalTitle').innerHTML = `<i class="fas ${r.icone}" style="color:var(--db-blue)"></i> ${r.nome}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-robot-grid">
      <div class="modal-info-block">
        <p><strong>Cliente:</strong> ${r.cliente}</p>
        <p><strong>Tipo:</strong> ${r.tipo}</p>
        <p><strong>Plataforma:</strong> ${r.plataforma}</p>
        <p><strong>Versao:</strong> v${r.versao}</p>
        <p><strong>SLA contratado:</strong> ${r.slaSegundos}s</p>
        <p><strong>Status:</strong> <span class="status-badge ${statusBadge[r.statusRobo]}">${statusLabel[r.statusRobo]}</span></p>
      </div>
      <div class="modal-info-block">
        <p><strong>Execucoes (7d):</strong> ${stats.total}</p>
        <p><strong>Sucessos:</strong> <span style="color:var(--db-success);font-weight:700">${stats.sucesso}</span></p>
        <p><strong>Falhas:</strong> <span style="color:var(--db-danger);font-weight:700">${stats.falhas}</span></p>
        <p><strong>Taxa de sucesso:</strong> <span style="color:${taxa>=90?'var(--db-success)':taxa>=75?'var(--db-warning)':'var(--db-danger)'};font-weight:700">${stats.taxaSucesso}%</span></p>
        <p><strong>Tempo medio:</strong> ${stats.tempoMedio}s</p>
        <p><strong>Ultima execucao:</strong> ${stats.ultimaExec ? stats.ultimaExec.toLocaleString('pt-BR') : '—'}</p>
      </div>
    </div>
    <hr>
    <p style="font-size:0.82rem;color:var(--db-text-muted);margin-bottom:10px"><strong>Descricao:</strong> ${r.descricao}</p>
    <div class="robot-progress-bar" style="margin-bottom:4px">
      <div class="robot-progress-fill" style="width:${stats.taxaSucesso}%;background:${taxa>=90?'var(--db-success)':taxa>=75?'var(--db-warning)':'var(--db-danger)'}"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--db-text-muted)">
      <span>0%</span><span>Taxa de sucesso: ${stats.taxaSucesso}%</span><span>100%</span>
    </div>
    <hr>
    <div class="insight-ia" style="margin-top:8px">
      <i class="fas fa-robot"></i> <strong>Analise IA:</strong><br>
      ${taxa >= 90
        ? 'Robô operando dentro dos parâmetros ideais. Performance excelente.'
        : taxa >= 75
        ? 'Taxa de sucesso abaixo do ideal. Recomenda-se revisão das regras de negócio e logs de erro.'
        : 'Desempenho crítico detectado. Robô requer atenção imediata do time NOC. Verificar logs e ambiente de execução.'}
    </div>
  `;
  document.getElementById('detailModal').style.display = 'block';
}

function renderAutomacoes() {
  renderAutomacaoStats();
  populateAutomacaoFilters();
  renderRoboCards();
  renderRoboCharts();
  renderRoboDetailTable();
}

function initAutomacaoFilters() {
  ['automacaoClienteFilter','automacaoTipoFilter','automacaoStatusFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => { renderRoboCards(); renderRoboCharts(); renderRoboDetailTable(); });
  });
  const search = document.getElementById('automacaoSearch');
  if (search) search.addEventListener('input', () => { renderRoboCards(); renderRoboDetailTable(); });
}

// ==================== FIM VIEW AUTOMAÇÕES ====================

function init() {
  initEventListeners();
  changeView('executions');
  renderStats();
  renderExecutionsTable();
  renderExceptions();
  renderIASuggestions();
  renderCharts();
}
init();
