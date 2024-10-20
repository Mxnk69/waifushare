 function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        var content = document.getElementById('content');

        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px'; /* Hide sidebar */
            content.classList.remove('expanded');
        } else {
            sidebar.style.left = '0px'; /* Show sidebar */
            content.classList.add('expanded');
        }
    }