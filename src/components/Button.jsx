function Button({children, type, handler}) {
    const style = type === "danger" ? "bg-red-500 text-white px-3 py-2 rounded shadow cursor-pointer" :
        "bg-blue-500 text-white px-3 py-2 rounded shadow cursor-pointer";
    return (
        <div className={style} onClick={handler}>

            {children}

        </div>
    );
}

export default Button;
