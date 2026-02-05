import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Brain, Database, Globe, Shield, Zap, Upload, Scan, Settings, FileText, ArrowRight } from "lucide-react";

export default function Software() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-igem-coral/10 text-igem-coral mb-6">
            <Monitor className="h-4 w-4" />
            <span className="text-sm font-medium">Software Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Software</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DeepEye 2.0 — AI-powered companion diagnostic system for personalized Syn-M therapy prediction
          </p>
        </div>

        {/* Core Innovation */}
        <div className="wiki-highlight max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-primary mb-3">Core Innovation</h3>
          <p className="text-lg text-foreground leading-relaxed">
            DeepEye 2.0 transforms <strong>static imaging data</strong> into <strong>dynamic behavioral predictions</strong>, 
            creating a "digital twin" for each patient to simulate and evaluate therapeutic outcomes 
            before actual treatment administration.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
          </div>
          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            This page presents <strong>DeepEye 2.0</strong> — an AI-powered companion diagnostic system designed 
            to bridge the gap between laboratory research and clinical application. By integrating radiomics 
            analysis with dynamic simulation, DeepEye 2.0 enables personalized prediction of Syn-M infiltration 
            efficiency for individual patients.
          </p>
        </section>

        {/* Background & Pain Points */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Background & Clinical Pain Points</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            The AFMU-China 2025 original software platform established a solid foundation in bioinformatics 
            analysis and data visualization. However, critical challenges remain in clinical translation:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="wiki-card border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="text-lg">TME Heterogeneity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The tumor microenvironment exhibits high heterogeneity, which is a core factor 
                  limiting the efficacy of engineered cell therapies like Syn-M.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card border-l-4 border-l-igem-gold">
              <CardHeader>
                <CardTitle className="text-lg">Lack of Predictive Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clinicians currently lack effective tools to predict the infiltration efficiency 
                  of engineered macrophages in specific patients.
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card border-l-4 border-l-igem-coral">
              <CardHeader>
                <CardTitle className="text-lg">Personalization Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Without quantitative assessment of individual TME physical barriers, treatment 
                  plans cannot achieve precision, creating a major bottleneck.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="wiki-card max-w-3xl bg-muted/30">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-primary mb-3">The Question We Address</h4>
              <p className="text-foreground italic text-lg">
                "For this specific patient, with their unique tumor characteristics, how effectively 
                will Syn-M infiltrate the tumor? And what is the optimal dosing strategy?"
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Solution: DeepEye 2.0 */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Solution: DeepEye 2.0 Companion Diagnostic System</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            DeepEye 2.0 is designed as a comprehensive <strong>Clinical Decision Support System (CDSS)</strong> that 
            upgrades the original static platform into a fully functional predictive tool. The system's core 
            logic lies in achieving cross-dimensional transformation from static imaging data to dynamic 
            behavioral predictions.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="wiki-table max-w-4xl">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Description</th>
                  <th>Clinical Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Patient-Specific Modeling</td>
                  <td>Extract TME parameters from individual CT/MRI scans</td>
                  <td>Personalized treatment planning</td>
                </tr>
                <tr>
                  <td className="font-medium">Infiltration Prediction</td>
                  <td>Simulate Syn-M dynamics using patient-derived parameters</td>
                  <td>Pre-treatment efficacy estimation</td>
                </tr>
                <tr>
                  <td className="font-medium">Interactive Visualization</td>
                  <td>3D tumor model with infiltration trajectory overlay</td>
                  <td>Intuitive clinical communication</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Functional Modules */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Core Functional Modules</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="wiki-card">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Radiomics Engine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Technical Implementation</h5>
                  <p className="text-sm text-foreground">
                    3D U-Net deep learning model for lesion segmentation; extraction of matrix density, 
                    vascular abundance, and other radiomic features.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Clinical Output</h5>
                  <p className="text-sm text-foreground">
                    Patient-individualized TME parameter matrix
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardHeader>
                <Settings className="h-10 w-10 text-igem-teal mb-3" />
                <CardTitle>Dynamic Simulation Twin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Technical Implementation</h5>
                  <p className="text-sm text-foreground">
                    Inject extracted features into Agent-Based dynamic model; simulate Syn-M 
                    spatiotemporal evolution.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Clinical Output</h5>
                  <p className="text-sm text-foreground">
                    Infiltration depth and core region arrival time prediction
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardHeader>
                <Globe className="h-10 w-10 text-igem-coral mb-3" />
                <CardTitle>Clinical Decision Visualization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Technical Implementation</h5>
                  <p className="text-sm text-foreground">
                    WebGL-based 3D tumor model interactive display; generate quantitative reports.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground mb-1">Clinical Output</h5>
                  <p className="text-sm text-foreground">
                    Intuitive dosing recommendations and efficacy scores
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Technical Architecture</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            DeepEye 2.0 adopts a modern <strong>front-end/back-end separation architecture</strong> to ensure 
            high performance and scalability. The system leverages cloud computing resources for web services 
            while utilizing local GPU servers for computationally intensive tasks.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card className="wiki-card bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-primary">Frontend Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• React Framework</li>
                  <li>• Three.js 3D Visualization</li>
                  <li>• WebGL Rendering</li>
                  <li>• Responsive UI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="wiki-card bg-igem-teal/5 border-igem-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-igem-teal">Backend Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• FastAPI Async Framework</li>
                  <li>• RESTful API</li>
                  <li>• Task Queue (Celery)</li>
                  <li>• SSH Encrypted Tunnel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="wiki-card bg-igem-coral/5 border-igem-coral/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-igem-coral">Computation Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• PyTorch Deep Learning</li>
                  <li>• 3D U-Net Segmentation</li>
                  <li>• NumPy/Numba Optimization</li>
                  <li>• ABM Simulation Engine</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="wiki-card bg-igem-gold/5 border-igem-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-igem-gold">Deployment Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Docker Containerization</li>
                  <li>• Cloud + Local Hybrid</li>
                  <li>• UUID Anonymization</li>
                  <li>• Auto-Cleanup (6h)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="overflow-x-auto">
            <table className="wiki-table max-w-4xl">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Technology</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Frontend</td>
                  <td>React + Three.js</td>
                  <td>Immersive 3D visualization and user interaction</td>
                </tr>
                <tr>
                  <td className="font-medium">Backend</td>
                  <td>FastAPI</td>
                  <td>High-performance async request handling</td>
                </tr>
                <tr>
                  <td className="font-medium">AI/ML</td>
                  <td>PyTorch + 3D U-Net</td>
                  <td>Deep learning inference for image segmentation</td>
                </tr>
                <tr>
                  <td className="font-medium">Simulation</td>
                  <td>NumPy + Numba</td>
                  <td>Optimized ABM computation for real-time response</td>
                </tr>
                <tr>
                  <td className="font-medium">Deployment</td>
                  <td>Docker</td>
                  <td>Environment consistency from development to clinical deployment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Clinical Workflow */}
        <section className="mb-20">
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Clinical Workflow</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            DeepEye 2.0 is designed to integrate seamlessly into existing clinical workflows. 
            The following outlines the typical usage scenario:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">Image Upload</h4>
                <p className="text-sm text-muted-foreground">
                  Clinician uploads patient CT/MRI scan (supports .nii, .nii.gz, .dcm formats)
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-igem-teal/10 flex items-center justify-center">
                    <Scan className="h-5 w-5 text-igem-teal" />
                  </div>
                  <span className="text-2xl font-bold text-igem-teal">2</span>
                </div>
                <h4 className="font-semibold mb-2">Automated Segmentation</h4>
                <p className="text-sm text-muted-foreground">
                  3D U-Net model automatically identifies and segments tumor lesions
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-igem-coral/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-igem-coral" />
                  </div>
                  <span className="text-2xl font-bold text-igem-coral">3</span>
                </div>
                <h4 className="font-semibold mb-2">Feature Extraction</h4>
                <p className="text-sm text-muted-foreground">
                  Radiomics engine extracts TME parameters (matrix density, vascular distribution, etc.)
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-igem-gold/10 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-igem-gold" />
                  </div>
                  <span className="text-2xl font-bold text-igem-gold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Simulation Execution</h4>
                <p className="text-sm text-muted-foreground">
                  ABM engine runs personalized Syn-M infiltration simulation
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h4 className="font-semibold mb-2">Result Visualization</h4>
                <p className="text-sm text-muted-foreground">
                  3D interactive model displays predicted infiltration trajectories
                </p>
              </CardContent>
            </Card>

            <Card className="wiki-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-igem-teal/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-igem-teal" />
                  </div>
                  <span className="text-2xl font-bold text-igem-teal">6</span>
                </div>
                <h4 className="font-semibold mb-2">Report Generation</h4>
                <p className="text-sm text-muted-foreground">
                  System generates quantitative report with efficacy score and dosing recommendations
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="wiki-highlight max-w-4xl">
            <h4 className="text-lg font-semibold text-primary mb-4">Key Advantages</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-igem-gold mt-0.5" />
                <div>
                  <span className="font-semibold">Speed:</span>
                  <span className="text-muted-foreground ml-1">Complete analysis in under 60 seconds</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-semibold">Accuracy:</span>
                  <span className="text-muted-foreground ml-1">Deep learning-based segmentation with &gt;92% accuracy</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-igem-teal mt-0.5" />
                <div>
                  <span className="font-semibold">Security:</span>
                  <span className="text-muted-foreground ml-1">UUID anonymization and automatic 6-hour data cleanup</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-igem-coral mt-0.5" />
                <div>
                  <span className="font-semibold">Accessibility:</span>
                  <span className="text-muted-foreground ml-1">Web-based interface accessible from any device</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Development */}
        <section>
          <div className="wiki-section mb-8">
            <h2 className="text-2xl font-bold text-foreground">Future Development</h2>
          </div>

          <p className="text-foreground leading-relaxed max-w-4xl mb-8">
            DeepEye 2.0 represents a framework for personalized therapy prediction. 
            Future development will focus on:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="wiki-card group">
              <CardContent className="pt-6 flex items-start gap-4">
                <ArrowRight className="h-5 w-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold mb-1">EHR Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Integration with electronic health records (EHR) systems for seamless clinical workflow
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="wiki-card group">
              <CardContent className="pt-6 flex items-start gap-4">
                <ArrowRight className="h-5 w-5 text-igem-teal mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold mb-1">Multi-center Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Conducting multi-center validation studies to ensure model generalizability
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="wiki-card group">
              <CardContent className="pt-6 flex items-start gap-4">
                <ArrowRight className="h-5 w-5 text-igem-coral mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold mb-1">Therapy Extension</h4>
                  <p className="text-sm text-muted-foreground">
                    Extension to other engineered cell therapies (CAR-T, CAR-NK)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="wiki-card group">
              <CardContent className="pt-6 flex items-start gap-4">
                <ArrowRight className="h-5 w-5 text-igem-gold mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold mb-1">Real-time Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time treatment monitoring and outcome tracking capabilities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
