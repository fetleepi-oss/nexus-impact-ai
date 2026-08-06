# Nexus Impact AI 🌍🤖

> The AI Operating System for Impact Organizations.

Nexus Impact AI is a collaborative multi-agent platform designed to help researchers, NGOs, humanitarian organizations, public health professionals, and mission-driven teams automate complex knowledge work.

---

## 🚀 Vision & Architecture

Nexus Impact AI envisions an ecosystem of 8 specialized workspaces connected by an AI Agents Marketplace:

* 🔬 Research Workspace *(MVP - Fully Implemented)*
* ✍️ Grant Workspace *(MVP - Fully Implemented)*
* 🌍 Humanitarian Workspace *(MVP - Fully Implemented)*
* ⚖️ Human Rights Workspace *(Roadmap / Coming Soon)*
* 🩺 Public Health Workspace *(Roadmap / Coming Soon)*
* 👩‍⚕️ Women's Health Workspace *(Roadmap / Coming Soon)*
* 🏗️ Construction Workspace *(Roadmap / Coming Soon)*
* 🧠 Knowledge Workspace *(Roadmap / Coming Soon)*

---

## 🛠️ Multi-Agent Workflow Engine

Our core architecture connects specialized agents into a seamless pipeline:
Upload Research PDF ➡️ Extract Evidence (Research Agent) ➡️ Generate Proposal (Grant Agent) ➡️ Create SitRep & Plan (Humanitarian Agent) ➡️ Export DOCX/PDF

---

## ⚡️ Technical Highlights & Build Week Stack

* GPT-5.6 Multi-Agent Engine: Powers the Research Workspace to generate structured research summaries, evidence analysis, and decision support frameworks via the OpenAI Responses API architecture.
* Codex / AI Code Assistance: Leveraged during development to accelerate Next.js/React component generation, API route creation, and state management.
* Structured Outputs: Guarantees standard formats for Logframes, Budgets, and Risk Analysis matrices.

---

## 💻 Tech Stack

* Frontend: Next.js, React, Tailwind CSS
* Backend: Supabase, TypeScript, Node.js
* AI Engine: GPT-5.6 / Codex / Multi-Agent Orchestration
[8/6/2026 11:12 AM] Dr.Fetle: git add README.md
git commit -m "Fix typo in README"
git push origin main
[8/6/2026 11:19 AM] Dr.Fetle: ---

### GPT-5.6 Usage

GPT-5.6 is used in the Research Workspace to analyze research topics, summarize evidence, key findings, and generate actionable recommendations for NGOs, researchers, and humanitarian organizations.

### Codex Usage
## 🌐 Deploy on Vercel

1. Fork or clone this repository
2. Connect the repository to **Vercel**
3. Add the required environment variables
4. Deploy

### Required Environment Variables

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Local Development

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

OpenAI Codex was used during development to:

* Generate React and Next.js components
* Create TypeScript API route scaffolding
* Improve Tailwind CSS layouts
* Debug application issues
* Refine the multi-agent workspace architecture
