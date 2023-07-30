function openModal(title) {
    let modal = document.getElementById("modal")
    let modalTitle = document.getElementById("modal-title")
    let modalDescription = document.getElementById("modal-description")
    let modalAudio = document.getElementById("modal-audio")
    let modalLink_Bpt1 = document.getElementById("modalLink_Bpt1")
    let modalLink_Bpt2 = document.getElementById("modalLink_Bpt2")
    let modal_image = document.getElementById("modal_image")
  
    // For future reference, replace these with unique details:
    if (title == "electroacoustic_1") {
      modalTitle.textContent = "Deforestation"
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalAudio.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "electroacoustic_2") {
      modalTitle.textContent = "Stairs"
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalAudio.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "orchestral_1") {
      modalTitle.textContent = "Spring Suite"
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalAudio.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "chamber_1") {
      modalTitle.textContent = "Cape Elizabeth"
      modalDescription.textContent = "An early attempt at a four movement string quartet, recorded in 2021. Credits to Lucia Di Blasio Scott (Violin I), Nicole d'Oliveira (Violin II), Karin Gaertner (Viola), Jessica Scott (Cello), & John Walton (Score Editor)."
      modalAudio.src = "audio/Cape_Elizabeth.mp3"
      modalAudio.style = "display: auto"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "images/Cape Elizabeth.jpg"
      modal_image.style.display = "inline-block"
    } else if (title == "solo_1") {
      modalTitle.textContent = "serialist.js"
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalAudio.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "other_1") {
        modalTitle.textContent = "Beginnings Pt. 2"
        modalDescription.textContent = "A collection of early works, between 2021 & 2022."
        modalAudio.style = "display: none"
        modalLink_Bpt1.style = "display: none"
        modalLink_Bpt2.style = "display: auto"
        modal_image.src = "images/Beginnings Pt. 2.jpeg"
        modal_image.style.display = "inline-block"
      } else if (title == "other_2") {
        modalTitle.textContent = "Beginnings Pt. 1"
        modalDescription.textContent = "A collection of early works, between 2018 & 2020."
        modalAudio.style = "display: none"
        modalLink_Bpt1.style = "display: auto"
        modalLink_Bpt2.style = "display: none"
        modal_image.src = "images/Beginnings Pt. 1.jpeg"
        modal_image.style.display = "inline-block"
      }
    
 modal.style.display = "block"
  }
  
  function closeModal() {
    let modal = document.getElementById("modal")
    let modalAudio = document.getElementById("modal-audio")
  
    modal.style.display = "none"
    modalAudio.pause()
    modalAudio.currentTime = 0
  }
  
  window.onclick = function (event) {
    let modal = document.getElementById("modal")
  
    if (event.target == modal) {
      closeModal()
    }
  }