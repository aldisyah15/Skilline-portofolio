import Navigation from "../header/navigation";

export default function Layout({children}) {
return (
    <>
    <div>
        <Navigation />
        {children}
    </div>
    </>
)
}