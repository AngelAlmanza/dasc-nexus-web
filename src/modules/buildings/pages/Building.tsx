import { ModuleHeaderComponent } from "@/core/components";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import {
  DataTableContent,
  DataTableHeader,
  DataTablePagination,
} from "@/modules/shared/components";
import { useDataTable, useModuleActions } from "@/modules/shared/hooks";

import { ModuleTableColumns} from "@/modules/buildings/components/ModuleTableColumns";
import { BreadcrumbModule } from "@/modules/buildings/components/BreadcrumbModule";
import { useBuilding } from "../hooks";
import { getColumnLabel } from "@/modules/buildings/utils";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Building = () => {
  const { building } = useBuilding();

  const { handleNavigation } = useModuleActions(
    PrivateRoutes.BUILDING_CREATE,
    PrivateRoutes.BUILDING_DETAIL,
  );
  const {
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
    setSorting,
    setColumnFilters,
    setColumnVisibility,
    setRowSelection,
  } = useDataTable();

  const table = useReactTable({
    data: building,
    columns: ModuleTableColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle="Edificios"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <DataTableHeader
        table={table}
        searchInputColumnName="name"
        searchInputColumnPlaceholder="Buscar por nombre"
        createButtonLabel="Crear Edificio"
        getColumnLabel={getColumnLabel}
        handleNavigation={handleNavigation}
      />
      <DataTableContent
        table={table}
        columnsLength={ModuleTableColumns.length}
      />
      <DataTablePagination table={table} />
    </DashboardLayout>
  );
};

export default Building;
