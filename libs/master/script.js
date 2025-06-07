const sidebar = document.getElementById('sidebar');
const btnToggle = document.getElementById('btn-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// Função para atualizar o ícone conforme o estado
function updateIcon() {
    if (sidebar.classList.contains('collapsed')) {
        toggleIcon.classList.remove('bi-chevron-left');
        toggleIcon.classList.add('bi-chevron-right');
    } else {
        toggleIcon.classList.remove('bi-chevron-right');
        toggleIcon.classList.add('bi-chevron-left');
    }
}

// Toggle manual (clique no botão seta)
btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    updateIcon();
});

// Colapsar automaticamente em telas pequenas
function applyResponsiveCollapse() {
    if (window.innerWidth < 768) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
    updateIcon();
}

window.addEventListener('load', applyResponsiveCollapse);
window.addEventListener('resize', applyResponsiveCollapse);