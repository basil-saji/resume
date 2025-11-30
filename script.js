// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // You can either:
    // 1. Link to a hosted PDF file
    // 2. Generate PDF from the page using print dialog
    
    // Option 2: Open print dialog (user can save as PDF)
    window.print();
    
    // Option 1: If you have a PDF file, uncomment below and update the path
    // window.location.href = 'path/to/your/resume.pdf';
});