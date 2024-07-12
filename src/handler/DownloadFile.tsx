const downloadFile = (url: string, filename: string) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    // eslint-disable-next-line no-console
    .catch(error => console.error('Error downloading file:', error));
};

export { downloadFile };