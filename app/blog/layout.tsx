import Sidebar from "../components/sidebar/sidebar"
import "../globals.css"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section className="post">
        <Sidebar/>
        {children}
        </section>
    )
}