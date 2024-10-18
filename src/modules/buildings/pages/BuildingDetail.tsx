import { ModuleHeaderComponent } from "@/core/components";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/core/components/ui";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/buildings/components";
import { useBuildingDetails } from "@/modules/buildings/hooks";
import { convertToNumber } from "@/modules/shared/utils";
import { useParams } from "react-router-dom";

const BuildingDetails = () => {
  const { id } = useParams();
  const { form, onCancel, onSubmit } = useBuildingDetails();
  const title = id ? `Informacion del Edificio ${id}` : "Crear Edificio";
  const formType = id ? "update" : "create";

  return (
    <DashboardLayout
      header={
        <ModuleHeaderComponent
          moduleTitle={title}
          breadcrumbItems={
            <BreadcrumbForm
              formType={formType}
              id={Number(id)}
            />
          }
        />
      }
    >
      <p>Información del Edificio</p>
      <Form {...form}>
        <form
          className="w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                Información del Edificio
              </h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nombre"
                        className="hover:bg-accent hover:text-accent-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberPlants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de plantas</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => {
                          const numberValue = convertToNumber(e);
                          field.onChange({ target: { value: numberValue } });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-end items-center gap-4">
              <Button
                className="w-1/4 bg-red-600 hover:bg-red-700"
                onClick={onCancel}
              >
                Cancelar
              </Button>
              <Button
                className="w-1/4"
                type="submit"
              >
                Guardar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </DashboardLayout>
  );
};

export default BuildingDetails;
