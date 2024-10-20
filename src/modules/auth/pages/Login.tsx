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
  Toaster,
} from "@/core/components/ui";
import { PrivateRoutes } from "@/core/enums";
import { useAppDispatch } from "@/core/store/hooks";
import { setIsAuthenticated, setToken } from "@/core/store/slices";
import { useLogin } from "@/modules/auth/hooks";
import { getAuthToken } from "@/modules/auth/utils";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { form, isAuthenticated, onSubmit } = useLogin();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;
    dispatch(setToken(token));
    dispatch(setIsAuthenticated(true));
  }, [dispatch]);

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
      <Toaster />
    </main>
  );
};

export default Login;
