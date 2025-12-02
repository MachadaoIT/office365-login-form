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
        <div className="mb-6 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <rect fill="#f25022" x="1" y="1" width="9" height="9"/>
            <rect fill="#00a4ef" x="1" y="11" width="9" height="9"/>
            <rect fill="#7fba00" x="11" y="1" width="9" height="9"/>
            <rect fill="#ffb900" x="11" y="11" width="9" height="9"/>
          </svg>
          <span className="text-xl font-normal text-foreground">Microsoft</span>
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
