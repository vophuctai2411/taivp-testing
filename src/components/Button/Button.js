import "./button.css";

function Button({ content, children }) {
  return (
    <div className="button-background">
      {content} {children}
    </div>
  );
}

export default Button;
