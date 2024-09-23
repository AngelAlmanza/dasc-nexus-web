import { ModuleHeaderComponent } from "@/core/components";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import {
  BreadcrumbModule,
  ModuleTableColumns,
} from "@/modules/majors/components";
import { useMajors } from "@/modules/majors/hooks";
import { getColumnLabel } from "@/modules/majors/utils";
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

const Major = () => {
  const { majors } = useMajors();
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.MAJOR_CREATE,
    PrivateRoutes.MAJOR_DETAIL,
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
    data: majors,
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
          moduleTitle="Carreras"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <DataTableHeader
        table={table}
        searchInputColumnName="name"
        searchInputColumnPlaceholder="Buscar por nombre"
        createButtonLabel="Crear Carrera"
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

export default Major;
