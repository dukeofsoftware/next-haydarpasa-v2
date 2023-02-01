import KesfetNavbar from "@/ui/client/kesfet/navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <KesfetNavbar/>
            {children}
        </>
    );
}
