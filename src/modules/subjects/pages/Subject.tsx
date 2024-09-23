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
} from "@/modules/subjects/components";
import { useSubjects } from "@/modules/subjects/hooks";
import { getColumnLabel } from "@/modules/subjects/utils";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Subject = () => {
  const { subjects } = useSubjects();
  const { handleNavigation } = useModuleActions(
    PrivateRoutes.SUBJECT_CREATE,
    PrivateRoutes.SUBJECT_DETAIL,
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
    data: subjects,
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
          moduleTitle="Materias"
          breadcrumbItems={<BreadcrumbModule />}
        />
      }
    >
      <DataTableHeader
        table={table}
        searchInputColumnName="name"
        searchInputColumnPlaceholder="Buscar por nombre"
        createButtonLabel="Crear materia"
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

export default Subject;
