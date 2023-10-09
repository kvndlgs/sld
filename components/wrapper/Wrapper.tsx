import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"

export default function Wrapper({children}: {children: any}){
    return (
        <main>
            <Nav/>
            {children}
            <Footer />
        </main>
    )
}