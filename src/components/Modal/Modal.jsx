import style from "./Modal.module.css";

export default function Modal({open, setOpen, variant = "default", children}) {
    if (!open) {
        return null
    }
    return (
        <div className={style.overlay + ' ' + style[variant + 'Mode']} onClick={() => setOpen(false)}>
            <div className={style[variant]} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}