class MyNavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .navbar { 
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                background-color: #B42B51;
            }

            #titleApp { 
              font-family: "YellowTail" , sans-serif;
              margin-left: 7px;
              font-size: 20px;
            }

            
        </style>
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-laughing text-light" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
          <a class="navbar-brand text-light text-title" id="titleApp" href="#Home"> GoRecipe </a>
          <button
            id="menuCollapse"
            class="navbar-toggler responsive-mode"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
    `;
  }
}

customElements.define("nav-bar", MyNavBar);
