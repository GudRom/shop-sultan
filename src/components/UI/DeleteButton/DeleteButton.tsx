import { memo } from "react";
import "./DeleteButton.scss";

type evtPrevDef = { preventDefault: () => void };

interface Props {
  actionFunction: (() => void) | ((e: evtPrevDef) => void);
}

const DeleteButton = memo(({ actionFunction }: Props) => {
  return (
    <button className="button-delete" onClick={actionFunction}>
      <div className="button-delete__bg-img"></div>
    </button>
  );
});

export default DeleteButton;
