const SectionTitle = ({ id, title }) => {
    return (
        <div>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                border: "none"
            }}/>
            <h1 id={id} className="text-3xl font-bold pt-6">{title}</h1>
        </div>
    );
};

export default SectionTitle;