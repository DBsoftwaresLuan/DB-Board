// ==================== DADOS MOCK - ROBÔS E EXECUÇÕES ====================

// Lista de robôs cadastrados
const robos = [
  { id: 1, nome: "Validador NF-e", cliente: "Indústria Machado", tipo: "Validação", slaSegundos: 45, horarioCritico: "14-15", ativo: true },
  { id: 2, nome: "Integrador ERP", cliente: "Indústria Machado", tipo: "Integração", slaSegundos: 30, ativo: true },
  { id: 3, nome: "Gestor de Estoque", cliente: "Logística Rápida", tipo: "Processamento", slaSegundos: 60, ativo: true },
  { id: 4, nome: "Processador de Boletos", cliente: "Financeira Norte", tipo: "Financeiro", slaSegundos: 90, horarioCritico: "16-18", ativo: true },
  { id: 5, nome: "Extrator de Notas", cliente: "Varejo Sul", tipo: "Coleta", slaSegundos: 25, ativo: true },
  { id: 6, nome: "Conciliador Bancário", cliente: "Financeira Norte", tipo: "Conciliação", slaSegundos: 120, ativo: true },
  { id: 7, nome: "Emissor de Certificados", cliente: "Indústria Machado", tipo: "Geração", slaSegundos: 15, ativo: true },
  { id: 8, nome: "Monitor de Preços", cliente: "Varejo Sul", tipo: "Web Scraping", slaSegundos: 180, ativo: true },
  { id: 9, nome: "Importador XML", cliente: "Logística Rápida", tipo: "Importação", slaSegundos: 40, ativo: true },
  { id: 10, nome: "Gerador de Relatórios", cliente: "DB Interno", tipo: "Reporting", slaSegundos: 300, ativo: true }
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
  const views = ['executions','automations','sla','insights','admin','clients'];
  views.forEach(v => {
    const el = document.getElementById(`view${v.charAt(0).toUpperCase() + v.slice(1)}`);
    if (el) el.className = (v === viewId) ? 'view-active' : 'view-hidden';
  });
  
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
  
  if (viewId === 'executions') {
    renderStats();
    renderExecutionsTable();
    renderExceptions();
    renderIASuggestions();
    renderCharts();
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
