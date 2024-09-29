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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/core/components/ui";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/classrooms/components";
import { useClassroomDetails } from "@/modules/classrooms/hooks";
import { SelectGroup } from "@radix-ui/react-select";
import { useParams } from "react-router-dom";

const ClassroomDetails = () => {
  const { id } = useParams();
  const { form, onCancel, onSubmit } = useClassroomDetails();

  const title = id ? `Informacion del Salón ${id}` : "Crear Salón";
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
      <Form {...form}>
        <form
          className="w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Información del Salón</h2>
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
                name="building"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Edificio</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground">
                        <SelectValue placeholder="Selecciona un edificio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="building-a">Edificio A</SelectItem>
                          <SelectItem value="building-b">Edificio B</SelectItem>
                          <SelectItem value="building-c">Edificio C</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="floor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Piso</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Piso"
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
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacidad</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Capacidad"
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descripción"
                        className="hover:bg-accent hover:text-accent-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
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

export default ClassroomDetails;
