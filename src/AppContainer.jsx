import {HomePage} from "./Components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import {About} from "./Components/AboutPage/About";
import {Layout} from "./Components/Layout/Layout";
import {useCallback, useEffect, useRef} from "react";
import {ContactPage} from "./Components/ContactPage/Contact";
import {Services} from "./Components/ServicesPage/Services";
import './App.css';

export function AppContainer() {

    const elementsRef = useRef([]);

    const initializeObserver = useCallback(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active2');
                    observer.unobserve(entry.target);
                }
            });
        });

        elementsRef.current.forEach(element => {
            if (element) observer.observe(element);
        });

        return observer;
    }, []);

    useEffect(() => {
        let observer = initializeObserver();

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach(element => {
                    if (element) observer.unobserve(element);
                });
            }
        };
    }, [initializeObserver]);

    const setRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    const handleNavLinkClick = () => {
        // Clear the active2 class and reset the observer
        elementsRef.current.forEach(element => {
            if (element) element.classList.remove('active2');
        });
        elementsRef.current = [];
    };

    useEffect(() => {
        // Reinitialize the observer on mount to handle page refresh
        initializeObserver();
    }, [initializeObserver]);

    return (<>
        <Routes>
            <Route path='/' element={<Layout handleNavLinkClick={handleNavLinkClick} setRefs={setRefs}/>}>
                <Route index element={<HomePage elementsRef={elementsRef} setRefs={setRefs}/>}/>
                <Route path='/AboutUs' element={<About setRefs={setRefs}/>}/>
                <Route path='/Services' element={<Services setRefs={setRefs}/>}/>
                <Route path='/Contact' element={<ContactPage setRefs={setRefs}/>}/>
            </Route>
        </Routes>
    </>);
}


