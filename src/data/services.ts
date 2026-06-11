/**
 * Full content for each service money page (playbook 4.2 template).
 * Each page must convert from cold search without the homepage:
 * outcome-led hero → problem → what's included → benefits → FAQ → CTA.
 * Keywords per keyword-map.md. FAQ answers open with a direct ~40-word answer (AEO).
 */

export interface ServiceContent {
  slug: string;
  name: string;
  /** outcome-led H1 */
  headline: string;
  /** answer-first definition sentence for AEO — "[Entity] is a [category] that [differentiator]" */
  definition: string;
  metaTitle: string;
  metaDescription: string;
  problem: { heading: string; body: string };
  included: string[];
  benefits: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const serviceContent: ServiceContent[] = [
  {
    slug: 'marketing-strategy',
    name: 'Marketing strategy & planning',
    headline: 'A marketing strategy your business will actually execute',
    definition:
      'Marketing strategy for a small business is a short, prioritised plan — who you sell to, what you say, which channels you use, and what gets done first — owned by one person and reviewed every 90 days.',
    metaTitle: 'Marketing Strategy for Small Businesses | Marketing Executive VA',
    metaDescription:
      'A 90-day marketing strategy for your small business — built and then actually run by one experienced operator. No 60-page deck that gathers dust. Free intro call.',
    problem: {
      heading: 'Most small businesses don’t have a strategy problem. They have an ownership problem.',
      body: 'You’ve probably had strategy before: a consultant’s deck, an agency’s “roadmap”, a plan you wrote in January. It stalled because nobody owned the doing. A strategy that doesn’t ship is just a document — so here, the person who writes the plan is the person who runs it.',
    },
    included: [
      'A marketing audit of what you have today — site, channels, tracking, past spend',
      'A 90-day plan in plain English: priorities, channels, budget posture, and what gets done first',
      'Quarterly re-planning: keep what worked, cut what didn’t',
      'The same person executes the plan — strategy and delivery never split',
    ],
    benefits: [
      { title: 'Decisions get made', body: 'One owner means no more “we should probably…” lists. The plan says what happens this month, and it happens.' },
      { title: 'Budget stops leaking', body: 'Channels that don’t pull their weight get cut at the quarterly review — not renewed by default.' },
      { title: 'You can see the whole picture', body: 'Strategy, execution and reporting live in one head, so nothing falls between specialists.' },
    ],
    faqs: [
      {
        q: 'What does a small-business marketing strategy include?',
        a: 'A practical one covers five things: who your best customers are, the message that wins them, the two or three channels worth your budget, a 90-day priority list, and how results get measured. Anything longer usually goes unread.',
      },
      {
        q: 'How is this different from hiring a marketing consultant?',
        a: 'A consultant hands you a plan and leaves; the execution becomes your problem. Here the same person writes the plan and runs it on a monthly subscription — so the strategy is accountable to its own results.',
      },
      {
        q: 'How fast will I see results?',
        a: 'Quick wins (fixing tracking, conversion leaks, obvious channel waste) often land inside the first 90 days. Compounding channels like SEO and email build over two to three quarters. The monthly report shows both honestly.',
      },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO',
    headline: 'Show up when your buyers are searching — without learning SEO yourself',
    definition:
      'SEO for a small business means making your website the answer Google and AI assistants give when your customers search — through the right pages, helpful content, and technical basics done properly.',
    metaTitle: 'SEO Marketing for Small Business | Marketing Executive VA',
    metaDescription:
      'SEO marketing for small businesses, run end to end by one experienced operator — pages, content, technical fixes and honest monthly reporting. Free intro call.',
    problem: {
      heading: 'You know you should “do SEO”. Nobody’s ever told you what that actually means for your business.',
      body: 'So it becomes a freelancer who sent reports you didn’t understand, or a plugin that promised green ticks. Meanwhile competitors quietly collect the searches your customers type every day. SEO isn’t a mystery — it’s unglamorous work that needs an owner.',
    },
    included: [
      'Keyword research mapped to pages buyers actually search for (not vanity terms)',
      'On-page work: titles, structure, internal links, the technical basics',
      'Content that answers real customer questions — written to rank and to convert',
      'AI-search readiness: structured data and answer-first content so assistants cite you',
      'Plain-English monthly reporting: rankings, traffic, and enquiries — not jargon',
    ],
    benefits: [
      { title: 'Enquiries while you sleep', body: 'Search traffic compounds: a page that ranks keeps sending buyers without ad spend.' },
      { title: 'No more SEO-report theatre', body: 'You see the three numbers that matter — visibility, traffic, enquiries — and what changes next.' },
      { title: 'Built for 2026 search', body: 'Optimised for Google and for AI answers, which increasingly decide who gets found.' },
    ],
    faqs: [
      {
        q: 'How long does SEO take for a small business?',
        a: 'Expect early movement in eight to twelve weeks and meaningful enquiry growth over six to twelve months, depending on competition. Anyone promising page one in 30 days is selling something other than SEO.',
      },
      {
        q: 'Do I need SEO if I run a service business?',
        a: 'Almost certainly — service buyers research before they enquire. If your site doesn’t answer their searches, a competitor’s does. SEO usually beats paid ads on cost per enquiry over a 12-month window for service businesses.',
      },
      {
        q: 'What about AI search — does SEO still matter?',
        a: 'Yes. AI assistants cite well-structured, trustworthy, regularly-updated pages — the same things good SEO builds. This service covers both: ranking in Google and being quotable by AI answer engines.',
      },
    ],
  },
  {
    slug: 'paid-ads',
    name: 'Paid advertising',
    headline: 'Paid ads that pay back — not a budget bonfire',
    definition:
      'Paid advertising for a small business means Google and Meta campaigns sized to your budget, pointed at buyers ready to act, and judged on one number: what an enquiry costs you.',
    metaTitle: 'Paid Ads (PPC) for Small Business | Marketing Executive VA',
    metaDescription:
      'Google and Meta ads for small businesses, run by one experienced operator — setup, creative, landing pages and honest cost-per-enquiry reporting. Free intro call.',
    problem: {
      heading: 'You tried ads once. It spent money and you couldn’t tell what came back.',
      body: 'That’s the standard small-business ads story — set up fast, tracked badly, judged on clicks instead of customers. Ads work when someone owns the whole chain: targeting, creative, landing page, and the tracking that proves what an enquiry costs.',
    },
    included: [
      'Account setup or rescue: Google Ads, Meta, and retargeting where it fits',
      'Conversion tracking first — no spend until we can measure what comes back',
      'Ad copy and creative matched to the landing page (message match converts)',
      'Weekly optimisation: cut waste, scale what pays',
      'Cost-per-enquiry reporting in plain English',
    ],
    benefits: [
      { title: 'Spend with a floor under it', body: 'Tracking goes in before budget goes out, so you always know what an enquiry costs.' },
      { title: 'Fast feedback', body: 'Ads are the quickest way to test an offer — useful signal in weeks, not quarters.' },
      { title: 'No retainer minimums', body: 'Budgets are sized to your business. Small, sensible spends are fine — waste isn’t.' },
    ],
    faqs: [
      {
        q: 'How much should a small business spend on ads?',
        a: 'Start where the maths works: enough to generate roughly 20–30 clicks a day on your priority service, typically £500–£1,500 a month for most UK service businesses. Scale only when cost per enquiry proves out.',
      },
      {
        q: 'Google Ads or Meta — which is right for my business?',
        a: 'Google captures people already searching for what you sell — strongest for services. Meta creates demand and retargets visitors — strongest for DTC and considered purchases. Many businesses need a small amount of both; the plan decides.',
      },
      {
        q: 'What if the ads don’t work?',
        a: 'You’ll know quickly and in plain numbers — cost per enquiry is reported monthly. If a channel can’t pay back, I say so and move the budget. The subscription is rolling monthly, so there’s no incentive to keep burning spend.',
      },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email marketing & automation',
    headline: 'Turn the list you already have into repeat revenue',
    definition:
      'Email marketing for a small business means automated sequences and regular sends that turn past enquiries and customers into repeat buyers — typically the highest-ROI channel a small business owns.',
    metaTitle: 'Email Marketing for Small Business | Marketing Executive VA',
    metaDescription:
      'Outsourced email marketing for small businesses — welcome sequences, automation and campaigns that turn your list into revenue, run end to end. Free intro call.',
    problem: {
      heading: 'Your most valuable audience is sitting in a spreadsheet, hearing nothing from you.',
      body: 'Past customers, old enquiries, people who downloaded something once — they already know you. Most small businesses email them never, then spend money finding strangers instead. The cheapest revenue you’ll ever win is one good email away.',
    },
    included: [
      'List setup and hygiene in your email platform (or choosing one)',
      'A welcome sequence for new enquiries — your best-converting asset, written once',
      'Automated follow-ups: lapsed customers, abandoned enquiries, review requests',
      'A sustainable regular send (monthly or fortnightly) written in your voice',
      'Deliverability basics so email actually lands in inboxes',
    ],
    benefits: [
      { title: 'Revenue from people you already paid to find', body: 'Every past enquiry cost you something. Email is how that cost keeps paying back.' },
      { title: 'Works while you trade', body: 'Sequences run automatically — the follow-up happens whether or not anyone remembered.' },
      { title: 'Sounds like you', body: 'No template-blast voice. Emails written the way you’d actually talk to a customer.' },
    ],
    faqs: [
      {
        q: 'Is email marketing still worth it for a small business?',
        a: 'Yes — it consistently returns more per pound than any paid channel, because you own the list and the audience already knows you. Industry studies put email ROI at roughly £30–£40 per £1 spent; even at a fraction of that, it outperforms ads.',
      },
      {
        q: 'I only have a small list. Is it worth doing?',
        a: 'A few hundred relevant contacts is plenty — these are warm people, not strangers. One well-built welcome sequence plus a monthly send typically beats an untargeted list of thousands.',
      },
      {
        q: 'Which email platform do you work with?',
        a: 'Whatever you have — Mailchimp, MailerLite, Brevo, ConvertKit, Klaviyo and similar all work. If you have nothing yet, I’ll recommend the cheapest tool that fits and set it up as part of onboarding.',
      },
    ],
  },
  {
    slug: 'social-media',
    name: 'Social media management',
    headline: 'A consistent social presence — without you feeding it every day',
    definition:
      'Social media management for a small business means a steady, on-brand presence on the one or two platforms your buyers actually use — planned, written, posted and reported on by one person.',
    metaTitle: 'Social Media Management for Small Business | Marketing Executive VA',
    metaDescription:
      'Outsourced social media management for small businesses — strategy, content, posting and reporting on the platforms your buyers actually use. Free intro call.',
    problem: {
      heading: 'Posting feels like a treadmill — so it stops every time the business gets busy.',
      body: 'Three posts one week, silence for a month, then guilt-posting. The platforms reward consistency, and consistency is exactly what an owner-run business can’t spare time for. The fix isn’t more effort from you — it’s an owner for the channel.',
    },
    included: [
      'Platform choice based on where your buyers are (usually one or two — not all five)',
      'A content rhythm you can sustain: planned monthly, written in your voice',
      'Posting, scheduling, and community replies handled',
      'Content recycled intelligently from your best material — nothing made from scratch every time',
      'Monthly reporting on growth and, more importantly, enquiries',
    ],
    benefits: [
      { title: 'Present without being chained to it', body: 'Your business shows up every week. You approve a plan monthly, not a post daily.' },
      { title: 'Brand-building, not trend-chasing', body: 'Content that compounds your reputation with buyers — not dances for an algorithm.' },
      { title: 'Honest about what social does', body: 'For most SMBs social supports trust and recall; it rarely drives cold sales alone. It’s reported that way.' },
    ],
    faqs: [
      {
        q: 'Which social platforms should a small business be on?',
        a: 'The one or two where your buyers already spend time: LinkedIn for B2B and consultancies, Instagram or Facebook for local and consumer businesses, TikTok only if your audience is genuinely there. Being everywhere half-heartedly beats nobody.',
      },
      {
        q: 'How often will you post for me?',
        a: 'A sustainable rhythm — typically two to four quality posts a week per platform, planned a month ahead and approved by you. Frequency matters less than consistency and relevance to buyers.',
      },
      {
        q: 'Will social media actually bring me customers?',
        a: 'Directly, sometimes; indirectly, often — buyers check your profiles before enquiring, and a dead feed costs trust. Social works best as the proof layer around search, ads and email, and the reporting never pretends otherwise.',
      },
    ],
  },
  {
    slug: 'website-design',
    name: 'Website design & build',
    headline: 'A website that earns enquiries — not just compliments',
    definition:
      'Small-business website design done properly means a fast, clear site engineered around one job — turning visitors into enquiries — rather than a brochure that just looks modern.',
    metaTitle: 'Website Design for Small Business | Marketing Executive VA',
    metaDescription:
      'Conversion-focused website design and build for small businesses — fast, clear, engineered to turn visitors into enquiries, and maintained monthly. Free intro call.',
    problem: {
      heading: 'Your website is either embarrassing or expensive — and either way it’s not producing.',
      body: 'Most SMB sites were built once, by someone who’s gone, around what the business wanted to say rather than what buyers needed to hear. Visitors arrive, don’t see themselves, and leave. A site is a salesperson: it needs a single job and someone accountable for its numbers.',
    },
    included: [
      'A conversion-first structure: clear promise, proof, and one obvious action per page',
      'Copy written from your customers’ language, not industry jargon',
      'Fast, mobile-first build that passes Core Web Vitals',
      'SEO and analytics wired in from day one',
      'Ongoing improvement on subscription — the site keeps getting better, not staler',
    ],
    benefits: [
      { title: 'A site with one job', body: 'Every page drives toward an enquiry. Decoration that doesn’t convert gets cut.' },
      { title: 'Loads before they lose interest', body: 'Speed is conversion: the build targets Google’s Core Web Vitals on mobile.' },
      { title: 'Never rots again', body: 'On subscription, the site is maintained and improved monthly — not rebuilt in a panic every four years.' },
    ],
    faqs: [
      {
        q: 'How much does a small business website cost?',
        a: 'UK agencies typically charge £3,000–£15,000 for a brochure site, then leave. Here the build is part of the monthly subscription — spreading cost and keeping one person accountable for the site’s results, not just its launch.',
      },
      {
        q: 'Can you work with my existing website?',
        a: 'Usually, yes. If the platform is workable (WordPress, Squarespace, Shopify, Webflow and similar), improving what exists beats rebuilding. If it genuinely can’t convert or can’t be made fast, I’ll show you why before any rebuild decision.',
      },
      {
        q: 'Will the website work for SEO and ads?',
        a: 'That’s the point of having one person run everything: the site, the SEO and the ad landing pages are built together, so paid clicks and search visitors land on pages designed to convert them.',
      },
    ],
  },
  {
    slug: 'content',
    name: 'Content & blogging',
    headline: 'Content that ranks, converts, and sounds like you wrote it',
    definition:
      'Content marketing for a small business means publishing genuinely useful articles and pages that answer buyers’ questions — so search engines and AI assistants send those buyers to you.',
    metaTitle: 'Content Marketing & Blogging for Small Business | Marketing Executive VA',
    metaDescription:
      'Outsourced content marketing for small businesses — articles that answer buyer questions, rank in search, get cited by AI, and convert. Free intro call.',
    problem: {
      heading: '“We should blog” has been on your list for two years.',
      body: 'And the few posts that exist read like they were written for nobody — because writing useful content takes hours you don’t have. Meanwhile, the questions your customers ask every week are being answered online by someone else.',
    },
    included: [
      'A content plan built from real keyword research — questions buyers actually type',
      'Articles written to rank, to be cited by AI assistants, and to convert readers',
      'Your voice, your stories: drawn from short interviews with you, not generic filler',
      'Internal linking that routes readers to your service pages',
      'Refreshing old content — often faster wins than writing new',
    ],
    benefits: [
      { title: 'Answers working around the clock', body: 'Each good article is a salesperson answering one buyer question forever.' },
      { title: 'Compounds with SEO', body: 'Content is the fuel of search visibility — every piece strengthens the whole site.' },
      { title: 'Zero hours from you', body: 'A 20-minute voice note from you becomes the expertise; the writing, structure and publishing are handled.' },
    ],
    faqs: [
      {
        q: 'How often should a small business publish content?',
        a: 'Two to four genuinely useful pieces a month beats daily filler. Search and AI engines reward depth, accuracy and freshness — not volume. A smaller number of well-targeted articles, refreshed regularly, wins.',
      },
      {
        q: 'Does blogging still work now AI answers questions directly?',
        a: 'Yes — AI assistants need sources, and they cite clear, trustworthy, well-structured pages. Content built for that (direct answers, real expertise, updated dates) gets quoted, which sends ready-to-buy visitors to you.',
      },
      {
        q: 'Will the content sound like my business?',
        a: 'It should sound more like you than you have time to write. It’s built from your actual answers and examples — captured in short interviews — then edited for search. You approve everything before it publishes.',
      },
    ],
  },
  {
    slug: 'reporting',
    name: 'Analytics & reporting',
    headline: 'One monthly report that tells you what your marketing actually did',
    definition:
      'Marketing reporting for a small business means one short monthly summary — what was done, what it produced in enquiries and revenue, and what changes next — built on tracking you can trust.',
    metaTitle: 'Marketing Analytics & Reporting for Small Business | Marketing Executive VA',
    metaDescription:
      'Marketing analytics and reporting for small businesses — tracking set up properly, one plain-English monthly report, decisions instead of dashboards. Free intro call.',
    problem: {
      heading: 'You’ve got dashboards. What you don’t have is answers.',
      body: 'Google Analytics says things. The ads platform says different things. Nobody’s sure the numbers are even right. Decisions get made on gut feel while the data sits there, miscounted. Tracking isn’t glamorous — it’s the difference between marketing and guessing.',
    },
    included: [
      'Tracking audit and repair: analytics, conversion events, call and form tracking',
      'One source of truth for “where do enquiries come from?”',
      'A monthly one-page report: what ran, what it produced, what changes next',
      'Honest attribution — including “we can’t tell” where that’s the truth',
      'Privacy-respecting setup appropriate for UK/GDPR',
    ],
    benefits: [
      { title: 'Decisions, not dashboards', body: 'The report ends with actions: keep, cut, scale. Data that doesn’t change a decision is noise.' },
      { title: 'Spend follows evidence', body: 'When you can see cost per enquiry by channel, budget arguments end.' },
      { title: 'Numbers you can repeat', body: 'Short enough to read, clear enough to repeat to your accountant or co-owner.' },
    ],
    faqs: [
      {
        q: 'What marketing metrics should a small business track?',
        a: 'Five usually suffice: enquiries per month, cost per enquiry by channel, conversion rate of the website, revenue traced to marketing, and one leading indicator per active channel (rankings, list growth, ad CTR). Everything else is supporting detail.',
      },
      {
        q: 'My Google Analytics seems wrong. Is that normal?',
        a: 'Very. Most small-business analytics installs double-count, miss conversions, or lost data in the GA4 migration. A tracking audit usually finds and fixes the worst of it inside the first month — before any spend decisions rely on it.',
      },
      {
        q: 'Do I get access to everything?',
        a: 'Always — every account (analytics, ads, email, CMS) lives in your name with you as owner. The monthly report is a summary on top, not a black box you’re locked out of.',
      },
    ],
  },
];
