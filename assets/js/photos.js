document.addEventListener('DOMContentLoaded', function() {
    const cloneButton = document.getElementById('cloneButton');
    
    cloneButton.addEventListener('click', function() {
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simular una carga
        setTimeout(() => {
            this.textContent = 'Clone and Deploy';
            this.disabled = false;
        }, 2000);
    });
});