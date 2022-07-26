function MessageError({className, name, msg}) {
    return (
        <div className={className} id={name}>
            {msg}
        </div>
    )
}