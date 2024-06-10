document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar.contains(event.target)) {
        sidebar.style.width = '60px';
        document.querySelector('.menu-content').style.display = 'none';
    }
});

document.querySelector('.sidebar').addEventListener('mouseover', function () {
    this.style.width = '200px';
    document.querySelector('.menu-content').style.display = 'flex';
});
