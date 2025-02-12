import { useRef } from "react";

export const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);

    return (
        <div className="mt-3 font-display text-center">
            {/* ye re-render hoga jbki iske re-render hone ki jarurat nhi h ... ISSI SE BACHNE KE LIE, WE USE MEMO(). */}
            <p className=""> Nothing changed here but I have now rendered: <span className="text-red-600">{renderCount.current++} time(s)</span></p>
        </div>
    )
}

// 09:07