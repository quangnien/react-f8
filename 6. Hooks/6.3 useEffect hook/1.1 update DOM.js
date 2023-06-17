import { useEffect, useState } from "react"

function Content() {
    const [title, setTitle] = useState('')

    // Thằng dưới tuy viết trước nhưng sẽ được chạy sau 
    // -> performance tốt hơn so với không dùng hooks
    // Vì nó chỉ là SIDE EFFECTS thôi
    useEffect(() => {
        document.title = title
    })

    // Ưu tiên dạy giao diện người dùng trước
    return (
        <div>
            <input 
                value={title}            
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content