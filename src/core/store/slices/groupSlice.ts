import {
  createGroup,
  deleteGroup,
  getGroupById,
  getGroups,
  updateGroup,
} from "@/core/store/thunks";
import { IGroup } from "@/data/models";
import { createSlice } from "@reduxjs/toolkit";

interface GroupState {
  groups: IGroup[];
  selectedGroup?: IGroup;
  isLoading: boolean;
  groupMessage: string;
}

const initialState: GroupState = {
  groups: [],
  isLoading: false,
  groupMessage: "",
};

export const GroupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setGroupMessage: (state, action) => {
      state.groupMessage = action.payload;
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGroups.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGroups.rejected, (state) => {
      state.isLoading = false;
      state.groupMessage = "Ha ocurrido un error al obtener los grupos";
    });
    builder.addCase(createGroup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createGroup.fulfilled, (state, action) => {
      state.groups.push(action.payload);
      state.isLoading = false;
      state.groupMessage = "Se ha creado el grupo correctamente";
    });
    builder.addCase(createGroup.rejected, (state) => {
      state.isLoading = false;
      state.groupMessage = "Ha ocurrido un error al crear el grupo";
    });
    builder.addCase(updateGroup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateGroup.fulfilled, (state, action) => {
      const index = state.groups.findIndex(
        (group) => group.id === action.payload.id,
      );
      state.groups[index] = action.payload;
      state.isLoading = false;
      state.groupMessage = "Se ha actualizado el grupo correctamente";
    });
    builder.addCase(updateGroup.rejected, (state) => {
      state.isLoading = false;
      state.groupMessage = "Ha ocurrido un error al actualizar el grupo";
    });
    builder.addCase(deleteGroup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteGroup.fulfilled, (state, action) => {
      state.groups = state.groups.filter(
        (group) => group.id !== action.payload,
      );
      state.isLoading = false;
      state.groupMessage = "Se ha eliminado el grupo correctamente";
    });
    builder.addCase(deleteGroup.rejected, (state) => {
      state.isLoading = false;
      state.groupMessage = "Ha ocurrido un error al eliminar el grupo";
    });
    builder.addCase(getGroupById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGroupById.fulfilled, (state, action) => {
      state.selectedGroup = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGroupById.rejected, (state) => {
      state.isLoading = false;
      state.groupMessage =
        "Ha ocurrido un error al obtener el grupo seleccionado";
    });
  },
});

export const { setGroups, setGroupMessage, setSelectedGroup } =
  GroupSlice.actions;
