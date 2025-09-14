function showTab(tab) {
  const content = document.getElementById('content');
  if (tab === 'clientes') {
    content.innerHTML = '<h2>📋 Lista de Clientes</h2><p>Aquí podrás gestionar tus clientes.</p>';
  } else if (tab === 'barberos') {
    content.innerHTML = '<h2>💈 Lista de Barberos</h2><p>Aquí podrás asignar barberos.</p>';
  } else if (tab === 'productos') {
    content.innerHTML = '<h2>🧴 Catálogo de Productos</h2><p>Aquí podrás administrar productos.</p>';
  } else if (tab === 'citas') {
    content.innerHTML = '<h2>📅 Agenda de Citas</h2><p>Aquí podrás gestionar las citas.</p>';
  }
}
