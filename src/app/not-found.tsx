import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">Страница не найдена</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <Button href="/" className="mt-8">
        На главную
      </Button>
    </Container>
  );
}
