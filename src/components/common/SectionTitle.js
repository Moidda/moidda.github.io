const SectionTitle = ({ id, title }) => {
    return (
        <div>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                border: "none"
            }}/>
            <h2 id={id} className="text-3xl font-bold p-6">{title}</h2>
        </div>
    );
};

export default SectionTitle;