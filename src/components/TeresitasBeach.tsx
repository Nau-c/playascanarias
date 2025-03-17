import teresitasImage from '../assets/playa-teresitas.jpg';

const TeresitasBeach = () => {
    return (
        <div className="beach-container">
            <img
                src={teresitasImage}
                alt="Playa de Las Teresitas - Santa Cruz de Tenerife"
                className="beach-image"
            />
        </div>
    );
};

export default TeresitasBeach;