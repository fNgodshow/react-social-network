import React, {Suspense} from "react";
import Preloader from "../components/common/preloader/Preloader";

export const withSuspense = (Component) => {

    return (props) => (
        <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    );
}

