import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

const ScrollToTop: React.FC = () => {
    const location = useLocation()
    const lenis = useLenis()

    useEffect(() => {
        // If navigating with a scrollTo target (e.g. from NavBar to a section),
        // skip scroll-to-top so it doesn't race against the section scroll.
        const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
        if (scrollTo) return;

        // Scroll to top via Lenis (handles smooth scroll library's internal state)
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [location.pathname, lenis])

    return null
}

export default ScrollToTop
