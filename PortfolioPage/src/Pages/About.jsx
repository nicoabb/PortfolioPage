import AboutComponent from "../Components/About/AboutMe";
import img1 from "../Img/about1.jpg";
import img2 from "../Img/about2.jpg";
import img3 from "../Img/about3.jpg";
import img4 from "../Img/about4.jpg";

const About = () => {
    const paragraph = {};
    return (
        <AboutComponent
            title="About Me"
            img1={img1}
            aboutText={
                <p>
                    Growing up as a leader since I was little, I’ve had
                    different opportunities that allowed me to become the person
                    I am today. Strategic, maximizer, disciplined, creative and
                    happy are some of the words I use to describe myself,
                    they’re my guide to think and act the way I do.
                    <br />
                    <br />I decided to study Software Engineering so I can build
                    my own ideas and have no limits when it comes to work. I
                    think of programming the way I thought when I was a kid of
                    building Lego, you just need the inspiration, motivation,
                    and the necessary blocks to do amazing things, only now I
                    get to create my own blocks.
                    <br />
                    <br />I work with Python, Java, HTML, CSS, JavaScript, and
                    React. If I must tell in which I’m better, CSS would be the
                    answer, but in general I’m really good with the frontend
                    area.
                    <br />
                    <br />
                    If you want to know more about me, click here.
                </p>
            }
            img2={img2}
            img3={img3}
            img4={img4}
        />
    );
};

export default About;
