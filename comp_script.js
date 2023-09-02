document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById("revealButton")
  const hiddenContent = document.getElementById("hiddenContent")

  revealButton.addEventListener("click", function () {
    hiddenContent.classList.toggle("hidden")

    revealButton.style.display = "none"

  })
})

function openModal(title) {
    let modal = document.getElementById("modal")
    let modalTitle = document.getElementById("modal-title")
    let modalDescription = document.getElementById("modal-description")
    let modalAudio = document.getElementById("modal-audio")
    let modalLink_CapeElizabeth = document.getElementById("modalLink_Cape_Elizabeth")
    let modalLink_Bpt1 = document.getElementById("modalLink_Bpt1")
    let modalLink_Bpt2 = document.getElementById("modalLink_Bpt2")
    let modal_image = document.getElementById("modal_image")
  
    //early:

    if (title == "early_1") {
      modalTitle.textContent = "Beginnings Pt. 1"
      modalDescription.textContent = "A collection of early works, between 2018 & 2020."
      modalAudio.style = "display: none"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: auto"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "images/Beginnings Pt. 1.jpeg"
      modal_image.style.display = "inline-block"
    } else if (title == "early_2") {
      modalTitle.textContent = "Beginnings Pt. 2"
      modalDescription.textContent = "A collection of early works, between 2021 & 2022."
      modalAudio.style = "display: none"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: auto"
      modal_image.src = "images/Beginnings Pt. 2.jpeg"
      modal_image.style.display = "inline-block"
    } else if (title == "early_3") {
      modalTitle.textContent = "Cape Elizabeth"
      modalDescription.textContent = "An early attempt at a four movement string quartet, recorded in 2021. Credits to Lucia Di Blasio Scott (Violin I), Nicole d'Oliveira (Violin II), Karin Gaertner (Viola), Jessica Scott (Cello), & John Walton (Score Editor)."
      modalAudio.style = "display: none"    //audio player example: modalAudio.src = "audio/Cape_Elizabeth.mp3" (replace with this)
      modalLink_CapeElizabeth.style = "display: auto"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "images/Cape Elizabeth.jpg"
      modal_image.style.display = "inline-block"
    } else if (title == "early_4") {
      modalTitle.textContent = "Berklee Scoring Demo"
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "early_5") {
      modalTitle.textContent = "Two Minutes of Spring"
      modalDescription.textContent = "Theme for chamber orchestra, written in early 2023. Dedicated to my wonderful mother & friend; Kellie Saul."
      modalAudio.style = "display: none"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"

      //2023:

    } else if (title == "2023_1") {
      modalTitle.textContent = "Stairs"
      modalDescription.textContent = "Staircase & electronics. Documentation: https://twitter.com/WilliamWSaul/status/1697874099517698222?s=20"
      modalAudio.src = "audio/Stairs.wav"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "images/Stairs.jpeg"
      modal_image.style.display = "inline-block"
    } else if (title == "2023_2") {
      modalTitle.textContent = ""
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.style = "display: none"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "none"
      modal_image.style.display = "none"
    } else if (title == "2023_3") {
      modalTitle.textContent = ""
      modalDescription.textContent = "Coming Soon - No recording available"
      modalAudio.src = "audio/"
      modalLink_CapeElizabeth.style = "display: none"
      modalLink_Bpt1.style = "display: none"
      modalLink_Bpt2.style = "display: none"
      modal_image.src = "images/"
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