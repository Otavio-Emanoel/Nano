document.getElementById("insta_turma").addEventListener("click", ()=>{
    window.open("https://www.instagram.com/1des.etec/")
})

document.getElementById("github_otavio").addEventListener("click", ()=>{
    window.open("https://github.com/Otavio-Emanoel")
})


document.getElementById("site_etec").addEventListener("click", ()=>{
    window.open("https://etecperuibe.cps.sp.gov.br/")
})

document.getElementById("instagram").addEventListener("click", ()=>{
    window.open("https://www.instagram.com/otavio_emanuel_de_lima/")
})

document.getElementById("twitter").addEventListener("click", ()=>{
    window.open("https://x.com/OtavioEmanoel_?t=XxdTocr7HecSSVXIWvKGow&s=09")
})

document.getElementById("youtube").addEventListener("click", ()=>{
    window.open("https://www.youtube.com/@OtavioEmanoel1")
})

const nano_brabo = document.getElementById("nano_bravissimo")
const video = document.getElementById("video_link")
const change1 = document.getElementById("change1")
const change2 = document.getElementById("change2")
const change3 = document.getElementById("change3")
const change4 = document.getElementById("change4")
const videoSource = document.getElementById("video_source");

document.getElementById("change1").addEventListener("click", () => {
    videoSource.setAttribute("src", "./assets/Nano_video_1.mp4");
    video.load();
});
document.getElementById("change2").addEventListener("click", () => {
    videoSource.setAttribute("src", "./assets/Nano_video_2.mp4");
    video.load();
});
document.getElementById("change3").addEventListener("click", () => {
    videoSource.setAttribute("src", "./assets/Nano_video_3.mp4");
    video.load();
});
document.getElementById("change4").addEventListener("click", () => {
    videoSource.setAttribute("src", "./assets/Nano_video_4.mp4");
    video.load();
});
nano_brabo.addEventListener("click", ()=>{
    document.getElementById("bravo").style.right = "0px";
})
document.getElementById("close_bravo").addEventListener("click", ()=>{
    document.getElementById("bravo").style.right = "-500px"    
})