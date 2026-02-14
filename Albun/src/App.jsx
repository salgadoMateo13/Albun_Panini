import { useState } from 'react'
import './App.css'

function App() {
  const [seleccionado, setSeleccionado] = useState(null);

  const jugadores = [
    { id: 1, nombre: "Luis Díaz", foto: "/images/Luis.png", pais: "COLOMBIA", edad: 29, color: "#fcd116", flag: "https://flagcdn.com/co.svg", contexto: "Extremo estrella del Liverpool FC. Destaca por su regate y agilidad, siendo el máximo referente de la selección colombiana en la actualidad." },
    { id: 2, nombre: "Kylian Mbappé", foto: "/images/Mbappe.png", pais: "FRANCIA", edad: 27, color: "#002395", flag: "https://flagcdn.com/fr.svg", contexto: "Campeón del mundo y delantero del Real Madrid. Es reconocido como uno de los futbolistas más veloces y determinantes del planeta." },
    { id: 3, nombre: "Lionel Messi", foto: "/images/Messi.png", pais: "ARGENTINA", edad: 38, color: "#74acdf", flag: "https://flagcdn.com/ar.svg", contexto: "Capitán de la Argentina campeona del mundo en 2022. Ganador de 8 Balones de Oro, actualmente juega en el Inter Miami de la MLS." },
    { id: 4, nombre: "Cristiano Ronaldo", foto: "/images/Cristiano Ronaldo.png", pais: "PORTUGAL", edad: 41, color: "#ff0000", flag: "https://flagcdn.com/pt.svg", contexto: "Máximo goleador histórico del fútbol profesional. Una leyenda de Portugal que sigue vigente anotando goles en la liga de Arabia Saudita." },
    { id: 5, nombre: "Erling Haaland", foto: "/images/Erling Braut Håland.png", pais: "NORUEGA", edad: 25, color: "#d0102a", flag: "https://flagcdn.com/no.svg", contexto: "Delantero centro del Manchester City. Conocido como 'El Androide' por su increíble capacidad física y olfato goleador rompe récords." },
    { id: 6, nombre: "Jude Bellingham", foto: "/images/Jude Bellingham.png", pais: "INGLATERRA", edad: 22, color: "#ffffff", flag: "https://flagcdn.com/gb-eng.svg", contexto: "Mediocampista todoterreno del Real Madrid. A su corta edad, es el cerebro de la selección inglesa y uno de los jugadores más valiosos del mundo." },
    { id: 7, nombre: "Kevin De Bruyne", foto: "/images/Kevin De Bruyne.png", pais: "BÉLGICA", edad: 34, color: "#e30613", flag: "https://flagcdn.com/be.svg", contexto: "El arquitecto del Manchester City. Posee una visión de juego y una precisión de pase únicas, siendo el pilar de la generación dorada de Bélgica." },
    { id: 8, nombre: "Lamine Yamal", foto: "/images/Lamine Yamal.png", pais: "ESPAÑA", edad: 18, color: "#aa151b", flag: "https://flagcdn.com/es.svg", contexto: "La joven promesa del FC Barcelona. Con solo 18 años, ya es titular en la selección española y es considerado el futuro del fútbol mundial." },
    { id: 9, nombre: "Neymar Jr", foto: "/images/Neymar.png", pais: "BRASIL", edad: 34, color: "#fedf00", flag: "https://flagcdn.com/br.svg", contexto: "El último gran '10' brasileño. Famoso por su magia, regate y alegría en el campo, es el máximo goleador histórico de la Canarinha." },
    { id: 10, nombre: "Robert Lewandowski", foto: "/images/Robert Lewandowski.png", pais: "POLONIA", edad: 37, color: "#dc143c", flag: "https://flagcdn.com/pl.svg", contexto: "Referente de área del FC Barcelona. Es uno de los mejores delanteros de la última década y el capitán indiscutible de Polonia." }
  ];

  return (
    <div className="album-page">
      <header className="album-header">
        <h1>PANINI WORLD CUP 2026</h1>
      </header>

      {!seleccionado ? (
        <div className="galeria">
          {jugadores.map((j) => (
            <div key={j.id} className="cromo" onClick={() => setSeleccionado(j)}>
              <div className="cromo-top" style={{ backgroundColor: j.color }}>
                <img src={j.flag} alt="flag" className="mini-flag" />
                <span>{j.pais}</span>
              </div>
              <div className="player-img-container">
                <img src={j.foto} alt={j.nombre} className="player-img" />
              </div>
              <div className="cromo-footer">
                <span className="player-name">{j.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="detalle-overlay">
          <div className="detalle-modal">
            <div className="detalle-cromo" style={{ borderTop: `15px solid ${seleccionado.color}` }}>
              <img src={seleccionado.foto} alt={seleccionado.nombre} className="img-large" />
              <div className="info-box">
                <div className="header-info">
                  <img src={seleccionado.flag} className="flag-large" />
                  <h2>{seleccionado.nombre}</h2>
                </div>
                <p className="edad-text"><strong>EDAD:</strong> {seleccionado.edad} AÑOS</p>
                <p className="contexto-text">{seleccionado.contexto}</p>
              </div>
            </div>
            <button className="btn-volver" onClick={() => setSeleccionado(null)}>
              VOLVER AL ÁLBUM
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;