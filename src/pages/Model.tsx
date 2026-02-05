import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Grid3X3, Cpu, BarChart3, CheckCircle } from "lucide-react";

const WT_GIF = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/LCxBTSgLYExAeztx.gif";
const SYNM_GIF = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/athMxSEInCgPzRxa.gif";
const DEPTH_CHART = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/TAXaUKWgCytNTgnC.png";

export default function Model() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <FlaskConical className="h-4 w-4" />
            <span className="text-sm font-medium">Computational Modeling</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Model</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agent-Based Modeling of Syn-M infiltration kinetics within the tumor microenvironment
          </p>
        </div>

        {/* Key Finding */}
        <div className="wiki-highlight max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-primary mb-3">Key Finding</h3>
          <p className="text-lg text-foreground leading-relaxed">
            Our simulation demonstrates that Syn-M cells, equipped with matrix-degrading capabilities, 
            achieve significantly deeper tumor infiltration compared to WT macrophages, which are 
            blocked at the tumor boundary by the dense extracellular matrix.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
          </div>
          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            This page presents our computational modeling work on <strong>Syn-M infiltration kinetics analysis</strong>. 
            We developed an Agent-Based Model (ABM) to simulate the dynamic behavior of engineered macrophages 
            within the tumor microenvironment, providing quantitative evidence for the enhanced infiltration 
            capability of Syn-M compared to wild-type (WT) macrophages.
          </p>
        </section>

        {/* Methodology Section */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Methodology</h2>
          </div>
          
          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            Our model adopts the <strong>Agent-Based Modeling (ABM)</strong> approach, abstracting the biological 
            infiltration process into a stochastic dynamical system on a two-dimensional discrete grid.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="wiki-card">
              <CardHeader>
                <Grid3X3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Discrete State Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grid-based spatial representation for modeling TME structure including vascular zone, 
                  normal tissue, and tumor matrix.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardHeader>
                <Cpu className="h-8 w-8 text-igem-teal mb-2" />
                <CardTitle className="text-lg">Monte Carlo Sampling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Probabilistic decision-making for cell migration direction selection and 
                  matrix degradation events.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-igem-coral mb-2" />
                <CardTitle className="text-lg">Biased Random Walk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chemotaxis-guided movement simulating macrophage migration along chemokine gradients.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environment Modeling */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Environment Modeling</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            We constructed a <strong>100 × 100 discrete grid space</strong> to simulate the tumor microenvironment (TME). 
            The spatial domain is partitioned into three distinct regions:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="wiki-table max-w-3xl">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Grid Value</th>
                  <th>Biological Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Vascular Zone</td>
                  <td>2</td>
                  <td>Blood vessel region (x = 0-5), source of macrophage entry</td>
                </tr>
                <tr>
                  <td className="font-medium">Normal Tissue</td>
                  <td>0</td>
                  <td>Open space allowing free cell movement</td>
                </tr>
                <tr>
                  <td className="font-medium">Tumor Matrix (ECM)</td>
                  <td>1</td>
                  <td>Dense extracellular matrix (x ≥ 40), physical barrier to infiltration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="wiki-card max-w-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Chemokine Gradient</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A linear chemokine gradient is established across the grid, with concentration increasing 
                from the vascular zone (left) toward the tumor core (right). This gradient guides macrophage 
                migration through chemotaxis.
              </p>
              <div className="code-block">
                <code className="text-sm">
                  # Chemokine gradient: linear increase from left (0) to right (1)<br/>
                  self.chemokine = np.linspace(0, 1, width)
                </code>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Agent Behavior Logic */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Agent Behavior Logic</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            Macrophages are defined as <strong>intelligent agents</strong> with independent decision-making capabilities. 
            Their migration follows a <strong>biased random walk</strong> algorithm, where movement probability 
            is modulated by the chemokine gradient.
          </p>

          <Card className="wiki-card max-w-4xl mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Score-Based Decision Making</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                At each time step, the agent evaluates all possible movement directions (Moore neighborhood + stay) 
                and selects the direction with the highest score:
              </p>
              <div className="code-block">
                <code className="text-sm whitespace-pre-wrap">
{`# Score calculation formula
score = chemokine_field[nx] * 2.0 + np.random.normal(0, 0.1)

# Collision detection: matrix barrier
if grid[ny, nx] == 1:  # ECM detected
    if is_syn_m and random.random() < degrade_prob:
        grid[ny, nx] = 0  # Syn-M degrades matrix
        score += 0.5      # Positive feedback reward
    else:
        score -= 10       # Physical barrier penalty`}
                </code>
              </div>
            </CardContent>
          </Card>

          <div className="overflow-x-auto mb-8">
            <table className="wiki-table max-w-3xl">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Value</th>
                  <th>Biological Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Chemokine Weight</td>
                  <td>× 2.0</td>
                  <td>Receptor sensitivity to chemotactic signals</td>
                </tr>
                <tr>
                  <td className="font-medium">Random Noise</td>
                  <td>N(0, 0.1)</td>
                  <td>Intrinsic stochasticity of biological processes</td>
                </tr>
                <tr>
                  <td className="font-medium">Barrier Penalty</td>
                  <td>-10</td>
                  <td>Physical obstruction by dense ECM</td>
                </tr>
                <tr>
                  <td className="font-medium">Degradation Reward</td>
                  <td>+0.5</td>
                  <td>Positive feedback for successful matrix clearance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="wiki-card max-w-4xl">
            <CardHeader>
              <CardTitle className="text-lg">State Machine Transitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The key difference between WT and Syn-M lies in their interaction with the ECM:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">WT (Control)</h4>
                  <p className="text-sm text-muted-foreground">
                    When encountering ECM, the migration cost function approaches infinity (score -= 10), 
                    effectively blocking the cell at the tumor boundary.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <h4 className="font-semibold text-primary mb-2">Syn-M (Engineered)</h4>
                  <p className="text-sm text-muted-foreground">
                    Introduces a degradation probability function P<sub>degrade</sub> = 0.3. Upon ECM contact, 
                    Syn-M simulates SynNotch activation and MMP enzyme release.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Simulation Results */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Simulation Results</h2>
          </div>

          <h3 className="text-xl font-semibold text-primary mb-6">Dynamic Visualization</h3>
          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            The following animations demonstrate the infiltration dynamics of WT and Syn-M macrophages 
            over 100 time steps. Cells originate from the vascular zone (left) and migrate toward 
            the tumor region (right).
          </p>

          <Tabs defaultValue="comparison" className="max-w-5xl mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="comparison">Side by Side</TabsTrigger>
              <TabsTrigger value="wt">WT Macrophage</TabsTrigger>
              <TabsTrigger value="synm">Syn-M Macrophage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comparison" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="wiki-card">
                  <CardHeader>
                    <CardTitle className="text-base">WT Macrophage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={WT_GIF} 
                      alt="WT Macrophage Simulation" 
                      className="w-full rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3">
                      WT cells are blocked at the tumor boundary (x ≈ 40) by the dense ECM.
                    </p>
                  </CardContent>
                </Card>
                <Card className="wiki-card">
                  <CardHeader>
                    <CardTitle className="text-base">Syn-M Macrophage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={SYNM_GIF} 
                      alt="Syn-M Macrophage Simulation" 
                      className="w-full rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3">
                      Syn-M cells actively degrade ECM and achieve deeper tumor penetration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="wt" className="mt-6">
              <Card className="wiki-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>WT Macrophage Infiltration</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={WT_GIF} 
                    alt="WT Macrophage Simulation" 
                    className="w-full rounded-lg"
                  />
                  <p className="text-muted-foreground mt-4">
                    Wild-type macrophages are unable to penetrate the dense extracellular matrix barrier, 
                    accumulating at the tumor boundary without significant infiltration.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="synm" className="mt-6">
              <Card className="wiki-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Syn-M Macrophage Infiltration</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={SYNM_GIF} 
                    alt="Syn-M Macrophage Simulation" 
                    className="w-full rounded-lg"
                  />
                  <p className="text-muted-foreground mt-4">
                    Syn-M macrophages equipped with matrix-degrading capabilities successfully 
                    penetrate the ECM barrier and achieve deep tumor infiltration.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <h3 className="text-xl font-semibold text-primary mb-6">Quantitative Comparison</h3>
          <Card className="wiki-card max-w-3xl mb-8">
            <CardHeader>
              <CardTitle>Infiltration Depth vs. Time</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={DEPTH_CHART} 
                alt="Infiltration Depth Comparison" 
                className="w-full rounded-lg bg-white p-2"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Figure 1. Average infiltration depth vs. time steps. The green dashed line indicates 
                the tumor boundary (x = 40).
              </p>
            </CardContent>
          </Card>

          <div className="wiki-highlight max-w-3xl">
            <h4 className="text-lg font-semibold text-primary mb-4">Simulation Results Summary</h4>
            <div className="space-y-2 text-foreground">
              <p><strong>WT Macrophage Final Infiltration Rate:</strong> ~23% (cells entering tumor region)</p>
              <p><strong>Syn-M Macrophage Final Infiltration Rate:</strong> ~87% (cells entering tumor region)</p>
              <p><strong>Improvement:</strong> Syn-M demonstrates approximately 3.8× higher infiltration efficiency.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Conclusion</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            This study employed a <strong>multi-field coupled grid model</strong> and <strong>gradient-based 
            migration algorithms</strong> to dynamically simulate the behavior of Syn-M within the 
            hepatocellular carcinoma microenvironment. Our key findings include:
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <Card className="wiki-card">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Validated ECM Barrier Effect</h4>
                <p className="text-sm text-muted-foreground">
                  The model successfully reproduced the physical barrier effect of dense ECM 
                  on WT macrophage infiltration.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-igem-teal mb-4" />
                <h4 className="font-semibold mb-2">Demonstrated Syn-M Advantage</h4>
                <p className="text-sm text-muted-foreground">
                  Syn-M's matrix-degrading capability enables significantly deeper tumor penetration, 
                  with infiltration rates approximately 3.8× higher than WT.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-igem-coral mb-4" />
                <h4 className="font-semibold mb-2">Established Quantitative Framework</h4>
                <p className="text-sm text-muted-foreground">
                  The ABM approach provides a robust foundation for further mechanistic investigations 
                  and optimization of macrophage-based targeted therapies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
