import { Button } from "reactstrap";

export const WhassapButton = ({ styles = {}, className = {}, styleI = {}}) => (

    <Button
        className={className}
        style={styles}
        href="https://api.whatsapp.com/send?phone=3008318734&text=Hola estoy interesado@ en obtener más información sobre el servicio de transporte que ofrecen. Agradecería si pudiera proporcionarme detalles adicionales."
        target="_blank"
    >
        <i className="fa fa-whatsapp" style={styleI}></i> Contactar por WhatsApp
    </Button>

)
