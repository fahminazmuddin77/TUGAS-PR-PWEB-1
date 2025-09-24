document.getElementById('year').textContent = new Date().getFullYear();


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60, 
      behavior: "smooth"
    });
  });
});


const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);


Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "25px",
  right: "25px",
  padding: "12px 16px",
  fontSize: "20px",
  border: "none",
  borderRadius: "8px",
  background: "#64ffda",
  color: "#0a192f",
  cursor: "pointer",
  display: "none",
  zIndex: "999",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});


backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


