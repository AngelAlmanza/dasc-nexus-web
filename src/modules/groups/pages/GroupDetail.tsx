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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/groups/components";
import { useGroupDetails } from "@/modules/groups/hooks";
import { Shifts } from "../../../core/enums/shifts";

function GroupDetail() {
  const { id, title, formType, form, isLoading, onCancel, onSubmit } =
    useGroupDetails();

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
              <h2 className="text-xl font-semibold">Información del Grupo</h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semestre</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Semestre"
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
                name="shift"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turno</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value as Shifts)}
                      value={field.value}
                    >
                      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground">
                        <SelectValue placeholder="Selecciona un turno" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={Shifts.Morning}>
                            Matutino
                          </SelectItem>
                          <SelectItem value={Shifts.Afternoon}>
                            Vespertino
                          </SelectItem>
                          <SelectItem value={Shifts.Night}>Nocturno</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-end items-center gap-4">
              <Button
                className="w-1/4 bg-red-600 hover:bg-red-700"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button
                className="w-1/4"
                type="submit"
                disabled={isLoading}
              >
                Guardar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </DashboardLayout>
  );
}
export default GroupDetail;
