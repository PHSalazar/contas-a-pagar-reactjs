import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Faça o login na sua conta.</CardDescription>
          <CardAction>
            <Button variant="link">Cadastre-se</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action="/">
            <Label htmlFor="">Email</Label>
            <div className="mb-4">
              <Input type="email" placeholder="Insira seu email" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="">Senha</Label>
              <Input type="password" placeholder="Insira sua senha" required />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <div className="flex flex-col gap-2 w-full">
            <Button type="submit">Entrar</Button>
            <Button variant="outline">Login com Google</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
