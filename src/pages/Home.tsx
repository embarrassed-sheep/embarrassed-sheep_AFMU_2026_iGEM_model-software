import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FlaskConical, Monitor, Target, Microscope, Dna, Brain } from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/qxVrMHpxvgbZUPWO.jpg";
const TEAM_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/yZRALyiVibTsRqii.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <img 
                src={TEAM_LOGO} 
                alt="AFMU-China" 
                className="h-16 w-16 rounded-full bg-white p-1 shadow-lg"
              />
              <div>
                <span className="text-sm font-medium text-primary">AFMU-China iGEM 2026</span>
                <h2 className="text-lg font-semibold text-foreground">Syn-M Project</h2>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="text-foreground">Synthetic</span>{" "}
              <span className="gradient-text">Macrophages</span>
              <br />
              <span className="text-foreground">for Tumor Infiltration</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Engineering macrophages to overcome the physical barriers of the tumor microenvironment, 
              enabling deeper immune cell infiltration and more effective anti-tumor responses.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Link href="/model">
                <Button size="lg" className="gap-2 text-base">
                  <FlaskConical className="h-5 w-5" />
                  Explore Model
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/software">
                <Button size="lg" variant="outline" className="gap-2 text-base bg-background/50 backdrop-blur-sm">
                  <Monitor className="h-5 w-5" />
                  View Software
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="wiki-highlight max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-3">Mission Statement</h3>
            <p className="text-lg text-foreground leading-relaxed">
              To engineer macrophages capable of actively degrading the extracellular matrix (ECM) barrier, 
              enabling deeper tumor infiltration and more effective anti-tumor immune responses in 
              hepatocellular carcinoma treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20">
        <div className="container">
          <div className="wiki-section mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Background</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Understanding the challenges in cancer immunotherapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Hepatocellular carcinoma (HCC) remains one of the most lethal cancers worldwide, 
                ranking as the <strong>third leading cause</strong> of cancer-related deaths globally. 
                Despite advances in immunotherapy, the clinical efficacy of immune checkpoint inhibitors 
                and CAR-T cell therapies in solid tumors has been limited by the hostile tumor microenvironment.
              </p>
              <p className="text-foreground leading-relaxed">
                The tumor microenvironment (TME) presents multiple barriers to effective immunotherapy, 
                creating a complex challenge that requires innovative solutions combining synthetic biology 
                with computational modeling.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="wiki-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Physical Barrier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dense extracellular matrix (ECM) composed of collagen, fibronectin, and other 
                    structural proteins that physically block immune cell infiltration.
                  </p>
                </CardContent>
              </Card>

              <Card className="wiki-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-igem-teal" />
                    Immunosuppressive Milieu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High concentrations of immunosuppressive cytokines and metabolites that 
                    inhibit immune cell function within the tumor.
                  </p>
                </CardContent>
              </Card>

              <Card className="wiki-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Dna className="h-5 w-5 text-igem-coral" />
                    Hypoxic Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Low oxygen levels that promote tumor progression and impair immune cell 
                    activity and survival.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is Syn-M */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="wiki-section mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What is Syn-M?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Synthetic Macrophages with SynNotch receptor system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-lg">
                <strong>Syn-M (Synthetic Macrophages)</strong> are genetically engineered macrophages 
                equipped with the SynNotch receptor system. This innovative design enables tissue-specific 
                activation and controlled release of matrix-degrading enzymes.
              </p>

              <div className="overflow-x-auto">
                <table className="wiki-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Function</th>
                      <th>Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium">INPUT Module</td>
                      <td>Target recognition</td>
                      <td className="text-sm">Anti-SLC17A2 scFv targeting liver-specific marker</td>
                    </tr>
                    <tr>
                      <td className="font-medium">CORE Module</td>
                      <td>Signal transduction</td>
                      <td className="text-sm">Notch core domain for mechanical signal conversion</td>
                    </tr>
                    <tr>
                      <td className="font-medium">OUTPUT Module</td>
                      <td>Effector response</td>
                      <td className="text-sm">P65 overexpression + SIRPα knockdown</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-igem-teal/20 to-igem-coral/20 rounded-full blur-2xl" />
                <Card className="wiki-card relative p-8">
                  <div className="text-center space-y-4">
                    <Brain className="h-16 w-16 mx-auto text-primary" />
                    <h3 className="text-xl font-bold">SynNotch System</h3>
                    <p className="text-sm text-muted-foreground">
                      A synthetic receptor that enables programmable cell-cell communication 
                      and tissue-specific activation of therapeutic functions.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container">
          <div className="wiki-section mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Integrating wet lab, computational modeling, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="wiki-card group hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Dna className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wet Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Syn-M construction by integrating the SynNotch receptor system into macrophages, 
                  enabling liver-specific activation upon contact with SLC17A2-expressing hepatocytes.
                </p>
                <span className="text-sm font-medium text-primary">Syn-M Construction →</span>
              </CardContent>
            </Card>

            <Link href="/model">
              <Card className="wiki-card group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-igem-teal/10 flex items-center justify-center mb-4 group-hover:bg-igem-teal/20 transition-colors">
                    <FlaskConical className="h-6 w-6 text-igem-teal" />
                  </div>
                  <CardTitle>Dry Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Agent-Based Model (ABM) to simulate Syn-M infiltration dynamics within the tumor 
                    microenvironment using Monte Carlo sampling and biased random walk algorithms.
                  </p>
                  <span className="text-sm font-medium text-igem-teal">View Model →</span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/software">
              <Card className="wiki-card group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-igem-coral/10 flex items-center justify-center mb-4 group-hover:bg-igem-coral/20 transition-colors">
                    <Monitor className="h-6 w-6 text-igem-coral" />
                  </div>
                  <CardTitle>Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    DeepEye 2.0, an AI-powered companion diagnostic system integrating radiomics 
                    analysis with dynamic simulation for personalized treatment planning.
                  </p>
                  <span className="text-sm font-medium text-igem-coral">View Software →</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="wiki-section mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Achievements</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="wiki-table max-w-4xl">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Achievement</th>
                  <th>Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-primary">Modeling</td>
                  <td>ABM-based infiltration simulation</td>
                  <td>Quantitative validation of Syn-M's enhanced infiltration capability</td>
                </tr>
                <tr>
                  <td className="font-medium text-igem-teal">Software</td>
                  <td>DeepEye 2.0 CDSS proposal</td>
                  <td>Framework for personalized therapy prediction</td>
                </tr>
                <tr>
                  <td className="font-medium text-igem-coral">Visualization</td>
                  <td>Dynamic GIF animations</td>
                  <td>Intuitive demonstration of infiltration dynamics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Explore our detailed work on the Model and Software pages
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/model">
                <Button className="gap-2">
                  <FlaskConical className="h-4 w-4" />
                  Model Page
                </Button>
              </Link>
              <Link href="/software">
                <Button variant="outline" className="gap-2">
                  <Monitor className="h-4 w-4" />
                  Software Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
