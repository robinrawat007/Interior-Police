import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import PageLoader from "@/components/loaders/PageLoader";

/**
 * Lazy Imports (Code Splitting)
 */
const LandingPage = lazy(() => import("@/modules/landing/pages/LandingPage"));

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
