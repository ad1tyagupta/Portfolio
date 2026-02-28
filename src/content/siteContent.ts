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
    logos: ["Siemens Energy", "BMW Group", "Bundesdruckerei", "HHL Leipzig"],
    tiles: [
        {
            title: "GTM & Market Intelligence",
            caption: "Competitive clarity → positioning → decision-ready narratives.",
            hrefAnchor: "#gtm",
            imageSrc: "/tiles/gtm.png",
        },
        {
            title: "AI Copilots & Knowledge Systems",
            caption: "Search + retrieval + workflows people actually adopt.",
            hrefAnchor: "#copilots",
            imageSrc: "/tiles/copilots.png",
        },
        {
            title: "Content & Storytelling",
            caption: "Short-form edits + clear messaging + creative iteration.",
            hrefAnchor: "#content",
            imageSrc: "/tiles/content.png",
        },
        {
            title: "Entrepreneurship & Growth Ops",
            caption: "Distribution loops, CRM systems, and operational discipline.",
            hrefAnchor: "#ops",
            imageSrc: "/tiles/ops.png",
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
                    caption: "Competitive landscape snapshot",
                    imageSrc: "/proof/gtm/gtm-01.png",
                    bullets: ["Context: Deep dive into 5 major competitors", "Capability: Landscape mapping & synthesis", "Role: Lead Strategist"],
                },
                {
                    caption: "Positioning map (simplified)",
                    imageSrc: "/proof/gtm/gtm-02.png",
                    bullets: ["Context: Repositioning a legacy B2B product", "Capability: Identifying white space", "Role: Primary market researcher"],
                },
                {
                    caption: "Packaging narrative one-pager",
                    imageSrc: "/proof/gtm/gtm-03.png",
                    bullets: ["Context: Streamlining complex pricing schemas", "Capability: Value-based packaging", "Role: Product Marketing Lead"],
                },
                {
                    caption: "Pain → message framework",
                    imageSrc: "/proof/gtm/gtm-04.png",
                    bullets: ["Context: Equipping sales with targeted messaging", "Capability: Persona-driven copywriting", "Role: Co-Author"],
                },
                {
                    caption: "GTM plan skeleton",
                    imageSrc: "/proof/gtm/gtm-05.png",
                    bullets: ["Context: High-level roadmap for new feature tier", "Capability: Cross-functional alignment", "Role: GTM Lead"],
                },
                {
                    caption: "Executive summary slide",
                    imageSrc: "/proof/gtm/gtm-06.png",
                    bullets: ["Context: Pitching a pivot to the board", "Capability: Concise storytelling", "Role: Lead Analyst"],
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
                    imageSrc: "/proof/copilots/copilots-01.png",
                    bullets: ["Context: Internal knowledge retrieval system", "Capability: Architecture design", "Role: AI Product Manager"],
                },
                {
                    caption: "Chat UI: example Q&A",
                    imageSrc: "/proof/copilots/copilots-02.png",
                    bullets: ["Context: Agentic interface for field engineers", "Capability: Prompt engineering & UX", "Role: Builder"],
                },
                {
                    caption: "Knowledge base structure",
                    imageSrc: "/proof/copilots/copilots-03.png",
                    bullets: ["Context: Organizing unstructured docs for ingest", "Capability: Data taxonomy & governance", "Role: Project Lead"],
                },
                {
                    caption: "Evaluation notes",
                    imageSrc: "/proof/copilots/copilots-04.png",
                    bullets: ["Context: Testing LLM hallucination rates", "Capability: Empirical testing frameworks", "Role: Evaluator"],
                },
                {
                    caption: "Agent flow: steps + tools",
                    imageSrc: "/proof/copilots/copilots-05.png",
                    bullets: ["Context: Multi-step reasoning pipeline", "Capability: Agentic workflow design", "Role: Developer"],
                },
                {
                    caption: "Automation workflow snapshot",
                    imageSrc: "/proof/copilots/copilots-06.png",
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
                    imageSrc: "/proof/content/content-01.png",
                    bullets: ["Context: Core product explainer video", "Capability: Video editing & pacing", "Role: Editor"],
                },
                {
                    caption: "Before/after: pacing",
                    imageSrc: "/proof/content/content-02.png",
                    bullets: ["Context: Tightening an overly long technical video", "Capability: Narrative refinement", "Role: Editor & Reviewer"],
                },
                {
                    caption: "AI ad concepts grid",
                    imageSrc: "/proof/content/content-03.png",
                    bullets: ["Context: Rapid testing of creative angles", "Capability: AI image generation & copy", "Role: Creative Lead"],
                },
                {
                    caption: "Hook bank: openers",
                    imageSrc: "/proof/content/content-04.png",
                    bullets: ["Context: Repository of high-converting intros", "Capability: Copywriting & a/b testing", "Role: Copywriter"],
                },
                {
                    caption: "Storyboard: 6 frames",
                    imageSrc: "/proof/content/content-05.png",
                    bullets: ["Context: Pitching a visual concept to stakeholders", "Capability: Visual storytelling", "Role: Art Director"],
                },
                {
                    caption: "Slide: messy → crisp",
                    imageSrc: "/proof/content/content-06.png",
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
                    imageSrc: "/proof/ops/ops-01.png",
                    bullets: ["Context: Rebuilding B2B sales stages", "Capability: CRM architecture", "Role: RevOps Lead"],
                },
                {
                    caption: "Lifecycle stages",
                    imageSrc: "/proof/ops/ops-02.png",
                    bullets: ["Context: Lead scoring and progression alignment", "Capability: Marketing/Sales handoff design", "Role: Operations Manager"],
                },
                {
                    caption: "Lead source snapshot",
                    imageSrc: "/proof/ops/ops-03.png",
                    bullets: ["Context: Tracking ROI across 5 major channels", "Capability: Dashboarding & analytics", "Role: Growth Analyst"],
                },
                {
                    caption: "Sales process checklist",
                    imageSrc: "/proof/ops/ops-04.png",
                    bullets: ["Context: Standardizing rep behavior", "Capability: Change management & enablement", "Role: Sales Enablement"],
                },
                {
                    caption: "Simple forecasting sheet",
                    imageSrc: "/proof/ops/ops-05.png",
                    bullets: ["Context: Predicting revenue based on pipeline velocity", "Capability: Financial modeling", "Role: Operator"],
                },
                {
                    caption: "Segmentation snapshot",
                    imageSrc: "/proof/ops/ops-06.png",
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
        email: "mailto:hello@example.com",
        linkedIn: "https://linkedin.com/in/adityagupta",
        helperLine: "Include: role/team + what you want solved.",
    },
    footer: {
        personalityLine: "Outside work: football + travel + building side quests.",
        backToTopLabel: "Back to top",
    },
};
