import About from "@/components/About";
import Awards from "@/components/Awards";
// import Blog from "@/components/Blog";
// import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import Map from "@/components/Map";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
    return (
        <>
            <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
                {/* Hero */}
                <Hero />

                {/* About */}
                <About />

                {/* Services */}
                <Services />

                {/* Clients */}
                {/* <Clients /> */}
            </div>

            {/* Portfolio */}
            <Portfolio />

            {/* Awards */}
            <Awards />

            {/* Testimonial */}
            <Testimonial />

            {/* Blog */}
            {/* <Blog /> */}

            {/* Contact */}
            <Contact />

            {/* Map */}
            {/* <Map /> */}
        </>
    );
}
