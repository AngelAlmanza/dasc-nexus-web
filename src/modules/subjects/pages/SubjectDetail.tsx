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
import { convertToNumber } from "@/modules/shared/utils";
import { BreadcrumbForm } from "@/modules/subjects/components";
import { useSubjectDetails } from "@/modules/subjects/hooks";

const SubjectDetails = () => {
  const { id, title, formType, form, isLoading, onCancel, onSubmit } =
    useSubjectDetails();

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
              <h2 className="text-xl font-semibold">
                Información de la Materia
              </h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Materia</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="key"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clave de la Materia</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="credits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Creditos</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theory_hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horas de Teoría</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="practice_hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horas de Práctica</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semestre</FormLabel>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Área</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un área" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="area1">Área 1</SelectItem>
                            <SelectItem value="area2">Área 2</SelectItem>
                            <SelectItem value="area3">Área 3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carrera</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una carrera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="ITC">ITC</SelectItem>
                            <SelectItem value="LATII">LATII</SelectItem>
                            <SelectItem value="IDS">IDS</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="2010">2010</SelectItem>
                            <SelectItem value="2015">2015</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
};

export default SubjectDetails;
