var rand = Math.ceil(Math.random() * 6) //Update me with the number of images in /assets/images/404s/
img = document.getElementById("404pic")
img.setAttribute("src", `/assets/images/404s/${rand}.png`)