import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

export default function Secccion() {
    return (
        <div className="secciones row">
            <div className="mediosDePago col-md-6 col-lg-6">
                <p>Nuestros medios de pago</p>
                <img src="img/mediosDePago.png" />
            </div>
            <div className="maps col-md-6 col-lg-6">
                <p>Como llego?</p>
                <img src="img/maps.jpg" />

            </div>


        </div>
    )



}

