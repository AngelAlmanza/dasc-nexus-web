import { ModuleHeaderComponent } from "@/core/components";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import {
  BreadcrumbModule,
  ModuleTableColumns,
} from "@/modules/groups/components";
import { useGroups } from "@/modules/groups/hooks";
import { getColumnLabel } from "@/modules/groups/utils";
import {
  DataTableContent,
  DataTableHeader,
  DataTablePagination,
} from "@/modules/shared/components";
import { useDataTable, useModuleActions } from "@/modules/shared/hooks";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

function Group() {
  const { groups } = useGroups();
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.GROUP_CREATE,
    PrivateRoutes.GROUP_DETAIL,
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
    data: groups,
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
          moduleTitle="Grupos"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <DataTableHeader
        table={table}
        searchInputColumnName="careerId"
        searchInputColumnPlaceholder="Buscar por carrera"
        createButtonLabel="Crear Grupo"
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
}

export default Group;
