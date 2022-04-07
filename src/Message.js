export function Message({title, children}) {
    return (
        <article className="message is-info">
            {!title ? '' : (
                <div className="message-header">
                    {title}
                </div>
            )}
            <div className="message-body">
                {children}
            </div>
        </article>
    )
}