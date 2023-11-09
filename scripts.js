    //değişkenler:
      let buton = document.getElementById("buton")
      let buton1 = document.getElementById("buton1")
      let buton2 = document.getElementById("buton2")
      //normal kutucuk:
      buton.addEventListener("click",function(){document.body.innerText = ""
    let create = document.createElement("h3")
    create.textContent = "normal kutucuğa ne yazdırmak istiyorsun?"
    create.style.textAlign = "center"
    let create1 = document.createElement("input")
    create1.type = "text"
    create1.id = "input"
    create1.placeholder = "normal kutucuğa ne yazdırmak istiyorsan buraya yaz"
    create1.style.marginLeft = "500px"
    create1.style.width = "350px"
    let create2 = document.createElement("button")
    create2.textContent = "kutucuğa yazdığın şeyi normal kutucukta görmek için tıkla"
    create2.style.marginLeft = "-355px"
    create2.style.marginTop = "40px"
    create2.style.position = "absolute"
    let create3 = document.createElement("button")
    create3.textContent = "geri dönmek için tıkla"
    create3.style.position = "absolute"
    create3.style.marginLeft = "-250px"
    create3.style.marginTop = "80px"
    create3.addEventListener("click",function(){location.reload()})
    create2.addEventListener("click",function(){
        Notification.requestPermission().then(function(permission) {
  if (permission === "granted") {
    var notification = new Notification("normal kutucuk", {
      body: create1.value,
      icon: "https://cdn.discordapp.com/attachments/1134806626541502558/1170790832035610684/icon.png?ex=655a52ee&is=6547ddee&hm=c44e0a6e353ff1c1fcce8b9f9a49ad852c3451db5f6b4bec590ca2509d77ddc3&" 
    });
  }
});
    })
    document.body.append(create,create1,create2,create3)
    })
    //uyarı kutucuk:
    buton1.addEventListener("click",function(){document.body.innerText = ""
    let create = document.createElement("h3")
    create.textContent = "uyarı kutucuğa ne yazdırmak istiyorsun?"
    create.style.textAlign = "center"
    let create1 = document.createElement("input")
    create1.type = "text"
    create1.id = "input"
    create1.placeholder = "uyarı kutucuğa ne yazdırmak istiyorsan buraya yaz"
    create1.style.marginLeft = "500px"
    create1.style.width = "350px"
    let create2 = document.createElement("button")
    create2.textContent = "kutucuğa yazdığın şeyi uyarı kutucuğunda görmek için tıkla"
    create2.style.marginLeft = "-355px"
    create2.style.marginTop = "40px"
    create2.style.position = "absolute"
    let create3 = document.createElement("button")
    create3.textContent = "geri dönmek için tıkla"
    create3.style.position = "absolute"
    create3.style.marginLeft = "-250px"
    create3.style.marginTop = "80px"
    create3.addEventListener("click",function(){location.reload()})
    create2.addEventListener("click",function(){
        Notification.requestPermission().then(function(permission) {
  if (permission === "granted") {
    var notification = new Notification("uyarı kutucuğu", {
      body: create1.value,
      icon: "https://cdn.discordapp.com/attachments/1139768788582154251/1172176741259825252/image.png?ex=655f5da9&is=654ce8a9&hm=f094e7aa06b746acd6aa89a6e594e0bf9fc7332350b5ac91c22a5374cb4f0d60&" 
    });
  }
});
    })
    document.body.append(create,create1,create2,create3)
    
   

    })
    //hata kutucuk:
    buton2.addEventListener("click",function(){document.body.innerText = ""
    let create = document.createElement("h3")
    create.textContent = "hata kutucuğa ne yazdırmak istiyorsun?"
    create.style.textAlign = "center"
    let create1 = document.createElement("input")
    create1.type = "text"
    create1.id = "input"
    create1.placeholder = "normal kutucuğa ne yazdırmak istiyorsan buraya yaz"
    create1.style.marginLeft = "500px"
    create1.style.width = "350px"
    let create2 = document.createElement("button")
    create2.textContent = "kutucuğa yazdığın şeyi hata kutucuğunda görmek için tıkla"
    create2.style.marginLeft = "-355px"
    create2.style.marginTop = "40px"
    create2.style.position = "absolute"
    let create3 = document.createElement("button")
    create3.textContent = "geri dönmek için tıkla"
    create3.style.position = "absolute"
    create3.style.marginLeft = "-250px"
    create3.style.marginTop = "80px"
    create3.addEventListener("click",function(){location.reload()})
    create2.addEventListener("click",function(){
        Notification.requestPermission().then(function(permission) {
  if (permission === "granted") {
    var notification = new Notification("hata kutucuğu", {
      body: create1.value,
      icon: "https://cdn.discordapp.com/attachments/1139768788582154251/1172181249956270090/image.png?ex=655f61dc&is=654cecdc&hm=21d9245f0f7cef280a55e74490e4521454d4f786b0cc80a10dd2f894209ca430&" 
    });
  }
});
    })
    document.body.append(create,create1,create2,create3)
    
   

    })
