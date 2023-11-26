import { useEffect, useState } from "react";
import "./_algorithmInfo.scss";
import Markdown from "react-markdown";
import { IoClose } from "react-icons/io5";

enum SortType {
  INSERTION = "INSERTION",
  BUBBLE = "BUBBLE",
  SELECTION = "SELECTION",
  QUICK = "QUICK",
  MERGE = "MERGE",
}

type AlgorithmInfo = {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  sortType: SortType;
};

const AlgorithmInfo = ({ setShowInfo, sortType }: AlgorithmInfo) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    switch (sortType) {
      case SortType.INSERTION:
        fetch("/markdown/insertionSort.md")
          .then((r) => r.text())
          .then((text) => {
            setMarkdown(text);
          });
        break;

      case SortType.BUBBLE:
        fetch("/markdown/bubbleSort.md")
          .then((r) => r.text())
          .then((text) => {
            setMarkdown(text);
          });
        break;
      case SortType.SELECTION:
        fetch("/markdown/selectionSort.md")
          .then((r) => r.text())
          .then((text) => {
            setMarkdown(text);
          });
        break;
      case SortType.QUICK:
        fetch("/markdown/quickSort.md")
          .then((r) => r.text())
          .then((text) => {
            setMarkdown(text);
          });
        break;
      case SortType.MERGE:
        fetch("/markdown/mergeSort.md")
          .then((r) => r.text())
          .then((text) => {
            setMarkdown(text);
          });
        break;

      default:
        break;
    }
  }, []);

  const handleClose = () => {
    setShowInfo(false);
  };

  return (
    <article className="algorithm-info">
      <section>
        <button
          onClick={handleClose}
          className="btn btn--accent btn--icon aside-panel--close"
        >
          <IoClose size="1.4em" />
        </button>
        <Markdown>{markdown}</Markdown>
      </section>
    </article>
  );
};

export default AlgorithmInfo;
