import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { useEffect } from "react";
import { useToast } from "@/core/hooks";
import { setbuildingMessage } from "@/core/store/slices/buildingSlice";
import { deleteBuilding, getBuilding } from "@/core/store/thunks/buildingThunks";

export const useBuilding = () => {
    const dispatch = useAppDispatch();
    const { building, buildingMessage, isLoading } = useAppSelector(
        (state) => state.building,
    );
    const { toast } = useToast();

    const handleDelete = (id: number) => {
        dispatch(deleteBuilding(id));
    };

    useEffect(() => {
        dispatch(getBuilding());
    }, [dispatch]);

    useEffect(() => {
        if (buildingMessage && buildingMessage.length > 0) {
            toast({
                title: "Profesores",
                description: buildingMessage,
            });
            dispatch(setbuildingMessage(""));
        }
    }, [buildingMessage, toast, dispatch]);

    return {
        building,
        isLoading,
        handleDelete,
    };
};
