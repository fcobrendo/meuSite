  // Espera a animação do logo terminar para ativar o tremor
    const logo = document.getElementById("logo");
    const titulo = document.getElementById("titulo1");
    
    const div = document.createElement("div")
    const p = document.createElement("p")

    titulo.addEventListener("animationend", () => {
      logo.classList.add("tremor");

      // Remove depois do efeito pra poder reutilizar se quiser
      setTimeout(() => {
        logo.classList.remove("tremor");
      }, 1000);
    });

  

   