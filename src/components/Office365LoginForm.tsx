import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const Office365LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"email" | "password">("email");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStep("password");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login attempt with: ${email}`);
    }, 1500);
  };

  const handleBack = () => {
    setStep("email");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ms-background p-4">
      <div className="w-full max-w-[440px] bg-card rounded-sm shadow-ms p-11 animate-fade-in">
        {/* Microsoft Logo */}
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" viewBox="0 0 108 24">
            <path fill="#737373" d="M44.836 4.6v14.8h-2.4V7.583L38.073 19.4h-1.6l-4.4-11.817V19.4h-2.32V4.6h3.12l4.4 12.1 4.32-12.1h3.24Zm3.36 2.883a1.323 1.323 0 0 1-.973-.4 1.323 1.323 0 0 1-.4-.973c0-.391.133-.72.4-.987s.591-.4.973-.4.72.133.987.4.4.596.4.987c0 .378-.133.702-.4.973s-.596.4-.987.4Zm1.12 11.917h-2.24V9h2.24v10.4Zm8.56-1.667c.378 0 .756-.071 1.133-.213.378-.142.738-.351 1.08-.627l.88 1.44a4.323 4.323 0 0 1-1.52.853 5.457 5.457 0 0 1-1.733.28c-.924 0-1.738-.2-2.44-.6a4.243 4.243 0 0 1-1.627-1.68c-.382-.72-.573-1.547-.573-2.48 0-.92.191-1.738.573-2.453a4.177 4.177 0 0 1 1.6-1.693c.684-.404 1.467-.607 2.347-.607.569 0 1.124.093 1.667.28.542.187 1.013.453 1.413.8l-.92 1.44c-.32-.267-.658-.462-1.013-.587a3.28 3.28 0 0 0-1.067-.187c-.756 0-1.378.258-1.867.773-.489.516-.733 1.222-.733 2.12 0 .911.244 1.631.733 2.16.489.529 1.12.793 1.893.793l-.16.188h.333Zm7.52-8.906c.618 0 1.142.089 1.573.267l-.4 2c-.195-.089-.418-.16-.667-.213a3.893 3.893 0 0 0-.76-.08c-.498 0-.938.138-1.32.413-.382.276-.662.649-.84 1.12V19.4h-2.24V9h2.08l.12 1.44c.267-.489.618-.876 1.053-1.16a2.64 2.64 0 0 1 1.4-.453Zm5.84-.093c1.262 0 2.249.36 2.96 1.08.711.72 1.067 1.787 1.067 3.2V19.4h-2.24v-5.88c0-.924-.187-1.6-.56-2.027-.373-.427-.929-.64-1.667-.64-.596 0-1.12.142-1.573.427-.453.284-.8.662-1.04 1.133V19.4h-2.24V9h2.04l.12 1.32a3.778 3.778 0 0 1 1.467-1.12 4.473 4.473 0 0 1 1.92-.413h-.254Zm9.413 10.666c-1.044 0-1.96-.2-2.747-.6a4.365 4.365 0 0 1-1.827-1.68c-.431-.72-.647-1.547-.647-2.48 0-.92.216-1.738.647-2.453a4.365 4.365 0 0 1 1.827-1.693c.787-.404 1.702-.607 2.747-.607 1.031 0 1.942.202 2.733.607a4.397 4.397 0 0 1 1.84 1.693c.44.716.66 1.533.66 2.453 0 .933-.22 1.76-.66 2.48a4.397 4.397 0 0 1-1.84 1.68c-.791.4-1.702.6-2.733.6Zm0-1.853c.791 0 1.427-.258 1.907-.773.48-.516.72-1.222.72-2.12 0-.911-.24-1.618-.72-2.12-.48-.502-1.116-.753-1.907-.753s-1.431.251-1.92.753c-.489.502-.733 1.209-.733 2.12 0 .898.244 1.604.733 2.12.489.516 1.129.773 1.92.773Zm10.12 1.853c-.924 0-1.742-.2-2.453-.6a4.403 4.403 0 0 1-1.68-1.68c-.404-.72-.607-1.547-.607-2.48 0-.92.202-1.738.607-2.453a4.403 4.403 0 0 1 1.68-1.693c.711-.404 1.529-.607 2.453-.607.604 0 1.169.098 1.693.293a3.701 3.701 0 0 1 1.347.84l-1.12 1.44a2.467 2.467 0 0 0-.853-.573 2.67 2.67 0 0 0-1.027-.2c-.773 0-1.404.258-1.893.773-.489.516-.733 1.222-.733 2.12 0 .911.244 1.631.733 2.16.489.529 1.12.793 1.893.793.373 0 .724-.067 1.053-.2.329-.133.622-.324.88-.573l1.08 1.44c-.391.391-.858.693-1.4.907a4.707 4.707 0 0 1-1.653.293Zm8.2 0c-1.044 0-1.96-.2-2.747-.6a4.365 4.365 0 0 1-1.827-1.68c-.431-.72-.647-1.547-.647-2.48 0-.92.216-1.738.647-2.453a4.365 4.365 0 0 1 1.827-1.693c.787-.404 1.702-.607 2.747-.607.604 0 1.16.089 1.667.267.507.178.951.431 1.333.76l-1.08 1.52a2.75 2.75 0 0 0-.893-.52 3.002 3.002 0 0 0-1.027-.173c-.791 0-1.427.251-1.907.753-.48.502-.72 1.209-.72 2.12 0 .898.24 1.604.72 2.12.48.516 1.116.773 1.907.773.373 0 .724-.058 1.053-.173a2.75 2.75 0 0 0 .893-.52l1.08 1.52c-.382.329-.826.582-1.333.76-.507.178-1.062.267-1.667.267l-.026-.061Zm8.72 0c-1.044 0-1.96-.2-2.747-.6a4.365 4.365 0 0 1-1.827-1.68c-.431-.72-.647-1.547-.647-2.48 0-.92.216-1.738.647-2.453a4.365 4.365 0 0 1 1.827-1.693c.787-.404 1.702-.607 2.747-.607 1.031 0 1.942.202 2.733.607a4.397 4.397 0 0 1 1.84 1.693c.44.716.66 1.533.66 2.453 0 .933-.22 1.76-.66 2.48a4.397 4.397 0 0 1-1.84 1.68c-.791.4-1.702.6-2.733.6Zm0-1.853c.791 0 1.427-.258 1.907-.773.48-.516.72-1.222.72-2.12 0-.911-.24-1.618-.72-2.12-.48-.502-1.116-.753-1.907-.753s-1.431.251-1.92.753c-.489.502-.733 1.209-.733 2.12 0 .898.244 1.604.733 2.12.489.516 1.129.773 1.92.773Z"/>
            <path fill="#f25022" d="M0 0h11.377v11.377H0z"/>
            <path fill="#00a4ef" d="M0 12.623h11.377V24H0z"/>
            <path fill="#7fba00" d="M12.623 0H24v11.377H12.623z"/>
            <path fill="#ffb900" d="M12.623 12.623H24V24H12.623z"/>
          </svg>
        </div>

        {step === "email" ? (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Iniciar sessão</h1>
              <p className="text-sm text-muted-foreground">para continuar para o Office 365</p>
            </div>

            <div className="space-y-1">
              <Input
                type="email"
                placeholder="E-mail, telefone ou Skype"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 rounded-none border-0 border-b border-input bg-transparent px-0 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-ms-primary"
                autoFocus
                required
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <a href="#" className="text-ms-primary hover:underline">
                Crie uma!
              </a>
            </p>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-ms-primary hover:bg-ms-primary-hover text-white rounded-none px-8 h-9"
              >
                Seguinte
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M11.25 5.25H2.56l3.97-3.97L6 .75.75 6 6 11.25l.53-.53L2.56 6.75h8.69v-1.5Z"/>
              </svg>
              {email}
            </button>

            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Introduza a palavra-passe</h1>
            </div>

            <div className="space-y-1 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-9 rounded-none border-0 border-b border-input bg-transparent px-0 pr-10 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-ms-primary"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <a href="#" className="text-sm text-ms-primary hover:underline block">
              Esqueci-me da palavra-passe
            </a>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-ms-primary hover:bg-ms-primary-hover text-white rounded-none px-8 h-9 disabled:opacity-70"
              >
                {isLoading ? "A iniciar sessão..." : "Iniciar sessão"}
              </Button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © Microsoft 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Office365LoginForm;
