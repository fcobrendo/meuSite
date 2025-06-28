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

    const btnSobre = document.querySelector("#sobre")
    const btnContato =document.querySelector("#contato")
    const header = document.querySelector("#header")

    btnSobre.addEventListener("mouseenter",()=>{
      header.style.height="180px";
      
      p.style.width="450px"
      p.style.fontSize="12px"
      p.style.margin="20px"
      p.style.textAlign="justify"
      p.innerHTML="A RLZ Digital nasceu com o propósito de transformar ideias em experiências digitais de alto impacto. Somos especialistas na criação de páginas web modernas, funcionais e orientadas a resultados. Trabalhamos com foco total na performance, conversão e identidade visual de cada cliente.Nosso compromisso é entregar soluções completas, com atendimento próximo, suporte ágil e total transparência. Valorizamos a autonomia do cliente e oferecemos desde planos acessíveis até opções exclusivas com entrega total do projeto."
      
      div.appendChild(p)
      header.appendChild(div)
      
    })
    btnSobre.addEventListener("mouseleave",()=>{
      header.style.height="40px"
      div.remove()
    })