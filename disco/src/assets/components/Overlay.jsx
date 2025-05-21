import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";



const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 
                ${props.right ? "items-end" : "items-start"}`}
            style={{
                opacity: props.opacity
            }}
            >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}



export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
    
    
    useFrame(() => {
        setOpacityFirstSection (1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection (1 - scroll.curve(1 / 3, 1 / 3));
        setOpacityLastSection (1 - scroll.range(2 / 3, 1 / 3));
    });

    return (
        <Scroll html>
            <div className="w-screen">
                <Section opacity={opacityFirstSection}>
                    <h1 className="text-3xl text-white font-bold"> Hi </h1>
                    <p className="text-white text-lg"> Phrabgf </p>
                    <p className="mt-3">
                        <b>Elysium</b>
                    </p>
                    <ul className="leading-9">
                        <li>A</li>
                        <li>C</li>
                        <li>2</li>
                        <li>1</li>
                    </ul>
                </Section>
                <Section opacity={opacitySecondSection} left>
                    <h1 className="text-3xl text-white font-bold"> Make  </h1>
                    <p className="text-white text-lg"> I am Disco </p>
                    <p className="mt-3">
                        <b>Elysium</b>
                    </p>
                    <ul className="leading-9">
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </Section>
                <Section opacity={opacityLastSection} right>
                    <h1 className="text-3xl text-white font-bold"> Para </h1>
                    <p className="text-white text-lg"> I am Disco </p>
                    <p className="mt-3">
                        <b>Elysium</b>
                    </p>
                    <ul className="leading-9">
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                    </ul>
                </Section>
            </div>
        </Scroll>);
};
