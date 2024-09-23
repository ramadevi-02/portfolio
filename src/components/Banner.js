import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; // Fixed the import of Col
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // Fixed the destructuring
    const [isDeleting, setIsDeleting] = useState(false); // Fixed the destructuring
    const toRotate = ["Web Developer"]; // Changed to array syntax
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Fixed the syntax for random delta
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick(); // Corrected function call to tick
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]); // Added delta as a dependency

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> {/* Fixed 'col' to 'Col' */}
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi, I am RamaDevi'}</h1>
                           <h2> <span className="wrap">{text}</span></h2>
                        <p>
                            Enthusiastic and dedicated front-end developer with hands-on experience in React.js and a strong
                            foundation in web development. Seeking to leverage my skills and passion for creating engaging user
                            experiences at a forward-thinking company.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            Let's Connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> {/* Fixed 'col' to 'Col' */}
                        <img src={headerimg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
