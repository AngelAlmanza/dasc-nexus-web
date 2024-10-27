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

function GroupDetail() {
  const {
    id,
    title,
    formType,
    form,
    isLoading,
    majors,
    plans,
    onCancel,
    onSubmit,
  } = useGroupDetails();

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
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Turno"
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
                name="career_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carrera</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value?.toString()}
                    >
                      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground">
                        <SelectValue placeholder="Selecciona una carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {majors.map((major) => (
                            <SelectItem
                              key={major.id}
                              value={major.id.toString()}
                            >
                              {major.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value?.toString()}
                    >
                      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground">
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {plans.map((plan) => (
                            <SelectItem
                              key={plan.id}
                              value={plan.id.toString()}
                            >
                              {plan.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
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
