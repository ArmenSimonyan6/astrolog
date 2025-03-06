import { useState, useEffect, useRef } from "react";
import './Shadow.css'

const ShadowScroll = ({children, className}) => {

    const [shadowTop, setShadowTop] = useState(false);
    const [shadowBottom, setShadowBottom] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const checkScroll = () => {
            if (!scrollRef.current) return;

            const el = scrollRef.current;
            const atTop = el.scrollTop === 0;
            const atBottom = Math.abs(el.scrollTop + el.clientHeight - el.scrollHeight) < 1;
            setShadowTop(!atTop);
            setShadowBottom(!atBottom);
        };

        const el = scrollRef.current;
        if (el) {
            checkScroll();
            el.addEventListener("scroll", checkScroll);
        }

        return () => el?.removeEventListener("scroll", checkScroll);
    }, []);


    return (
        <div className={`wrapper-shadow ${className}`}>
            {shadowTop && <div className="shadow shadow-top" />}
            <div className="scroll-container" ref={scrollRef}>
                {children}
            </div>
            {shadowBottom && <div className="shadow shadow-bottom" />}
        </div>
    );
};

export default ShadowScroll;