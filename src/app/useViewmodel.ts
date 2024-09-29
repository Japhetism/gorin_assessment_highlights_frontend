import React, { useState, useEffect } from "react"
import { highlights, IHighlight } from "@/fixtures/highlights"

export const useViewModel = () => {
    const [allHighlights, setAllHighlights] = useState<IHighlight[]>([])

    useEffect(() => {
        setAllHighlights(highlights);
    }, []);

    const handleDeleteHighlight = (id: string) => {
        const updatedHighlights = allHighlights.filter((item: IHighlight) => item.id !== id)
        setAllHighlights(updatedHighlights);
    }

    const handleAddHighlight = (name: string) => {

    }

    return {
        allHighlights: allHighlights,
        handleDeleteHighlight: handleDeleteHighlight,
        handleAddHighlight: handleAddHighlight
    }
}