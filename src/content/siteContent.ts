export type ProofItem = {
    caption: string;
    imageSrc: string;
    bullets: string[];
    externalLink?: string;
};

export type ProofSection = {
    id: string;
    title: string;
    intro: string;
    items: ProofItem[];
};

export type Tile = {
    title: string;
    caption: string;
    hrefAnchor: string;
    imageSrc: string;
};

export const siteContent = {
    hero: {
        headline: "Marketing + AI: I turn messy info into usable products and go-to-market stories.",
        subline: "AI Strategy & Market Intelligence @ Siemens Energy · MBA, HHL Leipzig · previously BMW Group · project work with Bundesdruckerei",
        primaryCta: { label: "See proof", anchor: "#proof" },
        secondaryCta: { label: "Contact", anchor: "#contact" },
        microcopy: "I like shipping things that teams actually use—not just slides.",
    },
    logos: [
        { name: "Siemens Energy", imageSrc: "/logos/siemens.png" },
        { name: "BMW Group", imageSrc: "/logos/bmw.png" },
        { name: "Bundesdruckerei", imageSrc: "/logos/bundesdruckerei.png" },
        { name: "HHL Leipzig", imageSrc: "/logos/hhl.png" }
    ],
    tiles: [
        {
            title: "GTM & Market Intelligence",
            caption: "Clarity → positioning → decision-ready narratives.",
            hrefAnchor: "#gtm",
            imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "AI Copilots & Knowledge Systems",
            caption: "Search → retrieval → workflows teams adopt.",
            hrefAnchor: "#copilots",
            imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Content & Storytelling",
            caption: "Edit → message → iterate.",
            hrefAnchor: "#content",
            imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Entrepreneurship & Growth Ops",
            caption: "Distribution → CRM → repeatable growth.",
            hrefAnchor: "#ops",
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
    ] as Tile[],
    proofGalleryIntro: "Some artifacts are anonymized due to confidentiality.",
    proofSections: [
        {
            id: "gtm",
            title: "GTM & Market Intelligence",
            intro: "Strategy artifacts that turn research into decisions.",
            items: [
                {
                    caption: "Competitive feature heatmap (Siemens Energy)",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: [
                        "S: At Siemens Energy (industrial software team), leaders wanted to know what competitors offer and what customers will expect next.",
                        "T: Create a credible comparison that Product + GTM could use—without hype and without guesswork.",
                        "A: I defined the comparison structure (workflows, analytics, reporting, integrations, admin effort), collected evidence from public sources (manuals, webinars, release notes), and turned it into a simple heatmap + “safe claims” list.",
                        "R: Stakeholders got a clear view of where competitors are strong and where differentiation is defensible—useful for roadmap discussions and messaging alignment."
                    ],
                },
                {
                    caption: "Market entry prioritization (Bundesdruckerei project)",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: [
                        "S: In a GTM strategy project with Bundesdruckerei, we faced a broad “where do we start?” problem across many possible markets.",
                        "T: Turn a large research scope into a short, defensible shortlist for focus and sequencing.",
                        "A: I built a scoring model (demand signals, feasibility, complexity, partner readiness), ran desk research, and summarized each recommended market with a short “why now” rationale.",
                        "R: The output became a decision tool—not a long report—so stakeholders could agree on priorities and next steps faster."
                    ],
                },
                {
                    caption: "Pain → message framework (Siemens Energy)",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: [
                        "S: At Siemens Energy, internal messaging often drifted into feature lists, while buyers care about outcomes (risk, uptime, ROI).",
                        "T: Create messaging that sales and product can use consistently—simple, buyer-first, and backed by proof.",
                        "A: I created a framework: Pain → Value → Proof, wrote short message lines per audience, and mapped each message to the proof asset needed (demo, screenshot, documentation).",
                        "R: The team had a clearer talk track and fewer “feature-dump” discussions—messages became easier to reuse across slides, emails, and stakeholder updates."
                    ],
                },
                {
                    caption: "Executive decision memo (Siemens Energy)",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: [
                        "S: In Siemens Energy projects, senior stakeholders needed quick clarity: “What’s the decision and why?”—not 20-slide decks.",
                        "T: Condense complex work into one page that supports a decision under time pressure.",
                        "A: I used a 1-page structure: Decision → Evidence → Risks → Next steps, highlighted trade-offs, and clearly stated what we should not claim if it wasn’t provable.",
                        "R: Faster alignment, clearer ownership, and more productive discussions—without extra meetings."
                    ],
                },
            ],
        },
        {
            id: "copilots",
            title: "AI Copilots & Knowledge Systems",
            intro: "RAG, copilots, and knowledge workflows—built for real constraints.",
            items: [
                {
                    caption: "RAG pipeline overview",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Internal knowledge retrieval system", "Capability: Architecture design", "Role: AI Product Manager"],
                },
                {
                    caption: "Chat UI: example Q&A",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Agentic interface for field engineers", "Capability: Prompt engineering & UX", "Role: Builder"],
                },
                {
                    caption: "Knowledge base structure",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Organizing unstructured docs for ingest", "Capability: Data taxonomy & governance", "Role: Project Lead"],
                },
                {
                    caption: "Evaluation notes",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Testing LLM hallucination rates", "Capability: Empirical testing frameworks", "Role: Evaluator"],
                },
                {
                    caption: "Agent flow: steps + tools",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Multi-step reasoning pipeline", "Capability: Agentic workflow design", "Role: Developer"],
                },
                {
                    caption: "Automation workflow snapshot",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Connecting CRM to generation endpoints", "Capability: No-code / low-code integration", "Role: Architect"],
                },
            ],
        },
        {
            id: "content",
            title: "Content & Storytelling",
            intro: "Clear communication—video, slides, and creative iteration.",
            items: [
                {
                    caption: "Editing timeline: 30-sec cut",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Core product explainer video", "Capability: Video editing & pacing", "Role: Editor"],
                },
                {
                    caption: "Before/after: pacing",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Tightening an overly long technical video", "Capability: Narrative refinement", "Role: Editor & Reviewer"],
                },
                {
                    caption: "AI ad concepts grid",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Rapid testing of creative angles", "Capability: AI image generation & copy", "Role: Creative Lead"],
                },
                {
                    caption: "Hook bank: openers",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Repository of high-converting intros", "Capability: Copywriting & a/b testing", "Role: Copywriter"],
                },
                {
                    caption: "Storyboard: 6 frames",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Pitching a visual concept to stakeholders", "Capability: Visual storytelling", "Role: Art Director"],
                },
                {
                    caption: "Slide: messy → crisp",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Board-level presentation overhaul", "Capability: Information design", "Role: Presentation Designer"],
                },
            ],
        },
        {
            id: "ops",
            title: "Entrepreneurship & Growth Ops",
            intro: "Systems that make growth repeatable (not luck).",
            items: [
                {
                    caption: "HubSpot pipeline structure",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Rebuilding B2B sales stages", "Capability: CRM architecture", "Role: RevOps Lead"],
                },
                {
                    caption: "Lifecycle stages",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Lead scoring and progression alignment", "Capability: Marketing/Sales handoff design", "Role: Operations Manager"],
                },
                {
                    caption: "Lead source snapshot",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Tracking ROI across 5 major channels", "Capability: Dashboarding & analytics", "Role: Growth Analyst"],
                },
                {
                    caption: "Sales process checklist",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Standardizing rep behavior", "Capability: Change management & enablement", "Role: Sales Enablement"],
                },
                {
                    caption: "Simple forecasting sheet",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Predicting revenue based on pipeline velocity", "Capability: Financial modeling", "Role: Operator"],
                },
                {
                    caption: "Segmentation snapshot",
                    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    bullets: ["Context: Dividing user base for targeted email drops", "Capability: Data querying & segmentation", "Role: Lifecycle Marketer"],
                },
            ],
        },
    ] as ProofSection[],
    toolbox: {
        core: [
            "HubSpot",
            "Slides / PowerPoint",
            "Excel",
            "SharePoint / M365",
            "Stakeholder storytelling",
            "Market research",
        ],
        familiar: [
            "GCP / Vertex AI",
            "RAG workflows",
            "Automation tools (workflows)",
            "Agentic coding tools (Codex-style)",
            "Video editing tools",
        ],
    },
    contact: {
        title: "Let’s talk",
        oneLiner: "If you’re building AI × GTM in B2B (especially industrial), I’m happy to chat.",
        email: "mailto:at.adityagupta@gmail.com",
        linkedIn: "https://www.linkedin.com/in/aditya-gupta-/",
        helperLine: "Include: role/team + what you want solved.",
    },
    footer: {
        personalityLine: "Outside work: football + travel + building side quests.",
        backToTopLabel: "Back to top",
    },
};
