import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    const auth = useAuth();
    const route = router.pathname.split("/").pop();

    if (!auth.user || auth.user.role !== "admin") {
        return null;
    }

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 capitalize">
                    {route}
                </h1>
            </div>
        </nav>
    );
}
