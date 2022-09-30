import "./ChoiceHolder.css";

const ChoiceHolder = () => {
    return(
        <section className="choices">
            <h1 className="choices__title">Titel van keuze</h1>
            <div className="choices__holder">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </section>
    )
};

export default ChoiceHolder;