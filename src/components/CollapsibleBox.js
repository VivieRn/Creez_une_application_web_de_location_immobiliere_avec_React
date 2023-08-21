import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

function CollapsibleBox({
  title,
  content,
  isOpen,
  toggleOpen,
  className,
  contentClassName,
}) {
  return (
    <div onClick={toggleOpen} className={className}>
      <div className="Title">
        {title}
        <MdKeyboardArrowUp
          className="Arrow"
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        />
      </div>
      <div className={contentClassName}>{isOpen && content}</div>
    </div>
  );
}

export default CollapsibleBox;
