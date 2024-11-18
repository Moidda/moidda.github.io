const SectionTitle = ({ id, title }) => {
    return (
        <div>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                border: "none"
            }}/>
            <h1 id={id} className="text-2xl font-bold pt-10">{title}</h1>
        </div>
    );
};

export default SectionTitle;