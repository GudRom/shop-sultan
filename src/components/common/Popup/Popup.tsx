import { ReactNode, RefObject } from "react";
import "./Popup.scss";

interface Props {
  popup?: RefObject<HTMLDialogElement> | null;
  closePopup: () => void;
  children: ReactNode;
}

const Popup = ({ popup, closePopup, children }: Props) => {
  return (
    <dialog className="popup" ref={popup}>
      <button className="popup__close-btn" onClick={closePopup}></button>
      {children}
    </dialog>
  );
};

export default Popup;
