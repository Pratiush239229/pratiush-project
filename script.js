// Function to update the word count, character count, and reading time
function updateAnalysis() {
    const text = document.getElementById('editor').innerText;
    
    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById('wordCount').innerText = wordCount;
  
    // Character count
    const charCount = text.replace(/\s/g, '').length;
    document.getElementById('charCount').innerText = charCount;
  
    // Estimated reading time (assuming 200 words per minute)
    const readingTime = Math.ceil(wordCount / 200);
    document.getElementById('readTime').innerText = readingTime;
  }
  
  // Function to convert text to camelCase
  function convertToCamelCase(text) {
    return text.replace(/(?:^\w|[A-Z]|\b\w|\s+|\-|\_)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    ).replace(/\s+/g, '');
  }
  
  // Function to convert text to snake_case
  function convertToSnakeCase(text) {
    return text.replace(/\s+/g, '_').toLowerCase();
  }
  
  // Function to convert text to PascalCase
  function convertToPascalCase(text) {
    return text.replace(/(?:^\w|[A-Z]|\b\w|\s+|\-|\_)/g, (match) =>
      match.toUpperCase()
    ).replace(/\s+/g, '');
  }
  
  // Function to convert text based on the selected case format
  function convertText(format) {
    const text = document.getElementById('editor').innerText;
    let convertedText = '';
  
    if (format === 'camel') {
      convertedText = convertToCamelCase(text);
    } else if (format === 'snake') {
      convertedText = convertToSnakeCase(text);
    } else if (format === 'pascal') {
      convertedText = convertToPascalCase(text);
    }
  
    document.getElementById('editor').innerText = convertedText;
    updateAnalysis(); // Update analysis after conversion
  }
  
  // Formatting functions
  function toggleBold() {
    document.execCommand('bold', false, null);
    updateAnalysis();
  }
  
  function toggleItalic() {
    document.execCommand('italic', false, null);
    updateAnalysis();
  }
  
  function toggleUnderline() {
    document.execCommand('underline', false, null);
    updateAnalysis();
  }
  
  function clearFormatting() {
    document.execCommand('removeFormat', false, null);
    updateAnalysis();
  }
  
  // Event listener for editor text change to keep the analysis up to date
  document.getElementById('editor').addEventListener('input', updateAnalysis);
  