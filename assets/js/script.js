//Creación de variables
const musica = document.querySelector("#musica");
const peliculas = document.querySelector("#peliculas");
const series = document.querySelector("#series");

//Función IFFE
const multimediaDOM = (()=>{
    const Video = (id,url) =>{
        const multimedia = id;
        multimedia.setAttribute("src", url)
    }
    return {
        //clausula
        agregarVideo(id,url){
            Video(id,url);
        }
    }
})();


//CREACIÓN DE CLASES
class Multimedia{
    #url;
    constructor(url){
        this.#url = url;
    }
    get getUrl() {
        return this.#url;
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    #id
    constructor(id, url) {
        super(url)
        this.#id = id;
    }
    playMultimedia() {
        multimediaDOM.agregarVideo(this.#id, this.getUrl)

    }
    setInicio(tiempo) {
        const Tiempo = `${this.getUrl}?start=${tiempo}`
        multimediaDOM.agregarVideo(this.#id, Tiempo)
        //console.log(Tiempo)
    }
}
//Intancias para cada sección
 const nuevaSerie = new Reproductor(series,"https://www.yourupload.com/embed/G45N2ou3djl3");
 nuevaSerie.setInicio(15);
 nuevaSerie.playMultimedia();
 
 const nuevaPelicula = new Reproductor(peliculas,"https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd")
 nuevaPelicula.playMultimedia();
 
 const nuevaMusica = new Reproductor(musica,"https://www.youtube.com/embed/dWgG3bnVUS0?si=GuPWgPJ531eiQg-6");
 nuevaMusica.setInicio(2);
 nuevaMusica.playMultimedia();
 


//musica.setAttribute("src","https://www.youtube.com/embed/dWgG3bnVUS0?si=GuPWgPJ531eiQg-6");
//peliculas.setAttribute("src","https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd");
//series.setAttribute("src","https://www.youtube.com/embed/a1zmhHLVrq0?si=iuky9OuRIVGZ-BCA");




