import React, { createContext, useState, useEffect } from 'react';
import { FlagEps, FlagUsa } from '../assets/icons/Flags';

// Crear el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setIdioma] = useState('es');

    useEffect(() => {
        const languageSaved = localStorage.getItem('idiomaSeleccionado');
        if (languageSaved) {
            setIdioma(languageSaved);
        }
    }, []);

    const translations = {
        es: {
            home: {
                header: {
                    title: "Safe Land Transport",
                    subtitle: "¡Fiabilidad sobre ruedas, donde quiera que te lleve el camino!",
                },
                body: {
                    title:"Transporte terrestre seguro",
                    details: "Amplia experiencia en el transporte de turistas nacionales e internacionales a los principales destinos turísticos de Colombia, incluyendo la región del Eje Cafetero, el Caribe Colombiano, y la Amazonía. Conocimiento detallado de las rutas turísticas y capacidad para ofrecer recomendaciones personalizadas a los pasajeros.",
                    buttonProfile: "Perfil del conductor",
                    srvices: {
                        client: {
                            title: "Servicio y Atención al Cliente Garantizado",
                            description: "Fuerte enfoque en la satisfacción del cliente, brindando un trato amable y profesional a todos los pasajeros. Habilidad para comunicarse efectivamente tanto en español como en inglés básico, facilitando la interacción con turistas internacionales.."
                        },
                        hotels: {
                            title: "Convenios con Hoteles y Aeropuertos",
                            description: "Colaboración a largo plazo con hoteles de renombre en Bogotá, ofreciendo servicios de transporte desde y hacia el Aeropuerto Internacional El Dorado. Habilidad para coordinar traslados puntuales y eficaces, manteniendo altos estándares de calidad en el servicio"
                        },
                        legislation: {
                            title: "Conocimiento de la Legislación Vial",
                            description: "Profundo conocimiento de las leyes y normativas de tránsito en Colombia, incluyendo regulaciones específicas para el transporte de pasajeros. Cumplimiento riguroso de todas las normativas de seguridad y documentación requerida para operar legalmente."
                        }
                    }
                }
            },
            profile: {
                title: "Jeison Andres Farfán Sierra",
                subtitle: "Conductor",
                description: "Conductor altamente experimentado con más de 25 años de trayectoria en la conducción de vehículos de transporte de pasajeros, especializado en el transporte de turistas por todo el territorio colombiano. A lo largo de su carrera, ha demostrado un compromiso excepcional con la seguridad vial, la puntualidad, y la satisfacción del cliente, lo que le ha permitido establecer relaciones sólidas con hoteles, agencias de viajes y operadores turísticos, especialmente en la ciudad de Bogotá",
                skills: {
                    one: {
                        title: "Adaptabilidad",
                        description: "Capacidad para adaptarse a diferentes condiciones climáticas y de carretera, garantizando siempre la seguridad y el confort de los pasajeros."
                    },
                    two: {
                        title: "Gestión del Tiempo",
                        description: "Habilidad para gestionar rutas y tiempos de manera eficiente, asegurando el cumplimiento de itinerarios preestablecidos."
                    },
                    tree: {
                        title: "Orientación al Detalle",
                        description: "Meticuloso en la revisión diaria del vehículo y en la planificación de rutas, minimizando riesgos y optimizando la experiencia del pasajero."
                    }
                }
            },
            flags: {
                title: "Idioma",
                es: "Español",
                en: "Ingles",
                img:<FlagEps/>
            },
            navBar: {
                home: "home",
                profile: "Perfil del conductor",
                whatsAppButton: "Contactar por WhatsApp"
            }

        },
        en: {
            home: {
                header: {
                    title: "Safe Land Transport",
                    subtitle: "Reliability on wheels, wherever the road takes you!",

                },
                body: {
                    title:"Safe land transport",
                    details: "Extensive experience in the transportation of national and international tourists to the main tourist destinations in Colombia, including the Eje Cafetero region, the Colombian Caribbean, and the Amazon. Detailed knowledge of tourist routes and ability to offer personalized recommendations to passengers.",
                    buttonProfile: "Driver profile",
                    srvices: {
                        client: {
                            title: "Guaranteed Customer Service and Attention",
                            description: "Strong focus on customer satisfaction, providing friendly and professional treatment to all passengers. Ability to communicate effectively in both Spanish and basic English, facilitating interaction with international tourists."
                        },
                        hotels: {
                            title: "Agreements with Hotels and Airports",
                            description: "Long-term collaboration with renowned hotels in Bogotá, offering transportation services to and from El Dorado International Airport. Ability to coordinate punctual and efficient transfers, maintaining high standards of quality in service"
                        },
                        legislation: {
                            title: "Knowledge of Road Legislation",
                            description: "Deep knowledge of Colombian traffic laws and regulations, including specific regulations for passenger transportation. Strict compliance with all safety regulations and documentation required to operate legally."
                        }
                    }
                }
            },

            profile: {
                title: "Jeison Andres Farfán Sierra",
                subtitle: "Driver",
                description: "Highly experienced driver with more than 25 years of experience driving passenger transport vehicles, specialized in the transportation of tourists throughout Colombia. Throughout his career, he has demonstrated an exceptional commitment to road safety, punctuality, and customer satisfaction, which has allowed him to establish solid relationships with hotels, travel agencies, and tour operators, especially in the city of Bogotá.",
                skills: {
                    one: {
                        title: "Adaptability",
                        description: "Ability to adapt to different weather and road conditions, always ensuring the safety and comfort of passengers."
                    },
                    two: {
                        title: "Time Management",
                        description: "Ability to manage routes and times efficiently, ensuring compliance with pre-established itineraries"
                    },
                    tree: {
                        title: "Detail Orientation",
                        description: "Meticulous in daily vehicle inspection and route planning, minimizing risks and optimizing passenger experience."
                    }
                }
            },
            flags: {
                title: "Language",
                es: "Spanish",
                en: "English",
                img: <FlagUsa/>
            },
            navBar: {
                home: "home",
                profile: "Driver profile",
                whatsAppButton: "Contact by WhatsApp"
            }
        }
    };

    const cambiarIdioma = (newLanguage) => {
        setIdioma(newLanguage);
        localStorage.setItem('idiomaSeleccionado', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, cambiarIdioma }}>
            {children}
        </LanguageContext.Provider>
    );
};
