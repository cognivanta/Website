import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation()
    const lenis = useLenis()

    useEffect(() => {
        // Scroll to top via Lenis (handles smooth scroll library's internal state)
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, lenis])

    return null
}

export default ScrollToTop
