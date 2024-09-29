import React, { useState, useEffect } from "react"
import { highlights, IHighlight } from "@/fixtures/highlights"

export const useViewModel = () => {
    const [allHighlights, setAllHighlights] = useState<IHighlight[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [hightlightName, setHightlightName] = useState<string>("");

    useEffect(() => {
        setAllHighlights(highlights.reverse());
    }, []);

    const handleDeleteHighlight = (id: string) => {
        const updatedHighlights = allHighlights.filter((item: IHighlight) => item.id !== id)
        setAllHighlights(updatedHighlights.reverse());
    }

    const handleAddHighlight = () => {
        let lastIndex = parseInt(highlights[highlights.length - 1].id);
        const newHighlightObj = {
            name: hightlightName,
            id: (lastIndex + 1).toString()
        }
        const updatedHighlights = allHighlights
        updatedHighlights.push(newHighlightObj);
        console.log(updatedHighlights)
        setAllHighlights(updatedHighlights.reverse());
        setIsModalOpen(false);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return {
        allHighlights: allHighlights,
        isModalOpen: isModalOpen,
        hightlightName: hightlightName,
        setHightlightName: setHightlightName,
        setIsModalOpen: setIsModalOpen,
        handleCloseModal: handleCloseModal,
        handleDeleteHighlight: handleDeleteHighlight,
        handleAddHighlight: handleAddHighlight
    }
}