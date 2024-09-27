import { ModuleHeaderComponent } from "@/core/components";
import {
  Button,
  Calendar,
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { DashboardLayout } from "@/core/layouts";
import { cn } from "@/core/lib";
import { BreadcrumbForm } from "@/modules/majors/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  career: z.string().min(6, "La carrera debe tener al menos 6 carácteres"),
  created_at: z.date(),
});

const MajorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      career: "",
      created_at: new Date(),
    },
  });

  const title = id ? `Informacion de la Carrera ${id}` : "Crear Carrera";
  const formType = id ? "update" : "create";

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onCancel = () => {
    navigate(PrivateRoutes.MAJOR);
  };

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
                Información de la Carrera
              </h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="career"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Carrera</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nombre de la carrera"
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
                name="created_at"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fecha de Creación</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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

export default MajorDetails;
