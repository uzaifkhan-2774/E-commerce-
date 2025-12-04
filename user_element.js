const prod =JSON.parse(localStorage.getItem("product"))

    {/* <div class="card">
        <div  class="card-img">
            <img src="https://sportsstation.in/cdn/shop/files/ForeverRun-NITRO_E2_84_A2-Men_s-Running-Shoes_3cbe3b4a-1477-499f-92d2-32f0c1cbf49c.jpg?v=1756101888" alt="" height="230px">
        </div>
        <div class="info">
            <h3>Puma</h3>
            <h2>sneakers<h2>
            <h4>₹5000 <span><strike>₹7900</strike></span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Buy Now</button>
        </div>
    </div> */} 

      function display_name(arr){
        arr.forEach((ele) => {
           // console.log(ele.price);

            let card = document.createElement("div");
            card.setAttribute("class", "card");

            let card_Img = document.createElement("div");
            card_Img.setAttribute("class", "card-Img");

            let img = document.createElement("img");
            img.setAttribute("src", ele.imgURL );
            card_Img.appendChild(img);
            card.appendChild(card_Img);

            let Info = document.createElement("div");
            Info.setAttribute("class", "info");

            let h3 = document.createElement("h2");
            h3.append(ele.brand);
            Info.appendChild(h3);

            let h2 = document.createElement("h3");
            h2.append(ele.title.slice(0,7).trim());
            Info.appendChild(h2);

            let h4 = document.createElement("h4");
            h4.innerHTML =`₹${ele.price} <span><strike> ₹${ele.price + 199} <srike><span> `
            Info.appendChild(h4);

            let p = document.createElement("p");
            p.append((ele.desc.length < 60)?"Premium casual shoes for men and children...": (ele.desc.slice(0,60).trim() + "...."));
            p.setAttribute("title", ele.desc);
            Info.appendChild(p);


            let btn = document.createElement("button")
            btn.append("Buy Now")
            Info.appendChild(btn);
            card.appendChild(Info);

            let card_data = document.getElementById("card_data")
              card_data.appendChild(card);
               });
     
      }
     display_name(prod);