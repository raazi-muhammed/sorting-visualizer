import { useState } from "react";
import AlgorithmInfo from "../sortingAlgorithms/Info/AlgorithmInfo";
import { GoInfo } from "react-icons/go";
import SortType from "../../constants/SortType";

type DescriptionState = {
    heading: string;
    body: string;
};

type DescriptionInfo = {
    description: DescriptionState;
    currentType: SortType;
};

const DescriptionInfo = ({ description, currentType }: DescriptionInfo) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    return (
        <section>
            <section style={{ marginTop: ".8rem" }} className="d-flex-mid">
                <p
                    style={{ margin: 0, padding: 0 }}
                    className="text text--heading"
                >
                    {description.heading}
                </p>
                {description.heading ? (
                    <div
                        style={{
                            marginBlockStart: ".3rem",
                            marginInlineStart: ".5rem",
                        }}
                        className="text text--heading"
                        onClick={handleShowInfo}
                    >
                        <GoInfo size="1.2em" />
                    </div>
                ) : null}
            </section>
            <p className="text text--description">
                {description.heading ? "Time Complexity:" : null}
                {description.body}
            </p>
            {showInfo ? (
                <section style={{ display: "flex", justifyContent: "center" }}>
                    <AlgorithmInfo
                        sortType={currentType}
                        setShowInfo={setShowInfo}
                    />
                </section>
            ) : null}
        </section>
    );
};

export default DescriptionInfo;
