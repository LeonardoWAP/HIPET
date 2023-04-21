

export function set_nickname(){
    let user_name = document.getElementById("feed-nickname")
    
    user_name.innerHTML =  localStorage.getItem('nickname');         
}

export function copiarUrl() {
    const url = window.location.href;
  
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copiada para a área de transferência!');
      })
      .catch(() => {
        alert('Não foi possível copiar a URL');
      });
  
    const copyUrlButton = document.getElementById('copy-url-button');
    copyUrlButton.removeEventListener('click', copiarUrl);
  }
  

  