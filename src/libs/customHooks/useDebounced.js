import { useRef } from "react"

const useDebounced = (timer = 3000) => {
    const timerRef = useRef(null)

    return (callback) => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(callback, timer)
    }
}

export default useDebounced