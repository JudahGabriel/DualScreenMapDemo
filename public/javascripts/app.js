const products = [
    {
      name: "Art Piece",
      price: "$250",
      image:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/frame-with-picture_1f5bc.png",
      pos: {
        top: "20%",
        left: "0px"
      },
      category: 'Art',
      description: 'Original art piece by <strong>Pablo Picasso</strong> from the 20th century' 
    },
    {
      name: "Grand Piano",
      price: "$1,000",
      image:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/musical-keyboard_1f3b9.png",
      pos: {
        top: "90px",
        left: "80%"
      },
      category: 'Music & Entertainment',
      description: 'This Model A piano offers “grand” sound in a medium-scale instrument'
    },
    {
      name: "Ping Pong Table",
      price: "$55",
      image:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/table-tennis-paddle-and-ball_1f3d3.png",
      pos: {
        top: "90%",
        left: "210px"
      },
      category: 'Sports & Fitness',
      description: 'All weather blue ping pong table for indoor and outdoor use'
    },
    {
      name: "Tufted Couch",
      price: "$220",
      image:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/couch-and-lamp_1f6cb.png",
      pos: {
        top: "30%",
        left: "520px"
      },
      category: 'Furniture',
      description: 'Handsome tufted sofa that is as comfortable as it is eye-catching'
    }
  ];

  let productsList = document.querySelector(".products-list-inner");
  let productFragment = new DocumentFragment();
  let locationsFragment = new DocumentFragment();
  products.forEach(product => {
    let li = document.createElement("li");
    li.className = "product";
    li.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-text">
            <h5>${product.name}</h5>
            <p>${product.price}</p>
          </div>
          <div class="flex-right-align">
              <button class="product-like-btn ${Math.random() >= 0.5 &&
                "liked"}">
                  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z" fill="#EB3347" stroke="#EB3347" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                    
              </button>
              <button class="product-more-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>  
              </button>
        </div>
      `;
    productFragment.append(li);

    let productPin = document.createElement("div");
    productPin.className = "product-pin";
    productPin.style.backgroundImage = `url(${product.image})`;
    productPin.style.top = product.pos.top;
    productPin.style.left = product.pos.left;

    let productPopper = document.createElement("div");
    productPopper.className = "product-popper";
    productPopper.innerHTML = `
        <div class="popper-image" style="background-image: url(${product.image})">
        </div>
        <div class="popper-text-top">
          <div class="popper-tag">
            ${product.category}
          </div>
          <h3 class="popper-large-price">
            ${product.price}
          </h3>
        </div>
        <div class="popper-text-middle">
          <h5 class="popper-product-title">${product.name}</h5>
          <span>4 mi.</span>
        </div>
        <div class="popper-text-bottom">
          <p>
            ${product.description}
          </p>
        </div>  
    `;

    let popper = new Popper(productPin, productPopper, {
      placement: "auto",
      modifiers: {
        flip: {
          behavior: ["left", "bottom", "top"]
        },
        preventOverflow: {
          boundariesElement: document.querySelector(".map")
        }
      }
    });

    productPin.addEventListener('pointerenter', ()=>{
      productPopper.style.opacity =  1;
    })
    productPin.addEventListener('pointerleave', () => {
      productPopper.style.opacity = 0;
    })

    locationsFragment.append(productPin);
    locationsFragment.append(productPopper);
  });
  productsList.append(productFragment);
  document.querySelector(".map").append(locationsFragment);
  Array.from(document.querySelectorAll(".product-like-btn")).forEach(
    btn => {
      btn.addEventListener("click", () => btn.classList.toggle("liked"));
    }
  );

  // Use the spanning polyfill to simulate dual screens.
  const config = window["__foldables_env_vars__"];
  config.update({
    spanning: "single-fold-vertical",
    foldSize: 30,
    browserShellSize: 20
  });