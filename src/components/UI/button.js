export const ButtonOrange = ({ children, className, onClick, style}) => (
    <button onClick={onClick} className={`button ${className}`} style={style}>{children}</button>
);

export const ButtonSlick = ({ children, className, onClick, style }) => (
    <button onClick={onClick} className={`button-slick ${className}`} style={style}>{children}</button>
);
