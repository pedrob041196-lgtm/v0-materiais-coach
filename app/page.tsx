import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">Minha App</h1>
          <nav className="flex items-center gap-4">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
            <Button size="sm">Começar</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
          Bem-vindo à nossa plataforma
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          Uma solução simples e eficiente para suas necessidades. Descubra como podemos ajudar você a alcançar seus objetivos.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">Começar agora</Button>
          <Button variant="outline" size="lg">Saiba mais</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold text-foreground">Nossos Serviços</h3>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Oferecemos uma variedade de serviços para atender às suas necessidades.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Design</CardTitle>
                <CardDescription>Criamos designs modernos e funcionais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe de design cria interfaces intuitivas e visualmente atraentes para seus projetos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Desenvolvimento</CardTitle>
                <CardDescription>Código limpo e performático</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos aplicações robustas utilizando as melhores tecnologias do mercado.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Suporte</CardTitle>
                <CardDescription>Estamos sempre prontos para ajudar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Oferecemos suporte contínuo para garantir o sucesso do seu projeto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Minha App. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
