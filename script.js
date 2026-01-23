console.log("CivicSphere loaded successfully");
// Display selected file name
const fileInput = document.getElementById('fileUpload');
const fileName = document.getElementById('fileName');

fileInput.addEventListener('change', () => {
  if(fileInput.files.length > 0){
    fileName.textContent = fileInput.files[0].name;
  } else {
    fileName.textContent = 'No file chosen';
  }
});

// Placeholder for form submission
document.getElementById('issueForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Issue submitted successfully! (This is a placeholder alert)');
});


