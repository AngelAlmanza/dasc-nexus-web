import { ModuleHeaderComponent } from "@/core/components";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import {
  DataTableContent,
  DataTableHeader,
  DataTablePagination,
} from "@/modules/shared/components";
import { useDataTable, useModuleActions } from "@/modules/shared/hooks";
import {
  BreadcrumbModule,
  ModuleTableColumns,
} from "@/modules/terms/components";
import { useTerms } from "@/modules/terms/hooks";
import { getColumnLabel } from "@/modules/terms/utils";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

function Term() {
  const { terms } = useTerms();
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.TERM_CREATE,
    PrivateRoutes.TERM_DETAIL,
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
    data: terms,
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
          moduleTitle="Periodos"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <DataTableHeader
        table={table}
        searchInputColumnName="init"
        searchInputColumnPlaceholder="Buscar por fecha de inicio"
        createButtonLabel="Crear Periodo"
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

export default Term;
