import DASC_LOGO from "@/assets/img/dasc-logo.png";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setIsAuthenticated } from "@/core/store/slices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setTimeout(() => {
      dispatch(setIsAuthenticated(true));
      navigate(PrivateRoutes.DASHBOARD);
    }, 2000);
  };

  if (isAuthenticated) {
    return <Navigate to={PrivateRoutes.DASHBOARD} />;
  }

  return (
    <main className="w-screen h-screen flex items-center">
      <section className="w-1/2 h-full flex items-center justify-center">
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle className="flex flex-col gap-6">
              <div>
                <img
                  src={DASC_LOGO}
                  className="h-16"
                />
              </div>
              <p className="text-2xl font-bold">DASC NEXUS X Admin Panel</p>
            </CardTitle>
            <CardDescription className="text-lg">
              Bienvenido a NEXUS X,
              <br />
              Por favor inicia sesión para continuar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Institucional</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Correo Institucional"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Ingresa tu correo institucional.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Contraseña"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Ingresa tu contraseña.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
      <section className="w-1/2 h-full relative">
        {/* TODO: Add real cover */}
        <img
          src="https://bitacorabcs.mx/wp-content/uploads/2024/04/UABCS-2feb21.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-blue-950 opacity-25"></div>
      </section>
    </main>
  );
};

export default Login;
