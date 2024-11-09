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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui";
import { DashboardLayout } from "@/core/layouts";
import { BreadcrumbForm } from "@/modules/teacher-schedules/components";
import { DAYS_ES } from "@/modules/teacher-schedules/constants";
import { useTeacherScheduleDetails } from "@/modules/teacher-schedules/hooks";
import moment from "moment";

function TeacherScheduleDetail() {
  const {
    id,
    title,
    form,
    formType,
    isLoading,
    onCancel,
    onSubmit,
    classrooms,
    subjects,
    allowedValues: { teachers, terms, scheduleBlocks },
    // teachers,
    // terms,
    // scheduleBlocks,
  } = useTeacherScheduleDetails();

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
              <h2 className="text-xl font-semibold">Información del Horario</h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="teacher"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profesor</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un profesor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {teachers.map((teacher) => (
                              <SelectItem
                                key={teacher.id}
                                value={teacher.id.toString()}
                              >
                                {teacher.name}
                              </SelectItem>
                            ))}
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
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Materia</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una materia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {subjects.map((subject) => (
                              <SelectItem
                                key={subject.id}
                                value={subject.id.toString()}
                              >
                                {subject.name}
                              </SelectItem>
                            ))}
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
                name="room"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aula</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un aula" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {classrooms.map((classroom) => (
                              <SelectItem
                                key={classroom.id}
                                value={classroom.id.toString()}
                              >
                                {classroom.name}
                              </SelectItem>
                            ))}
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
                name="scheduleBlock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bloque de Horario</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un bloque de horario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {scheduleBlocks.map((scheduleBlock) => (
                              <SelectItem
                                key={scheduleBlock.id}
                                value={scheduleBlock.id.toString()}
                              >
                                {DAYS_ES[scheduleBlock.day]}{" "}
                                {scheduleBlock.start_time} -{" "}
                                {scheduleBlock.end_time}
                              </SelectItem>
                            ))}
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
                name="term"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Periodo</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un periodo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {terms.map((term) => (
                              <SelectItem
                                key={term.id}
                                value={term.id.toString()}
                              >
                                {moment(term.init).format("DD/MM/YYYY")} -{" "}
                                {moment(term.end).format("DD/MM/YYYY")}
                              </SelectItem>
                            ))}
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
}
export default TeacherScheduleDetail;
