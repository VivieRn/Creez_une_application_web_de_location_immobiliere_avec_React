import CollapsibleBox from "./CollapsibleBox";

function InformationBox({
  title,
  content,
  isOpen,
  toggleOpen,
  contentClassName,
}) {
  return (
    <CollapsibleBox
      title={<h3 className="Title">{title}</h3>}
      content={content}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      className="button"
      contentClassName={contentClassName}
    />
  );
}
export default InformationBox;
